# Design system changelog

## 2026-08-13 — Market landings share one hero/table chrome

- Market Header panel is now the Figma TV-card slot: 599×480, 32px quote value, 40px vertical section pad. Crypto and Equity both fill that slot (BTC min spread from TZ; Equity keeps its approved indicative quote).
- Market-hero copy uses one stack gap (24 / 40 to CTA). Optional bullets inherit lead type (Roboto Light 20) instead of a second B3 scale.
- Equity instruments table uses the same symbol-cell anatomy as Crypto (title cell + shared column widths). No invented index names or icons.
- Recorded Plus Jakarta + Roboto as the heading/body pair in DECISIONS + playbook so landings cannot drift back to Noto.

## 2026-08-13 — Shared market landing foundation

- Added ready `market-hero` block from Market Header `23570:104257`: a common brand-background hero, 60px display title, 20px lead, shared CTA row, and optional indicative market/rating panel.
- Added ready `logo-marquee` block from Funding logos `24400:153845`: shared title/lead and responsive funding-method row.
- Moved Crypto and Equity Indices to the same `market-hero` composition. Equity now uses the reusable indicative quote and rating options, and its approved funding section is assembled from `logo-marquee`.
- Added `component.marketHero` and semantic panel/rating tokens. Provider names remain text until the approved payment-logo asset bundle can be retrieved; no Figma sample marketing copy was transferred.

## 2026-08-12 — Typography corrected from Deposit Options Figma

- Re-read Deposit Options Desktop `24400:153833`, including hero text and Footer CTA, with Figma design context.
- Corrected display, heading, navigation and CTA family from Noto Sans to **Plus Jakarta Sans** (Medium/SemiBold/Bold); body remains **Roboto** (Light for B2/B3 copy, Regular for links/tables).
- Equity Indices now relies on the shared footer CTA (`SiteFooter`) rather than adding a second, structurally different `cta` block before it. This matches the established market landing composition and shared CTAFooter pattern.
- Established shared landing text baseline from the same source: H1 60/110%, section title 48/110%, lead 20/150% Light. These are token values consumed by every shared block.

## 2026-08-12 — Implementation playbook + chrome parity lessons

- Added `docs/IMPLEMENTATION_PLAYBOOK.md`: Figma→code process, measure checklist, asset workflow, ship pipeline, **anti-patterns** from Crypto LP.
- Orientation: `AGENTS.md` + `docs/WORKFLOW.md` require playbook for UI work.
- Decisions: live social hrefs; Figma SVGs for chrome icons (language, social, TV).
- Header: Language icon = Figma SVG (purple gradient), not Material `language`.
- Footer AU 1:1: 3×215 stacks, purple social icons, contact icon-above-text, live social URLs.

## 2026-08-12 — Content from TZ only (Figma structure)

- Hard rule restated: Figma = block structure; landings content only from TZ/brief.
- Crypto: restored TZ USP (6 points), TZ compare (Fusion vs AU exchange), TZ titles/FAQ.

## 2026-08-12 — Why USP band (Figma 23570:105076)

- USP section: soft purple band, title + **exactly 4** cards (not 6), Figma copy + illustrations.
- Grid: 4 equal columns gap 24; horizontal scroll only when >4.

## 2026-08-12 — How We Compare matrix (Figma 23570:105086)

- New `CompareTable` + `table.variant: "compare"`: side labels, provider columns, multi-line fees, TrustPilot image row.
- Crypto content uses real Figma compare rows (Fusion / Coinbase / CoinSpot / Gemini / Binance).

## 2026-08-12 — Markets table + page-wide section centering

- Markets instruments table matches Figma Crypto_2 / Pricing: icon + symbol/meta, Trading Hours / Min / Avg columns, header search, sticky shell, centered section title + footnote.
- Page-wide: default sections center H2 + content stacks (hero remains left for market pitch).
- Crypto landing instruments content uses BTC/ETH/DOGE/SOL/ADA icons under `public/images/markets/`.

## 2026-08-12 — FAQ centered band (Figma 29987:341618)

- FAQ section: center column (H2 48 center + 1000px list), gap 60 title→list — was left-aligned in 1280 container.

## 2026-08-12 — How it works = horizontal process (Figma 29987:339011)

- Fixed `steps` to match Final Pages process: centered H2 48 + B2 lead, 3-column numbered row (active purple + gray inactive), segment connectors, optional dual CTAs.
- Default orientation for StepsBand is **horizontal** (was vertical timeline — wrong for marketing pages).
- Crypto content updated to horizontal + CTAs.

## 2026-08-12 — Shared blocks visual pass (FAQ / Steps / Table)

- Self-host Material Symbols (`public/fonts` + `app/material-icons.css`) — fixes broken FAQ expand icons (late CSS `@import` was ignored after token inline).
- FAQ: Figma Sections spacing (title 20 Medium / answer Light 16 / icon 24 / no extra inter-item gap).
- Steps: vertical light rhythm (connector, body padding, no double gap after lead).
- Markets table: sticky header bg, row height 78, symbol+meta cells, last-row divider rule.
- Crypto instruments content uses Markets symbol cell pattern.

## 2026-08-12 — Crypto market landing desktop (M1-aligned)

- `landings/crypto`: stack → hero brand BG → USP → instruments table → compare → steps → FAQ → disclaimer; removed duplicate mid/end `cta` (footer CTAFooter).
- Button `primaryLight` (Figma Primary/Light); Hero auto-uses it when `brandBackground`.
- Docs: assembly market MVP, landing-patterns D, WORKFLOW market stack, buttons.md.

## 2026-08-12 — Page batch Compare + About + Careers + Blog

- Recipes T5 (Broker Comparison Tool), A6 Who We Are, A7 Why Fusion, A8 social proof, A9 Careers, A10 Blog homepage.
- Patterns: review-rail, awards-strip, media-carousel, blog-card, newsletter-cta, jobs-list, stats; savings-calculator ties to Broker Comparison Tool.
- Docs only.

## 2026-08-12 — Page batch Conditions variants + Client tools

- Confirmed C1 for Margins & Leverage, Session Time, Contract Spec (table / accordion-table variants).
- Recipes T2 (calculators), T3 (live & historical spreads tool), T4 (Client Hub Tools).
- Planned: `calculator-tool`, `spreads-tool`, `tool-cards`. Docs only.

## 2026-08-12 — Page batch Copy trading + Funding + Conditions

- Recipes T1 (Fusion+ Copier/Master), F1 (Deposit/Withdrawal), C1 (Trading Conditions hub + commission table).
- Patterns: funding-card-grid, accordion-table, savings-calculator, leaderboard; steps with Tabs_Text; logo-marquee on funding heroes.
- Docs only — inventory planned entries + page-recipes + pattern-catalog.

## 2026-08-12 — Page batch Platforms + ATS (6 Figma screens)

- Recipes P1–P4: MT5 Overview, MT5 Desktop/Mobile/Web (one device recipe), MAM, DupliTrade.
- Patterns: store/download family, platforms tabs, bento + checklist on device pages; `icon-feature-grid` (MAM); `notice-band` (DupliTrade).
- Docs: `page-recipes.md`, `pattern-catalog.md`, inventory planned entries. Docs only.

## 2026-08-12 — Page batch Markets + Accounts (6 Figma screens)

- Registered full-page recipes: Forex market (M1), Products overview (A1), Zero (A2), Demo (A3), Fusion Pro (A4), Premium (A5) in `page-recipes.md`.
- Expanded `pattern-catalog.md`: market-hero, education-split, comparison-table, instrument-grid, platforms, download-bar, tier-cards, bento-usp, checklist-feature + also-seen-on for existing patterns.
- Inventory planned entries updated with page node refs.
- No new React components in this pass — documentation for reuse only.

## 2026-08-12 — Pattern catalog + screen ingest workflow

- New `pattern-catalog.md`: living registry of reusable patterns (structure, props, rules, Figma canons, also-seen-on).
- Seeded: `spread-cards`, `cta`, `steps`, `features`, `faq`, `table`, `hero`, `disclaimer` + planned list.
- Workflow: sharing Figma screens → register patterns (not only view). `docs/WORKFLOW.md`, `docs/DECISIONS.md`, `Agents.md`.

## 2026-08-12 — Structure vs content (homepage canonical blocks)

- Principle: repeating Figma sections = **one design block**; text/images/pairs = **content props**.
- Homepage canons: Our spreads `27873:297368` → `spread-cards`; CTAFooter `27873:297571` → `cta`/footer; How it works `31517:366918` → `steps`.
- Docs: `homepage-patterns.md`, `assembly.md`; inventory `spread-cards` points at spreads frame (not whole homepage).

## 2026-08-12 — Ready-only assembly contract

- New `assembly.md`: hard rules — compose inventory blocks only; **no nested table in hero**; Figma section → ready substitutes for market / award / promo / platform.
- Hero props aligned with inventory: `bullets`, `brandBackground`; removed embedded `hero.table` / `proofNote`.
- `/crypto` rebuilt as pure stack: hero → table → features → cta → table → steps → faq → cta → disclaimer.
- Figma tables named **Crypto CFDs** / **How we Compare** map to `type: "table"` only.
- Orientation: `Agents.md` lists `assembly.md`; MVP recipes in `landing-patterns.md` tightened.

## 2026-08-12 — Landing composition recipes

- Documented campaign landings desktop + mobile: BrokerChooser, TV Promo, TradingView, **Gold EN (market)**.
- Docs: `landing-patterns.md` — stacks, shared DNA, adaptive, map to ready/planned blocks.
- Gold adds: market hero + chart, bento USP, Classic vs Zero comparison, horizontal steps.
- Sources: Figma `29987:337918`…`342972`. Composition only (no new components).

## 2026-08-12 — Homepage composition reference

- Documented AU Desktop + Mobile homepage section map and reuse patterns.
- Docs: `homepage-patterns.md`; updated `responsive-rules.md` (hero order, rails vs stack).
- Sources: Figma nodes `27873:297355` / `27873:296438`. No new components — composition only.

## 2026-08-12 — Cards from Figma

- Ingested frame `15166:10610`: USP “Why Fusion…” cards (learn more on/off, hover, max 4 + scroll).
- Components: `UspCard`, `CardGrid`, `Card` variants usp/feature/content/instrument.
- Features block supports `variant: "usp"` + `learnMore` + illustrations.
- Catalog of content/blog/platform/TV/deposit/accordion/instrument documented as planned.
- Docs: `cards.md` + extract JSON.

## 2026-08-12 — Sections from Figma

- Ingested frame `15313:11090`: FAQ accordion + Step by Steps (vertical/horizontal, light/dark).
- UI: `FaqItem`, `Steps`/`Step`; blocks `faq`, `steps` (`Faq`, `StepsBand`).
- FAQ uses details/summary + Material expand_more/less; steps tokens `component.faq|step`.
- Demo landing: steps + FAQ samples. Docs: `sections.md` + extract JSON.

## 2026-08-12 — Images from Figma

- Ingested frame `15235:13486`: 31 isometric illustrations (180px) + shared Background Image.
- `Illustration` + `BackgroundImage` components; catalog `lib/illustrations.ts`.
- Assets: `public/images/illustrations/*.png`, `public/images/backgrounds/bg-default.png`.
- Demo hero uses `brandBackground`; feature cards can set `illustration`.
- Docs: `images.md` + extract JSON. Reminder: UI chrome stays Material Icons.

## 2026-08-12 — Logos & Icons from Figma

- Ingested frame `14994:6445`. **Hard rule:** base UI icons = **Material Symbols only**.
- `Icon` + `MATERIAL_ICONS` catalog (`lib/icons.ts`); `Logo` desktop/mobile.
- Wired Material icons into SiteHeader, SiteFooter contact, SearchInput, Button arrow.
- Removed hand-drawn `public/brand/icon-*.svg`. Assets: logo-desktop / logo-mobile / mark / wordmark.
- Docs: `logos-icons.md` + extract JSON. Flags, crypto, key icons, social, deposit planned.

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
