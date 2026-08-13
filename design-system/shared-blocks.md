# Shared blocks (shipped market landings)

**Purpose:** Crypto and Equity Indices are the same **market recipe**. Store each repeating section once, then swap TZ content. Do not fork a second header, footer, hero, USP, table, or How It Works.

**Code:** `lib/block-defaults.ts` + `lib/navigation.ts` + `components/blocks/*` + `components/ui/SiteHeader.tsx` / `SiteFooter.tsx`  
**Machine contract:** `block-inventory.json`  
**Page stack:** recipe M1 in `page-recipes.md`

---

## Always on every market page (chrome + core)

| Intent | Storage | How to reuse |
|--------|---------|--------------|
| Site header | `SiteHeader` in `app/layout.tsx` | Already wraps every slug. Nav/hrefs: `lib/navigation.ts`. |
| Site footer + “Ready to start trading?” | `SiteFooter` in `app/layout.tsx` | Already wraps every slug. CTA chrome: `blockDefaults.cta` + `sharedCtas`. Do **not** add a second end `cta` block. |
| Market header | `type: "market-hero"` | Same block. Content: eyebrow, H1, lead, optional bullets/quote/trustpilot. Default primary CTA = Start trading. |
| Why Fusion | `type: "features"`, `variant: "usp"` | Same USP rail. Content: title + items (illustration + copy). |
| Instruments | `type: "table"` | Same DataTable. Headers from `instrumentsColumns`. Rows/title from TZ. |
| How It Works | `type: "steps"` | Same process band. Omit `title` / `subtitle` / `orientation` to use defaults. Items + CTAs from TZ. |

## Optional modules (same registered types)

| Intent | Storage | Now on |
|--------|---------|--------|
| How we compare | `type: "table"`, `variant: "compare"` | crypto |
| FAQ | `type: "faq"` | crypto |
| Funding methods | `type: "logo-marquee"` | equity-indices |

If a later market landing needs compare / FAQ / funding, **reuse that type**. Do not invent a new section.

---

## Shipped stacks

```
crypto:
  header → market-hero → features usp → table → table compare → steps → faq → footer

equity-indices:
  header → market-hero → features usp → table → logo-marquee → steps → footer
```

Shared core: **header · market-hero · features usp · table · steps · footer**.

---

## Rules

1. New market slug (Gold, Oil, Forex…): copy this core, fill TZ props only.
2. Header and footer never go in `landings/*/content.ts`.
3. Shared CTA labels/hrefs live in `sharedCtas`. Do not paste `hub.fusionmarkets.com` into a landing.
4. Shared column headers live in `instrumentsColumns`. Add extra columns (e.g. Trading Hours) next to those constants — do not restyle the table.
5. If two slugs need the same new section, register it in inventory + catalog first, then reuse.
