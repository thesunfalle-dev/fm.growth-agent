/**
 * Marketing illustrations catalog — Website Redesign Images frame 15235:13486.
 * Figma component set “Component 9” — isometric 180×180 tiles on Gray/100.
 *
 * NOT Material Icons. These are custom brand illustrations for features / steps.
 * Base UI chrome still uses Material Symbols only (see lib/icons.ts).
 */

export const ILLUSTRATIONS = [
  "award",
  "bitcoin",
  "box",
  "build",
  "chart",
  "cloud-transfer",
  "cog",
  "coin",
  "dashboard",
  "deposit",
  "envelop",
  "hand",
  "lock",
  "profile",
  "rocket",
  "safe-box",
  "search",
  "secure-eye",
  "secure-file",
  "shield",
  "shield-bullet",
  "shield-podium",
  "signature",
  "smile",
  "speed",
  "support",
  "trade",
  "transfer",
  "trend-down",
  "user-auth",
  "user-search",
] as const;

export type IllustrationName = (typeof ILLUSTRATIONS)[number];

export function isIllustration(name: string): name is IllustrationName {
  return (ILLUSTRATIONS as readonly string[]).includes(name);
}

/** Default tile size from Figma (180×180 CSS px; assets exported @2x). */
export const ILLUSTRATION_DEFAULT_SIZE = 180;

export function illustrationSrc(name: IllustrationName): string {
  return `/images/illustrations/${name}.png`;
}

/** Shared brand background — “Using this image consistently for most of the backgrounds”. */
export const BACKGROUND_IMAGE_SRC = "/images/backgrounds/bg-default.png";
