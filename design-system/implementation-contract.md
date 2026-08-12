# Implementation contract

Maps the design system to Next.js / React code for agents and humans.

## Naming

| Area | Contract |
|------|----------|
| CSS variables | Flatten token paths to kebab-case. Drop leading `semantic` segment. Example: `semantic.color.background.canvas` → `--color-background-canvas`. Primitives: `primitive.color.neutral0` → `--primitive-color-neutral0`. |
| React components | PascalCase under `components/ui` and `components/blocks` |
| Block `type` field | kebab-case strings matching `block-inventory.json` (`hero`, `features`, …) |
| Landing slugs | lowercase kebab-case: `^[a-z0-9]+(?:-[a-z0-9]+)*$` |
| Variants / sizes | Explicit enums: `variant`, `size` — not boolean soup |

## Raw value ban

In `components/**` and `app/**` (except generated CSS and documented exceptions):

- ❌ raw hex/rgb/hsl colors
- ❌ ad-hoc spacing/radius/shadow/z-index literals that are not `var(--…)`
- ❌ one-off font-family stacks

Allowed:

- ✅ `var(--token-name)` only
- ✅ media queries whose breakpoint equals a token value, with an adjacent comment: `/* breakpoint.md */`

## Token pipeline

```bash
npm run generate:tokens   # design-tokens.json → design-system/generated/*
npm run validate:design   # inventories + no raw values + generated up to date
```

Never hand-edit `design-system/generated/*`.

## React mapping (current)

| Inventory item | Module | Notes |
|----------------|--------|-------|
| Button | `components/ui/Button.tsx` | primary / secondary; link-friendly |
| Container | `components/ui/Container.tsx` | default / narrow |
| Section | `components/ui/Section.tsx` | section chrome |
| Card | `components/ui/Card.tsx` | feature cards |
| Eyebrow / Heading / Text | `components/ui/*` | typography primitives |
| SiteHeader / SiteFooter | `components/ui/*` | marketing chrome (Figma Header & Footer) |
| Pill | `components/ui/Pill.tsx` | preview chip |
| Block renderer | `components/blocks/BlockRenderer.tsx` | switches on `type` |
| hero / features / cta / disclaimer | `components/blocks/*.tsx` | section blocks |

## Landing document

- Types: `lib/types.ts` (must stay aligned with `block-inventory.json`)
- Registry: `lib/landings.ts`
- Content only in `landings/{slug}/content.ts` — no style decisions

## Behavior

- Static export: no server-only APIs in landing components
- External CTAs may point to `hub.fusionmarkets.com` etc.
- Prefer semantic HTML (`section`, `header`, `footer`, headings hierarchy)
- Respect `prefers-reduced-motion` when motion is added
