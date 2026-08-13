# Homepage composition patterns (AU)

**Purpose:** Homepage is the **primary catalog of reusable page blocks**. Landings re-use the same section patterns with different content — they do not invent parallel designs.

**Figma SoT (composition):**

| Viewport | Node | URL |
|----------|------|-----|
| Desktop Homepage - AU | `27873:297355` | https://www.figma.com/design/5PQJiXq7xZNGCqV1XNvKro/Website-Redesign-FM-2.0?node-id=27873-297355 |
| Mobile - AU | `27873:296438` | https://www.figma.com/design/5PQJiXq7xZNGCqV1XNvKro/Website-Redesign-FM-2.0?node-id=27873-296438 |

DS atoms (buttons, USP cards, steps, tabs, header/footer…) still live in their own frames; this doc is **page-level assembly**.

---

## Core idea: structure vs content

| Layer | Changes per page? | Examples |
|-------|-------------------|----------|
| **Structure (design block)** | No — same Figma component / same layout recipe | Title + lead + Tabs + TV_Card rail; CTAFooter dual CTA; How it works split + steps |
| **Content (data)** | Yes | Copy, which market tabs, which pairs on cards, step titles, CTA labels/hrefs, side image |
| **Optional layout mode** | Sometimes | Desktop split vs mobile stack; rail vs stack — still **one** block type |

**Wrong:** “This landing needs spreads, so invent a markets `table` that looks different.”  
**Right:** “This is the **Our spreads** homepage block with crypto/forex **data**.”

When you see the same intent on a market/promo page, map it back to the homepage (or shared) frame first.

---

## Canonical homepage blocks (start here)

These three are the teaching examples for “same block, different content”:

### 1. Our spreads → planned block `spread-cards`

| | |
|--|--|
| **Figma (home)** | [`27873:297368`](https://www.figma.com/design/5PQJiXq7xZNGCqV1XNvKro/Website-Redesign-FM-2.0?node-id=27873-297368) — frame “Spreads” |
| **Structure** | H2 + lead → `Tabs_Text` (market switcher) → horizontal **TV_Card-Desktop** rail (bid/ask/spread + Trade) → footer link to Spreads Tool |
| **Content knobs** | Title/lead text; tab labels + default tab; card symbols/prices/spreads; link label/href |
| **Also on** | BrokerChooser, TV Promo, Gold (sometimes single-instrument), crypto TZ “our spreads” |
| **Repo** | `spread-cards` **planned**. Do **not** substitute a full markets `table` and call it the same block — different DS piece (Tables frame vs TV cards). Temporary substitute only with explicit note. |

### 2. Ready to start trading? → `cta` / footer CTA band

| | |
|--|--|
| **Figma (home)** | [`27873:297571`](https://www.figma.com/design/5PQJiXq7xZNGCqV1XNvKro/Website-Redesign-FM-2.0?node-id=27873-297571) — **Footer** instance → **CTAFooter-Desktop** (top band) |
| **Structure** | Light surface band; title left; Primary + “or” + Secondary right (desktop); stack on mobile |
| **Content knobs** | Title (default “Ready to start trading?”); primary/secondary labels + hrefs |
| **Also on** | Almost every marketing page (end conversion) + mid-page CTA variants |
| **Repo** | Global in `SiteFooter`; mid-page via block `cta` (`CtaBand`). Prefer matching **CTAFooter** layout (row: title \| actions), not a one-off centered stack when Figma is the footer band. |

### 3. How it works → block `steps`

| | |
|--|--|
| **Figma (home)** | [`31517:366918`](https://www.figma.com/design/5PQJiXq7xZNGCqV1XNvKro/Website-Redesign-FM-2.0?node-id=31517-366918) — “How it Works - 5” |
| **Structure** | Desktop **split**: left H2 + lead; right vertical **step** instances + dual CTA under steps; optional large side visual |
| **Content knobs** | Title/lead; 3 step title+body; CTA labels; image asset |
| **Also on** | TV Promo, platform pages, market landings, crypto TZ |
| **Repo** | `steps` ready (step atoms). Gap: full homepage **split + side image + CTAs under steps** as one composed band — still one block, richer props/layout, not a new type. |

---

## Section map (same story both viewports)

| # | Section (intent) | Figma pieces | Repo today | Reuse notes |
|---|------------------|--------------|------------|-------------|
| 0 | Chrome | Header_Desktop / Header_Mobile | `SiteHeader` | Sticky; Material menu/search on mobile. Header **57** / pad **16** |
| 1 | Hero | H1 + lead + primary CTA + hero visual/animation | `hero` + optional `brandBackground` | **Mobile reorders** (P7). Compact centered Primary **162×44** — not full-bleed |
| 2 | Social proof | Trustpilot / TV / Google ratings; video/award tiles | — | Mobile: ratings **overflow-x**; video 343×190 then award 343×190 + **Navigate** dots. `ratings-strip` + `media-carousel` planned |
| 3 | **Our spreads** | Tabs + TV_Card row / mobile stack | `spread-cards` planned | Canonical: `27873:297368` — **not** markets table. Mobile: Tabs_Text overflow + **4× TV_Card-Mobile 343×118** |
| 4 | Why different | USP cards rail | `features` + `variant: "usp"` | Desktop scroll if >4; mobile **carousel**: peek 250 / center 270 + dots |
| 5 | **How it works** | Title + vertical steps + dual CTAs + device visual | `steps` | Canonical: `31517:366918` split. Mobile: title → phones visual → vertical steps → full-width dual CTA |
| 6 | Funding methods | Logo marquee | `logo-marquee` | Mobile visible instance `28673:314863`: dark band, **two staggered logo rows** |
| 7 | Markets / lowest cost | Instrument cards | `instrument-grid` planned | Mobile **2×3**, tiles **165×165**, gap 12 |
| 8 | Platforms | Tabs + copy + Accordion cards + mock | `platforms` planned | Mobile: Tabs_Icon overflow → mock → body → accordion 343 |
| 9 | Download / apps | Store / platform downloads | `download-bar` planned | Full-bleed **375×69**, horizontal scroll (sits under platforms) |
| 10 | Reviews / video | Awards, video, social | planned | Bundled with §2 on mobile homepage |
| 11 | **Ready to start** + footer | CTAFooter + mega footer | `SiteFooter` + `cta` | Mobile Footer instance `27873:296885` (~3068). CTA band = `CTAFooter-Mobile` when present |

### Mobile AU stack (375 × ~10073) — measured `27873:296438`

```text
iOS chrome (Figma mock, skip)
→ Header_Mobile 57
→ hero (title → visual → compact CTA → lead)
→ ratings overflow + video/award stack
→ spread-cards (tabs overflow + TV stack)
→ features usp carousel
→ steps (visual + vertical + dual full-width CTA)
→ logo-marquee (2-row ticker)
→ instrument-grid 2×3
→ platforms + download-bar
→ Mobile Footer
```

Same **types** as desktop. Only layout mode and hero order change.

Copy, entity (AU/EN), and which instruments appear are **content**, not new block types.

---

## Composition patterns (reuse these)

### P1 — Section chrome
- H2 + optional lead  
- Content width **1280** / gutter **80** desktop; **16** pad mobile  
- Vertical section rhythm **120** / **60** (spacing tokens)

### P2 — Split section (desktop only layout)
- Left: title + lead (and sometimes media)  
- Right: steps, accordion, or content list  
- **Mobile:** single column — title → media → content → CTAs  

Used by: How it works, Platforms.

### P3 — Card rail
- Desktop: 3–6 cards in a row; **>4 USP → horizontal overflow**  
- Mobile: **snap carousel** + dots **or** vertical stack (depends on card type)  
  - USP → carousel + peeks + dots  
  - Spreads TV cards → **stacked list** (not carousel)

### P4 — Tabs as section switcher
- Spreads markets, platform family  
- Same tab component; allow **horizontal overflow** of tab list on small screens  

### P5 — Dual CTA
- Primary + Secondary side-by-side desktop  
- Full-width **column stack** mobile  

Used by: How it works, footer CTA band.

### P6 — Logo / proof strip
- Infinite or long logo row (funding methods)  
- Not a static equal grid of product cards  

### P7 — Hero order (special case)
**Do not** only collapse columns.

| Desktop | Mobile |
|---------|--------|
| Title → lead → CTA \| visual | Title → **visual** → **CTA** → lead |

Implement as layout order / grid `order`, not a second block type.

---

## Suggested landing subset (MVP)

When building a **campaign landing** (not full homepage), default stack:

1. Header (layout)  
2. `hero` (consider mobile order + optional media later)  
3. `features` `variant: "usp"` (3–4 items)  
4. `steps` (how it works)  
5. Optional: table / proof when needed  
6. `faq` if objections matter  
7. Footer CTA + footer (layout)

Skip until needed: marquee funding, full platform accordion, TV spreads rail, awards video.

---

## Block inventory crosswalk

| Pattern / section | Block or component | Status |
|-------------------|--------------------|--------|
| Hero | `hero` | ready (media + mobile order = gap) |
| USP Why Fusion | `features` + `usp` | ready (carousel dots = gap) |
| How it works | `steps` | ready (split + side visual = gap) |
| FAQ | `faq` | ready |
| Mid/end CTA | `cta` or footer CTA | ready |
| Disclaimer | `disclaimer` | ready |
| Markets table | `table` | ready (spreads tool style) |
| Spreads TV cards | — | planned |
| Instrument tiles | — | planned (sizes in cards.md) |
| Logo marquee | — | planned |
| Ratings strip | — | planned |
| Platform accordion | — | planned |
| Media / awards carousel | — | planned |

---

## Agent / human rules

1. Prefer **reusing** inventory blocks over inventing homepage-only one-offs.  
2. Homepage Figma is **composition reference**, not mandatory full clone for landings.  
3. Adaptive: same block types; change **layout mode** (stack / rail / split), not block name.  
4. USP cards only for Fusion USPs (Cards frame rule).  
5. Base UI icons = Material only; illustrations = Images catalog.  
6. When adding a missing homepage piece, extend inventory + changelog — don’t hardcode a full page shell.

---

## Related docs

- **Campaign landings (3 recipes):** `landing-patterns.md`  
- Spacing: `spacing-layout.md`  
- Responsive: `responsive-rules.md`  
- Cards / USP: `cards.md`  
- Steps / FAQ: `sections.md`  
- Header / footer: `header-footer.md`  
- Images: `images.md`  
