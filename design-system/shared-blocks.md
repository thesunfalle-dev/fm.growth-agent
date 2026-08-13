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
| `market-hero` | Market product header (BG + quotes panel) | `primaryCta` = Start trading; Trade on rows | eyebrow, title, subtitle, `quotes[]` (5 instruments), optional bullets/secondary |
| `features` | Why Fusion / benefits | `variant` = `usp` | title, items (illustration + copy) |
| `table` | Instruments or compare matrix | `variant` = `markets`, search + scroll on | title, `columns` (use `instrumentsColumns`), rows, optional footnote. Compare: `variant: "compare"` |
| `steps` | How It Works | title, subtitle, `horizontal` | items (sentence-case titles), optional CTAs |
| `faq` | Accordion Q&A | title **FAQ**, first item open | items. Override title only if TZ names the section |
| `cta` | Mid-page conversion band | title + Start trading + Try a demo | omit everything for defaults; override if TZ differs |
| `logo-marquee` | Funding methods | dark band + ticker, Figma wordmarks | omit for defaults; pass `providers` only to subset |
| `disclaimer` | CFD risk line | standard leverage warning | omit for default; add preview-only notes only when product asks |

### How to add a landing block

```ts
{ type: "steps", items: [/* TZ */] }
{ type: "faq", items: [/* TZ */] }
{ type: "logo-marquee" }
{ type: "cta" }
{ type: "disclaimer" }
```

Shared CTAs: `sharedCtas.startTrading` / `tryDemo` / `getLiveAccount`.  
Shared table headers: `instrumentsColumns` or `defaultInstrumentsColumns`.

---

## Planned types (reserved names — do not invent synonyms)

`spread-cards` · `instrument-grid` · `platforms` · `ratings-strip` · `tier-cards` · `download-bar` · `checklist-feature` · `comparison-table` · `bento-usp` · `education-split` · `testimonials` · `icon-feature-grid` · `notice-band` · `funding-card-grid` · `accordion-table` · `savings-calculator` · `leaderboard` · `calculator-tool` · `spreads-tool` · `tool-cards` · `review-rail` · `awards-strip` · `media-carousel` · `blog-card` · `newsletter-cta` · `jobs-list` · `stats`

If a new Figma section matches one of these, implement that type. Do not create `reviews-v2` or a one-off CSS section.

---

## Shipped market stacks

```
crypto:
  header → market-hero → features usp → table → table compare → steps → faq → footer

equity-indices:
  header → market-hero → features usp → table → logo-marquee → steps → footer
```

Shared core: **header · market-hero · features · table · steps · footer**.

---

## Rules

1. New slug: pick types from this file only.
2. Header and footer never go in `landings/*/content.ts`.
3. Do not paste `hub.fusionmarkets.com` into a landing — use `sharedCtas`.
4. Do not recase default H2s per slug.
5. A new section structure = inventory entry + types + component + this file + changelog, then reuse.
