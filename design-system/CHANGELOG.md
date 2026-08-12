# Design system changelog

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
