# Workflow

## Everyday: ship a landing variant

1. Drop brief into `briefs/` (optional) or paste into the task — **no fixed brief schema** for MVP.
2. Choose slug (`kebab-case`).
3. Optional: skim `design-system/homepage-patterns.md` for section order / adaptive patterns.
4. Create `landings/{slug}/content.ts` using only **ready** block types from `design-system/block-inventory.json`.
5. Register in `lib/landings.ts`.
6. `npm run validate:design && npm run build`
7. Commit + push + `npm run deploy`
8. Share `https://fm.growth-agent.org/{slug}/`

Default MVP stack (subset of homepage): `hero` → `features` (usp) → `steps` → optional `faq` / `table` → footer CTA.

## Change the design system

1. Update `design-system/design-tokens.json` and/or inventories.
2. Record provenance in `design-system/sources.md` if from Figma/PDF/screenshot.
3. Add entry to `design-system/CHANGELOG.md`.
4. Run `npm run generate:tokens`.
5. Update components if semantic names changed.
6. `npm run validate:design && npm run build`
7. Deploy if visual output should go live.
8. If the decision is structural, add `docs/DECISIONS.md` entry.

## Ingest Figma (when links arrive)

1. Add Figma URLs + access notes to `design-system/sources.md`.
2. Extract primitives (color, type, space, radius, elevation, motion).
3. Map to semantic roles (canvas, surface, text, action, border…).
4. Update tokens; set `meta.status` to `figma-synced` (or partial status with notes).
5. Update component + block inventories to match real sections.
6. Changelog + open questions for anything ambiguous.
7. Rebuild demo landings against new tokens; deploy.

## Add a new block type

1. Add to `block-inventory.json` (props, variants, status, token deps).
2. Extend `lib/types.ts` union.
3. Implement `components/blocks/{Name}.tsx` (token-only styles).
4. Wire into block renderer.
5. Changelog.
6. Prefer a demo landing that exercises the block before marking `ready`.

## Add a UI primitive

1. Add to `component-inventory.json`.
2. Implement under `components/ui/`.
3. Use only semantic tokens.
4. Changelog + mark status honestly (`draft` / `ready`).
