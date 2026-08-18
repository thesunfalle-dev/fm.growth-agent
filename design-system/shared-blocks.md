# Shared block library

**Purpose:** Every repeating section is stored once. New landings **reuse a registered `type`** and fill TZ content. Do not invent a parallel layout or recase chrome.

| Layer | File |
|-------|------|
| This index | `design-system/shared-blocks.md` |
| Defaults (titles, CTAs, columns) | `lib/block-defaults.ts` |
| Machine contract | `design-system/block-inventory.json` |
| Types | `lib/types.ts` |
| Code | `components/blocks/*` + `components/ui/SiteHeader.tsx` / `SiteFooter.tsx` |
| Patterns | `design-system/pattern-catalog.md` |
| Market stack | recipe M1 in `page-recipes.md` |

---

## Chrome (every page — not in `blocks[]`)

| Intent | Storage | Reuse |
|--------|---------|--------|
| Site header | `SiteHeader` in `app/layout.tsx` | Nav/hrefs: `lib/navigation.ts`. Never put a header in `content.ts`. |
| Site footer + Ready CTA | `SiteFooter` in `app/layout.tsx` | CTA chrome: `blockDefaults.cta` + `sharedCtas`. Do not add a second end `cta` unless TZ needs a mid-page band. |

---

## Ready / provisional blocks (shippable)

Omit a listed default prop in `content.ts` to get the shared chrome.

| `type` | Intent | Defaults (`lib/block-defaults.ts`) | Content the landing fills |
|--------|--------|------------------------------------|---------------------------|
| `hero` | Offer / award / platform pitch | `primaryCta` = Start trading | title, subtitle, optional eyebrow/bullets/secondary |
| `market-hero` | Market product header | `primaryCta` = Start trading, `atmosphere` = brand | eyebrow, title, subtitle or bullets, optional `quotes[]`, `atmosphere`: `brand` / `crypto` / `indices` / `energy` |
| `features` | Why Fusion / benefits | `variant` = `usp` | title, items (illustration + copy) |
| `table` | Instruments or compare matrix | `variant` = `markets`, search + scroll on | title, `columns` (use `instrumentsColumns`), rows, optional footnote. Compare: `variant: "compare"` |
| `steps` | How It Works | title, subtitle, `horizontal` | items (sentence-case titles), optional CTAs |
| `reviews` | Trustpilot + review cards | title, lead, 4.5 / 1.7k, default quotes | omit for defaults; pass `items` when TZ has live reviews |
| `spread-cards` | Here’s Our Spreads (TV cards) | toolPrefix / toolSuffix / toolLink, `actionLabel` Trade, `primaryCta` | title, subtitle, `tabs[]`, `cards[]` with `cards[].tabs` (max 5 per tab) |
| `faq` | Accordion Q&A | title **FAQ**, first item open | items. Override title only if TZ names the section |
| `cta` | Mid-page conversion band | title + Start trading + Try a demo | omit everything for defaults; override if TZ differs |
| `logo-marquee` | Funding methods | dark band + ticker, Figma wordmarks | omit for defaults; pass `providers` only to subset |
| `disclaimer` | CFD risk line | standard leverage warning | omit for default; add preview-only notes only when product asks |
| `platforms` | Choose Your Platform | title “Choose Your Platform” + shared devices art | title/subtitle, `items[]` (tab, icon, bullets, CTA) |

### How to add a landing block

```ts
{ type: "market-hero", atmosphere: "crypto", title: "…", quotes: [/* TZ */] }
{ type: "spread-cards", title: "Here’s Our Spreads", tabs: ["Popular"], cards: [/* TZ + tabs[] */] }
{ type: "steps", items: [/* TZ */] }
{ type: "faq", items: [/* TZ */] }
{ type: "logo-marquee" }
{ type: "reviews" }
{ type: "cta" }
{ type: "disclaimer" }
```

Shared CTAs: `sharedCtas.startTrading` / `tryDemo` / `getLiveAccount`.  
Shared table headers: `instrumentsColumns` or `defaultInstrumentsColumns`.

---

## Planned types (reserved names — do not invent synonyms)

`instrument-grid` · `ratings-strip` · `tier-cards` · `download-bar` · `checklist-feature` · `comparison-table` · `bento-usp` · `education-split` · `testimonials` · `icon-feature-grid` · `notice-band` · `funding-card-grid` · `accordion-table` · `savings-calculator` · `leaderboard` · `calculator-tool` · `spreads-tool` · `tool-cards` · `platform-crossnav` · `awards-strip` · `media-carousel` · `blog-card` · `newsletter-cta` · `jobs-list` · `stats`

If a new Figma section matches one of these, implement that type. Do not create `reviews-v2` or a one-off CSS section.

---

## Shipped market stacks (canonical — reuse these)

Locked 2026-08-17. New market slugs copy a stack and swap TZ content. Do not invent a third hero or a second spreads layout.

```
crypto (quotes in the hero):
  header → market-hero (atmosphere: crypto) → features usp → table → table compare → steps → reviews → faq → footer

equity-indices (quotes as a later rail):
  header → market-hero (atmosphere: indices) → features usp → table → logo-marquee → steps → spread-cards → reviews → footer
```

Shared core: **header · market-hero · features · table · steps · reviews · footer**.

### `market-hero` atmospheres (reuse, do not fork)

| `atmosphere` | Field | Right / extra chrome | Quotes card | When |
|--------------|-------|----------------------|-------------|------|
| `brand` | Purple Market Header art | TV chart card 599×480 | yes (`quotes[]`) | Default / Forex-like |
| `crypto` | Light field + `CryptoCoinField` | White TV quotes card | yes (`quotes[]`, 5 themed instruments) | Crypto / coin markets |
| `indices` | Light field + `IndicesField` | Globe + chips + in-flow ticker | **no** — use `spread-cards` later | Indices / global markets |
| `energy` | Light field | Right-rail commodity well (orbiting props + core) | **no** — instruments stay in the table | Energy / soft commodities |

Do not mix: indices hero never gets a quotes card; crypto never gets the globe; energy never uses the coin scatter, globe, or ticker.

### `spread-cards` reuse

Same type as homepage “Our spreads”. Fill `tabs[]` + `cards[].tabs`. Each tab shows at most five cards. Desktop ≥1200: 5-col 250×360 rail. Below 1200: **one full-width stacked card** — never 2-up.

### Shipped M1 mobile (375)

Same types. Layout modes from `responsive-rules.md`, applied in shared CSS:

| Block | Mobile mode on crypto / equity |
|-------|--------------------------------|
| Header | 57, mark-only, search + menu |
| `market-hero` crypto | stack; hug CTA; white quotes card 364 |
| `market-hero` indices | stack; hug CTA; chips hidden; globe peeks from the right; ticker stays in-flow at the bottom of the block |
| `features` usp | snap rail 250 + **Navigate dots** (desktop keeps arrows) |
| `table` | 343 shell, sticky symbol, row 80, horizontal scroll |
| `table` compare | horizontal scroll (not tabs — still one matrix) |
| `logo-marquee` | same ticker, tighter gap |
| `steps` | vertical + full-width dual CTA |
| `spread-cards` | tabs overflow-x + **single-column** full-width TV_Card stack |
| `reviews` | 280 cards + arrows, score stacks |
| `faq` | 343 accordion, first open |
| Footer CTA | 2-line title + stacked Primary / or / Secondary |

---

## Rules

1. New slug: pick types from this file only.
2. Header and footer never go in `landings/*/content.ts`.
3. Do not paste `hub.fusionmarkets.com` into a landing — use `sharedCtas`.
4. Do not recase default H2s per slug.
5. A new section structure = inventory entry + types + component + this file + changelog, then reuse.
