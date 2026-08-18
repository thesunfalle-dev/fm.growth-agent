# Implementation playbook (agents)

**Purpose:** How to implement Fusion Markets landings **correctly** — process, Figma→code rules, verification, and mistakes already paid for (Crypto LP session, 2026-08-12).

**Read order:** `AGENTS.md` → this file → `docs/WORKFLOW.md` → relevant `design-system/*` → ship.

---

## 1. Mental model

```
Brief / TZ  ──content only──►  landings/{slug}/content.ts
Figma DS    ──structure only─► components/blocks + components/ui + tokens
Chrome      ──always──────────► SiteHeader + SiteFooter (layout.tsx)
Ship        ──production──────► commit → push → CI deploy → fm.growth-agent.org/{slug}/
```

| Layer | Owns | Does not own |
|-------|------|----------------|
| **TZ / brief / user story** | All copy, numbers, claims, competitor lists, which instruments | Colors, spacing, component choice |
| **Figma Website Redesign FM 2.0** | Layout, spacing, anatomy, variants, interactions | Campaign copy (sample text is fake) |
| **Repo design-system** | Tokens, inventories, pattern catalog, shipped components | Live legal claims without compliance check |
| **fusionmarkets.com** | Live social URLs, product truth when asked | Free license to invent new section chrome |

**Hard rule (structure vs content):**  
Figma shows *how the block is built*. Never paste Figma placeholder marketing text into landings. See `design-system/assembly.md`.

---

## 2. End-to-end process (every UI task)

### Phase A — Orient (before any code)

1. Read `AGENTS.md` orientation list.
2. Identify **intent** of each section (hero, USP, instruments, compare, steps, FAQ, chrome).
3. Open **canonical Figma node** from:
   - user link, or
   - `pattern-catalog.md` / `page-recipes.md` / `header-footer.md` / block comments.
4. Match to **inventory only** (`block-inventory.json` / `component-inventory.json`).  
   If missing → extend inventory first (do not freestyle CSS per landing).

### Phase B — Structure from Figma (not vibes)

1. Call Figma MCP **`get_design_context`** on the **exact node** (after loading figma-design-to-code skill).
2. From context, extract a **measurable contract**:
   - stack / rail / matrix / accordion
   - fixed widths (e.g. USP card 276–296, footer stack 215, help 332)
   - gaps (title→content 60, USP card gap 24, footer stack 56 / col 100)
   - typography roles (H2 48, col title 20, body 14/16 Light)
   - colors as **tokens or Figma primitives already in tokens** (`#0D1350` = Blue/500, purple gradient = Primary)
3. Download **assets from Figma URLs** in the MCP response (icons, illustrations, badges).  
   Do **not** invent Material substitutes when Figma ships a custom SVG (language globe, social icons, TV badge).
4. Register / update pattern in `pattern-catalog.md` + `CHANGELOG.md` + `sources.md` when the screen is new or meaningfully refined.

### Phase C — Content from TZ

1. Fill `landings/{slug}/content.ts` from TZ only.
2. If TZ is silent: short neutral placeholder + flag — never Figma lorem / sample competitors.
3. Claims → `brand/compliance.md`.

### Phase D — Implement in shared components

1. Put visual logic in `components/ui/*` or `components/blocks/*`, **not** in content files.
2. Prefer tokens. If Figma needs a one-off pixel value for chrome parity (footer mega layout), document it next to the CSS and map to a token when stable.
3. Client components only when needed: search filter, carousel arrows, FAQ animation.

### Phase E — Verify before “done”

Do **not** declare done from a single screenshot of the happy path.

| Check | How |
|-------|-----|
| Structure matches Figma | Side-by-side: Figma screenshot vs local/prod; measure gaps/widths in DevTools or Playwright |
| Content is TZ | Grep landing for known Figma sample strings (e.g. Coinbase) — must be absent |
| Full-bleed bands | Hero/brand BG: section `width 100%`, **no white margins baked into PNG** |
| Rails / carousels | USP: cards peek off-screen; nav matches Figma (plain arrows vs pills) |
| Equal heights | Flex `align-items: stretch` + **no** `height: 100%` on flex children that breaks stretch |
| Cascading CSS | Generic rules (e.g. `.ui-card__media { margin-bottom }`) must not override specific USP/media rules — check specificity **order** |
| Chrome | Header language icon = Figma SVG; footer stacks 3×215; social **hrefs from live site** |
| Build | `npm run validate:design && npm run build` |
| Ship | commit → push → wait for GH Actions; hard-refresh prod |

Production SoT: `https://fm.growth-agent.org/{slug}/` (not only localhost).

### Phase F — Record

1. `design-system/CHANGELOG.md` for DS/visual changes.
2. `docs/DECISIONS.md` if process or SoT changed.
3. Update this playbook **anti-patterns** if a new failure mode appears.

---

## 3. Figma → code checklist (pixel-intent)

Use this when user says “1:1” or “as in Figma”.

### Measure, don’t guess

From Figma (design context or inspect):

```
[ ] Frame width / content max (often 1280 inside 1440 with pad 80)
[ ] Section vertical pad
[ ] Title size / weight / color / alignment (left vs center)
[ ] Title → content gap
[ ] Child layout: row | column | grid | horizontal scroll rail
[ ] Child fixed sizes + gaps
[ ] Interactive states (disabled gray / active purple)
[ ] Assets: export every icon (do not approximate with Material if Figma has custom art)
```

### Compare with code

```
[ ] Playwright or DevTools: getComputedStyle for the same props
[ ] Screenshot section, not whole page only
[ ] Desktop 1440 first (this project’s primary desktop landing width)
```

### Fonts

| Role | Repo uses |
|------|-----------|
| Display / headings / CTA / nav | **Plus Jakarta Sans** (500/600/700) |
| Body / captions / tables | **Roboto** (300/400/500/700) |

Do **not** load Noto Sans or invent a third family. Deposit Options / Market Header Figma is Plus Jakarta + Roboto.

### Colors

Map Figma names to tokens:

| Figma | Typical token / value |
|-------|----------------------|
| Blue/500 text | `--primitive-color-blue500` / `#0D1350` |
| Purple gradient | `--color-action-gradient-*` / `#742CCE` → `#6B4AFF` |
| Purple/50 band | `--primitive-color-purple50` |
| Gray/100 surfaces | `--primitive-color-gray100` |
| FAQ / help borders | blue100 `#E5EAFF` |

**Social icons in Figma footer are purple gradient**, not navy text color.  
**Contact icons** may be navy. Always open the asset fill — do not assume.

---

## 4. Landing block recipes (market / crypto)

Canonical market stack (locked 2026-08-17 — see `shared-blocks.md` and `landing-patterns.md` recipe D):

1. `market-hero` + `atmosphere`: `brand` | `crypto` | `indices` | `energy`
2. `features` + `variant: "usp"` (max 4 visible → horizontal rail + nav if more)
3. `table` instruments (`showSearch`, scrollable shell)
4. `table` + `variant: "compare"` (optional — crypto)
5. `logo-marquee` (optional — indices)
6. `steps` horizontal process
7. `spread-cards` (optional — when quotes are **not** in the hero)
8. `reviews`
9. `faq` (optional — crypto)
10. Site footer (global) — not a content disclaimer inventing “Growth Agent preview” unless product asks

Reference slugs: `landings/crypto/content.ts`, `landings/equity-indices/content.ts`, `landings/energy-commodities/content.ts`.

---

## 5. Chrome: header & footer

**Docs:** `design-system/header-footer.md`  
**Canonical Figma:** Footer AU `24400:154127` / `15866:27010`, Header_Desktop `15086:11710`.

### Header

| Element | Rule |
|---------|------|
| Logo | `Logo` + `public/brand/logo-*.svg` |
| Nav | `lib/navigation.ts` `primaryNav` |
| Language | **Figma Language SVG** (`public/brand/language.svg`), not Material `language` ligature |
| Search / menu (mobile) | Material OK if Figma uses system icons |

### Footer

| Element | Rule |
|---------|------|
| Structure | CTA band → brand+social → **3 stacks × 215** (gap 56 in stack, 100 between) + help 332 → bar → legal |
| Social icons | Figma SVGs with **gradient fills**; layout gap 24 / label gap 28 |
| Social **hrefs** | Scrape **live** `fusionmarkets.com` footer — do not invent handles |
| TV badge | Figma composite asset |
| Contact card | Icon **above** text, centered, gap 16 / 32 (not horizontal icon+label) |
| Need help? | Centered title + Secondary CTA full width of inner column |
| Legal | FM regulatory stack, not internal Growth Agent boilerplate (unless explicitly required) |

---

## 6. Component-level rules (pain points)

### Hero + brand background

- Section must be **full viewport width** (no side gutters).
- Decorative BG image often has **white canvas baked into the PNG**.  
  **Fix:** crop + make near-white transparent; keep solid purple underlay on the section.  
  Do not only set `background-size: cover` and hope.

### USP cards (`features` usp)

- Soft purple section band.
- Max ~4 visible; **more cards = horizontal scroll**, never wrap to row 2.
- Cards **peek past the right edge** of the content column (bleed rail).
- Nav: Figma often uses **plain arrows** (inactive gray / active purple), not circular filled pills — check the node.
- **No gap** between illustration tile and text body:  
  generic `.ui-card__media { margin-bottom }` must **not** win over `.ui-card__media--usp` (specificity + source order).
- Equal card heights: parent `align-items: stretch`; avoid `height: 100%` on flex children when parent height is content-sized.

### Markets table

- Centered section title + table shell max width.
- Search is a **real client filter**, not a decorative fake field.
- Enough rows for vertical scroll when the shell has `max-height`.

### Compare matrix

- Often sits on **Gray/100** section background.
- Centered title + matrix; flexible column count from content.

### Steps (how it works)

- Marketing default = **horizontal** process, not vertical timeline.
- Connectors: continuous segment from circle center to next (width 100% of step column), not broken half-lines.

### FAQ

- Centered band, max width ~1000.
- Last item: **no** bottom divider.
- Prefer smooth open/close (client accordion), not abrupt native `<details>` only.

### CSS layout traps

1. `.ui-section--default > .ui-container { align-items: stretch }` overrides band `align-items: center` — measure actual centering of titles/tables.
2. Container `max-width: 1280` + padding vs Figma “outer 80 + inner 40” — match **content start edge**, not only max-width number.
3. Never edit `design-system/generated/*` by hand.

---

## 7. Assets workflow

```
Figma MCP get_design_context
  → asset URLs (expire ~7 days)
  → curl into public/brand/… or public/images/…
  → commit binaries
  → reference by path in components / navigation
```

| Asset type | Location |
|------------|----------|
| Logo, language, social, footer icons | `public/brand/` |
| Illustrations (USP) | `public/images/illustrations/` |
| Market symbols | `public/images/markets/` |
| Brand backgrounds | `public/images/backgrounds/` |

**Never** hand-draw social glyphs when Figma export exists.  
If MCP returns empty paths, re-fetch or export from Figma desktop; do not silently ship wrong Material icons for brand chrome.

---

## 8. Ship pipeline

```bash
npm run generate:tokens   # if tokens changed
npm run validate:design
npm run build
git add … && git commit && git push origin main
# Wait for GitHub Actions → Cloudflare Pages
# Verify https://fm.growth-agent.org/{slug}/ with hard refresh
```

CI may fail intermittently on `next/font` Google fetch — **rerun failed job**; not a signal to rewrite fonts.

Local `serve out` is optional for measurement; production remains the stakeholder SoT.

---

## 9. Anti-patterns (real failures from Crypto LP)

Use as a **pre-merge self-review**. Each row = something that already shipped wrong once.

| # | What went wrong | Correct approach |
|---|-----------------|------------------|
| 1 | Figma sample copy (Coinbase, “Zero Commissions” placeholder) used as content | TZ only; Figma structure only |
| 2 | USP wrapped to second row | Horizontal rail + scroll; max 4 visible |
| 3 | USP nav as purple/gray **circles** | Check Figma — plain gradient/gray arrows |
| 4 | Gap between USP image and text | Specificity: USP media margin 0 must beat generic card media margin |
| 5 | Unequal USP card heights | Flex stretch; drop `height: 100%` that blocks stretch |
| 6 | Hero white side “crop” | PNG had white margins — crop + transparency + purple underlay |
| 7 | Sections “not centered” | Parent `align-items: stretch` killed band centering — fix container flex |
| 8 | Steps connector 2→3 incomplete | Connector width 100% of step column from center |
| 9 | Table search decorative | Client filter on input |
| 10 | Footer flat 9-column grid | Figma 3 vertical stacks × 215, gap 56/100 |
| 11 | Social icons forced navy | Figma fills are **purple gradient** |
| 12 | Contact row = icon left of text | Figma = icon **above** text, centered |
| 13 | Language = Material ligature | Figma Language SVG |
| 14 | Invented social hrefs | Scrape fusionmarkets.com |
| 15 | Fake “Growth Agent preview” legal as main disclaimer | Use FM-style legal stack unless product requires internal note |
| 16 | Declared done from one screenshot | Measure + multi-section + prod hard refresh |
| 17 | Assumed Always-approve = can always write | Host may still force read-only Ask mode — user toggles; agent explains difference |
| 18 | Recased shared H2 per slug (`How it works` vs `How It Works`) so the same block looked like different type | Block chrome lives in `lib/block-defaults.ts`. Omit `title` on `steps` / `logo-marquee` / `cta`. Step titles: sentence case. |

---

## 10. Crypto landing reference (worked example)

| Item | Value |
|------|--------|
| Slug | `crypto` |
| Content | `landings/crypto/content.ts` (TZ) |
| Stack | hero brand → USP ×6 rail → instruments table → compare → steps → FAQ |
| Chrome | Shared header/footer |
| Prod | https://fm.growth-agent.org/crypto/ |
| Key Figma nodes | USP rail `29987:341441`; steps `29987:339011`; FAQ `29987:341618`; footer `24400:154127`; header `15086:11710` |

When building the next market landing (gold, FX, …): **reuse the same blocks and chrome**; only `content.ts` changes.

---

## 11. Definition of done (UI task)

- [ ] Inventory-only blocks; no one-off landing CSS
- [ ] Content matches TZ; no Figma sample copy
- [ ] Figma structure measured (gaps/sizes/assets)
- [ ] CSS cascade checked for overrides
- [ ] Desktop 1440 verified (and mobile if task touches adaptive)
- [ ] `validate:design` + `build` green
- [ ] Pushed; prod deploy green; hard-refresh checked
- [ ] CHANGELOG / DECISIONS / this playbook updated if process or DS changed

---

## 12. Related docs

| Doc | Role |
|-----|------|
| `AGENTS.md` | Entry contract |
| `docs/WORKFLOW.md` | Day-to-day ship steps |
| `docs/DECISIONS.md` | ADR-lite SoT choices |
| `design-system/assembly.md` | Structure vs content |
| `design-system/header-footer.md` | Chrome specs |
| `design-system/pattern-catalog.md` | Reusable patterns |
| `design-system/landing-patterns.md` | Campaign recipes |
| `brand/compliance.md` | Claims / legal voice |
