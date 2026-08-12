import type { LandingDocument, LandingMeta } from "@/lib/types";
import demo from "@/landings/demo/content";
import demoB from "@/landings/demo-b/content";

/**
 * Register every landing here.
 * Add a folder under /landings/{slug}/content.ts and import it.
 */
const registry: LandingDocument[] = [demo, demoB];

function assertUniqueSlugs(items: LandingDocument[]) {
  const seen = new Set<string>();
  for (const item of items) {
    if (seen.has(item.slug)) {
      throw new Error(`Duplicate landing slug: ${item.slug}`);
    }
    if (item.slug !== item.slug.toLowerCase()) {
      throw new Error(`Slug must be lowercase: ${item.slug}`);
    }
    if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(item.slug)) {
      throw new Error(
        `Invalid slug "${item.slug}". Use kebab-case: letters, numbers, hyphens.`,
      );
    }
    seen.add(item.slug);
  }
}

assertUniqueSlugs(registry);

export function getAllLandings(): LandingDocument[] {
  return registry;
}

export function getLanding(slug: string): LandingDocument | undefined {
  return registry.find((l) => l.slug === slug);
}

export function getAllSlugs(): string[] {
  return registry.map((l) => l.slug);
}

export function getListedLandings(): LandingMeta[] {
  return registry
    .filter((l) => l.listed !== false)
    .map(({ blocks: _blocks, seo: _seo, ...meta }) => meta);
}
