# Landing assembly contract (ready-only)

**Purpose:** Campaign pages are **reuses of homepage / shared Figma blocks** with different content — not new layouts per slug. Code: ordered list of types from `block-inventory.json`.

**Related:** `pattern-catalog.md` (**register patterns here** when screens arrive), `homepage-patterns.md`, `block-inventory.json`, `landing-patterns.md`, `sections.md`, `tables.md`, `cards.md`.

---

## Structure vs content (read this first)

| | Structure | Content |
|--|-----------|---------|
| **What** | Layout, components, spacing, interaction pattern | Strings, numbers, images, hrefs, which rows/cards |
| **Source** | Homepage (or shared DS) Figma section | **Brief / TZ / user story only** |
| **When shipping** | Reuse one inventory block | Fill props only |

**Hard rule:** Figma shows **how blocks are built** (composition, spacing, card anatomy).  
**Do not copy Figma placeholder / sample marketing copy** into `landings/*/content.ts`.  
Titles, body, table cells, FAQ Q&A, competitor names, spreads → always from **TZ / brief**.  
If TZ is silent, use a short neutral placeholder and flag it — never invent from Figma lorem.

**Process:** Full agent process, verification, and anti-patterns → `docs/IMPLEMENTATION_PLAYBOOK.md`.

Examples from homepage (same design everywhere, data changes):

| Intent on any page | Canonical Figma | Inventory |
|--------------------|-----------------|-----------|
| “Our / here’s our / tight spreads” | [Our spreads](https://www.figma.com/design/5PQJiXq7xZNGCqV1XNvKro/Website-Redesign-FM-2.0?node-id=27873-297368) tabs + TV_Card rail | `spread-cards` (planned) — **not** invent a different table layout |
| “Ready to start trading?” | [CTAFooter](https://www.figma.com/design/5PQJiXq7xZNGCqV1XNvKro/Website-Redesign-FM-2.0?node-id=27873-297571) on Footer | `cta` / footer band |
| “How it works” | [How it Works - 5](https://www.figma.com/design/5PQJiXq7xZNGCqV1XNvKro/Website-Redesign-FM-2.0?node-id=31517-366918) split + steps | `steps` |

More screens will extend this map; the rule stays: **spot the repeating block → reuse → swap content.**

---

## Hard rules for agents

1. **Homepage first.** Before designing a section, find the same intent on homepage (or Final Pages reuse of that component). Copy that structure.
2. **Compose, don’t invent.** Only `type` values listed under `blocks` in `block-inventory.json` may appear in `landings/*/content.ts`.
3. **No nested blocks.** Do not embed a `table` (or any other section) inside `hero`. Sequence separate blocks instead.
4. **Props stay in inventory.** Content goes in props; if a prop is missing, extend inventory — don’t freestyle CSS in content files.
5. **Planned ≠ shippable.** Gaps (e.g. TV spread rail) stay planned until built; temporary substitutes must be labeled as substitutes, not “the same block”.
6. **Recipes are stacks of types**, not free CSS. Visual polish lives in `components/blocks/*` + tokens.
7. **Figma structure + inventory code.** Structure from Figma; shippable types from inventory.

---

## Ready / provisional block set (shippable today)

| `type` | Status | Figma source | Use for |
|--------|--------|--------------|---------|
| `hero` | provisional | Market Header / award-offer heroes (content subset) | Above-the-fold pitch + CTAs |
| `features` | ready | Cards `15166:10610` USP | Why Fusion / benefits (`variant: "usp"` \| `"feature"`) |
| `table` | provisional | Tables `15276:11158` (markets rows + compare shells) | Spreads lists, “how we compare”, account rows |
| `steps` | ready | Sections `15313:11090` Step by Steps | How it works |
| `faq` | ready | Sections `15313:11090` FAQ | Objections |
| `cta` | provisional | Mid/end conversion bands | Repeat conversion |
| `disclaimer` | provisional | Compliance | Risk / preview legal |

Chrome (not in `blocks[]`): `SiteHeader`, `SiteFooter` — always present around the stack.

---

## Hero: allowed props only

Registered props (keep inventory + `lib/types.ts` + `Hero.tsx` aligned):

| Prop | Role | Figma note |
|------|------|------------|
| `eyebrow` | Optional label above H1 | Partner mark text substitute (award) |
| `title` | H1 | Required |
| `subtitle` | Lead paragraph | Gold Market Header body copy |
| `bullets` | Optional short list under title | Campaign TZ lists; prefer `subtitle` when Figma shows one paragraph |
| `primaryCta` / `secondaryCta` | Dual or single CTA | BrokerChooser dual; Gold often single Primary/Light |
| `brandBackground` | Purple BG Image + dark text treatment | Gold **Market Header** BG |

**Forbidden on hero (do not re-add without inventory + planned type):**

- Embedded `table` / chart / TV card as a hero prop → use next `table` block, or planned `market-hero` / `spread-cards`
- Arbitrary media slots, download bars, review widgets

---

## Figma page sections → ready-only substitutes

### Market / instrument (Gold EN `29987:341692` → crypto, oil, FX pair…)

| Figma section | Ideal module | Ready-only substitute |
|---------------|--------------|------------------------|
| Market Header (BG + H1 + pitch + Primary/Light + TV chart) | `market-hero` (planned) | `hero` + `brandBackground` + dual/single CTA (**no chart**) |
| Bento / advantages | `bento-usp` (planned) | `features` `variant: "usp"` |
| Classic vs Zero comparison | `comparison-table` (planned multi-panel) | single `table` (flat columns) |
| Why trade [market] USP rail | USP cards | `features` usp |
| Education split / checklist Hero | `education-split` / `checklist-feature` | **skip** or short `cta` |
| Start trading steps | Step by Steps | `steps` |
| Live / our spreads (TV cards) | `spread-cards` (planned) — **same as homepage Our spreads** | Until built: skip or **labeled** temporary substitute; do not pretend markets `table` is the same pattern |
| Reviews | `review-rail` (planned) | **skip** (or one line in hero `subtitle`) |
| Footer | chrome | `SiteFooter` |

**Default market MVP stack (aligned to recipe M1, ready-only):**

```text
hero (brandBackground) → features (usp) → table (instruments) → table (compare, optional) → steps (optional) → faq → disclaimer
```

End conversion band is **SiteFooter CTAFooter** — do not stack mid/end `cta` blocks unless the campaign needs an extra mid-page band.

### Award / trust (BrokerChooser `29987:337918`)

| Figma section | Ready-only substitute |
|---------------|------------------------|
| Award hero + image | `hero` (eyebrow = partner name; **no** award image until media block) |
| Reviews rail | **skip** |
| Here’s our spreads (TV cards) | `table` or **skip** |
| Instrument tiles | **skip** (`instrument-grid` planned) |
| Why we’re different | `features` usp |

**MVP:** `hero` → `features` usp → optional `steps` / `faq` → `cta` → `disclaimer`

### Promo (TV Promo `29987:338113`)

| Figma section | Ready-only substitute |
|---------------|------------------------|
| Offer hero | `hero` (legal T&Cs → `subtitle` or link in copy) |
| Tier cards | **skip** (`tier-cards` planned) |
| Spreads TV | `table` or skip |
| How it works | `steps` |
| Funding marquee | skip |
| Instruments / USP / reviews | `features` usp; reviews skip |

**MVP:** `hero` → `steps` → `features` usp → `cta` → `disclaimer`

### Platform (TradingView `29987:340524`)

| Figma section | Ready-only substitute |
|---------------|------------------------|
| Platform hero | `hero` |
| Download bar | skip |
| Tiers / checklist | skip |
| USP / steps / FAQ | `features`, `steps`, `faq` |
| Spreads / reviews | `table` / skip |

**MVP:** `hero` → `features` usp → `steps` → `faq` → `cta` → `disclaimer`

---

## Tables frame → `type: "table"` only

Figma Tables `15276:11158` names that map to **one** block type today:

| Figma label | Content shape for `table` |
|-------------|---------------------------|
| Markets - Forex / Metals / Crypto CFDs / … | Header + symbol rows (`cells` with optional `{ title, meta }`) |
| Markets - Crypto CFDs - How we Compare | Feature × provider columns (flat `DataTable`) |
| Zero vs Classic / compare shells | Flatten to one `table` until `comparison-table` is built |

Do **not** invent a second block type for “compare vs spreads” — same `table`, different columns/copy.

---

## Sections frame → `steps` + `faq`

| Figma | Block |
|-------|--------|
| FAQ Desktop/Mobile | `faq` |
| Step by Steps vertical / horizontal / dark | `steps` (`orientation`, `mode`) |

No other section components are registered yet.

---

## Cards frame → `features` only

| Figma | Block |
|-------|--------|
| USP / Why Fusion | `features` + `variant: "usp"` |
| Other card families (content, blog, platform, TV chart, deposit) | planned — do not fake as free-form JSX |

---

## Anti-patterns (seen on early `/crypto`)

| Anti-pattern | Why wrong | Fix |
|--------------|-----------|-----|
| `hero.table = { columns, rows }` | New hybrid layout; bypasses `table` block | `hero` then separate `type: "table"` |
| New block type only in content.ts | Not in inventory / renderer contract | Add inventory → types → component → changelog |
| Copying Figma planned modules pixel-perfect with ad-hoc CSS | Breaks token + block contract | Use substitute stack above |
| Duplicate meaning: same spreads in hero + body | Noise | One `table` for product spreads; optional second for **compare** |

---

## Checklist before shipping a slug

- [ ] Every `blocks[].type` is in inventory `blocks[]` (not only `planned`)
- [ ] No nested section data on `hero` (no `table`, no chart props)
- [ ] Props ⊆ inventory + `lib/types.ts`
- [ ] Recipe picked (market / award / promo / platform) and planned gaps substituted or skipped
- [ ] Claims checked against `brand/compliance.md`
- [ ] `npm run validate:design` + `npm run build`

---

## When to grow the inventory

Only when a **second landing** needs the same Figma module, or a campaign **cannot** substitute:

1. Entry in `block-inventory.json` (`planned` → implement → `provisional`/`ready`)
2. Type in `lib/types.ts`
3. Component under `components/blocks/`
4. Wire `BlockRenderer`
5. `CHANGELOG.md` + `sources.md`
6. Then use in content

Until then: **assemble from the ready set only.**
