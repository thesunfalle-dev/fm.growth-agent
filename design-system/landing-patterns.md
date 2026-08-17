# Landing composition patterns (campaign pages)

**Purpose:** How real **landing pages** are assembled from DS pieces — vs full homepage.  
Use when shipping a campaign slug. No brief schema: these are **visual recipes** from Figma.

**Related:** `assembly.md` (**ready-only compose rules** — read first when shipping a slug), `homepage-patterns.md`, `responsive-rules.md`, `block-inventory.json`.

---

## Figma sources

| # | Page | Desktop | Mobile |
|---|------|---------|--------|
| 1 | **BrokerChooser** (award / trust landing) | [`29987:337918`](https://www.figma.com/design/5PQJiXq7xZNGCqV1XNvKro/Website-Redesign-FM-2.0?node-id=29987-337918) | [`29987:342224`](https://www.figma.com/design/5PQJiXq7xZNGCqV1XNvKro/Website-Redesign-FM-2.0?node-id=29987-342224) |
| 2 | **TradingView Promo / AU** (offer: free TV sub) | [`29987:338113`](https://www.figma.com/design/5PQJiXq7xZNGCqV1XNvKro/Website-Redesign-FM-2.0?node-id=29987-338113) | [`29987:342421`](https://www.figma.com/design/5PQJiXq7xZNGCqV1XNvKro/Website-Redesign-FM-2.0?node-id=29987-342421) |
| 3 | **TradingView** (platform product landing) | [`29987:340524`](https://www.figma.com/design/5PQJiXq7xZNGCqV1XNvKro/Website-Redesign-FM-2.0?node-id=29987-340524) | [`29987:342673`](https://www.figma.com/design/5PQJiXq7xZNGCqV1XNvKro/Website-Redesign-FM-2.0?node-id=29987-342673) |
| 4 | **Gold EN** (market / instrument landing — XAUUSD) | [`29987:341692`](https://www.figma.com/design/5PQJiXq7xZNGCqV1XNvKro/Website-Redesign-FM-2.0?node-id=29987-341692) | [`29987:342972`](https://www.figma.com/design/5PQJiXq7xZNGCqV1XNvKro/Website-Redesign-FM-2.0?node-id=29987-342972) |

All share: **Header → body sections → Footer (with Ready CTA)**. Entity/AU/EN copy is content.

---

## Shared landing DNA

| Pattern | Desktop | Mobile |
|---------|---------|--------|
| **Chrome** | Header_Desktop 80 | Header_Mobile 57 |
| **Hero** | Split: copy left + visual right; often dual CTA; **market** hero may use **Primary/Light** on brand BG + chart card | **Recipe-specific** — home title→visual→compact CTA; account visual→title→full-width CTA; market title→lead→hug Light CTA→343×364 slot |
| **Section rhythm** | ~120 pad, content ~1280 / gutter 80 | 16 side pad, content 343 |
| **Spreads / instruments** | Tabs + TV card **row** or instrument row | Tabs overflow + TV **stack**; instruments **2×3 grid** |
| **USP** | 4 cards equal row, rail, or **bento grid** | Carousel + dots **or** full-width stack |
| **Steps** | Vertical **or horizontal** (Gold uses horizontal 3-up) | Vertical + dual CTA stack |
| **Proof** | Reviews rail / Trustpilot block | Same, horizontal review cards |
| **Footer** | Site footer AU/EN | Mobile footer |

Hero mobile order often: **visual mid-stack before/around CTAs**. Market pages add **live chart card** (TV-Desktop / TV-Mobile) in the hero.

---

## Landing 1 — BrokerChooser (award / third-party endorsement)

**Intent:** Third-party award + social proof → costs → USP. Short, trust-heavy.

### Section stack

| # | Section | Blocks / DS |
|---|---------|-------------|
| 1 | **Award hero** | Partner logo (BrokerChooser) + H1 “#1 Lowest Spread…” + long award copy + dual CTA + large award/image |
| 2 | **Reviews from real traders** | Trustpilot summary + **review cards rail** (avatar, name, date, stars, quote) + arrows |
| 3 | **Here’s our spreads** | Title + lead + Tabs + TV_Card row/stack + link to Spreads Tool (+ mobile primary CTA) |
| 4 | **Trade lowest costs** | Title + lead + **6 instrument tiles** |
| 5 | **Why we’re different** | USP cards (4 desktop / carousel mobile) |
| 6 | Footer | Mobile/Desktop footer |

**No** How it works, funding marquee, platform accordion on this page (leaner than homepage/TV).

### Adaptive notes (measured `29987:342224`)
- Hero: partner mark **215×28** → H1 → image **280×275** → body → dual CTA **343×40** stacked  
- Reviews: title + lead → Trustpilot header → **review cards 280×322** horizontal overflow (no wrap)  
- Spreads: Tabs_Text overflow + **5× TV_Card-Mobile 343×118** + link + **compact Primary 163×44 centered** (not full-bleed)  
- Instruments: **2×3** 165×165, gap 12  
- USP: carousel peek 256 / center 270 + dots  
- No steps / FAQ / download bar on this landing  
- Footer: `Mobile Footer` only  

### Reuse for similar campaigns
Award / “as seen on BrokerChooser / review site” landings:  
`hero` (eyebrow=partner) → `testimonials`/`review-rail` → `spread-cards` → `instrument-grid` → `features` usp → footer.

---

## Landing 2 — TradingView Promo / AU (promo offer)

**Intent:** Specific **promo mechanic** (free TV subscription for lots traded) + tiers + product proof.

### Section stack

| # | Section | Blocks / DS |
|---|---------|-------------|
| 1 | **Offer hero** | H1 “Get a Free TradingView Subscription” + offer body + **T&Cs link** + dual CTA + product visual |
| 2 | **Free subscription options** | 3 **tier/content cards** (icon + heading + body): Essentials / Plus / Premium — desktop row, mobile **stack** (or carousel on full TV page) |
| 3 | **Tight spreads 150+** | Title + lead + Tabs + TV_Card rail/stack |
| 4 | **How it works** | Title + 3 vertical steps + dual CTA |
| 5 | **Funding methods** | Logo marquee (optional on mobile) |
| 6 | **Lowest trading costs** | Instruments grid |
| 7 | **Why different** | USP cards |
| 8 | **Reviews** | Trustpilot + review cards |
| 9 | Footer | |

### Distinct patterns
- **Legal micro-link** in hero (T&Cs) under offer copy — compliance-sensitive  
- **Tier cards** = content cards with Material/leading icon (`upcoming`, `insights`, `star_rate` style) — not USP illustrations  
- Promo has **repeat dual CTA** after tiers (mobile)  

### Adaptive notes (measured `29987:342421`)
- Hero: **H1 → image 280×222 → offer body + T&Cs link → dual CTA 343×40**. Title first (not account visual-first)  
- Tier cards: **full stack** of 3 Content Cards 343 (294 / 270 / 270) + dual CTA under the stack. **Not** a carousel on the promo page  
- Spreads: same TV stack as homepage (5 cards)  
- Steps: vertical 3 + dual CTA 343  
- Funding: same 2-row overflowing logo ticker as homepage  
- Instruments: 2×3 165  
- No USP carousel / reviews / FAQ on this promo  
- Footer: `Mobile Footer`  

### Reuse for similar campaigns
Promo / “trade X get Y”:  
`hero` (offer + legal link) → `tier-cards` / content cards → `spread-cards` → `steps` → optional marquee → instruments → usp → reviews → footer.

---

## Landing 3 — TradingView (platform product)

**Intent:** Platform story — trade on TV with Fusion; deeper than promo (download bar, benefits checklist, FAQ).

### Section stack

| # | Section | Blocks / DS |
|---|---------|-------------|
| 1 | **Platform hero** | H1 “Trade With Fusion on TradingView” + platform pitch + dual CTA + large visual |
| 2 | **Download bar** | Full-width dark/purple band: OS icons + “TV for Windows/Mac/Linux/iOS/Android/Web” — **horizontal scroll on mobile** |
| 3 | **Free subscription options** | Same tier cards as promo (may be carousel on mobile with dots) |
| 4 | **Why trade with Fusion on TV** | Title + lead + **USP carousel** (Zero/low-cost angle) |
| 5 | **Feature / checklist band** | Image + headline + body + **check list rows** (icon + text) + dual CTA — “Header / 1 /” style |
| 6 | **Spreads** | Tabs + TV cards |
| 7 | **How it works** | Steps + dual CTA |
| 8 | **Reviews** | Trustpilot + review rail |
| 9 | **FAQ** | Accordion items (products etc.) |
| 10 | Footer | |

### Distinct patterns
- **Download / platform strip** under hero (not only in footer)  
- **Checklist feature section** (image + bullets + CTAs) — reusable “content + proof list”  
- Fullest stack of the three; closest to homepage depth + platform focus  
- FAQ at end before footer (landing-specific vs pure promo)  

### Adaptive notes (measured `29987:342673`)
- Hero: **H1 → image 280×280 → body → dual CTA 343×40** (title first)  
- Download bar: full-bleed 375×69, TV for iOS/Android/Web/Windows/Mac/Linux  
- Tiers: **one card + Navigate dots** (carousel) + dual CTA under the band — different from promo’s 3-card stack  
- Why TV: USP carousel 250 / 270 / 250 + dots  
- Checklist: image 335×251 → H2 + body → check rows → dual CTA 335×54  
- Spreads: Tabs_Text overflow + 5× TV_Card-Mobile  
- Steps: vertical 3 + dual CTA  
- Reviews: same rail as BrokerChooser (280 cards, overflow)  
- FAQ: accordion 335 (file uses FAQ-Desktop instances at mobile width)  
- Footer: `Mobile Footer`  

### Reuse for similar campaigns
Platform / product landings (MT4, cTrader, TV):  
See **`page-recipes.md` recipes P1 (overview) and P2 (Desktop/Mobile/Web device)**.  
Overview: `hero` → `download-bar` → `platforms` → `bento-usp` → `checklist-feature` → optional `comparison-table` → `features` → `steps` → `faq` → footer.  
Device: `hero`+stores → `bento-usp` → `checklist-feature` ×n → `faq` → footer.

---

## Landing 4 — Gold EN (market / instrument product)

**Intent:** Single-market product page (here **Gold CFDs / XAUUSD**). Reusable template for Forex pair, metals, crypto, indices landings — swap symbol, copy, chart, and USP set.

Figma names the mobile frame “TradingView” in places but the **story is gold market**, not the TV platform page.

### Section stack

| # | Section | Blocks / DS |
|---|---------|-------------|
| 1 | **Market header** | Brand **BG Image** + gradient overlay + H1 “Gold CFDs” + short pitch + **Primary/Light** CTA + **TV chart card** (Desktop 599×480 / Mobile 343×364) |
| 2 | **Trade with real advantages** | Centered title + lead + **bento USP grid** (desktop: large feature card + smaller cards; mobile: stacked USP-style cards) |
| 3 | **Accounts: Classic vs Zero** | Title + lead + **Comparison Table** (desktop multi-column; mobile **tabs** Classic/Zero + single table) + link to Products & Accounts |
| 4 | **Why trade [market]** | USP cards rail / carousel (gold-specific benefits) |
| 5 | **Long-form content / education** | Split “Hero” bands: multi-paragraph copy + large image (placeholder lorem in file) |
| 6 | **Checklist + image** | Image + headline + body + **icon rows** (platform/other icons) — no CTAs required |
| 7 | **Start trading in 3 steps** | Desktop: **horizontal** steps (3×250); mobile: **vertical** steps |
| 8 | **Live spreads (market-focused)** | Desktop: copy left + **single/large TV card**; or full spreads tabs rail. Mobile: “Tight spreads 150+” tabs + TV stack |
| 9 | **Reviews** | Trustpilot + review rail (mobile confirmed) |
| 10 | Footer | |

### Distinct patterns
- **Market hero** = purple brand BG + **light primary button** (on dark) + embedded **chart widget card**, not only photo  
- **Bento USP layout** — unequal card sizes (not only equal 296 USP rail)  
- **Account comparison table** is a first-class module (Classic vs Zero) with **tabs on mobile**  
- Steps on desktop can be **horizontal** process (same `steps` component, `orientation: "horizontal"`)  
- Spreads section can be **single-instrument focus** (gold card) not full multi-market rail  
- Educational long-copy sections = reusable `content-split` / checklist variants  

### Adaptive notes
- Market hero: desktop text left + chart right; mobile title → lead → CTA → chart below  
- Comparison: desktop 2–3 table panels side by side; mobile tab switcher + one table  
- Bento → stack on mobile  
- Steps: horizontal → vertical on mobile (already in `steps` foundation)  
- Live spreads: asymmetric desktop layout (text | card) → full stack mobile  

### Reuse for similar campaigns
**Market landings** (Gold, Oil, EURUSD, BTC…):  
`market-hero` → `features` usp → `table` → optional compare / marquee → `steps` → optional `spread-cards` → `reviews` → optional `faq`. See locked crypto / indices stacks in `shared-blocks.md`.

---

## Cross-landing comparison

| Building block | BrokerChooser | TV Promo | TradingView | Gold (market) |
|----------------|---------------|----------|-------------|---------------|
| Award / partner mark in hero | ✅ | — | — | — |
| Offer + T&Cs in hero | — | ✅ | — | — |
| Market hero + chart + light CTA | — | — | — | ✅ |
| Dual CTA hero | ✅ | ✅ | ✅ | single primary typical |
| Review rail | ✅ | ✅ | ✅ | ✅ |
| Spreads + TV cards | ✅ | ✅ | ✅ | ✅ (often gold-focused) |
| Instrument grid | ✅ | ✅ | — | — |
| USP / bento cards | ✅ | ✅ | ✅ | ✅ + **bento** |
| Steps / how it works | — | ✅ vertical | ✅ vertical | ✅ **horizontal** desktop |
| Funding marquee | — | ✅ | — | — |
| Tier / plan cards | — | ✅ | ✅ | — |
| Account comparison table | — | — | — | ✅ |
| Download OS bar | — | — | ✅ | — |
| Checklist + image | — | — | ✅ | ✅ |
| Long education splits | — | — | partial | ✅ |
| FAQ | — | — | ✅ | — |

**Common core for most FM landings:**  
Header · **Hero** · **USP** · **Steps** (often) · **Spreads/proof** · **Reviews** · Footer.

**Recipe families:** award · promo · platform · **market/instrument**.

**Optional modules:** award mark, promo tiers, marquee, download bar, checklist, FAQ, **comparison table**, **bento USP**, **market chart hero**.

---

## Map to repo (ready vs gap)

| Module | Ready now | Gap |
|--------|-----------|-----|
| Header / footer / footer CTA | ✅ | — |
| Hero + dual CTA | ✅ partial | media slot; mobile order; partner/award eyebrow; T&Cs link |
| Market hero (BG + light CTA + chart) | ✅ `market-hero` | atmospheres `brand` / `crypto` / `indices` |
| USP cards | ✅ `features` usp | carousel dots polish; **bento** layout |
| Steps | ✅ `steps` vertical/horizontal | — |
| FAQ | ✅ `faq` | — |
| Markets / comparison table | ✅ `table` foundation | multi-panel Classic vs Zero; mobile tabs |
| Review rail | ✅ `reviews` | Trustpilot header + 370/280 cards + arrows |
| TV / spread cards | ✅ `spread-cards` | ≥1200 5-col rail; below 1200 single-column stack |
| Instruments | planned `instrument-grid` | mobile 2-col |
| Logo marquee | ✅ `logo-marquee` | Provider text until approved payment assets are available |
| Tier / plan cards | planned content cards | icon + title + multi-line body |
| Download bar | planned | OS icon row |
| Checklist feature | planned | image + check rows + CTAs |
| Education split | planned | long multi-paragraph + image |

---

## Adaptive checklist (landings)

Measured 2026-08-13 — full contract in `responsive-rules.md`.

1. **Hero is not one order.** Home: title → visual → **compact** CTA → lead. Account / MT5 overview: **visual → title → full-width CTA stack → body**. Market: title → lead → hug Light CTA → 343×364 slot. **Campaign (award/promo/TV):** title (optional partner) → visual → body (+ T&Cs) → full-width dual CTA.  
2. **Dual CTA:** never squeeze two half-buttons on 375 — stack 343. Homepage hero is the exception (single 162 centered).  
3. **Equal USP rails:** snap carousel (peek 250 / center 270) + dots. **Compact benefit lists** stack 343×134.  
4. **Quote/TV cards:** ≥1200 5-col 250×360 rail; below 1200 one full-width stacked card (never 2-up). Homepage compact 343×118 is the same type, different card size.  
5. **Instruments:** 6-up desktop → **2×3** mobile (**165×165**, gap 12).  
6. **Tier cards:** row desktop → stack 335 mobile.  
7. **Download bar:** full-bleed 375×69, horizontal scroll.  
8. **Section padding / gutters:** 120/80 desktop, **60/16** mobile (content **343**).  
9. **Comparison:** Zero = **tabs + one panel**; Pro = **two stacked tables**, no tabs.  
10. **Bento USP:** unequal grid desktop → illustration + stacked compact cards.  
11. **Market hero CTA:** Primary/**Light**, **hug width** (~163), not 343.  
12. **Steps:** any desktop orientation → **vertical** on 375.

---

## Agent / human rules

1. Pick a **recipe** (award / promo / platform / **market**) then fill content — don’t invent a new page chrome.  
2. Prefer composing **ready blocks**; only add planned modules when the campaign needs them.  
3. Keep legal lines (T&Cs, * footnotes on spreads) in content, visible near claims.  
4. Same DS atoms as homepage; landings are **shorter, offer- or market-shaped** subsets.  
5. AU vs EN is copy/legal, not a different layout system.  
6. Market landings swap **symbol + chart + USP set**; keep structure.

---

## Default MVP slug recipes (ready inventory only)

See **`assembly.md`** for Figma section → substitute map. Do **not** nest a table inside hero.

**A. Trust / award** (BrokerChooser-like)  
`hero` → `features` usp → optional `steps` / `reviews` / `faq` → `cta` → `disclaimer`  
(TV spreads / instruments = planned → skip)

**B. Promo offer** (TV Promo-like)  
`hero` → `steps` → `features` usp → `cta` → `disclaimer`  
(tiers / marquee / instruments = planned → skip)

**C. Platform** (TradingView-like)  
`hero` → `features` usp → `steps` → `faq` → `cta` → `disclaimer`  
(download bar / checklist = planned → skip)

**D. Market / instrument** (M1 Forex template / Gold / crypto / indices)  
`market-hero` → `features` usp → `table` (instruments) → optional `table` compare → optional `logo-marquee` → `steps` → optional `spread-cards` → `reviews` → optional `faq`  

Locked references (2026-08-17):
- **Crypto:** `atmosphere: "crypto"` + `quotes[]` in the hero. No `spread-cards`.
- **Equity Indices:** `atmosphere: "indices"` (no hero quotes) + `spread-cards` above reviews.

Header + footer CTAFooter are global chrome (skip duplicate end `cta`).

Reuse map: `design-system/shared-blocks.md`.  
Reference implementations: `landings/crypto/content.ts`, `landings/equity-indices/content.ts`.
