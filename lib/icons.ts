/**
 * Material Symbols catalog — Website Redesign Logos & Icons frame 14994:6445.
 *
 * RULE: Base / UI icons MUST be Material Symbols only (Figma: “All icons are based on Material Symbols”).
 * Do not invent hand-drawn SVG for these names. Custom brand sets (flags, crypto, key nav, social)
 * are separate — see design-system/logos-icons.md.
 */

/** Canonical Material Symbol ligature names used in the design system. */
export const MATERIAL_ICONS = [
  "chevron_left",
  "chevron_right",
  "west",
  "east",
  "expand_less",
  "expand_more",
  "language",
  "menu",
  "close",
  "search",
  "north_east",
  "south_east",
  "call",
  "mail_outline",
  "check_circle",
  "room",
  "error_outline",
  "info",
  "access_time",
  "link",
  "account_balance",
  "content_paste_search",
  "list",
  "auto_awesome_mosaic",
  "analytics",
  "fact_check",
  "request_page",
  "desktop_windows",
  "phone_android",
  "wysiwyg",
  "smart_toy",
] as const;

export type MaterialIconName = (typeof MATERIAL_ICONS)[number];

export function isMaterialIcon(name: string): name is MaterialIconName {
  return (MATERIAL_ICONS as readonly string[]).includes(name);
}

/** Default optical size from Figma Material row (24×24). */
export const MATERIAL_ICON_DEFAULT_SIZE = 24;
