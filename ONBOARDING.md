# Project onboarding (all agents)

**Trigger phrases (do this immediately, before coding):**

- «ознакомься с проектом» / «ознакомься» / «изучи репозиторий»
- “familiarize yourself with the project” / “read the project docs” / “onboard”
- first message in a new session with no prior context

**Your job in this step:** read the files below **in order**, then reply with a short confirmation of how you will work (structure vs content, ship path, what you will not invent). Do **not** start implementing until this list is done (unless the user gave an urgent one-line fix *and* you already have context).

---

## Tier 1 — must read (every session start)

| # | File | Why |
|---|------|-----|
| 1 | `AGENTS.md` | Contract, SoT hierarchy, architecture, verification |
| 2 | `docs/IMPLEMENTATION_PLAYBOOK.md` | **Process, Figma 1:1, anti-patterns, definition of done** |
| 3 | `docs/DECISIONS.md` | Why process is the way it is |
| 4 | `docs/WORKFLOW.md` | Day-to-day ship steps |
| 5 | `design-system/assembly.md` | Structure vs content hard rule |
| 6 | `design-system/block-inventory.json` | Only these `type`s in landings |
| 7 | `lib/types.ts` | Content schema must match inventory |

## Tier 2 — before any UI / Figma / landing work

| # | File | Why |
|---|------|-----|
| 8 | `design-system/shared-blocks.md` | What crypto / indices already share — reuse before inventing |
| 9 | `design-system/pattern-catalog.md` | Reusable section patterns |
| 10 | `design-system/landing-patterns.md` | Campaign recipes (market/crypto stack) |
| 11 | `design-system/page-recipes.md` | Full page stacks |
| 12 | `design-system/header-footer.md` | SiteHeader / SiteFooter chrome |
| 13 | `design-system/implementation-contract.md` | Token-only styling rules |
| 14 | `design-system/sources.md` | Figma provenance |
| 15 | `brand/compliance.md` | Claims / legal before publish copy |

## Tier 3 — when the task touches them

| Topic | Files |
|-------|--------|
| Tokens / colors / type | `design-system/DESIGN.md`, `design-system/design-tokens.json`, `design-system/CHANGELOG.md` |
| Components | `design-system/component-inventory.json`, `components/ui/*` |
| Blocks | `components/blocks/*`, `components/blocks/BlockRenderer.tsx` |
| Content example | `landings/crypto/content.ts` (TZ content + stack) |
| Registry | `lib/landings.ts`, `lib/navigation.ts` |
| Unknowns | `docs/OPEN_QUESTIONS.md` — do not invent answers |

---

## Mental model (memorize)

```
TZ / brief     →  content only     → landings/{slug}/content.ts
Figma DS       →  structure only   → components + tokens + inventories
Live FM site   →  social hrefs     → lib/navigation.ts (scrape, don’t invent)
Chrome         →  always present   → SiteHeader + SiteFooter
Ship           →  production SoT   → push main → CI → fm.growth-agent.org/{slug}/
```

| Do | Don’t |
|----|--------|
| Register / reuse inventory blocks | Free-form layout CSS per landing |
| Figma for layout, spacing, assets | Paste Figma sample marketing copy |
| TZ for all strings/numbers/claims | Invent competitors or spreads |
| Export Figma SVGs for chrome icons | Material “lookalike” when Figma has SVG |
| Measure gaps/widths vs Figma | Declare done from one screenshot |
| Live site for social URLs | Invent facebook.com/FusionMarkets handles |

---

## After onboarding — confirm to the user

Reply in the user’s language, roughly:

1. What this repo ships (FM landings on `fm.growth-agent.org`).
2. Structure vs content rule.
3. Ship path (edit → commit → push → prod).
4. That you will follow `IMPLEMENTATION_PLAYBOOK` + anti-patterns.
5. Ready for the first task.

Then wait for instructions (or continue if the user already stated the task).

---

## Tooling notes (Claude / Codex / Cursor / Grok)

| Agent | Auto-loaded entry | Also open |
|-------|-------------------|-----------|
| **Claude Code** | `CLAUDE.md` | this file + `AGENTS.md` |
| **Codex** | `AGENTS.md` | this file |
| **Cursor** | project rules / `AGENTS.md` | this file |
| **Grok Build** | `AGENTS.md` | this file |

If only one file is auto-injected, **still read Tier 1** before coding.
