# Landing composition patterns (campaign pages)

**Purpose:** How real **landing pages** are assembled from DS pieces — vs full homepage.  
Use when shipping a campaign slug. No brief schema: these are **visual recipes** from Figma.

**Related:** `homepage-patterns.md` (site home), `responsive-rules.md`, block inventory.

---

## Figma sources

| # | Page | Desktop | Mobile |
|---|------|---------|--------|
| 1 | **BrokerChooser** (award / trust landing) | [`29987:337918`](https://www.figma.com/design/5PQJiXq7xZNGCqV1XNvKro/Website-Redesign-FM-2.0?node-id=29987-337918) | [`29987:342224`](https://www.figma.com/design/5PQJiXq7xZNGCqV1XNvKro/Website-Redesign-FM-2.0?node-id=29987-342224) |
| 2 | **TradingView Promo / AU** (offer: free TV sub) | [`29987:338113`](https://www.figma.com/design/5PQJiXq7xZNGCqV1XNvKro/Website-Redesign-FM-2.0?node-id=29987-338113) | [`29987:342421`](https://www.figma.com/design/5PQJiXq7xZNGCqV1XNvKro/Website-Redesign-FM-2.0?node-id=29987-342421) |
| 3 | **TradingView** (platform product landing) | [`29987:340524`](https://www.figma.com/design/5PQJiXq7xZNGCqV1XNvKro/Website-Redesign-FM-2.0?node-id=29987-340524) | [`29987:342673`](https://www.figma.com/design/5PQJiXq7xZNGCqV1XNvKro/Website-Redesign-FM-2.0?node-id=29987-342673) |

All share: **Header → body sections → Footer (with Ready CTA)**. Entity/AU copy is content.

---

## Shared landing DNA (all three)

| Pattern | Desktop | Mobile |
|---------|---------|--------|
| **Chrome** | Header_Desktop 80 | Header_Mobile 57 |
| **Hero** | Split: copy left + visual right; often **dual CTA** (Primary + Secondary) | Title → **image** → body → **stacked full-width CTAs** |
| **Section rhythm** | ~120 pad, content ~1280 / gutter 80 | 16 side pad, content 343 |
| **Spreads / instruments** | Tabs + TV card **row** or instrument row | Tabs overflow + TV **stack**; instruments **2×3 grid** |
| **USP** | 4 cards equal row (or rail) | Carousel + dots |
| **Steps** | Vertical (sometimes with side visual on home; on landings often list + dual CTA) | Vertical + dual CTA stack |
| **Proof** | Reviews rail / Trustpilot block | Same, horizontal review cards |
| **Footer** | Site footer AU/EN | Mobile footer |

Hero mobile order matches homepage: **visual before CTAs** more often than desktop (BrokerChooser / TV Promo / TV all put image mid-stack before CTAs).

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

### Adaptive notes
- Hero: partner mark above title; image 540×531 desktop / 280×275 mobile  
- Dual CTA: side-by-side 224px desktop → full width 343 stack mobile  
- Reviews: desktop multi-card rail; mobile same rail, narrower cards (~280)  
- Spreads: same as homepage pattern (row vs stack)  
- Instruments: desktop 6-up; mobile **2-col grid** 165×165  

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

### Adaptive notes
- Hero mobile: title → image → offer text + T&Cs → CTAs  
- Tier cards: desktop 3-col; mobile full-width stack  
- Rest = homepage-like rails/grids  

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

### Adaptive notes
- Download bar always full bleed; mobile = horizontal icon+label scroller  
- Feature checklist: desktop likely image | content; mobile image on top then list  
- Subscription options on mobile: cards + **Navigate dots** (carousel) on full TV page  

### Reuse for similar campaigns
Platform / product landings (MT4, cTrader, TV):  
`hero` → `download-bar` → optional tiers → usp → `checklist-feature` → spreads → steps → reviews → `faq` → footer.

---

## Cross-landing comparison

| Building block | BrokerChooser | TV Promo | TradingView |
|----------------|---------------|----------|-------------|
| Award / partner mark in hero | ✅ | — | — |
| Offer + T&Cs in hero | — | ✅ | — |
| Dual CTA hero | ✅ | ✅ | ✅ |
| Review rail | ✅ | ✅ | ✅ |
| Spreads + TV cards | ✅ | ✅ | ✅ |
| Instrument grid | ✅ | ✅ | — (or elsewhere) |
| USP cards | ✅ | ✅ | ✅ |
| Steps / how it works | — | ✅ | ✅ |
| Funding marquee | — | ✅ | — |
| Tier / plan cards | — | ✅ | ✅ |
| Download OS bar | — | — | ✅ |
| Checklist + image | — | — | ✅ |
| FAQ | — | — | ✅ |

**Common core for most FM landings:**  
Header · **Hero (split / mobile reorder)** · **Spreads or instruments** · **USP** · **Steps** (often) · **Reviews** · Footer.

**Optional modules:** award mark, promo tiers, marquee, download bar, checklist, FAQ.

---

## Map to repo (ready vs gap)

| Module | Ready now | Gap |
|--------|-----------|-----|
| Header / footer / footer CTA | ✅ | — |
| Hero + dual CTA | ✅ partial | media slot; mobile order; partner/award eyebrow; T&Cs link |
| USP cards | ✅ `features` usp | carousel dots polish |
| Steps | ✅ `steps` | — |
| FAQ | ✅ `faq` | — |
| Markets table | ✅ `table` | not same as TV quote cards |
| Review rail | planned `testimonials` / `ratings-strip` | review **card** + Trustpilot header |
| TV / spread cards | planned `spread-cards` | — |
| Instruments | planned `instrument-grid` | mobile 2-col |
| Logo marquee | planned `logo-marquee` | — |
| Tier / plan cards | planned content cards | icon + title + multi-line body |
| Download bar | planned | OS icon row |
| Checklist feature | planned | image + check rows + CTAs |

---

## Adaptive checklist (landings)

1. **Hero:** desktop split; mobile title → media → copy → full-width CTAs (dual stack).  
2. **Dual CTA:** never squeeze two half-buttons on 375 — stack.  
3. **Card rails (USP, reviews):** horizontal snap + arrows/dots on small screens.  
4. **Quote/TV cards:** stack on mobile, row on desktop.  
5. **Instruments:** 6-up desktop → **2×3** mobile (165).  
6. **Tier cards:** row desktop → stack (or carousel) mobile.  
7. **Download bar:** always allow horizontal scroll on mobile.  
8. **Section padding / gutters:** 120/80 desktop, 60/16 mobile.

---

## Agent / human rules

1. Pick a **recipe** (award / promo / platform) then fill content — don’t invent a new page chrome.  
2. Prefer composing **ready blocks**; only add planned modules when the campaign needs them.  
3. Keep legal lines (T&Cs, * footnotes on spreads) in content, visible near claims.  
4. Same DS atoms as homepage; landings are **shorter, offer-shaped** subsets (+ promo-specific modules).  
5. AU vs EN is copy/legal, not a different layout system.

---

## Default MVP slug recipes

**A. Trust / award** (BrokerChooser-like)  
`hero` → reviews (when built) or skip → usp → steps optional → faq optional → footer  

**B. Promo offer** (TV Promo-like)  
`hero` (+ legal) → content/tier cards → steps → usp → footer  

**C. Platform** (TradingView-like)  
`hero` → download strip (later) → usp → steps → faq → footer  

Until review/spread/instrument modules exist, substitute: hero + usp + steps + faq + table if needed.
