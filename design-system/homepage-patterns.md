# Homepage composition patterns (AU)

**Purpose:** Reference for how Website Redesign assembles a real page — section order, reuse of DS pieces, desktop vs mobile.  
**Not** a landing content schema. Landings may use a **subset** of these sections.

**Figma SoT (composition):**

| Viewport | Node | URL |
|----------|------|-----|
| Desktop Homepage - AU | `27873:297355` | https://www.figma.com/design/5PQJiXq7xZNGCqV1XNvKro/Website-Redesign-FM-2.0?node-id=27873-297355 |
| Mobile - AU | `27873:296438` | https://www.figma.com/design/5PQJiXq7xZNGCqV1XNvKro/Website-Redesign-FM-2.0?node-id=27873-296438 |

DS atoms (buttons, USP cards, steps, tabs, header/footer…) still live in their own frames; this doc is **page-level assembly**.

---

## Section map (same story both viewports)

| # | Section (intent) | Figma pieces | Repo today | Reuse notes |
|---|------------------|--------------|------------|-------------|
| 0 | Chrome | Header_Desktop / Header_Mobile | `SiteHeader` | Sticky; Material menu/search on mobile |
| 1 | Hero | H1 + lead + primary CTA + hero visual/animation | `hero` + optional `brandBackground` | **Mobile reorders** (see below) |
| 2 | Social proof | Trustpilot / TV / Google ratings; video/award tiles | — | `ratings-strip`, media carousel planned |
| 3 | Spreads | Tabs + TV_Card row / mobile stack | partial `table` only | Need quote/TV cards + tabs strip |
| 4 | Why different | USP cards rail | `features` + `variant: "usp"` | Desktop scroll if >4; mobile **carousel + dots** |
| 5 | How it works | Title + vertical steps + dual CTAs + device visual | `steps` | Desktop **split** (copy \| steps); mobile stack + full-width CTAs |
| 6 | Funding methods | Logo marquee | — | `logo-marquee` planned |
| 7 | Markets / lowest cost | Instrument cards row | instrument sizes only | `instrument` cards planned |
| 8 | Platforms | Tabs + copy + Accordion cards + mock | — | accordion + platform section planned |
| 9 | Download / apps | Store / platform downloads | — | planned |
| 10 | Reviews / video | Awards, video, social | — | planned |
| 11 | Footer CTA + footer | Ready to start + mega footer | `SiteFooter` | Already global |

Entity/AU copy and legal variants are **content**, not new block types.

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

- Spacing: `spacing-layout.md`  
- Responsive: `responsive-rules.md`  
- Cards / USP: `cards.md`  
- Steps / FAQ: `sections.md`  
- Header / footer: `header-footer.md`  
- Images: `images.md`  
