# Design system

Source of truth will be the **new Figma redesign**, not the live fusionmarkets.com UI.

## Planned contents

| Path | Purpose |
|------|---------|
| `tokens.json` | colors, type scale, spacing, radii, shadows |
| `components.md` | buttons, cards, inputs, nav rules |
| `assets/` | logos, icons exported from Figma |

## Until Figma arrives

Landings use neutral CSS variables in `app/globals.css` (`--color-*`, spacing).  
When tokens land, map them 1:1 into those variables so existing blocks pick up the brand without rewrites.
