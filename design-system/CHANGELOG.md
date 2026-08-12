# Design system changelog

## 2026-08-12 — Header & Footer from Figma

- Ingested frame `15192:11125`: Header_Desktop (80), Header_Mobile (57), Footer AU structure, CTA band.
- Tokens `layout.header.*` / `layout.footer.*`, shadows `shadow.header` / `shadow.headerMobile`.
- Components: marketing `SiteHeader` + `SiteFooter` in root layout; nav data in `lib/navigation.ts`.
- Brand assets under `public/brand/` (logo mark/wordmark, language/search/menu icons).
- Docs: `header-footer.md` + extract JSON. Full mega-footer / AU·EN legal variants planned.

## 2026-08-12 — Inputs & Labels from Figma

- Ingested frame `14382:8478`: Field/Standard states, Search, Tabs, chips, Toggle.
- Components: `Field`, `SearchInput`, `Tabs`, `LabelChip`, `Toggle` + tokens `component.input|tab|chip|toggle`.
- Docs: `inputs-labels.md` + extract JSON. Selectors / currency / carousel planned.

## 2026-08-12 — Tables foundation from Figma

- Ingested Tables frame `15276:11158`: rules (600 max height, sticky header 54, row min 78, pad 24).
- Measured Forex header/row colors and type; tokens `component.table.*`.
- `DataTable` + landing block `table`; demo markets sample on `/demo`.
- Catalog of specialized market/comparison tables documented as planned.

## 2026-08-12 — Buttons from Figma

- Ingested Buttons frame `14765:9245`: Primary / Secondary / Text, sizes lg/md/sm, hover/pressed.
- Primary uses Gradient/Primary → Tertiary; Secondary gradient border + soft fill.
- Component tokens `component.button.*`; docs `buttons.md` + extract JSON.
- Inventory status Button → `ready`.

## 2026-08-12 — Spacing & Layout from Figma

- Ingested frame `14765:7184`: 4px scale, content 1280, desktop margin 80, section 120/60.
- Added semantic `layout.spacing.*` tokens; wired section/hero/lead gaps in CSS.
- Docs: `spacing-layout.md` + extract JSON.

## 2026-08-12 — Colors locked to Figma paint styles

- Ingested Color frame `14749:6364` + all local solid/gradient paint styles.
- 60 solids match tokens 1:1; added remaining gradient tokens (Gold, Card Light, Mint, overlays…).
- Documented map Figma style name → token in `color-styles.md` + extract JSON.

## 2026-08-12 — Fonts: design-system only

- Runtime fonts: **Noto Sans** + **Roboto** only (Website Redesign Typography).
- Removed Client Hub Lato extract; stripped non-DS text styles from paints dump.
- Dropped unused `mono` token stack.

## 2026-08-12 — Switch SoT to Website Redesign FM 2.0

- Marketing DS: **Website Redesign FM 2.0** (`5PQJiXq7xZNGCqV1XNvKro`).
- Typography: **Noto Sans** + **Roboto**.
- Colors, spacing, layout from same file.

**Status after change:** `figma-partial-sync`; Buttons/Sections/Cards still to map.

## 2026-08-12 — Figma styles ingest (Client Hub)

- Linked Fusion Client Hub Design System Figma (`JRZk7VKq09NfBamSFcmAst`).
- Ingested **Typography** (Lato H1–H5 / B1–B3) and full **paint styles** (Blue/Purple/Gray/Green/Red/Orange/White + button gradients).
- Applied **4px spacing grid** and layout rules (max 1440, gutters 32/16).
- Switched runtime theme from provisional dark shell → **light Client Hub**.
- Stored raw extract in `figma/extract-2026-08-12-styles.json` + `typography-styles.md`.
- Loaded Lato via `next/font/google` (400/700).

**Status after change:** `figma-partial-sync` — colors/type/spacing foundation; components (Buttons frame, Shadows, Cards) still to map.

## 2026-08-12 — Bootstrap agentic DS contract

- Added token file (`design-tokens.json`) with **provisional-shell** neutrals migrated from the early hardcoded CSS shell.
- Added component inventory (Button, LinkButton surface, Card, Section, Eyebrow, Lead, Disclaimer).
- Added block inventory (hero, features, cta, disclaimer) matching current landings.
- Added token codegen + validation scripts.
- Documented sources, decisions, and agent orientation.

**Status after change:** `provisional-shell` — awaiting Fusion Figma.
