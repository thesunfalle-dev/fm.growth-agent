# Landing assembly contract (ready-only)

**Purpose:** Stop inventing one-off layouts. Every campaign page is an **ordered list of registered blocks** from `block-inventory.json`. Figma page frames show **target** composition; until a module is `ready` / `provisional` in inventory, **substitute** with a ready block or **skip**.

**Related:** `block-inventory.json`, `landing-patterns.md`, `homepage-patterns.md`, `sections.md`, `tables.md`, `cards.md`.

---

## Hard rules for agents

1. **Compose, don’t invent.** Only `type` values listed under `blocks` in `block-inventory.json` may appear in `landings/*/content.ts`.
2. **No nested blocks.** Do not embed a `table` (or any other section) inside `hero`. Sequence separate blocks instead: `hero` → `table`.
3. **Props stay in inventory.** If content needs a field the inventory does not declare, either fold into an existing prop (`subtitle`) **or** extend inventory + types + component + changelog **before** using it. Never silent one-off props.
4. **Planned ≠ shippable.** Items under `planned` in inventory are Figma-aware gaps. Do not implement them ad-hoc inside a landing file.
5. **Recipes are stacks of types**, not free CSS. Visual polish lives in `components/blocks/*` + tokens.
6. **Figma is intent; inventory is authority for code.** When they disagree, update inventory (with source note) — don’t freestyle the page.

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
| Live spreads (TV card) | `spread-cards` (planned) | `table` (markets-style rows; Figma **Crypto CFDs** table types) |
| Reviews | `review-rail` (planned) | **skip** (or one line in hero `subtitle`) |
| Footer | chrome | `SiteFooter` |

**Default market MVP stack:**

```text
hero → table (spreads) → features (usp) → cta → table (compare, optional) → steps → faq → cta → disclaimer
```

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
