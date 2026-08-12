# Images — Website Redesign FM 2.0

**SoT:** Figma frame [`Images` `15235:13486`](https://www.figma.com/design/5PQJiXq7xZNGCqV1XNvKro/Website-Redesign-FM-2.0?node-id=15235-13486)

Extract: `figma/extract-2026-08-12-images.json`

## Hard rules

1. **Base UI icons** remain **Material Symbols only** (`Icon` / `lib/icons.ts`).  
   Do not use these isometric illustrations for menu, search, chevrons, etc.
2. **Marketing illustrations** = custom 3D isometric set (this frame). Use `Illustration`.
3. **Background Image** = one shared purple abstract art for **most backgrounds**.  
   Use `BackgroundImage` / `hero.brandBackground`.

## Catalog

| Group | Status |
|-------|--------|
| Isometric illustrations (Component 9, 180×180) | **ready** — 31 names |
| Background Image (Default) | **ready** — `public/images/backgrounds/bg-default.png` |

## Illustrations

- Tile art box in Figma: **180×180**
- Tile fill: **Gray/100** `#FAFAFA`
- Export in repo: `@2x` PNG under `public/images/illustrations/{name}.png`
- Sizes in code: sm 80 · md 120 · **lg 180** · xl 240

### Names (Figma Property 1)

```
award  bitcoin  box  build  chart  cloud-transfer  cog  coin
dashboard  deposit  envelop  hand  lock  profile  rocket
safe-box  search  secure-eye  secure-file  shield  shield-bullet
shield-podium  signature  smile  speed  support  trade  transfer
trend-down  user-auth  user-search
```

```tsx
import { Illustration } from "@/components/ui/Illustration";

<Illustration name="rocket" size="md" framed />
```

Feature cards: set `illustration` on features block items (validated against catalog).

## Background Image

> “Using this image consistently for most of the backgrounds”

| Asset | Path |
|-------|------|
| Default | `/images/backgrounds/bg-default.png` |

```tsx
import { BackgroundImage } from "@/components/ui/BackgroundImage";

// Absolute cover behind section content
<BackgroundImage variant="decorative" />

// Or enable on hero via content
// blocks: [{ type: "hero", brandBackground: true, ... }]
```

Hero with brand background: light type + primary/secondary CTAs over purple art.

## Agent rules

1. Need UI chrome glyph → `Icon` (Material).  
2. Need feature/marketing visual → `Illustration` from catalog.  
3. Prefer shared `BackgroundImage` for purple section fills; avoid inventing new gradients as SoT backgrounds.  
4. New illustration names only if they appear in Figma Component 9.
