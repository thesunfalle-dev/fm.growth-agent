import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(fileURLToPath(new URL(".", import.meta.url)), "..");
const sourcePath = resolve(root, "design-system/design-tokens.json");
const cssOutput = resolve(root, "design-system/generated/tokens.css");
const tsOutput = resolve(root, "design-system/generated/tokens.ts");
const tokens = JSON.parse(await readFile(sourcePath, "utf8"));

function cssName(path) {
  const normalized = path[0] === "semantic" ? path.slice(1) : path;
  return `--${normalized
    .join("-")
    .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
    .toLowerCase()}`;
}

function flatten(value, path = [], output = []) {
  if (value !== null && typeof value === "object" && !Array.isArray(value)) {
    for (const [key, child] of Object.entries(value)) {
      flatten(child, [...path, key], output);
    }
    return output;
  }
  output.push([path, value]);
  return output;
}

function resolveReferences(value) {
  if (typeof value !== "string") return String(value);
  return value.replace(/\{([^}]+)\}/g, (_, reference) => `var(${cssName(reference.split("."))})`);
}

const entries = flatten(tokens).filter(([path]) => path[0] !== "meta");
const css = `/* Generated from design-system/design-tokens.json. Do not edit manually. */\n:root {\n${entries
  .map(([path, value]) => `  ${cssName(path)}: ${resolveReferences(value)};`)
  .join("\n")}\n}\n`;

const tokenNames = entries.map(([path]) => cssName(path));
const typescript = `// Generated from design-system/design-tokens.json. Do not edit manually.
export const tokenNames = ${JSON.stringify(tokenNames, null, 2)} as const;
export type TokenName = (typeof tokenNames)[number];

export const designTokenMeta = ${JSON.stringify(tokens.meta, null, 2)} as const;
`;

await mkdir(dirname(cssOutput), { recursive: true });
await writeFile(cssOutput, css);
await writeFile(tsOutput, typescript);
console.log(`Wrote ${cssOutput}`);
console.log(`Wrote ${tsOutput}`);
console.log(`Tokens: ${tokenNames.length}`);
