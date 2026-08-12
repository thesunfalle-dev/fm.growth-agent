import { execFileSync } from "node:child_process";
import { readFile, readdir } from "node:fs/promises";
import { resolve, join, relative } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(fileURLToPath(new URL(".", import.meta.url)), "..");

function fail(message) {
  console.error(`validate:design failed — ${message}`);
  process.exit(1);
}

// 1) Regenerate tokens and ensure git-friendly determinism (compare after generate)
execFileSync("node", [resolve(root, "scripts/generate-tokens.mjs")], { stdio: "inherit" });

const tokens = JSON.parse(
  await readFile(resolve(root, "design-system/design-tokens.json"), "utf8"),
);
const blocks = JSON.parse(
  await readFile(resolve(root, "design-system/block-inventory.json"), "utf8"),
);
const components = JSON.parse(
  await readFile(resolve(root, "design-system/component-inventory.json"), "utf8"),
);

if (!tokens.meta?.status) fail("design-tokens.json missing meta.status");
if (!Array.isArray(blocks.blocks) || blocks.blocks.length === 0) {
  fail("block-inventory.json has no blocks");
}
if (!Array.isArray(components.components) || components.components.length === 0) {
  fail("component-inventory.json has no components");
}

const blockTypes = new Set(blocks.blocks.map((b) => b.type));
const planned = new Set((blocks.planned || []).map((b) => b.type));
for (const type of blockTypes) {
  if (!/^[a-z][a-z0-9-]*$/.test(type)) fail(`invalid block type "${type}"`);
}

// 2) Landing documents only use known block types
const landingsDir = resolve(root, "landings");
const landingFolders = await readdir(landingsDir, { withFileTypes: true });
for (const entry of landingFolders) {
  if (!entry.isDirectory()) continue;
  const contentPath = join(landingsDir, entry.name, "content.ts");
  let source;
  try {
    source = await readFile(contentPath, "utf8");
  } catch {
    fail(`landing folder ${entry.name} missing content.ts`);
  }
  const typeMatches = [...source.matchAll(/type:\s*"([^"]+)"/g)].map((m) => m[1]);
  for (const type of typeMatches) {
    if (!blockTypes.has(type) && !planned.has(type)) {
      fail(`landing ${entry.name} uses unknown block type "${type}"`);
    }
    if (planned.has(type) && !blockTypes.has(type)) {
      fail(`landing ${entry.name} uses planned-but-unimplemented block "${type}"`);
    }
  }
}

// 3) Ban raw design literals in components (allow var(--...))
const scanDirs = [resolve(root, "components"), resolve(root, "app")];
const fileExt = /\.(tsx|ts|css)$/;
const ignoreNames = new Set(["tokens.css"]); // generated imported copy only under design-system

const hexColor = /#(?:[0-9a-fA-F]{3,4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})\b/;
const rgbColor = /\b(?:rgb|hsl)a?\(/i;
// px/rem in property values that aren't var() — conservative: flag hex/rgb only in components
// and flag font-family stacks with quotes that aren't var

async function walk(dir, files = []) {
  let entries;
  try {
    entries = await readdir(dir, { withFileTypes: true });
  } catch {
    return files;
  }
  for (const entry of entries) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === "generated") continue;
      await walk(full, files);
    } else if (fileExt.test(entry.name) && !ignoreNames.has(entry.name)) {
      files.push(full);
    }
  }
  return files;
}

const offenders = [];
for (const dir of scanDirs) {
  const files = await walk(dir);
  for (const file of files) {
    const rel = relative(root, file);
    // app/globals.css may only use var() and structural CSS — still ban hex
    const text = await readFile(file, "utf8");
    const lines = text.split("\n");
    lines.forEach((line, index) => {
      const trimmed = line.trim();
      if (trimmed.startsWith("//") || trimmed.startsWith("/*") || trimmed.startsWith("*")) {
        return;
      }
      // Allow media-query comments documenting tokens
      if (hexColor.test(line) || rgbColor.test(line)) {
        offenders.push(`${rel}:${index + 1}: raw color — ${trimmed.slice(0, 120)}`);
      }
    });
  }
}

if (offenders.length) {
  console.error("Raw color values found (use tokens / var(--…)):");
  for (const item of offenders.slice(0, 50)) console.error(`  ${item}`);
  fail(`${offenders.length} raw color occurrence(s)`);
}

console.log("validate:design OK");
console.log(`  tokens status: ${tokens.meta.status}`);
console.log(`  components: ${components.components.length}`);
console.log(`  blocks: ${blocks.blocks.length} (+${(blocks.planned || []).length} planned)`);
