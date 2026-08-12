# FM Landings — Agent Guide

This repository builds **Fusion Markets marketing landings** for `fm.growth-agent.org/{slug}`.

Primary workflow: **edit → commit → push → deploy to production**. Do not treat local preview as the source of truth unless the task says otherwise.

## Required orientation (read before changing UI or design)

1. `AGENTS.md` (this file)
2. `docs/DECISIONS.md`
3. `docs/WORKFLOW.md`
4. `design-system/DESIGN.md`
5. `design-system/design-tokens.json`
6. `design-system/component-inventory.json`
7. `design-system/block-inventory.json`
8. `design-system/assembly.md` (**ready-only composition** — Figma → inventory; no nested/invented blocks)
9. `design-system/homepage-patterns.md` (site home assembly + adaptive)
10. `design-system/landing-patterns.md` (campaign landing recipes: award / promo / platform / market)
11. `design-system/responsive-rules.md`
12. `design-system/implementation-contract.md`
13. `design-system/sources.md`
14. `brand/compliance.md` (before publishing marketing copy)

If Figma links exist in `design-system/sources.md`, treat them as **upstream design intent**. Repo tokens/blocks remain the **implementation source of truth** until synced and recorded in `design-system/CHANGELOG.md`.

## Source of truth hierarchy

| Concern | Authority |
|---------|-----------|
| Visual values (color, type, space, radius, motion…) | `design-system/design-tokens.json` |
| Generated CSS/TS tokens | `design-system/generated/*` (never hand-edit) |
| UI primitives (Button, Card, …) | `design-system/component-inventory.json` + `components/ui/*` |
| Landing sections (Hero, FAQ, …) | `design-system/block-inventory.json` + `components/blocks/*` |
| Landing content / variants | `landings/{slug}/content.ts` + registry `lib/landings.ts` |
| Brand voice / legal | `brand/*` |
| Process decisions | `docs/DECISIONS.md` |

**Hard rule:** components and blocks must not introduce raw visual literals (hex colors, ad-hoc px spacing, radii, shadows, z-index, font stacks) except:

1. values that already exist as tokens, or
2. media-query breakpoints that exactly match a named token (document the mapping beside the query).

## Design system status

Tokens and visual language start as **`provisional-shell`** until the Fusion redesign Figma is ingested.

- Status lives in `design-tokens.json` → `meta.status`
- Every meaningful DS change is logged in `design-system/CHANGELOG.md`
- Figma → token sync steps are listed in `design-system/sources.md`

Do **not** invent a full Fusion brand system from the live site without recording provenance. Prefer explicit placeholders + open questions over silent guesses.

## Architecture boundaries

| Path | Role |
|------|------|
| `design-system/` | Machine + human design contract for agents |
| `components/ui/` | Reusable primitives (token-only styling) |
| `components/blocks/` | Landing section blocks (composed from UI + content props) |
| `landings/` | Per-slug content documents (no styling decisions) |
| `lib/` | Registry, types, helpers |
| `brand/` | Voice, compliance, claims rules |
| `briefs/` | Incoming marketing briefs (inputs) |
| `docs/` | Decisions, workflow, open questions |
| `scripts/` | Token generate / validate / ship helpers |
| `app/` | Next.js shell, routing, global styles that consume tokens |

## Landing generation contract

1. A landing is a **document**: metadata + ordered `blocks[]` (`lib/types.ts` must match `block-inventory.json`).
2. Agents assemble pages from **registered blocks only**. No free-form layout CSS per landing.
3. Copy and structure live in `landings/{slug}/content.ts`. Visual system lives in tokens/components.
4. New block types require: inventory entry → types → component → changelog → registry usage.
5. New slugs require: content file → `lib/landings.ts` registration → deploy.

## Verification

Before calling UI/design work done:

```bash
npm run generate:tokens
npm run validate:design
npm run build
```

Production ship (default):

```bash
npm run deploy
```

## What not to do

- Do not hardcode Fusion claims without `brand/compliance.md` checks.
- Do not remove `noindex` / robots protections without an explicit product decision.
- Do not connect paid ads to preview URLs without an explicit decision.
- Do not edit `design-system/generated/*` by hand.
- Do not expand scope into a multi-tenant product platform in this repo without a decision record.
