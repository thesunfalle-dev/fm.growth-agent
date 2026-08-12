# Claude Code — FM Landings

You are working in the **Fusion Markets landings** repo (`fm.growth-agent.org/{slug}`).

## When the user says “ознакомься с проектом” / “familiarize yourself with the project”

**Immediately** open and read **`ONBOARDING.md`**, then complete **Tier 1** (and Tier 2 if UI/Figma).  
Do not implement until orientation is done. Then confirm how you will work.

## Always-on rules (even mid-task)

1. **Figma = structure only.** TZ/brief = **all content**. Never ship Figma sample copy.
2. **Inventory-only blocks** in `landings/*/content.ts` (`block-inventory.json` + `lib/types.ts`).
3. **No free-form layout** per landing — visuals in `components/*` + tokens.
4. **Production ship:** commit → push `main` → CI deploy → verify `https://fm.growth-agent.org/{slug}/`.
5. **Process + anti-patterns:** `docs/IMPLEMENTATION_PLAYBOOK.md` (required for UI).
6. **Chrome:** `design-system/header-footer.md` — Figma SVGs for language/social; social **hrefs from live fusionmarkets.com**.
7. **Compliance:** `brand/compliance.md` before marketing claims.
8. **Do not** hand-edit `design-system/generated/*`.
9. **Do not** invent answers to items in `docs/OPEN_QUESTIONS.md`.

## Read order (full)

See `ONBOARDING.md`. Short path:

1. `ONBOARDING.md`
2. `AGENTS.md`
3. `docs/IMPLEMENTATION_PLAYBOOK.md`
4. `docs/DECISIONS.md`
5. `docs/WORKFLOW.md`
6. `design-system/assembly.md`
7. `design-system/block-inventory.json`
8. Task-specific: pattern-catalog, landing-patterns, header-footer, content example `landings/crypto/`

## Repo map

| Path | Role |
|------|------|
| `landings/{slug}/content.ts` | Content document (blocks + copy) |
| `lib/landings.ts` | Slug registry |
| `components/blocks/` | Section blocks |
| `components/ui/` | Primitives + header/footer |
| `design-system/` | Tokens, inventories, patterns |
| `docs/` | Process, decisions, playbook |
| `brand/` | Voice + compliance |

## Ship commands

```bash
npm run validate:design && npm run build
git push   # GitHub Actions → Cloudflare Pages
```

Definition of done for UI: playbook §11 (measure Figma, TZ content, cascade, prod hard-refresh).
