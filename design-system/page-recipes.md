# Page recipes (full-screen stacks)

**Purpose:** When a full Figma page is shared, record the **ordered section stack** and which **patterns** each section uses. Content (copy, symbols, CTAs) changes; the recipe stays.

**Related:** `pattern-catalog.md` (block structure), `landing-patterns.md` (campaign families), `assembly.md`, `responsive-rules.md` (375 contract).

---

## Batch 2026-08-13 — Mobile counterparts (375)

Same recipes as the desktop Markets + Accounts family. **Do not add new `type`s.** Recorded so agents implement layout modes instead of inventing mobile-only blocks.

| # | Page (Figma name) | Node | Desktop twin | Recipe |
|---|-------------------|------|--------------|--------|
| 1 | **Mobile - AU** (homepage) | `27873:296438` | `27873:297355` | see `homepage-patterns.md` |
| 2 | **Forex - Mobile** | `23570:104433` | `23570:104143` | **M1** |
| 3 | **Partners Overview - Mobile** *(content = Products & Accounts)* | `26258:282017` | `26258:275741` | **A1** |
| 4 | **Zero Account - Mobile** | `26258:282352` | `26258:273793` | **A2** |
| 5 | **Demo Account** | `26258:284389` | `26258:279143` | **A3** |
| 6 | **Fusion Pro** | `26258:285898` | `26258:285369` | **A4** |

Premium Program mobile is **not** in this batch.

### Batch 2026-08-13b — Platforms + campaign landings (375)

| # | Page | Node | Desktop twin | Recipe |
|---|------|------|--------------|--------|
| 1 | **MetaTrader 5 - Overview** | `28610:431315` | `28610:429700` | **P1** |
| 2 | **MetaTrader 5 - Desktop** | `28610:433653` | `28758:144345` | **P2** |
| 3 | **MetaTrader 5 - Web** | `28610:436099` | `28610:427712` | **P2** |
| 4 | **BrokerChooser** | `29987:342224` | `29987:337918` | award landing |
| 5 | **TradingView Promo / AU** | `29987:342421` | `29987:338113` | promo landing |
| 6 | **TradingView** | `29987:342673` | `29987:340524` | platform landing |

MT5 **device-Mobile** subpage (`28758:145875`) is **not** in this drop — treat it as P2 with store-button count = 2 (iOS/Android).

### Batch 2026-08-13c — Funding / Conditions / About

| # | Page (Figma name) | Node | What it actually is |
|---|-------------------|------|---------------------|
| 1 | Deposit Options - Desktop | `24400:153833` | **F1** canonical (already registered) |
| 2 | Withdrawal Options - All Collapsed | `24400:157450` | **F1** (already registered) |
| 3 | Deposit Options - Desktop | `24400:153171` | **F1 + Search** variant |
| 4 | Trading Conditions / All Products | `25136:208578` | **C1** desktop (already registered) |
| 5 | “Withdrawal Options - Mobile” | `25136:199688` | **C1 mobile** (name is wrong) |
| 6 | Who We Are - Mobile | `29665:154696` | **A6** |
| 7 | Why Fusion - AU Mobile | `29665:155074` | **A7** |

Deposit / Withdrawal **375 frames are still missing**.

**Cross-cutting 375 rules** live in `responsive-rules.md`. Per-recipe mobile stacks are under each recipe below.

---

## Batch 2026-08-12 — Markets + Accounts family

Sources (Final Pages / Otterdev):

| # | Page | Node | URL |
|---|------|------|-----|
| 1 | **Forex - Desktop** (market product) | `23570:104143` | [link](https://www.figma.com/design/5PQJiXq7xZNGCqV1XNvKro/Website-Redesign-FM-2.0?node-id=23570-104143) |
| 2 | **Products and Accounts - Overview** | `26258:275741` | [link](https://www.figma.com/design/5PQJiXq7xZNGCqV1XNvKro/Website-Redesign-FM-2.0?node-id=26258-275741) |
| 3 | **Zero Account** | `26258:273793` | [link](https://www.figma.com/design/5PQJiXq7xZNGCqV1XNvKro/Website-Redesign-FM-2.0?node-id=26258-273793) |
| 4 | **Demo account** | `26258:279143` | [link](https://www.figma.com/design/5PQJiXq7xZNGCqV1XNvKro/Website-Redesign-FM-2.0?node-id=26258-279143) |
| 5 | **Fusion Pro** | `26258:285369` | [link](https://www.figma.com/design/5PQJiXq7xZNGCqV1XNvKro/Website-Redesign-FM-2.0?node-id=26258-285369) |
| 6 | **Premium Program** | `26258:280335` | [link](https://www.figma.com/design/5PQJiXq7xZNGCqV1XNvKro/Website-Redesign-FM-2.0?node-id=26258-280335) |

Same market stack as Forex applies to Metals / Indices / Energy / Crypto CFDs / US Share (swap H1, table type, USP set).

---

### Recipe M1 — Market product (Forex template)

**Figma:** Forex - Desktop `23570:104143`  
**Reuse for:** Crypto CFDs, Metals, Indices, Energy, US Share (same skeleton).  
**Shipped (locked 2026-08-17):** `landings/crypto`, `landings/equity-indices` — see `shared-blocks.md`.

| # | Section (intent) | Pattern `type` | Structure notes |
|---|------------------|----------------|-----------------|
| 0 | Chrome | `SiteHeader` / `SiteFooter` | Always from `layout.tsx`. Never in `content.ts`. |
| 1 | Market header | `market-hero` | `atmosphere`: `brand` (purple + TV card), `crypto` (light + coins + quotes), `indices` (light + globe + chips + ticker, **no quotes**). |
| 2 | Why trade [market] | `features` usp | USP rail / carousel |
| 3 | Our … instruments | `table` | Shared `instrumentsColumns` + TZ rows. Optional extra col (hours). |
| 4 | How we compare | `table` compare | Optional. Crypto only today. |
| 5 | Funding methods | `logo-marquee` | Optional. Equity only today. |
| 6 | How It Works | `steps` | Default H2 + subtitle from `block-defaults`. |
| 7 | Here’s Our Spreads | `spread-cards` | Optional. Indices only today (when quotes are **not** in the hero). Tabs + 5 TV cards. |
| 8 | Reviews from Real Traders | `reviews` | Trustpilot + card rail. Defaults from `block-defaults`. |
| 9 | FAQs | `faq` | Optional. Crypto only today. |
| 10 | Ready to start + mega footer | footer CTA | Lives on `SiteFooter`. Do not add a second `cta` block. |

**Mobile (Forex `23570:104433`, 375 × 7894):**

| # | Section | Pattern | Mobile structure |
|---|---------|---------|------------------|
| 0 | Chrome | `Header_Mobile` 57 + `Mobile Footer` | Header sits on the brand-BG hero (after Figma iOS chrome 94 — skip chrome) |
| 1 | Market header | `market-hero` | Full-bleed BG + gradient. Order: **H1 → lead → Primary/Light 163×44 (hug) → TV-Mobile 343×364**. Not the homepage title→visual order |
| 2 | What is Forex | `education-split` | Single column: 60 icon → H2 → two body paragraphs. No side-by-side |
| 3 | Why trade [market] | `features` usp | Title + lead → **carousel** (peek 250 / center 270) → Navigate dots |
| 4 | Our instruments | `table` | H2 → Tabs_Text **overflow-x** → Forex-Mobile 343 (header 54, rows 80, inner scroll). “Show more” hidden in this frame |
| 5 | FAQs | `faq` | Centered “FAQs” + FAQ-Mobile 343, first open |
| 6 | Footer | footer CTA | `Mobile Footer` instance (no separate mid-page `cta`) |

**Rules:**  
- Spreads-on-home (`spread-cards` TV cards) ≠ this instruments **table**.  
- Hero is **market-hero**, not plain centered products hero.  
- Put quotes **either** in the hero (`quotes[]` on crypto/brand) **or** in `spread-cards` (indices) — not both.  
- Content only: symbol list, FAQ Q&As, market name in titles.  
- Optional modules stay registered types — do not invent a parallel section.  
- Mobile market hero keeps a **hug-width** Light CTA; do not stretch it to 343.  
- Indices mobile: peek the globe from the right; hide chips. `spread-cards` is one card per row at every width below 1200.

---

### Recipe A1 — Products & Accounts overview

**Figma:** `26258:275741`

| # | Section | Pattern | Notes |
|---|---------|---------|--------|
| 1 | Products & Accounts hero | `hero` (centered + visual) | H1 + lead + Primary/Dark + illustration cluster |
| 2 | Trade with lowest costs | `instrument-grid` | 6 product tiles (Forex, Metals, Crypto, Indices, Energy, US shares) |
| 3 | Account types (pair) | `tier-cards` / content cards | 2× **Content Card 2** (e.g. Classic vs Zero teaser) |
| 4 | Range of trading platforms | `platforms` | **Tabs_Icon** (MT4/MT5/TV/cTrader) + body + **download-bar** OS links |
| 5 | Footer | `cta` / footer | |

**Mobile (Figma name “Partners Overview - Mobile” `26258:282017` — same A1 stack):**

| # | Section | Pattern | Mobile structure |
|---|---------|---------|------------------|
| 1 | Products hero | `hero` | **Visual first** (illustration 343×220) → H1 → lead → Primary/Dark **203×54** (hug, not full-bleed) |
| 2 | Lowest costs | `instrument-grid` | Title + lead → **2×3** tiles **165×165**, gap 12 |
| 3 | Account types | `tier-cards` | Title + long lead → **stacked** Content Card 2 ×2 (335, gap ~32) |
| 4 | Platforms | `platforms` + `download-bar` | Title + lead → Tabs_Icon **overflow-x** → mock 246×250 → body → accordion 343 → full-bleed download bar 375×69 scroll |
| 5 | Footer | footer | `Mobile Footer` (no extra CTAFooter on this frame) |

**Rules:** Instrument tiles = same component family as homepage “lowest cost” markets row. Platform block reuses homepage/platform landing pattern, not a one-off. The Figma frame is misnamed “Partners Overview”; treat it as **Products & Accounts**.

---

### Recipe A2 — Account product page (Zero)

**Figma:** Zero Account `26258:273793` / Mobile `26258:282352`  
**Also:** Classic Account (same family; swap content). Demo is A3.

| # | Section | Pattern | Notes |
|---|---------|---------|--------|
| 1 | Account hero | `hero` | H1 + long body + dual CTA + product illustration (not market chart) |
| 2 | What does this account mean | `features` / content USP | Benefit cards under “What does a Zero Account mean for me?” |
| 3 | Why choose [account] | `features` usp | USP Cards rail |
| 4 | Classic vs Zero | `comparison-table` | Multi-panel **Comparison Table** |
| 5 | How to create [account] | `steps` | “How to - 1” + vertical steps (+ dual CTA often) |
| 6 | FAQs | `faq` | |
| 7 | Footer | `cta` / footer | |

**Mobile (`26258:282352`, 375 × 10717):**

| # | Section | Pattern | Mobile structure |
|---|---------|---------|------------------|
| 1 | Account hero | `hero` | **Visual → H1 → dual CTA 343×40 stacked → long body**. Pad 20 / content 343 |
| 2 | What it means | compact `features` | Title + lead → **featured visual card 343×353** then **6× USP 343×134** stacked (gap 16). Not a carousel |
| 3 | Why choose Zero | `features` usp | Title + long lead → **carousel** (250 / 270 / 250) + dots |
| 4 | Zero vs Classic | `comparison-table` | H2 → **2 Tabs_Icon** (Zero / Classic) → one Comparison Table **343** |
| 5 | Mid education | `education-split` | H2 → illustration → long copy (no CTA) |
| 6 | How to create | `steps` | H2 + long lead → device mock → **vertical** steps → **single** Primary 343×54 |
| 7 | FAQs | `faq` | Left title + FAQ-Mobile, first open |
| 8 | Ready + footer | `CTAFooter-Mobile` + `Mobile Footer` | Title 2-line → Primary 343×54 → or → Secondary 343×54 |

---

### Recipe A3 — Demo account

**Figma:** Demo account `26258:279143`

| # | Section | Pattern | Notes |
|---|---------|---------|--------|
| 1 | Demo hero | `hero` | “Demo Trading Account” + visual |
| 2 | Benefits of demo | `features` usp | Benefits band |
| 3 | Demo → live | `steps` or short `education-split` | “Switching from Demo to Live is simple” |
| 4 | How to create demo | `steps` | How to - 1 |
| 5 | FAQs | `faq` | |
| 6 | Footer | `cta` / footer | |

**Mobile (`26258:284389`, 375 × 6946):**

| # | Section | Pattern | Mobile structure |
|---|---------|---------|------------------|
| 1 | Demo hero | `hero` | **Visual → H1 → dual CTA 335×40 stacked → long body**. Same order as Zero |
| 2 | Benefits | `features` usp | Title only (lead hidden) → **carousel** + wide Navigate dots |
| 3 | How to create demo | `steps` | H2 + long lead → device mock → vertical steps → single Primary 343×54 |
| 4 | FAQs | `faq` | FAQ-Mobile, first open |
| 5 | Ready + footer | `CTAFooter-Mobile` + `Mobile Footer` | Same as Zero |

**Rules:** Same `steps` + `features` + `faq` as Zero; **no** comparison-table required. Demo has **no** compact stacked-USP band — only the carousel.

---

### Recipe A4 — Fusion Pro (wholesale / eligibility)

**Figma:** Fusion Pro `26258:285369` / Mobile `26258:285898`

| # | Section | Pattern | Notes |
|---|---------|---------|--------|
| 1 | Pro hero | `hero` | “Welcome to Fusion Pro” + Primary + illustration |
| 2 | Benefits of Pro | `bento-usp` or `features` | Large + small USP Cards grid |
| 3 | Important considerations | `education-split` | Long-form band |
| 4 | Retail vs Pro | `comparison-table` | Comparison Table - No Hover / multi criteria |
| 5 | Related product (e.g. Swap Free) | content band / `features` | Cross-sell section |
| 6 | Footer | `cta` / footer | |

**Mobile (`26258:285898`, 375 × 9559):**

| # | Section | Pattern | Mobile structure |
|---|---------|---------|------------------|
| 1 | Pro hero | `hero` | **Visual → H1 → single Primary 335×44 → lead**. No secondary |
| 2 | Benefits | compact `features` / `bento-usp` | H2 → illustration 280×196 → **6× USP 343×134** stacked. Desktop bento **collapses to stack**, not carousel |
| 3 | Important considerations | `education-split` + icon rows | H2 + lead → illustration → **3 icon+text rows** (24px icon, 16 gap) → long additional note. Hidden Content Cards in file = unused variants |
| 4 | Retail vs Pro | `comparison-table` | H2 → **two stacked** Pro Table - Mobile (Compare Max. Leverage, then Other Criteria). **No tabs** on this page |
| 5 | Become a Pro | `table` / eligibility | Title + lead → Become a Pro Table 343 + Navigate dots + long legal note |
| 6 | Footer | footer | `Mobile Footer` (no CTAFooter on this frame) |

---

### Recipe A5 — Premium Program (loyalty tiers)

**Figma:** Premium Program `26258:280335`

| # | Section | Pattern | Notes |
|---|---------|---------|--------|
| 1 | Premium hero + tiers | `hero` + `instrument-grid` / tier tiles | H1 + Bronze/Silver/Gold/Diamond tiles (instrument tile shell) + education split + CTA |
| 2 | What sets Premium apart | `features` usp | 6-card USP rail |
| 3 | Analyst / checklist band | `checklist-feature` | Copy + icon checklist rows + image + CTA (“Analyst Views”) |
| 4 | Tools / list / calculator | content list or future `stats`/`tools` | “List” / savings — register when repeated |
| 5 | FAQs | `faq` | |
| 6 | Footer | `cta` / footer | |

**Rules:** Tier tiles re-use **instrument tile** shell (icon/image + label), not a third card system. Checklist band = same as platform `checklist-feature`.

---

## Cross-page pattern frequency (this batch)

| Pattern | Forex M1 | Products A1 | Zero A2 | Demo A3 | Pro A4 | Premium A5 |
|---------|----------|-------------|---------|---------|--------|------------|
| `market-hero` | ✅ | — | — | — | — | — |
| `hero` (product/offer) | — | ✅ | ✅ | ✅ | ✅ | ✅ |
| `education-split` | ✅ | — | — | ~ | ✅ | ✅ (in hero) |
| `features` usp | ✅ | — | ✅ | ✅ | ✅ | ✅ |
| `bento-usp` | — | — | — | — | ✅ | — |
| `table` (+ tabs) | ✅ | — | — | — | — | — |
| `comparison-table` | — | — | ✅ | — | ✅ | — |
| `instrument-grid` | — | ✅ | — | — | — | ✅ tiers |
| `platforms` + `download-bar` | — | ✅ | — | — | — | — |
| `tier-cards` / content pair | — | ✅ | — | — | — | — |
| `steps` | — | — | ✅ | ✅ | — | — |
| `checklist-feature` | — | — | — | — | — | ✅ |
| `faq` | ✅ | — | ✅ | ✅ | — | ✅ |
| `cta` / footer | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |

---

## Batch 2026-08-12 — Platforms + ATS tools

| # | Page | Node | URL |
|---|------|------|-----|
| 1 | **MetaTrader 5 - Overview** | `28610:429700` | [link](https://www.figma.com/design/5PQJiXq7xZNGCqV1XNvKro/Website-Redesign-FM-2.0?node-id=28610-429700) |
| 2 | **MetaTrader 5 - Desktop** | `28758:144345` | [link](https://www.figma.com/design/5PQJiXq7xZNGCqV1XNvKro/Website-Redesign-FM-2.0?node-id=28758-144345) |
| 3 | **MetaTrader 5 - Mobile** | `28758:145875` | [link](https://www.figma.com/design/5PQJiXq7xZNGCqV1XNvKro/Website-Redesign-FM-2.0?node-id=28758-145875) |
| 4 | **MetaTrader 5 - Web** | `28610:427712` | [link](https://www.figma.com/design/5PQJiXq7xZNGCqV1XNvKro/Website-Redesign-FM-2.0?node-id=28610-427712) |
| 5 | **Multi Account Manager (MAM/PAMM)** | `31099:361349` | [link](https://www.figma.com/design/5PQJiXq7xZNGCqV1XNvKro/Website-Redesign-FM-2.0?node-id=31099-361349) |
| 6 | **DupliTrade** | `31099:361429` | [link](https://www.figma.com/design/5PQJiXq7xZNGCqV1XNvKro/Website-Redesign-FM-2.0?node-id=31099-361429) |

Same platform-device recipe applies to **MT4** Desktop/Mobile (and cTrader / TradingView device pages) with content swap.

---

### Recipe P1 — Platform overview (MT5 Overview)

**Figma:** Desktop `28610:429700` / Mobile `28610:431315` (375 × 14100)  
**Reuse for:** MT4 Overview, cTrader Overview, TradingView overview-style hubs.

| # | Section | Pattern | Notes |
|---|---------|---------|--------|
| 1 | Platform hero | `hero` | Logo + H1 + long body + dual CTA + device collage |
| 2 | Download strip | `download-bar` | Full-width: MT5 for Windows/Mac/Linux/iOS/Android/Webtrader (icons + labels) |
| 3 | Choose your platform | `platforms` | Title + **Tabs_Icon** (Desktop / Mobile / Web) + device mock + body + **Store download button** row |
| 4 | Platform feature bento | `bento-usp` | “MetaTrader 5 (MT5) Platform” large + small USP cards |
| 5 | Feature / benefit checklist | `checklist-feature` | “Analyst Views” style: copy + icon rows + visual |
| 6 | Second device band (e.g. WebTrader) | `platforms` or `checklist-feature` | Device mock + copy variant |
| 7 | Accounts compare (optional) | `comparison-table` | Classic vs Zero appears on overview |
| 8 | Why trade [platform] with Fusion | `features` usp | Equal USP rail |
| 9 | How to get started | `steps` | “MT5 steps block” |
| 10 | Explore other platforms | `instrument-grid` or link cards | Cross-nav to MT4/TV/… |
| 11 | FAQs | `faq` | |
| 12 | Footer | `cta` / footer | |

**Mobile (`28610:431315`):**

| # | Section | Pattern | Mobile structure |
|---|---------|---------|------------------|
| 1 | Platform hero | `hero` | **Visual 280 → logo 32 + H1 → dual CTA 343×44 → long body**. Same family as account hero (visual first, CTAs before body) |
| 2 | Download strip | `download-bar` | Full-bleed **375×69**, icon+label overflow (iOS / Android / Windows / Mac / Web) |
| 3 | Choose your platform | `platforms` | Device mock 343 → **Tabs_Icon overflow** (Desktop/Mobile/Web) → H2 + body → **Store download buttons 343×40 stacked** (3 on Desktop tab) |
| 4 | Platform features | `bento-usp` / `icon-feature-grid` | Featured visual USP **343×343** + compact icon+heading rows **343×70–100** (icon 24 left of title). Not the equal-USP carousel |
| 5 | Checklist / Analyst | `checklist-feature` | Illustration 335 → H2 + body → **5 icon rows** → Primary 335×44. Second pass (Layout/6) repeats image + 4 icon rows |
| 6 | Compare MT5 vs MT4 | `comparison-table` | H2 → **2 Tabs_Icon** + Comparison Table 343 (same as Zero vs Classic) |
| 7 | Why trade MT5 | `features` usp | Title → **carousel** 250/270/250 + dots |
| 8 | Reasons / accordion | `platforms` accordion | Mock + body + AccordionCard stack 343 |
| 9 | How to open | `steps` | H2 + lead → **4 vertical steps** (not 3) |
| 10 | Explore other platforms | `platform-crossnav` | **Platform Card carousel**: peek ~279 / center **320×518** + Navigate dots |
| 11 | FAQs | `faq` | Centered “FAQs” + FAQ-Mobile |
| 12 | Footer | footer | `Mobile Footer` |

**Rules:** Overview owns **download-bar + platforms tabs**. Device subpages (P2) reuse benefits without repeating full overview chrome. `platform-crossnav` is **not** `instrument-grid` (different card: device mock + name + CTA).

---

### Recipe P2 — Platform device subpage (Desktop / Mobile / Web)

**Figma:** Desktop `28758:144345` / mobile `28610:433653`; Web `28610:427712` / mobile `28610:436099`; device-Mobile `28758:145875` (not in this drop).

| # | Section | Pattern | Notes |
|---|---------|---------|--------|
| 1 | Device hero | `hero` + store CTAs | H1 (“MT5 Desktop/Mobile/WebTrader”) + “Available on …” + body + **Store download buttons** (Web may use Icon+Text+Arrow “open web” link instead) + product visual |
| 2 | About + feature bento | `bento-usp` | “About MT5 Desktop/Mobile/Web” + USP grid |
| 3 | Deep feature band (“Pine script” frame name in file) | `checklist-feature` | Image \| headline + icon checklist + store buttons |
| 4 | Second checklist / analyst band | `checklist-feature` | Optional second pass (Desktop/Mobile; Web may skip one) |
| 5 | Explore other platforms | cross-link band | Same as overview |
| 6 | FAQs | `faq` | |
| 7 | Footer | `cta` / footer | |

**Mobile P2 (`28610:433653` Desktop device; `28610:436099` Web — same skeleton):**

| # | Section | Pattern | Mobile structure |
|---|---------|---------|------------------|
| 1 | Device hero | `hero` + store row | **Visual 280 → H1 + “Available on …” → Store download buttons 343×40 stacked** (Desktop = 3: Windows / Mac / Linux) → long body. Web swaps store row for a single open-web CTA |
| 2 | About + features | `bento-usp` | Title + lead → featured USP **343×376** (copy + visual) then compact cards **343×128–176** stacked |
| 3 | Checklist + stores | `checklist-feature` | Illustration 335 → H2 → icon rows → **2 store buttons 335×40** |
| 4 | Second checklist | `checklist-feature` | Illustration → H2 + body → 5 icon rows → Primary 335×44 (Web may skip) |
| 5 | Explore other platforms | `platform-crossnav` | Same Platform Card carousel as P1 |
| 6 | FAQs | `faq` | FAQ-Mobile, first open |
| 7 | Footer | footer | `Mobile Footer` |

**Content knobs only between Desktop vs Mobile vs Web:** OS list, store buttons count (3 vs 2 vs web link), copy, hero image. **Structure is one recipe.**

**Rules:** Do not invent a separate block type per OS. `download-bar` / store buttons = same component family as overview strip and Products overview downloads.

---

### Recipe P3 — ATS / money-manager tool (MAM)

**Figma:** Multi Account Manager `31099:361349`

| # | Section | Pattern | Notes |
|---|---------|---------|--------|
| 1 | Tool hero | `hero` | H1 + long pitch + dual CTA + product image |
| 2 | Key features | `icon-feature-grid` (planned) or `features` | Material icons + short headings around central visual (“Device / WebTrader” frame) |
| 3 | Footer | `cta` / footer | |

**Rules:** Shorter stack than full platform overview. Icon grid is **not** isometric USP (`features` usp) — Material icon + label/heading cards; register as `icon-feature-grid` when building.

---

### Recipe P4 — Copy-trading / partner tool (DupliTrade)

**Figma:** DupliTrade `31099:361429`

| # | Section | Pattern | Notes |
|---|---------|---------|--------|
| 1 | Tool hero | `hero` | Image left + H1 + body + dual CTA |
| 2 | Legal notice strip | `notice-band` (planned) | Short compliance note under hero (not full footer disclaimer) |
| 3 | Why [tool] | `bento-usp` / `features` | Large visual + USP card grid |
| 4 | How to open / register | `steps` | 4 steps + image + primary CTA (“Create an account”) |
| 5 | Footer | `cta` / footer | |

**Rules:** `notice-band` = reusable micro legal under hero (DupliTrade-style). Full risk text stays `disclaimer` / footer legal.

---

## Pattern frequency — Platforms batch

| Pattern | P1 Overview | P2 Device | P3 MAM | P4 DupliTrade |
|---------|-------------|-----------|--------|---------------|
| `hero` | ✅ | ✅ + stores | ✅ | ✅ |
| `download-bar` | ✅ | store row in hero | — | — |
| `platforms` (tabs + device) | ✅ | — | — | — |
| `bento-usp` | ✅ | ✅ | — | ✅ |
| `features` usp | ✅ | — | — | — |
| `checklist-feature` | ✅ | ✅ | — | — |
| `comparison-table` | ✅ | — | — | — |
| `steps` | ✅ | — | — | ✅ |
| `faq` | ✅ | ✅ | — | — |
| `icon-feature-grid` | — | — | ✅ | — |
| `notice-band` | — | — | — | ✅ |
| `cta` / footer | ✅ | ✅ | ✅ | ✅ |

---

## Batch 2026-08-12 — Copy trading + Funding + Trading conditions

| # | Page | Node | URL |
|---|------|------|-----|
| 1 | **Fusion+ Copy Trading - For Copier** | `31099:370675` | [link](https://www.figma.com/design/5PQJiXq7xZNGCqV1XNvKro/Website-Redesign-FM-2.0?node-id=31099-370675) |
| 2 | **Fusion+ Copy Trading - For Signal Master** | `31099:369917` | [link](https://www.figma.com/design/5PQJiXq7xZNGCqV1XNvKro/Website-Redesign-FM-2.0?node-id=31099-369917) |
| 3 | **Deposit Options - Desktop** | `24400:153833` | [link](https://www.figma.com/design/5PQJiXq7xZNGCqV1XNvKro/Website-Redesign-FM-2.0?node-id=24400-153833) |
| 4 | **Withdrawal Options - All Collapsed** | `24400:157450` | [link](https://www.figma.com/design/5PQJiXq7xZNGCqV1XNvKro/Website-Redesign-FM-2.0?node-id=24400-157450) |
| 5 | **Trading Conditions / All Trading Products** | `25136:208578` | [link](https://www.figma.com/design/5PQJiXq7xZNGCqV1XNvKro/Website-Redesign-FM-2.0?node-id=25136-208578) |
| 6 | **Trading Conditions / Commission Rates on Zero** | `25234:235840` | [link](https://www.figma.com/design/5PQJiXq7xZNGCqV1XNvKro/Website-Redesign-FM-2.0?node-id=25234-235840) |

---

### Recipe T1 — Fusion+ audience page (Copier / Signal Master)

**Figma:** Copier `31099:370675`, Master `31099:369917`  
**One recipe, two content personas** (same chrome; tabs/copy/steps differ).

| # | Section | Pattern | Notes |
|---|---------|---------|--------|
| 1 | Product hero | `hero` | H1 “Fusion+ Copy Trading” + body + footnote microcopy + dual CTA + illustration |
| 2 | How it works (tabbed) | `steps` + **Tabs_Text** | Title + audience tabs + long lead + vertical **step** instances + device mock (desktop+phone) |
| 3 | Leaderboard / metrics | `leaderboard` (planned) or content hero | “Fusion+ Leaderboard” / Signal Master Metrics cards |
| 4 | Feature / education bands | `education-split` / `checklist-feature` | Extra Hero frames (tools list, analyst views) |
| 5 | Fees vs brokers / savings | `savings-calculator` (planned) | “See Our Trading Fees vs. Other Brokers” / savings widget (Copier) |
| 6 | How to choose master (optional) | `faq` or accordion content | Collapse sections on Copier |
| 7 | Key features / device band | `bento-usp` / `icon-feature-grid` | Master: Device/WebTrader style metrics |
| 8 | FAQs | `faq` | |
| 9 | Footer | `cta` / footer | |

**Rules:**  
- Copier vs Master = **content + tab default**, not two block systems.  
- How-it-works **with Tabs_Text** is still `steps` (optional `tabs` prop) — do not invent `steps-v2`.  
- Savings/calculator only when Figma shows the widget; otherwise skip.

---

### Recipe F1 — Funding methods (Deposit / Withdrawal)

**Figma:** Deposit `24400:153833` (canonical) / Deposit **+ search** `24400:153171`; Withdrawal `24400:157450`  
**Same structure; content + card set differs.** Search on the card grid is an optional prop, not a second recipe.

| # | Section | Pattern | Notes |
|---|---------|---------|--------|
| 1 | Funding hero | `hero` + **funding logos** | H1 (“Our Deposit/Withdrawal Methods”) + multi-paragraph body + note lines + **Deposit & Withdrawals logo row** + Primary CTA + illustration |
| 2 | Explore options | `funding-card-grid` (planned) | Title + lead + optional **Search bar 948×48** (`24400:153171`) + multi-row **Desktop Funding** cards (305×470, 4-col) |
| 3 | Process note (withdrawal) | `education-split` or short `notice-band` | “Simple & Secure Process” — **hidden** on the All Collapsed withdrawal frame |
| 4 | Information accordion | `education-split` + accordion | “Information about Deposits/Withdrawals”: title + lead **\|** AccordionCard column (not the page FAQ) |
| 5 | FAQs | `faq` | Separate band after Information |
| 6 | Footer | `cta` / footer | |

**Rules:**  
- Funding **cards** ≠ USP cards ≠ instrument tiles. Component: Desktop Funding.  
- Hero logos = same family as homepage **logo-marquee** / deposit icons (content: method set).  
- Deposit vs Withdrawal share recipe F1; only copy + card data change. Collapsed/expanded card state is UI, not a new type.  
- **Search** is optional on `funding-card-grid`. `24400:153833` has no search; `24400:153171` does.  
- Deposit / Withdrawal **mobile frames are not in this drop**.

---

---

### Recipe C1 — Trading conditions hub / tabbed tables

**Figma:** All Trading Products Desktop `25136:208578` / Mobile `25136:199688` *(Figma name “Withdrawal Options - Mobile” — content is C1)*; Commission Rates on Zero `25234:235840`  
**Also applies to:** Session Time, Contract Spec, Margins, Spreads tool pages (same hub chrome).

| # | Section | Pattern | Notes |
|---|---------|---------|--------|
| 1 | Conditions hero | `hero` | “Trading Conditions” + multi-paragraph + links to Spreads Tool / Broker Comparison + illustration |
| 2 | Explore conditions | **Tabs_Text** + content | Title + lead + **tabs** for condition category |
| 2a | All products variant | `accordion-table` (planned) | Accordion rows (Forex, Metals, …) each embedding markets **`table`** (Forex-Desktop rows) |
| 2b | Single table variant | `table` | e.g. Commission Rates on Zero — flat header+rows + footnote |
| 3 | Footer | `cta` / footer | |

**Rules:**  
- **Same hub hero + tabs** for every Trading Conditions subpage.  
- Accordion-wrapping-table is **not** plain `faq` (though it reuses FAQ-Desktop chrome for expand). Prefer pattern `accordion-table` = FAQ shell + nested DataTable.  
- Commission/session/spec tables = `table` with different column schemas (already in Tables frame).  
- Do not rebuild a new conditions layout per tab.

**Mobile (`25136:199688`, 375 × 5214):**

| # | Section | Pattern | Mobile structure |
|---|---------|---------|------------------|
| 1 | Conditions hero | `hero` | **Visual 280 → H1 → two body blocks** with inline Spreads Tool / Broker Comparison links. **No CTA** |
| 2 | Explore | Tabs + `accordion-table` | H2 + lead → **Tabs_Text overflow-x (662)** → first category **open** (title + Forex-Mobile 343, header 54 / rows 80, inner scroll) → remaining categories **collapsed FAQ-Desktop 343×58** |
| 3 | Footer | footer | `Mobile Footer` |

Treat the Figma frame name as a label error. Do not register a withdrawal recipe from this node.

---

## Pattern frequency — this batch

| Pattern | T1 Fusion+ | F1 Funding | C1 Conditions |
|---------|------------|------------|---------------|
| `hero` | ✅ | ✅ + logos | ✅ |
| `steps` (+ tabs) | ✅ | — | — |
| `leaderboard` / metrics | ✅ | — | — |
| `savings-calculator` | ✅ Copier | — | — |
| `checklist-feature` / education | ✅ | ~ | — |
| `funding-card-grid` | — | ✅ | — |
| `logo-marquee` / funding logos | — | ✅ hero | — |
| `faq` | ✅ | ✅ | — |
| `table` | — | — | ✅ |
| `accordion-table` | — | — | ✅ All products |
| Tabs as section switcher | How it works / audience | — | Conditions categories |
| `cta` / footer | ✅ | ✅ | ✅ |

---

## Batch 2026-08-12 — Conditions variants + Client tools

| # | Page | Node | URL |
|---|------|------|-----|
| 1 | **Trading Conditions / Margins & Leverage - AU Retail** | `25317:260703` | [link](https://www.figma.com/design/5PQJiXq7xZNGCqV1XNvKro/Website-Redesign-FM-2.0?node-id=25317-260703) |
| 2 | **Trading Conditions / Session Time** | `25136:208357` | [link](https://www.figma.com/design/5PQJiXq7xZNGCqV1XNvKro/Website-Redesign-FM-2.0?node-id=25136-208357) |
| 3 | **Trading Conditions / Contract Specification** | `25136:201435` | [link](https://www.figma.com/design/5PQJiXq7xZNGCqV1XNvKro/Website-Redesign-FM-2.0?node-id=25136-201435) |
| 4 | **Trading Calculators - Margin** | `27868:291901` | [link](https://www.figma.com/design/5PQJiXq7xZNGCqV1XNvKro/Website-Redesign-FM-2.0?node-id=27868-291901) |
| 5 | **Live & Historical Spreads - Desktop** | `25136:207926` | [link](https://www.figma.com/design/5PQJiXq7xZNGCqV1XNvKro/Website-Redesign-FM-2.0?node-id=25136-207926) |
| 6 | **Client Hub Tools - Desktop** | `25136:205792` | [link](https://www.figma.com/design/5PQJiXq7xZNGCqV1XNvKro/Website-Redesign-FM-2.0?node-id=25136-205792) |

---

### Recipe C1 (confirmed variants) — Trading Conditions hub

**Same chrome on every conditions subpage:**

1. **Conditions hero** — H1 “Trading Conditions” + multi-paragraph + links (Spreads Tool / Broker Comparison) + illustration  
2. **Explore Our Trading Conditions** — title + lead + **Tabs_Text** (category switcher)  
3. **Tab panel body** (varies — see below)  
4. **Footer**

| Tab / page | Panel body pattern | Figma notes |
|------------|-------------------|-------------|
| All trading products | `accordion-table` | FAQ expanders + nested markets tables |
| Commission rates on Zero | `table` | Flat Commission Rates table + footnote |
| **Margins & leverage** | `table` (expandable rows) | Margin and Leverage - Desktop; may stack **two tables** (e.g. retail + ASIC Pro) |
| **Session time** | `accordion-table` | Expanders (DST etc.) + Session Time-desktop rows |
| **Contract specification** | `table` + optional `notice-band` | ContractSpec-desktop + note under table |

**Rules:** Do **not** invent a new page layout per tab. Entity variants (AU Retail vs VFSC) = content / table data, same C1. Expandable leverage rows = table row state from Tables frame, not a new block type.

---

### Recipe T2 — Trading Calculators hub

**Figma:** Trading Calculators - Margin `27868:291901`  
**Reuse for:** Pip, profit, currency converter, etc. (tab content swap).

| # | Section | Pattern | Notes |
|---|---------|---------|--------|
| 1 | Tool hub hero | `hero` | “Trading Calculators” + short pitch + illustration (no dual CTA required) |
| 2 | Calculator workspace | `calculator-tool` (planned) | **Tabs_Text** (calculator type) + title/lead for active calc + **form** (Selectors / Field) + Primary CTA + **results card** |
| 3 | Footer | `cta` / footer | |

**Rules:** One `calculator-tool` pattern; Margin vs Pip vs others = tab + field schema content. Form atoms from Inputs frame (already DS). Results card is part of the tool, not a separate marketing block.

---

### Recipe T3 — Live & Historical Spreads tool

**Figma:** `25136:207926`

| # | Section | Pattern | Notes |
|---|---------|---------|--------|
| 1 | Tool hero | `hero` | Centered/wide “Live & Historical Spreads” + proof copy |
| 2 | Spreads workspace | `spreads-tool` (planned) | Live quote header (pair, bid/ask/spread) + instrument/period **selectors** + metric toggles (avg/min/max) + **historical chart** + optional instrument list/table below |
| 3 | Footer | `cta` / footer | |

**Rules:**  
- Related to homepage `spread-cards` (quote language) but **not the same block** — this is the full Spreads Tool product UI.  
- Do not substitute markets `table` alone for this page.  
- Chart + filters = interactive tool surface; content = default pair/period.

---

### Recipe T4 — Client Hub Tools overview

**Figma:** `25136:205792`

| # | Section | Pattern | Notes |
|---|---------|---------|--------|
| 1 | Tools hub hero | `hero` | “Client Hub Tools” + pitch + illustration |
| 2 | Feature / checklist bands | `checklist-feature` | “Analyst Views” style: image + headline + icon rows (repeatable) |
| 3 | Tools directory | `tool-cards` / `instrument-grid` shell | Cards/links to calculators, spreads, calendar, hub tools… |
| 4 | Footer | `cta` / footer | |

**Rules:** Overview page that **routes** into T2/T3 and other tools. Reuse checklist + card shells; don’t one-off each tool promo.

---

## Pattern frequency — this batch

| Pattern | C1 variants | T2 Calculators | T3 Spreads tool | T4 Hub tools |
|---------|-------------|----------------|-----------------|--------------|
| Conditions hero + tabs | ✅ | — | — | — |
| `table` / expandable rows | ✅ margins, contract | — | — | — |
| `accordion-table` | ✅ session, all products | — | — | — |
| `notice-band` | ✅ under contract table | — | — | — |
| `hero` | ✅ | ✅ | ✅ | ✅ |
| `calculator-tool` | — | ✅ | — | — |
| `spreads-tool` | — | — | ✅ | — |
| `checklist-feature` | — | — | — | ✅ |
| `tool-cards` / directory | — | — | — | ✅ |
| `cta` / footer | ✅ | ✅ | ✅ | ✅ |

---

## Batch 2026-08-12 — Compare tool + About + Careers + Blog

| # | Page | Node | URL |
|---|------|------|-----|
| 1 | **Broker Comparison Tool - Desktop** | `29369:318747` | [link](https://www.figma.com/design/5PQJiXq7xZNGCqV1XNvKro/Website-Redesign-FM-2.0?node-id=29369-318747) |
| 2 | **Who We Are** | `29665:152363` | [link](https://www.figma.com/design/5PQJiXq7xZNGCqV1XNvKro/Website-Redesign-FM-2.0?node-id=29665-152363) |
| 3 | **Why Fusion** | `29665:152206` | [link](https://www.figma.com/design/5PQJiXq7xZNGCqV1XNvKro/Website-Redesign-FM-2.0?node-id=29665-152206) |
| 4 | **What others say / Testimonial** | `29665:153626` | [link](https://www.figma.com/design/5PQJiXq7xZNGCqV1XNvKro/Website-Redesign-FM-2.0?node-id=29665-153626) |
| 5 | **Career Desktop** | `29637:142831` | [link](https://www.figma.com/design/5PQJiXq7xZNGCqV1XNvKro/Website-Redesign-FM-2.0?node-id=29637-142831) |
| 6 | **Fusion Blog / Homepage** | `29653:147180` | [link](https://www.figma.com/design/5PQJiXq7xZNGCqV1XNvKro/Website-Redesign-FM-2.0?node-id=29653-147180) |

---

### Recipe T5 — Broker Comparison Tool

**Figma:** `29369:318747`  
**Related:** `savings-calculator` on Premium / Fusion+ (same “See Your Savings” family).

| # | Section | Pattern | Notes |
|---|---------|---------|--------|
| 1 | Tool hero | `hero` | Centered H1 + lead (no CTA required) |
| 2 | Comparison workspace | `savings-calculator` / `broker-compare-tool` | Selectors (instrument, account) + competitor pick + logos + Calculate CTA + **Results** card (you’d save %) + FM vs competitor fee rows |
| 3 | Spreads chart compare | chart band | “Compare Average Spreads” historical chart (same tool surface) |
| 4 | Optional mid content / CTA | `cta` / education | |
| 5 | Footer | `cta` / footer | |

**Rules:** Same savings/compare **tool pattern** as Premium calculator and Fusion+ fees widget — one implementation, different defaults. Not a marketing `table` page.

---

### Recipe A6 — Who We Are (brand story)

**Figma:** Desktop `29665:152363` / Mobile `29665:154696`

| # | Section | Pattern | Notes |
|---|---------|---------|--------|
| 1 | Brand hero | `hero` | H1 + origin story + illustration |
| 2 | Story / quote bands | `education-split` | Multi Hero options (copy + image) |
| 3 | Mission | `education-split` or centered content | “Our Mission” |
| 4 | More story / timeline / people | education / media | Options 3–6 in file |
| 5 | FAQs (optional) | `faq` | |
| 6 | Footer | `cta` / footer | |

**Mobile (`29665:154696`, 375 × 8929):**

| # | Section | Pattern | Mobile structure |
|---|---------|---------|------------------|
| 1 | Brand hero | `hero` | **Visual 280×200 → H1 + long body**. Primary is **hidden** — story hero, no CTA |
| 2 | Founder quote | `testimonials` / quote band | Quote 343 + avatar **65** + name/title |
| 3 | Our Mission | `tier-cards` / content card + dots | Title + lead → **Content Card 343×371** (illustration 180 + heading + body) + Navigate — carousel if more slides |
| 4 | Our Vision | `education-split` | Title + long copy only |
| 5 | Our Values | `features` usp | Title + lead → **USP carousel** 256 / 270 / 256 + dots |
| 6 | Our Story | `education-split` | H2 → image **280×210** → two long paragraphs |
| 7 | Our Community | `media-carousel` | Title + lead → **Careers Carousel 280** + peek 260 + dots |
| 8 | FAQs | `faq` | FAQ-Mobile, first open |
| 9 | Footer | footer | `Mobile Footer` |

**Rules:** Story pages stack **education-split** + hero variants; don’t invent free-form layouts. Values use the equal-USP carousel, not the Why Fusion stacked bento.

---

### Recipe A7 — Why Fusion (brand USP)

**Figma:** Desktop `29665:152206` / Mobile `29665:155074`

| # | Section | Pattern | Notes |
|---|---------|---------|--------|
| 1 | Brand hero | `hero` | H1 “Why Fusion Markets” + long pitch + image |
| 2 | Feature bento | `bento-usp` | Large feature USP + grid (“Trade Anytime…” style) |
| 3 | Trust / regulation | `features` or trust strip | e.g. ASIC mention |
| 4 | Footer | `cta` / footer | |

**Mobile (`29665:155074`, 375 × 6561):**

| # | Section | Pattern | Mobile structure |
|---|---------|---------|------------------|
| 1 | Brand hero | `hero` | **Image 266×250 → H1 → long body**. No CTA (hidden) |
| 2 | Why choose Fusion | `bento-usp` | **Full-width stack**, not carousel: featured card **343×374** (image + title + body) then compact cards **343×144–242**. Same atoms as Fusion Pro compact USP |
| 3 | Our Licenses | `tier-cards` / trust card | Title + lead → **one Content Card 343×372** (flag 32 + regulator name + body) + footnote. Extra flag art peeks the card |
| 4 | Footer | footer | `Mobile Footer` |

**Rules:** Equal rail on other pages = `features` usp; this page’s unequal grid = `bento-usp`. Same USP card atoms. Do **not** turn A7 into the Who We Are values carousel.

---

### Recipe A8 — Social proof / What others say

**Figma:** `29665:153626`  
**Also:** homepage reviews, BrokerChooser review rail.

| # | Section | Pattern | Notes |
|---|---------|---------|--------|
| 1 | Proof hero | `hero` | “What Others Say…” + pitch + visual |
| 2 | Awards marquee | `awards-strip` / `logo-marquee` | Award crests row (BrokerChooser, etc.) |
| 3 | Awards spotlight | `media-carousel` + award cards | Badge carousel + partner detail card (tabs by year) |
| 4 | Reviews from real traders | `review-rail` | Trustpilot header + review cards + arrows |
| 5 | Reviews from experts | `rating-cards` / trust row | Expert site ratings (BrokerChooser, CFB, FXEmpire…) |
| 6 | Footer | `cta` / footer | |

**Rules:** `review-rail` is the same pattern as BrokerChooser landing. Awards strip ≠ funding logo marquee content, may share marquee behavior.

---

### Recipe A9 — Careers

**Figma:** `29637:142831`

| # | Section | Pattern | Notes |
|---|---------|---------|--------|
| 1 | Careers hero | `hero` (brand BG) | Centered H1 + body + Primary/Light + **media-carousel** under hero |
| 2 | Employee quote | `testimonials` / quote band | Quote + avatars + attribution |
| 3 | Stats strip | `stats` | Big numbers (offices, people…) |
| 4 | Our Values | `features` usp | USP Cards carousel/rail |
| 5 | Life with us | `checklist-feature` + Tabs | Tabs (locations/themes) + icon checklist + image |
| 6 | Locations / more story | education / cards | |
| 7 | Open roles | `jobs-list` (planned) | Role list + apply CTA / email |
| 8 | Footer | `cta` / footer | |

**Rules:** Reuse USP + checklist + carousel; jobs list is the careers-specific content module.

---

### Recipe A10 — Blog homepage

**Figma:** `29653:147180`

| # | Section | Pattern | Notes |
|---|---------|---------|--------|
| 1 | Featured / recommends | `blog-featured` (planned) | Brand BG + featured article card (image, labels, title, tags, read time, dots) |
| 2 | Filters | Tabs_Text (categories) + Search | Inputs/Labels already in DS |
| 3 | Post grid | `blog-card` grid | 3-col Blog Card rows + sort selectors + pagination Navigate |
| 4 | Newsletter CTA | `newsletter-cta` (planned) | Subscribe form (Field + Primary) + legal microcopy + illustration |
| 5 | Footer | `cta` / footer | |

**Rules:** Blog cards ≠ USP cards (Cards frame “blog cards” family). Newsletter is a form CTA, not generic `cta` dual-button band (though can sit in similar section chrome).

---

## Pattern frequency — this batch

| Pattern | T5 Compare | A6 Who | A7 Why | A8 Proof | A9 Careers | A10 Blog |
|---------|------------|--------|--------|----------|------------|----------|
| `hero` | ✅ | ✅ | ✅ | ✅ | ✅ + carousel | featured |
| `savings-calculator` / compare tool | ✅ | — | — | — | — | — |
| `education-split` | — | ✅ | — | — | ~ | — |
| `bento-usp` / `features` | — | — | ✅ | — | values usp | — |
| `review-rail` / awards | — | — | — | ✅ | quote | — |
| `media-carousel` | — | — | — | awards | ✅ hero | featured dots |
| `checklist-feature` | — | — | — | — | ✅ | — |
| `stats` | — | — | — | — | ✅ | — |
| `jobs-list` | — | — | — | — | ✅ | — |
| `blog-card` / featured | — | — | — | — | — | ✅ |
| `newsletter-cta` | — | — | — | — | — | ✅ |
| `cta` / footer | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |

---

## How to extend this file

When the next batch of screens arrives:

1. Add a recipe table (section → pattern).  
2. Update **Also seen on** in `pattern-catalog.md`.  
3. Touch `block-inventory.json` only if new `type` or props appear.  
4. Changelog + sources.
