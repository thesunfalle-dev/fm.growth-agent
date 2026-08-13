# Sources & provenance

Everything visual should be traceable. When you change tokens or inventories, note **where** the value came from.

## Upstream design

| Source | URL / location | Status | Notes |
|--------|----------------|--------|-------|
| **Website Redesign FM 2.0** | https://www.figma.com/design/5PQJiXq7xZNGCqV1XNvKro/Website-Redesign-FM-2.0?node-id=14711-15263 | **active SoT** | Marketing site DS. File key `5PQJiXq7xZNGCqV1XNvKro` |
| Live site | https://fusionmarkets.com/ | legacy | Not redesign SoT |

## Implementation sources in this repo

| Artifact | Role |
|----------|------|
| `design-tokens.json` | Authoritative token values for code |
| `generated/tokens.css` | Build output for runtime CSS variables |
| `figma/extract-2026-08-12-website-redesign-styles.json` | Typography + spacing extract |
| `figma/extract-website-redesign-paints.json` | Paint + gradient styles |
| `typography-styles.md` | Human map of type scale |
| `CHANGELOG.md` | History |

## Current token provenance

`meta.status = figma-partial-sync` (Website Redesign FM 2.0)

### 2026-08-13 — Mobile 375 ingest (homepage + markets + accounts)

| Page | Node |
|------|------|
| Mobile - AU (homepage) | `27873:296438` |
| Forex - Mobile | `23570:104433` |
| Partners Overview - Mobile (= Products A1) | `26258:282017` |
| Zero Account - Mobile | `26258:282352` |
| Demo Account | `26258:284389` |
| Fusion Pro | `26258:285898` |

- Structure only. Same recipes as desktop (homepage + M1 + A1–A4). No new block types.
- Docs: `responsive-rules.md` (375 contract), `page-recipes.md` mobile stacks, `pattern-catalog.md` Adaptive, `homepage-patterns.md`, `header-footer.md` CTAFooter-Mobile.
- Premium mobile not in this batch.
- Actor: agent + user

### 2026-08-13 — TradingView Chart cards

- Figma: TradingView Chart cards [`17172:52853`](https://www.figma.com/design/5PQJiXq7xZNGCqV1XNvKro/Website-Redesign-FM-2.0?node-id=17172-52853) — TV-Desktop `15303:14755` (599×480), TV-Mobile `15433:12419` (343×364).
- Used as the Market Header right panel. Chart line + light TradingView wordmark exported to `public/brand/tv-card/`.
- Actor: agent + user

### 2026-08-13 — Market header and funding methods

- Figma: Market Header [`23570:104257`](https://www.figma.com/design/5PQJiXq7xZNGCqV1XNvKro/Website-Redesign-FM-2.0?node-id=23570-104257) and Deposit Options funding logos [`24400:153845`](https://www.figma.com/design/5PQJiXq7xZNGCqV1XNvKro/Website-Redesign-FM-2.0?node-id=24400-153845).
- Measured and applied: desktop market heading 60/110%, lead 20/150%, 599px rounded panel, and 40px provider cadence.
- `logo-marquee` wordmarks exported from Our Funding Methods `28259:298800` (Deposit & Withdrawals, colour=off) into `public/brand/funding/`.
- Actor: agent + user

### 2026-08-12 — Pattern catalog (reuse registry)

- Doc: `pattern-catalog.md` — every shared Figma screen registers patterns/rules/blocks
- Decision: `docs/DECISIONS.md` “Figma screens register reusable patterns”
- Actor: agent + user

### 2026-08-12 — Typography correction from Deposit Options Desktop

- Figma: [Deposit Options - Desktop `24400:153833`](https://www.figma.com/design/5PQJiXq7xZNGCqV1XNvKro/Website-Redesign-FM-2.0?node-id=24400-153833)
- Verified roles: Plus Jakarta Sans SemiBold for H1 / headings / CTA, Roboto Light for body copy, Roboto Regular for links and table/supporting UI.
- Applied in `design-tokens.json`, `app/layout.tsx`, and `typography-styles.md`.
- Actor: agent + user

### 2026-08-12 — Page batch: Compare + About + Careers + Blog (6 screens)

| Page | Node |
|------|------|
| Broker Comparison Tool - Desktop | `29369:318747` |
| Who We Are | `29665:152363` |
| Why Fusion | `29665:152206` |
| What others say / Testimonial | `29665:153626` |
| Career Desktop | `29637:142831` |
| Fusion Blog / Homepage | `29653:147180` |

- Recipes: T5, A6–A10; patterns review-rail, awards-strip, media-carousel, blog-card, newsletter-cta, jobs-list, stats
- Actor: agent + user

### 2026-08-12 — Page batch: Conditions variants + Client tools (6 screens)

| Page | Node |
|------|------|
| Trading Conditions / Margins & Leverage - AU Retail | `25317:260703` |
| Trading Conditions / Session Time | `25136:208357` |
| Trading Conditions / Contract Specification | `25136:201435` |
| Trading Calculators - Margin | `27868:291901` |
| Live & Historical Spreads - Desktop | `25136:207926` |
| Client Hub Tools - Desktop | `25136:205792` |

- C1 variants confirmed (margins expandable tables, session accordion, contract table+note)
- Recipes T2 calculator-tool, T3 spreads-tool, T4 hub tools
- Actor: agent + user

### 2026-08-12 — Page batch: Copy trading + Funding + Conditions (6 screens)

| Page | Node |
|------|------|
| Fusion+ Copy Trading - For Copier | `31099:370675` |
| Fusion+ Copy Trading - For Signal Master | `31099:369917` |
| Deposit Options - Desktop | `24400:153833` |
| Withdrawal Options - All Collapsed | `24400:157450` |
| Trading Conditions / All Trading Products | `25136:208578` |
| Trading Conditions / Commission Rates on Zero | `25234:235840` |

- Recipes: T1 (Fusion+), F1 (funding), C1 (conditions hub) in `page-recipes.md`
- New planned: `funding-card-grid`, `accordion-table`, `savings-calculator`, `leaderboard`; steps+tabs; logo-marquee on funding heroes
- Actor: agent + user

### 2026-08-12 — Page batch: Platforms + ATS (6 screens)

| Page | Node |
|------|------|
| MetaTrader 5 - Overview | `28610:429700` |
| MetaTrader 5 - Desktop | `28758:144345` |
| MetaTrader 5 - Mobile | `28758:145875` |
| MetaTrader 5 - Web | `28610:427712` |
| Multi Account Manager (MAM/PAMM) | `31099:361349` |
| DupliTrade | `31099:361429` |

- Recipes: P1 platform overview, P2 device subpage, P3 MAM, P4 DupliTrade in `page-recipes.md`
- New planned patterns: `icon-feature-grid`, `notice-band`; strengthened `download-bar` / `platforms` / `checklist-feature` / `bento-usp`
- Actor: agent + user

### 2026-08-12 — Page batch: Markets + Accounts (6 screens)

| Page | Node |
|------|------|
| Forex - Desktop | `23570:104143` |
| Products and Accounts - Overview | `26258:275741` |
| Zero Account | `26258:273793` |
| Demo account | `26258:279143` |
| Fusion Pro | `26258:285369` |
| Premium Program | `26258:280335` |

- Docs: `page-recipes.md` (recipes M1, A1–A5); `pattern-catalog.md` full entries for market-hero, education-split, comparison-table, instrument-grid, platforms, download-bar, tier-cards, bento-usp, checklist-feature
- Actor: agent + user

### 2026-08-12 — Homepage composition (AU) reference

- Desktop: https://www.figma.com/design/5PQJiXq7xZNGCqV1XNvKro/Website-Redesign-FM-2.0?node-id=27873-297355 (`27873:297355`)
- Mobile: https://www.figma.com/design/5PQJiXq7xZNGCqV1XNvKro/Website-Redesign-FM-2.0?node-id=27873-296438 (`27873:296438`)
- Canonical blocks (structure fixed, content varies):
  - Our spreads: `27873:297368` → planned `spread-cards` (TV_Card + tabs)
  - Ready to start / CTAFooter: `27873:297571` → footer CTA / `cta`
  - How it works: `31517:366918` → `steps` (split + CTAs)
- Role: primary reuse catalog for landings
- Docs: `pattern-catalog.md`, `homepage-patterns.md`, `assembly.md`
- Actor: agent + user

### 2026-08-12 — Ready-only assembly (Figma → inventory)

- Gold EN Market Header / body: `29987:341692` (no inventing hero+table hybrid)
- Tables: `15276:11158` — labels **Markets - Crypto CFDs**, **Markets - Crypto CFDs - How we Compare**
- Sections FAQ + Steps: `15313:11090`
- Cards USP: `15166:10610`
- Docs: `assembly.md` (authority for compose rules); crypto slug refactored
- Actor: agent + user

### 2026-08-12 — Landing composition recipes

- BrokerChooser D/M: `29987:337918` / `29987:342224`
- TradingView Promo AU D/M: `29987:338113` / `29987:342421`
- TradingView platform D/M: `29987:340524` / `29987:342673`
- Gold EN market D/M: `29987:341692` / `29987:342972`
- Role: campaign landing stacks + shared modules vs homepage
- Docs: `landing-patterns.md` + `assembly.md`
- Actor: agent + user

### 2026-08-12 — Cards

- File: https://www.figma.com/design/5PQJiXq7xZNGCqV1XNvKro/Website-Redesign-FM-2.0?node-id=15166-10610
- Frame: **Cards** `15166:10610`
- USP foundation ready; remaining card families planned
- Docs: `cards.md`, extract `figma/extract-2026-08-12-cards.json`
- Actor: agent + user

### 2026-08-12 — Sections

- File: https://www.figma.com/design/5PQJiXq7xZNGCqV1XNvKro/Website-Redesign-FM-2.0?node-id=15313-11090
- Frame: **Sections** `15313:11090`
- FAQ Desktop/Mobile + Step by Steps variants
- Docs: `sections.md`, extract `figma/extract-2026-08-12-sections.json`
- Actor: agent + user

### 2026-08-12 — Images

- File: https://www.figma.com/design/5PQJiXq7xZNGCqV1XNvKro/Website-Redesign-FM-2.0?node-id=15235-13486
- Frame: **Images** `15235:13486`
- Component 9 illustrations + BG Image “use consistently for most backgrounds”
- Docs: `images.md`, extract `figma/extract-2026-08-12-images.json`
- Actor: agent + user

### 2026-08-12 — Logos & Icons

- File: https://www.figma.com/design/5PQJiXq7xZNGCqV1XNvKro/Website-Redesign-FM-2.0?node-id=14994-6445
- Frame: **Logos & Icons** `14994:6445`
- Rule: base icons = Material Symbols; logos FM desktop/mobile
- Docs: `logos-icons.md`, extract `figma/extract-2026-08-12-logos-icons.json`
- Actor: agent + user

### 2026-08-12 — Header & Footer

- File: https://www.figma.com/design/5PQJiXq7xZNGCqV1XNvKro/Website-Redesign-FM-2.0?node-id=15192-11125
- Frame: **Header & Footer** `15192:11125`
- Nodes: Header_Desktop `15086:11710`, Header_Mobile `15366:10884`, Footer AU `15866:27010`
- Docs: `header-footer.md`, extract `figma/extract-2026-08-12-header-footer.json`
- Actor: agent + user

### 2026-08-12 — Inputs & Labels

- File: https://www.figma.com/design/5PQJiXq7xZNGCqV1XNvKro/Website-Redesign-FM-2.0?node-id=14382-8478
- Frame: **Inputs & Labels** `14382:8478`
- Field, Search, Tabs, chips, Toggle foundation
- Docs: `inputs-labels.md`, extract `figma/extract-2026-08-12-inputs-labels.json`
- Actor: agent + user

### 2026-08-12 — Tables

- File: https://www.figma.com/design/5PQJiXq7xZNGCqV1XNvKro/Website-Redesign-FM-2.0?node-id=15276-11158
- Frame: **Tables** `15276:11158`
- Rules + Forex header/row measurements; foundation DataTable
- Docs: `tables.md`, extract `figma/extract-2026-08-12-tables.json`
- Actor: agent + user

### 2026-08-12 — Buttons

- File: https://www.figma.com/design/5PQJiXq7xZNGCqV1XNvKro/Website-Redesign-FM-2.0?node-id=14765-9245
- Frame: **Buttons** `14765:9245`
- Primary/Secondary/Text + sizes; states default/hover/pressed
- Docs: `buttons.md`, extract `figma/extract-2026-08-12-buttons.json`
- Actor: agent + user

### 2026-08-12 — Spacing & Layout

- File: https://www.figma.com/design/5PQJiXq7xZNGCqV1XNvKro/Website-Redesign-FM-2.0?node-id=14765-7184
- Frame: **Spacing & Layout** `14765:7184`
- 4px grid; desktop content 1280 / margin 80; section 120/60; H1→desc 24/32; desc→content 40/24
- Docs: `spacing-layout.md`, extract `figma/extract-2026-08-12-spacing-layout.json`
- Actor: agent + user

### 2026-08-12 — Colors (paint styles + Color frame)

- File: https://www.figma.com/design/5PQJiXq7xZNGCqV1XNvKro/Website-Redesign-FM-2.0?node-id=14749-6364
- Frame: **Color** `14749:6364`
- 60 solid paint styles + 10 gradients → tokens (hex verified 1:1)
- Docs: `color-styles.md`, extract `figma/extract-2026-08-12-color-styles.json`
- Actor: agent + user

### 2026-08-12 — Correct SoT: Website Redesign

- File: https://www.figma.com/design/5PQJiXq7xZNGCqV1XNvKro/Website-Redesign-FM-2.0
- Frames: Typography, Color, Spacing & Layout
- Fonts: **Noto Sans** + **Roboto**
- Actor: agent + user

## How to record a Figma sync

```md
### YYYY-MM-DD — Figma sync
- File: <url>
- Page/frames: <names>
- What changed: colors / type / spacing / components
- Ambiguities: link to OPEN_QUESTIONS
- Actor: <name or agent>
```
