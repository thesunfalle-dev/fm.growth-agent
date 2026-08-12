# Pattern catalog (reusable blocks)

**Purpose:** Living registry of **design patterns** extracted from Figma.  
When a new screen is shared, agents **do not only “look”** — they **register or update** entries here so the same block can be reused with different content.

**Authority chain:**

| Layer | File | Holds |
|-------|------|--------|
| This catalog | `pattern-catalog.md` | Intent, structure recipe, content knobs, rules, Figma canons, reuse map |
| Block contract | `block-inventory.json` | `type`, props schema, status (`planned` / `provisional` / `ready`) |
| Code | `components/blocks/*` + `lib/types.ts` | Implementation (only when status allows shipping) |
| Provenance | `sources.md` + `CHANGELOG.md` | When / from which node we learned it |

Related: `page-recipes.md` (full page stacks), `homepage-patterns.md`, `landing-patterns.md`, `assembly.md`.

**Last page batch:** 2026-08-12 Markets + Accounts (Forex, Products overview, Zero, Demo, Fusion Pro, Premium) → see `page-recipes.md`.

---

## Ingest rule (every new Figma screen)

For **each section** on the screen:

1. **Name the intent** in plain language (“our spreads”, “how it works”, “award hero”…).
2. **Match an existing pattern** in this catalog (same structure, different copy/data).  
   - If match → add the Figma node under **Also seen on** + note content differences only.  
   - If new → create a new pattern entry (status usually `planned` until coded).
3. **Write structure vs content** (what is fixed layout vs what props change).
4. **Write rules** (when to use / when not / compliance).
5. **Sync inventory:** ensure `block-inventory.json` has the `type` (or planned entry) + props list.
6. **Log:** `sources.md` + `CHANGELOG.md` one-liner.

Do **not** leave patterns only in chat. Do **not** invent a parallel layout for a known intent.

---

## Pattern entry template

Copy when adding a pattern:

```md
### `type-id` — Human name

| Field | Value |
|-------|--------|
| **Status** | planned \| provisional \| ready |
| **Inventory** | `type` in block-inventory.json |
| **Intent** | One sentence: when this block appears |
| **Structure (fixed)** | Layout + child components (Tabs, TV_Card, Step…) |
| **Content (props)** | What varies: title, items, tabs, hrefs, images… |
| **Canonical Figma** | Primary node URL + id (prefer homepage or DS frame) |
| **Also seen on** | Other pages/nodes that reuse the same structure |
| **Rules** | Do / don’t; substitutes until ready |
| **Adaptive** | Desktop vs mobile behavior |
```

---

## Registered patterns

### `spread-cards` — Our spreads (TV cards)

| Field | Value |
|-------|--------|
| **Status** | planned |
| **Inventory** | `spread-cards` |
| **Intent** | Show live-style spreads / quotes for one or more markets; prove low cost. |
| **Structure (fixed)** | Section: H2 + lead → `Tabs_Text` (market switcher) → horizontal **TV_Card** rail (desktop) / stack (mobile) → optional link to Spreads Tool. |
| **Content (props)** | `title`, `subtitle`, `tabs[]`, default tab, `cards[]` (symbol, bid/ask/spread, trade href), `footerLink` |
| **Canonical Figma** | Homepage AU [Our spreads `27873:297368`](https://www.figma.com/design/5PQJiXq7xZNGCqV1XNvKro/Website-Redesign-FM-2.0?node-id=27873-297368) |
| **Also seen on** | BrokerChooser “Here’s our spreads”; TV Promo tight spreads; Gold live spreads (often single TV card focus) |
| **Rules** | Same block when intent is “spreads with quote cards”. **Not** Markets DataTable (`table`) on Forex “Our … Instruments”. Until coded: skip or temporary substitute **must be labeled**, never claimed as this pattern. |
| **Adaptive** | Desktop: card row (overflow ok). Mobile: stack TV cards; tabs may scroll. |

---

### `cta` — Ready to start trading? (CTA band)

| Field | Value |
|-------|--------|
| **Status** | provisional (mid-page `CtaBand`; footer band in `SiteFooter`) |
| **Inventory** | `cta` (+ footer chrome) |
| **Intent** | Primary conversion band: live account + optional demo. |
| **Structure (fixed)** | Light band; title + dual CTA (Primary + “or” + Secondary on desktop CTAFooter). End-of-page band lives on Footer instance. |
| **Content (props)** | `title` (default “Ready to start trading?”), `subtitle?`, `primaryCta`, `secondaryCta?` |
| **Canonical Figma** | Homepage Footer / CTAFooter [`27873:297571`](https://www.figma.com/design/5PQJiXq7xZNGCqV1XNvKro/Website-Redesign-FM-2.0?node-id=27873-297571) |
| **Also seen on** | Forex / market pages Footer; Zero / Demo / Pro / Premium / Products overview Footer instances |
| **Rules** | Prefer one pattern for conversion bands. Match CTAFooter row layout when Figma shows title \| actions. Don’t invent a third CTA chrome per campaign. |
| **Adaptive** | Desktop: title left, actions right. Mobile: stack full-width CTAs. |

---

### `steps` — How it works

| Field | Value |
|-------|--------|
| **Status** | ready (atoms); homepage split composition = enhance props/layout as needed |
| **Inventory** | `steps` |
| **Intent** | Explain signup / product process in 2–6 steps. |
| **Structure (fixed)** | H2 + lead + **Step** instances (number + title + body). Homepage desktop: **split** (copy left, steps + dual CTA right) + optional side visual. Horizontal steps on some market pages (Gold). |
| **Content (props)** | `title`, `subtitle`, `items[]`, `orientation`, `mode`, optional CTAs / image later |
| **Canonical Figma** | Homepage [How it Works - 5 `31517:366918`](https://www.figma.com/design/5PQJiXq7xZNGCqV1XNvKro/Website-Redesign-FM-2.0?node-id=31517-366918); Sections frame Step by Steps `15313:11090` |
| **Also seen on** | Zero “How to create a Zero Account”; Demo “How to create a Demo Account”; TV Promo; platform landings |
| **Rules** | One `steps` type; change **content** and `orientation`, not a new “how-it-works-v2” block. |
| **Adaptive** | Horizontal desktop may collapse to vertical on mobile. |

---

### `features` — USP / Why Fusion cards

| Field | Value |
|-------|--------|
| **Status** | ready |
| **Inventory** | `features` (`variant: "usp"` \| `"feature"`) |
| **Intent** | Fusion unique selling points or simple benefit grid. |
| **Structure (fixed)** | Section title + USP card grid/rail (illustration + title + body + optional learn more). |
| **Content (props)** | `title`, `variant`, `items[]` (title, description, illustration, learnMore) |
| **Canonical Figma** | Cards frame USP `15166:10610`; homepage “Why we’re different” |
| **Also seen on** | Forex “Why Trade Forex”; Zero “Why choose Zero”; Demo benefits; Premium “What sets Premium apart”; Pro benefits (also bento layout) |
| **Rules** | `usp` only for Fusion USPs (Figma rule). >4 items → horizontal scroll desktop; carousel mobile. |
| **Adaptive** | Rail / carousel per homepage patterns. |

---

### `faq` — FAQ accordion

| Field | Value |
|-------|--------|
| **Status** | ready |
| **Inventory** | `faq` |
| **Intent** | Answer objections; product/risk Q&A. |
| **Structure (fixed)** | Section title + accordion rows (expand_more/less). |
| **Content (props)** | `title`, `items[]` (question, answer), `openFirst` |
| **Canonical Figma** | Sections FAQ `15313:11090`; e.g. Forex page FAQ band |
| **Also seen on** | Forex markets; Zero; Demo; Premium Program |
| **Rules** | Compliance wording for product answers. No custom accordion JS — `details`. |
| **Adaptive** | Same structure; type scale differs desktop/mobile per sections.md. |

---

### `table` — Markets / compare data table

| Field | Value |
|-------|--------|
| **Status** | provisional |
| **Inventory** | `table` |
| **Intent** | Tabular markets rows or flat comparison grids. |
| **Structure (fixed)** | Header + rows (DataTable), optional title/subtitle, scroll rules from Tables frame. |
| **Content (props)** | `title`, `subtitle`, `columns`, `rows` |
| **Canonical Figma** | Tables `15276:11158`; page use: Forex “Our Forex Trading Instruments” `23570:104166` |
| **Also seen on** | All Markets AU/EN product pages (Metals, Indices, Energy, Crypto, US Share) with matching table type |
| **Rules** | **Different pattern from `spread-cards`.** Markets instruments = `table` + optional Tabs_Text. Quote cards = `spread-cards`. Account Classic vs Zero = `comparison-table`, not this. |
| **Adaptive** | Sticky header / max height scroll; mobile layouts planned for specialized tables. |

---

### `hero` — Page / offer / market hero

| Field | Value |
|-------|--------|
| **Status** | provisional |
| **Inventory** | `hero` |
| **Intent** | Above-the-fold pitch + CTA(s). |
| **Structure (fixed)** | Eyebrow? + H1 + lead/bullets + primary/secondary CTA; optional brand BG. Market hero may add chart later (`market-hero` planned). |
| **Content (props)** | `eyebrow`, `title`, `subtitle`, `bullets`, CTAs, `brandBackground` |
| **Canonical Figma** | Homepage hero; account heroes Zero/Demo/Pro; Products overview centered hero |
| **Also seen on** | Account pages, Premium, Products overview, promos |
| **Rules** | For **market** pages with BG + chart + Primary/Light use `market-hero` (not plain `hero`). No nested table. |
| **Adaptive** | Desktop split with media when present; mobile reorders (title → visual → CTA → lead on home). |

---

### `market-hero` — Market product header

| Field | Value |
|-------|--------|
| **Status** | planned |
| **Inventory** | `market-hero` |
| **Intent** | Above-the-fold for a single market (Forex, Crypto, Gold…). |
| **Structure (fixed)** | Full-bleed brand **BG Image** + gradient; H1 + short pitch; **Primary/Light**; right **TV-Desktop** / TV-Mobile chart card. |
| **Content (props)** | `title`, `subtitle`, `primaryCta`, optional secondary; chart symbol/config later |
| **Canonical Figma** | Forex Market Header `23570:104257`; Gold EN `29987:341692`; Crypto CFDs page same family |
| **Also seen on** | Metals / Indices / Energy / US Share market pages |
| **Rules** | Same structure for every market; swap content + chart only. Do not embed instruments table in hero. |
| **Adaptive** | Desktop: text left / chart right. Mobile: title → lead → CTA → chart. |

---

### `education-split` — What is [topic]? / long explainer

| Field | Value |
|-------|--------|
| **Status** | planned |
| **Inventory** | `education-split` |
| **Intent** | Educational or narrative band: explain product/market/program. |
| **Structure (fixed)** | Two-column (desktop): media or **Key Icon + title** \| multi-paragraph body; optional CTA. Variants: icon-title split (Forex “What is Forex?”) or image + long copy (Gold education). |
| **Content (props)** | `title`, `paragraphs[]`, `icon`/`image`, optional CTA |
| **Canonical Figma** | Forex Layout / 3 “What is Forex Trading?” `23570:104154` |
| **Also seen on** | Premium intro copy split; Pro considerations; Gold education heroes |
| **Rules** | Structure shared; length of paragraphs is content. Not a USP grid. |

---

### `comparison-table` — Classic vs Zero / Retail vs Pro

| Field | Value |
|-------|--------|
| **Status** | planned |
| **Inventory** | `comparison-table` |
| **Intent** | Side-by-side account or client-class comparison. |
| **Structure (fixed)** | Multi-panel **Comparison Table** (description column + product panels); mobile tabs + one panel. |
| **Content (props)** | `title`, `subtitle`, `columns`/`panels`, row labels + cells, footnote link |
| **Canonical Figma** | Zero “Classic vs Zero” `27045:302056`; Pro “Retail vs Pro”; Gold Classic vs Zero; Tables frame Comparison |
| **Also seen on** | Account and Pro eligibility pages |
| **Rules** | **Not** the same as markets `table` (instruments). Do not flatten into free-form cards if Figma uses Comparison Table. |

---

### `instrument-grid` — Product / market tiles

| Field | Value |
|-------|--------|
| **Status** | planned |
| **Inventory** | `instrument-grid` |
| **Intent** | Navigate markets or show tier badges as equal tiles. |
| **Structure (fixed)** | Row of **product tiles** (icon/image + label, ~200×240). Homepage “lowest cost” markets; Products overview same; Premium tiers reuse tile shell. |
| **Content (props)** | `title`, `subtitle`, `items[]` (label, icon/image, href) |
| **Canonical Figma** | Products overview Products row `26258:276008`; homepage markets; Premium Bronze–Diamond tiles |
| **Also seen on** | BrokerChooser instrument row |
| **Rules** | Same tile shell; content = market name or tier name. Mobile often 2-col. |

---

### `platforms` — Range of trading platforms

| Field | Value |
|-------|--------|
| **Status** | planned |
| **Inventory** | `platforms` |
| **Intent** | Switch platforms (MT4/MT5/TV/cTrader) with copy + visuals + downloads. |
| **Structure (fixed)** | Title + lead + **Tabs_Icon** + platform body + optional mock + **download-bar** OS links. |
| **Content (props)** | Tabs labels, per-tab title/body/media, download targets |
| **Canonical Figma** | Products overview MT5 section `26258:276027`; homepage platforms; platform landings |
| **Rules** | One platforms pattern; tab content is props. Pair with `download-bar` when OS strip present. |

---

### `download-bar` — OS / app download strip

| Field | Value |
|-------|--------|
| **Status** | planned |
| **Inventory** | `download-bar` |
| **Intent** | List Windows/Mac/Linux/iOS/Android/Web downloads. |
| **Structure (fixed)** | Icon + label row (often full-bleed or under platforms). |
| **Content (props)** | `items[]` (os, label, href) |
| **Canonical Figma** | Products overview platform downloads; TradingView platform landing |
| **Rules** | Reuse strip; don’t invent per-page download grids. |

---

### `tier-cards` — Content / plan pair or promo tiers

| Field | Value |
|-------|--------|
| **Status** | planned |
| **Inventory** | `tier-cards` |
| **Intent** | 2–3 content cards (icon + heading + body) for plans or account teasers. |
| **Structure (fixed)** | Equal **Content Card** row (e.g. Content Card 2 ×2 on Products overview). Promo TV tiers similar. |
| **Content (props)** | `title`, `items[]` (icon, title, body, link?) |
| **Canonical Figma** | Products overview pair cards `26258:276024`; TV Promo tier cards |
| **Rules** | Not USP isometric cards (`features` usp). Not instrument tiles. |

---

### `bento-usp` — Unequal USP grid

| Field | Value |
|-------|--------|
| **Status** | planned |
| **Inventory** | `bento-usp` |
| **Intent** | Highlight benefits with unequal card sizes (large feature + smaller). |
| **Structure (fixed)** | Bento layout of USP Cards (Gold advantages; Fusion Pro benefits). |
| **Content (props)** | Card titles/bodies/illustrations + grid placement |
| **Canonical Figma** | Gold bento; Fusion Pro Benefits `26258:285528` |
| **Rules** | Prefer equal `features` usp when Figma shows equal 4-up; use bento only when layout is unequal. |

---

### `checklist-feature` — Image + checklist + CTA

| Field | Value |
|-------|--------|
| **Status** | planned |
| **Inventory** | `checklist-feature` |
| **Intent** | Feature proof list with icons + supporting visual + CTA. |
| **Structure (fixed)** | Split: headline + body + **icon rows** + CTA \| image (or reverse). |
| **Content (props)** | `title`, `body`, `items[]` (icon, text), `image`, CTAs |
| **Canonical Figma** | Premium “Analyst Views” `26258:280418`; TradingView platform checklist band |
| **Rules** | Same as platform checklist; not FAQ; not steps. |

---

### `disclaimer` — Legal / risk band

| Field | Value |
|-------|--------|
| **Status** | provisional |
| **Inventory** | `disclaimer` |
| **Intent** | Risk and preview/legal context under marketing content. |
| **Structure (fixed)** | Muted text band. |
| **Content (props)** | `text` |
| **Canonical Figma** | Footer legal mass + compliance needs |
| **Rules** | Prefer `brand/compliance.md`; required on external-facing campaign previews. |

---

## Planned (named, not fully detailed yet)

| type | Intent sketch | Typical Figma |
|------|---------------|---------------|
| `ratings-strip` | Trustpilot / TV / Google row | Homepage social proof |
| `logo-marquee` | Funding methods logos | Homepage funding |
| `review-rail` | Review cards rail | BrokerChooser / home reviews |
| `media-carousel` | Video / awards carousel | Homepage mobile |
| `stats` | Key metrics strip | — |
| `savings-calculator` | Volume/country savings widget | Premium “Calculate Your Savings” (register when reused) |

---

## Intent → pattern quick map

| If the section is about… | Pattern `type` |
|--------------------------|----------------|
| Market page top (BG + chart + light CTA) | `market-hero` |
| Account / offer / program top pitch | `hero` |
| Quote cards / “our spreads” | `spread-cards` |
| Instruments list with tabs | `table` |
| Classic vs Zero / Retail vs Pro | `comparison-table` |
| What is X? / long explainer | `education-split` |
| Why Fusion / equal USP row | `features` |
| Unequal USP bento | `bento-usp` |
| Market or tier tiles | `instrument-grid` |
| Platform switcher + copy | `platforms` |
| OS downloads | `download-bar` |
| Plan/content cards (2–3) | `tier-cards` |
| Image + check rows + CTA | `checklist-feature` |
| Numbered how-to | `steps` |
| Q&A accordion | `faq` |
| Ready to start trading | `cta` |
| Risk line | `disclaimer` |

If intent is missing → add pattern (don’t freestyle a one-off).

---

## Agent checklist after user shares screens

- [ ] Each distinct section matched or added in **this catalog**
- [ ] `block-inventory.json` updated if new type or props
- [ ] `sources.md` + `CHANGELOG.md` updated
- [ ] No duplicate types for the same structure
- [ ] Landing content only **fills props** of registered types
