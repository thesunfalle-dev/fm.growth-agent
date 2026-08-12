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

Related: `homepage-patterns.md`, `landing-patterns.md`, `assembly.md`.

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
| **Also seen on** | BrokerChooser “Here’s our spreads”; TV Promo tight spreads; market pages (sometimes single card / focused instrument) |
| **Rules** | Same block when intent is “spreads with quote cards”. **Not** Markets DataTable (`table`). Until coded: skip or temporary substitute **must be labeled**, never claimed as this pattern. |
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
| **Also seen on** | Nearly all marketing pages (end CTA); mid-page repeats on promos/markets |
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
| **Also seen on** | TV Promo, platform landings, market pages, crypto TZ |
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
| **Also seen on** | Award, promo, platform, market pages |
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
| **Also seen on** | Platform, market, help-adjacent landings |
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
| **Canonical Figma** | Tables `15276:11158` (Forex/Metals/Crypto rows; Crypto How we Compare; etc.) |
| **Also seen on** | Market product pages instrument lists; compare sections |
| **Rules** | **Different pattern from `spread-cards`.** Use table for row data; use spread-cards for TV quote cards + tabs. |
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
| **Canonical Figma** | Homepage hero; market Market Header (Gold/Forex/Crypto); award/promo heroes |
| **Also seen on** | All campaign pages |
| **Rules** | No nested table/chart props until separate planned types. Content varies wildly; chrome stays DS. |
| **Adaptive** | Desktop split with media when present; mobile reorders (title → visual → CTA → lead on home). |

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

## Planned (named, not fully catalogued yet)

Register fully when the next Figma pass hits them:

| type | Intent sketch | Typical Figma home |
|------|---------------|--------------------|
| `ratings-strip` | Trustpilot / TV / Google row | Homepage social proof |
| `logo-marquee` | Funding methods logos | Homepage funding |
| `instrument-grid` | Forex/Metals/Crypto tiles | Homepage markets |
| `platforms` | Platform tabs + accordion | Homepage platforms |
| `review-rail` | Review cards rail | BrokerChooser / home reviews |
| `tier-cards` | Promo plan tiers | TV Promo |
| `download-bar` | OS download strip | TradingView platform |
| `market-hero` | BG + pitch + chart card | Gold / Forex / Crypto market header |
| `comparison-table` | Classic vs Zero multi-panel | Gold accounts |
| `bento-usp` | Unequal USP grid | Gold advantages |
| `checklist-feature` | Image + checklist rows | Platform / education |
| `education-split` | Long copy + image | Market education |

When a screen uses one of these, **promote** it from this table into a full pattern entry above.

---

## Intent → pattern quick map

| If the section is about… | Pattern `type` |
|--------------------------|----------------|
| Quote cards / “our spreads” / tight spreads | `spread-cards` |
| End or mid conversion “start trading / demo” | `cta` |
| Numbered process / how it works | `steps` |
| Why Fusion / USP grid | `features` |
| Q&A accordion | `faq` |
| Symbol rows / how we compare (grid) | `table` |
| Top pitch | `hero` |
| Risk footer line | `disclaimer` |

If intent is missing → add pattern (don’t freestyle a one-off).

---

## Agent checklist after user shares screens

- [ ] Each distinct section matched or added in **this catalog**
- [ ] `block-inventory.json` updated if new type or props
- [ ] `sources.md` + `CHANGELOG.md` updated
- [ ] No duplicate types for the same structure
- [ ] Landing content only **fills props** of registered types
