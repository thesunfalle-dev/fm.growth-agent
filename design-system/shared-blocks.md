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
| `market-hero` | Market product header (BG + TV card) | `primaryCta` = Start trading, `atmosphere` = brand | eyebrow, title, subtitle, `quotes[]`, optional `atmosphere: "crypto"`, optional bullets/secondary |
| `features` | Why Fusion / benefits | `variant` = `usp` | title, items (illustration + copy) |
| `table` | Instruments or compare matrix | `variant` = `markets`, search + scroll on | title, `columns` (use `instrumentsColumns`), rows, optional footnote. Compare: `variant: "compare"` |
| `steps` | How It Works | title, subtitle, `horizontal` | items (sentence-case titles), optional CTAs |
| `reviews` | Trustpilot + review cards | title, lead, 4.8 / 7.2k, default quotes | omit for defaults; pass `items` when TZ has live reviews |
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

`spread-cards` · `instrument-grid` · `platforms` · `ratings-strip` · `tier-cards` · `download-bar` · `checklist-feature` · `comparison-table` · `bento-usp` · `education-split` · `testimonials` · `icon-feature-grid` · `notice-band` · `funding-card-grid` · `accordion-table` · `savings-calculator` · `leaderboard` · `calculator-tool` · `spreads-tool` · `tool-cards` · `platform-crossnav` · `awards-strip` · `media-carousel` · `blog-card` · `newsletter-cta` · `jobs-list` · `stats`

If a new Figma section matches one of these, implement that type. Do not create `reviews-v2` or a one-off CSS section.

---

## Shipped market stacks

```
crypto:
  header → market-hero → features usp → table → table compare → steps → reviews → faq → footer

equity-indices:
  header → market-hero → features usp → table → logo-marquee → steps → spread-cards → reviews → footer
```

Shared core: **header · market-hero · features · table · steps · footer**.

### Shipped M1 mobile (375)

Same types. Layout modes from `responsive-rules.md`, applied in shared CSS:

| Block | Mobile mode on crypto / equity |
|-------|--------------------------------|
| Header | 57, mark-only, search + menu |
| `market-hero` | stack; hug Primary/Light (~44); secondary hidden; quotes/TV slot 364 |
| `features` usp | snap rail 250 + **Navigate dots** (desktop keeps arrows) |
| `table` | 343 shell, sticky symbol, row 80, horizontal scroll |
| `table` compare | horizontal scroll (not tabs — still one matrix) |
| `logo-marquee` | same ticker, tighter gap |
| `steps` | vertical + full-width dual CTA |
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
