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

**Last page batches:** … + Conditions/tools + **Compare tool, About, Proof, Careers, Blog** → `page-recipes.md`.

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
| **Also seen on** | Forex / markets; accounts; MT5 platform pages; MAM; DupliTrade Footer instances |
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
| **Content (props)** | `subtitle`, `items[]` (sentence-case titles), optional CTAs. `title` / `orientation` default from `lib/block-defaults.ts`. |
| **Canonical Figma** | Final Pages process [How It Works `29987:339011`](https://www.figma.com/design/5PQJiXq7xZNGCqV1XNvKro/Website-Redesign-FM-2.0?node-id=29987-339011); homepage split [How it Works - 5 `31517:366918`](https://www.figma.com/design/5PQJiXq7xZNGCqV1XNvKro/Website-Redesign-FM-2.0?node-id=31517-366918) |
| **Also seen on** | Crypto / Equity Indices market landings; Zero / Demo how-to; MT5 Overview; DupliTrade; Fusion+ |
| **Rules** | One `steps` type. **H2 “How It Works” is block chrome** — omit `title` in landings unless TZ names the section differently. Step titles: sentence case. Do not fork a second layout or recase the H2 per slug. |
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
| **Also seen on** | Forex / Zero / Demo / Premium; MT5 Overview “Why Trade MT5 with Fusion” (equal rail) |
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
| **Also seen on** | Forex markets; Zero; Demo; Premium; MT5 Overview + Desktop/Mobile/Web FAQ bands |
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
| **Canonical Figma** | Tables `15276:11158`; Commission Zero; **Margins & Leverage** `25317:260703`; **Contract Spec** `25136:201435` |
| **Also seen on** | Market product pages; all Trading Conditions tab panels |
| **Rules** | **Different from `spread-cards` / `spreads-tool`.** Expandable margin rows = table row variants (dropdown), not a new type. Stack multiple tables on one panel when Figma does (retail + pro). Wrap in accordion → `accordion-table`. |
| **Adaptive** | Sticky header / max height scroll; mobile layouts planned for specialized tables. |

---

### `hero` — Page / offer / market hero

| Field | Value |
|-------|--------|
| **Status** | provisional |
| **Inventory** | `hero` |
| **Intent** | Above-the-fold pitch + CTA(s). |
| **Structure (fixed)** | Eyebrow? + H1 + lead/bullets + primary/secondary CTA; optional brand BG. Market pages use the ready `market-hero` variant. |
| **Content (props)** | `eyebrow`, `title`, `subtitle`, `bullets`, CTAs, `brandBackground` |
| **Canonical Figma** | Homepage hero; account heroes; platform device heroes |
| **Also seen on** | Accounts; Premium; Products; MT5 pages; MAM; DupliTrade; **Fusion+**; **Deposit/Withdrawal**; **Trading Conditions** hub |
| **Rules** | Market pages with BG + chart → `market-hero`. Platform device heroes may include **Store download button** row (content: OS targets) or Icon+Text+Arrow web CTA — same `hero` type, optional props. No nested table. |
| **Adaptive** | Desktop split with media when present; mobile reorders (title → visual → CTA → lead on home). |

---

### `market-hero` — Market product header

| Field | Value |
|-------|--------|
| **Status** | ready |
| **Inventory** | `market-hero` |
| **Intent** | Above-the-fold for a single market (Forex, Crypto, Gold…). |
| **Structure (fixed)** | Full-bleed brand **BG Image** + gradient; H1 + short pitch; **Primary/Light**; right **599×480** indicative card (TV-card slot; live chart still planned) and optional rating summary. |
| **Content (props)** | `eyebrow`, `title`, `subtitle`, optional bullets, CTAs; optional `quote` and `trustpilot` summary. A live chart remains a separate future integration. |
| **Canonical Figma** | Forex Market Header `23570:104257`; Gold EN `29987:341692`; Crypto CFDs page same family |
| **Also seen on** | Metals / Indices / Energy / US Share market pages |
| **Rules** | Same structure for every market; swap content + chart only. Do not embed instruments table in hero. |
| **Adaptive** | Desktop: text left / chart right. Mobile: title → lead → CTA → chart. |

---

### `logo-marquee` — Funding methods

| Field | Value |
|-------|--------|
| **Status** | ready |
| **Inventory** | `logo-marquee` |
| **Intent** | A concise funding-method proof section for campaign and funding pages. |
| **Structure (fixed)** | Centered H2 + optional lead + wrap-safe provider row. |
| **Content (props)** | `title`, `subtitle`, `providers[]` |
| **Canonical Figma** | Deposit Options funding logos `24400:153845` |
| **Rules** | Providers are content and jurisdiction-specific. Use approved provider artwork when available; never use Figma sample marketing copy. |
| **Adaptive** | Providers wrap with shared gaps; they never overflow the viewport. |

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
| **Also seen on** | Account / Pro pages; **MT5 Overview** also includes Classic vs Zero band |
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
| **Canonical Figma** | MT5 Overview “Choose Your Platform” `28610:429747` (Tabs_Icon + device + stores); Products overview `26258:276027`; homepage platforms |
| **Also seen on** | Platform overviews (MT4/MT5/TV/cTrader hubs) |
| **Rules** | One platforms pattern; tab content is props. Pair with `download-bar` when OS strip present. Device **subpages** (Desktop/Mobile/Web) use recipe P2 — not a second platforms type. |

---

### `download-bar` — OS / app download strip

| Field | Value |
|-------|--------|
| **Status** | planned |
| **Inventory** | `download-bar` |
| **Intent** | List Windows/Mac/Linux/iOS/Android/Web downloads. |
| **Structure (fixed)** | Icon + label row (full-bleed bar) **or** Store download button group (badge-style). Same intent: get the app. |
| **Content (props)** | `items[]` (os, label, href, variant: `text-link` \| `store-badge`) |
| **Canonical Figma** | MT5 Overview Download section `28610:429714`; Products overview; store buttons in MT5 Desktop/Mobile heroes |
| **Also seen on** | TradingView platform landing; all platform device heroes |
| **Rules** | Reuse strip/badges; don’t invent per-page download grids. WebTrader may use text+arrow CTA instead of store badge. |

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
| **Canonical Figma** | Gold bento; Fusion Pro Benefits; MT5 “About MT5 Desktop/Mobile” Layout/396 bento; MT5 Overview platform features |
| **Also seen on** | DupliTrade Why grid (visual + cards); platform device “About” sections |
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
| **Canonical Figma** | Premium “Analyst Views” `26258:280418`; MT5 Overview/Desktop/Mobile “Analyst Views” / Pine-script feature bands; TradingView platform checklist |
| **Also seen on** | All MT5 device pages feature deep-dives |
| **Rules** | Same checklist pattern; not FAQ; not steps. May end with store buttons (content). |

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

### `icon-feature-grid` — Material icon + heading feature mosaic

| Field | Value |
|-------|--------|
| **Status** | planned |
| **Inventory** | `icon-feature-grid` |
| **Intent** | Key features with **Material icons** (not isometric USP art), often flanking a central product visual. |
| **Structure (fixed)** | Grid/columns of icon + short heading (and optional body); center media optional. |
| **Content (props)** | `title`, `subtitle`, `items[]` (icon name, title, body?), optional `image` |
| **Canonical Figma** | MAM “Key Features of the MetaFX/Fusion Markets MAM” `31099:361361` |
| **Also seen on** | Other ATS / tools pages when same icon-card language appears |
| **Rules** | **Not** `features` usp (isometric Cards frame). Icons = Material only. |

---

### `notice-band` — Short legal / advisory strip

| Field | Value |
|-------|--------|
| **Status** | planned |
| **Inventory** | `notice-band` |
| **Intent** | Brief compliance or advisory note mid-page (often under hero). |
| **Structure (fixed)** | Full-width muted text band (~1–3 lines), not the long footer legal mass. |
| **Content (props)** | `text` |
| **Canonical Figma** | DupliTrade notice under hero `31099:361441` |
| **Also seen on** | Withdrawal hero notes; Fusion+ fee footnotes (may be inline in hero) |
| **Rules** | Distinct from `disclaimer` (long risk) and footer legal. Use for product-specific short notices. |

---

### `funding-card-grid` — Deposit / withdrawal method cards

| Field | Value |
|-------|--------|
| **Status** | planned |
| **Inventory** | `funding-card-grid` |
| **Intent** | Browse funding methods with fees, times, limits. |
| **Structure (fixed)** | Section title + lead + multi-row grid of **Desktop Funding** cards (logo, method name, metadata rows, optional expand). |
| **Content (props)** | `title`, `subtitle`, `items[]` (logo, name, fields…), deposit vs withdrawal mode |
| **Canonical Figma** | Deposit “Explore our Deposit options” `24400:154073`; Withdrawal options grid |
| **Rules** | Not USP cards. Not instrument tiles. Same card component for deposit and withdrawal; content differs. |

---

### `accordion-table` — Expandable category + nested markets table

| Field | Value |
|-------|--------|
| **Status** | planned |
| **Inventory** | `accordion-table` |
| **Intent** | Group large instrument tables by market under expanders. |
| **Structure (fixed)** | Accordion chrome (FAQ-Desktop expand) + embedded **DataTable** (Forex-Desktop rows) when open; sibling categories collapsed. |
| **Content (props)** | `title`, `subtitle`, `tabs?`, `sections[]` (label, columns, rows) |
| **Canonical Figma** | Trading Conditions All Products `25136:208578`; **Session Time** `25136:208357` |
| **Also seen on** | Other conditions tabs that nest tables under expanders |
| **Rules** | Reuse table row atoms. Not free-form FAQ. Hub tabs switch domain (products / commissions / margins / session / contract…). |

---

### `savings-calculator` — Compare fees / savings widget

| Field | Value |
|-------|--------|
| **Status** | planned |
| **Inventory** | `savings-calculator` |
| **Intent** | Interactive or static volume/country savings vs competitors. |
| **Structure (fixed)** | Title + inputs (volume, country) + results (you’d save / commissions / spreads compare). |
| **Content (props)** | Labels, default volume, competitor names, result copy |
| **Canonical Figma** | **Broker Comparison Tool** `29369:318747`; Premium calculator; Fusion+ Copier fees |
| **Also seen on** | Any “See Your Savings” / competitor compare UI |
| **Rules** | One compare/savings tool pattern; page shell is hero + tool + optional chart. Hide when campaign doesn’t need it. |

---

### `leaderboard` — Ranked traders / signal masters

| Field | Value |
|-------|--------|
| **Status** | planned |
| **Inventory** | `leaderboard` |
| **Intent** | Show Fusion+ signal masters or ranked performance. |
| **Structure (fixed)** | Section title + cards/table of traders (return, risk, equity, copiers…). |
| **Content (props)** | `title`, `items[]` metrics |
| **Canonical Figma** | Fusion+ “Fusion+ Leaderboard” / Signal Master Metrics |
| **Rules** | Product-specific; don’t reuse as generic USP. |

---

### `calculator-tool` — Trading calculators workspace

| Field | Value |
|-------|--------|
| **Status** | planned |
| **Inventory** | `calculator-tool` |
| **Intent** | Margin / pip / profit / converter calculators. |
| **Structure (fixed)** | Tabs_Text (calc type) + title + lead + form grid (Selectors, Field) + Primary CTA + results card (key/value rows). |
| **Content (props)** | `tabs`, active tab fields schema, labels, result fields |
| **Canonical Figma** | Trading Calculators - Margin `27868:291901` |
| **Rules** | One tool pattern for all calculator types; atoms from Inputs frame. Not a marketing USP section. |

---

### `spreads-tool` — Live & historical spreads product UI

| Field | Value |
|-------|--------|
| **Status** | planned |
| **Inventory** | `spreads-tool` |
| **Intent** | Full Spreads Tool: live quote + history chart + filters. |
| **Structure (fixed)** | Live pair header (symbol, bid, ask, spread) + selectors (instrument, period) + metric chips (avg/min/max) + chart + optional list. |
| **Content (props)** | Default symbol, periods, copy |
| **Canonical Figma** | Live & Historical Spreads `25136:207926` |
| **Rules** | **Not** homepage `spread-cards` (marketing rail). **Not** conditions markets `table`. Linked from conditions hero / homepage CTA. |

---

### `tool-cards` — Tools directory grid

| Field | Value |
|-------|--------|
| **Status** | planned |
| **Inventory** | `tool-cards` |
| **Intent** | Link cards to calculators, spreads, calendar, hub tools. |
| **Structure (fixed)** | Title + grid of tool cards (icon/image + name + short desc + link). May share shell with content/instrument cards. |
| **Content (props)** | `items[]` (title, description, href, icon) |
| **Canonical Figma** | Client Hub Tools overview `25136:205792` (directory portion) |
| **Rules** | Overview routing surface; deep tools use T2/T3. |

---

### `review-rail` — Trustpilot / review cards

| Field | Value |
|-------|--------|
| **Status** | planned |
| **Inventory** | `review-rail` |
| **Intent** | Social proof quotes from traders. |
| **Structure (fixed)** | Trustpilot (or similar) summary + horizontal **review cards** (avatar, name, date, stars, quote) + arrows. |
| **Content (props)** | Summary metrics, `items[]` reviews |
| **Canonical Figma** | What others say `29665:153626`; BrokerChooser; homepage reviews |
| **Rules** | Same rail on award landings and about/proof pages. |

---

### `awards-strip` — Award crests / badges row

| Field | Value |
|-------|--------|
| **Status** | planned |
| **Inventory** | `awards-strip` |
| **Intent** | Show industry awards as a logo/crest row or spotlight carousel. |
| **Structure (fixed)** | Horizontal award marks; optional larger award card with year tabs + link. |
| **Content (props)** | Award names, years, images, links |
| **Canonical Figma** | What others say awards row + spotlight `29665:153626` |
| **Rules** | Behavior like marquee/rail; content is awards not funding methods. |

---

### `media-carousel` — Image / video carousel

| Field | Value |
|-------|--------|
| **Status** | planned |
| **Inventory** | `media-carousel` |
| **Intent** | Multi-image story (careers office photos, awards, homepage media). |
| **Structure (fixed)** | Full-bleed or section carousel + Navigate dots/arrows. |
| **Content (props)** | `slides[]` (image, caption) |
| **Canonical Figma** | Careers hero carousel `29637:142845`; homepage mobile media |
| **Rules** | Presentation only; not a content card grid. |

---

### `blog-card` / `blog-featured` — Editorial cards

| Field | Value |
|-------|--------|
| **Status** | planned |
| **Inventory** | `blog-card` (+ featured variant) |
| **Intent** | Blog listing and featured article. |
| **Structure (fixed)** | Image + category label + title + excerpt + tags + read time; featured = larger split layout + dots. |
| **Content (props)** | Post fields, labels from Blog labels component |
| **Canonical Figma** | Fusion Blog Homepage `29653:147180` |
| **Rules** | Cards frame “blog cards” family — not USP. |

---

### `newsletter-cta` — Email subscribe band

| Field | Value |
|-------|--------|
| **Status** | planned |
| **Inventory** | `newsletter-cta` |
| **Intent** | Capture email for blog/newsletter. |
| **Structure (fixed)** | Title + lead + Field + Primary + terms microcopy + optional illustration. |
| **Content (props)** | Copy, form action, legal line |
| **Canonical Figma** | Blog homepage CTA / 28 `29653:147342` |
| **Rules** | Form CTA; distinct from dual-button Ready-to-trade `cta`. |

---

### `jobs-list` — Open roles

| Field | Value |
|-------|--------|
| **Status** | planned |
| **Inventory** | `jobs-list` |
| **Intent** | List career openings + apply path. |
| **Structure (fixed)** | Section title + role rows/cards + apply CTA or email. |
| **Content (props)** | Roles, locations, links |
| **Canonical Figma** | Careers “open roles” `29637:142831` |
| **Rules** | Careers-only content module. |

---

### `stats` — Key metrics strip

| Field | Value |
|-------|--------|
| **Status** | planned |
| **Inventory** | `stats` |
| **Intent** | Big numbers (years, offices, clients…). |
| **Structure (fixed)** | Row of metric value + label. |
| **Content (props)** | `items[]` (value, label) |
| **Canonical Figma** | Careers stats strip; may appear on About |
| **Rules** | Not a calculator result card. |

---

## Planned (named, not fully detailed yet)

| type | Intent sketch | Typical Figma |
|------|---------------|---------------|
| `ratings-strip` | Trustpilot / TV / Google compact row | Homepage social proof (lighter than full review-rail) |
| `platform-crossnav` | “Explore our other Platforms” | MT5 device pages |
| `expert-ratings` | Third-party review site scores | What others say “Reviews from the Experts” |

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
| Material icon feature mosaic | `icon-feature-grid` |
| Short legal under hero | `notice-band` |
| Deposit/withdrawal method cards | `funding-card-grid` |
| Conditions accordion + instruments table | `accordion-table` |
| Fees savings widget | `savings-calculator` |
| Copy-trading leaderboard | `leaderboard` |
| Numbered how-to (+ optional tabs) | `steps` |
| Q&A accordion | `faq` |
| Ready to start trading | `cta` |
| Risk line | `disclaimer` |
| Platform overview vs device | recipes **P1** / **P2** |
| Fusion+ Copier/Master | recipe **T1** |
| Deposit/Withdrawal | recipe **F1** |
| Trading Conditions hub (all tabs) | recipe **C1** |
| Trading calculators | recipe **T2** / `calculator-tool` |
| Live & historical spreads | recipe **T3** / `spreads-tool` |
| Client Hub tools overview | recipe **T4** / `tool-cards` |
| Broker comparison / savings | recipe **T5** / `savings-calculator` |
| Who We Are | recipe **A6** |
| Why Fusion | recipe **A7** |
| What others say | recipe **A8** / `review-rail` + `awards-strip` |
| Careers | recipe **A9** |
| Blog homepage | recipe **A10** / `blog-card` + `newsletter-cta` |

If intent is missing → add pattern (don’t freestyle a one-off).

---

## Agent checklist after user shares screens

- [ ] Each distinct section matched or added in **this catalog**
- [ ] `block-inventory.json` updated if new type or props
- [ ] `sources.md` + `CHANGELOG.md` updated
- [ ] No duplicate types for the same structure
- [ ] Landing content only **fills props** of registered types
