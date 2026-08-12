# Page recipes (full-screen stacks)

**Purpose:** When a full Figma page is shared, record the **ordered section stack** and which **patterns** each section uses. Content (copy, symbols, CTAs) changes; the recipe stays.

**Related:** `pattern-catalog.md` (block structure), `landing-patterns.md` (campaign families), `assembly.md`.

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

| # | Section (intent) | Pattern `type` | Structure notes |
|---|------------------|----------------|-----------------|
| 0 | Chrome | header/footer | Header_Desktop |
| 1 | Market header | `market-hero` | BG Image + H1 + pitch + **Primary/Light** + **TV-Desktop** chart card |
| 2 | What is [market]? | `education-split` | Icon/Key Icons + title **\|** multi-paragraph body (Layout / 3) |
| 3 | Why trade [market] | `features` usp | 4× USP Cards - Desktop row |
| 4 | Our … instruments | `table` + tabs | H2 + **Tabs_Text** + Markets DataTable (Forex-Desktop rows) + footnote |
| 5 | FAQs | `faq` | FAQ-Desktop accordion |
| 6 | Ready to start + mega footer | `cta` / footer | Footer instance (CTAFooter) |

**Rules:**  
- Spreads-on-home (`spread-cards` TV cards) ≠ this instruments **table**.  
- Hero is **market-hero**, not plain centered products hero.  
- Content only: symbol list, FAQ Q&As, market name in titles.

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

**Rules:** Instrument tiles = same component family as homepage “lowest cost” markets row. Platform block reuses homepage/platform landing pattern, not a one-off.

---

### Recipe A2 — Account product page (Zero)

**Figma:** Zero Account `26258:273793`  
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

**Rules:** Same `steps` + `features` + `faq` as Zero; **no** comparison-table required.

---

### Recipe A4 — Fusion Pro (wholesale / eligibility)

**Figma:** Fusion Pro `26258:285369`

| # | Section | Pattern | Notes |
|---|---------|---------|--------|
| 1 | Pro hero | `hero` | “Welcome to Fusion Pro” + Primary + illustration |
| 2 | Benefits of Pro | `bento-usp` or `features` | Large + small USP Cards grid |
| 3 | Important considerations | `education-split` | Long-form band |
| 4 | Retail vs Pro | `comparison-table` | Comparison Table - No Hover / multi criteria |
| 5 | Related product (e.g. Swap Free) | content band / `features` | Cross-sell section |
| 6 | Footer | `cta` / footer | |

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

## How to extend this file

When the next batch of screens arrives:

1. Add a recipe table (section → pattern).  
2. Update **Also seen on** in `pattern-catalog.md`.  
3. Touch `block-inventory.json` only if new `type` or props appear.  
4. Changelog + sources.
