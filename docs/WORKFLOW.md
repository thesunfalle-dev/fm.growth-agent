# Workflow

## Everyday: ship a landing variant

1. Drop brief into `briefs/` (optional) or paste into the task — **no fixed brief schema** for MVP.
2. Choose slug (`kebab-case`).
3. **Read `docs/IMPLEMENTATION_PLAYBOOK.md`** (process, Figma 1:1, anti-patterns).
4. Optional: skim `design-system/pattern-catalog.md`, `landing-patterns.md`, `homepage-patterns.md`.
5. Create `landings/{slug}/content.ts` using only registered block types from `block-inventory.json` — **same patterns as catalog**, different content (**TZ only**, never Figma sample copy).
6. Register in `lib/landings.ts`.
7. Implement / reuse blocks per playbook Phase B–D.
8. Verify per playbook Phase E (measure Figma, not only screenshot).
9. `npm run validate:design && npm run build`
10. Commit + push (GitHub Actions → Cloudflare Pages) or `npm run deploy`
11. Share `https://fm.growth-agent.org/{slug}/` and **hard-refresh** check

Default MVP stacks (see `landing-patterns.md`):

- **Trust/award:** `hero` → `features` usp → optional `faq` → footer  
- **Promo offer:** `hero` (+ legal) → `steps` → `features` usp → footer  
- **Platform:** `hero` → `features` usp → `steps` → `faq` → footer  
- **Market (e.g. Crypto / Gold):** `hero` (brand BG) → `features` usp → `table` (instruments) → optional compare/steps → `faq` → footer  

Global chrome (`SiteHeader` / `SiteFooter`) wraps every page — do not re-implement per landing.

## Change the design system

1. Update `design-system/design-tokens.json` and/or inventories.
2. Record provenance in `design-system/sources.md` if from Figma/PDF/screenshot.
3. Add entry to `design-system/CHANGELOG.md`.
4. Run `npm run generate:tokens`.
5. Update components if semantic names changed.
6. `npm run validate:design && npm run build`
7. Deploy if visual output should go live.
8. If the decision is structural, add `docs/DECISIONS.md` entry.
9. If a new failure mode was discovered, append **anti-patterns** in `docs/IMPLEMENTATION_PLAYBOOK.md`.

## Ingest Figma screens (patterns / blocks — default when user shares links)

**Goal:** Fix **reusable** patterns, rules, and blocks — not a one-off reading of the screen.

For each shared frame/section:

1. **Decompose** into sections (intent labels: spreads, how it works, CTA…).
2. **Match or register** in `design-system/pattern-catalog.md`  
   - same structure → add under **Also seen on**  
   - new structure → new pattern entry (template in that file)
3. If a **full page** was shared: add/update stack in `design-system/page-recipes.md` (section → pattern).
4. **Structure vs content:** document fixed layout + content props only.  
   **Figma = structure only.** Never paste Figma sample copy into landings — content from TZ/brief.
5. **Rules:** when to use / not use; what must not be substituted (e.g. spreads ≠ markets table).
6. **Inventory:** update `block-inventory.json` (`type`, props, status, figma node).
7. **Code** only if shipping now: types + component + BlockRenderer (see “Add a new block type”).  
   Use MCP `get_design_context` + download assets — see playbook §3 and §7.
8. **Provenance:** `sources.md` + `CHANGELOG.md`.
9. **Reuse check:** next landing with same intent must use the registered `type`, different content only.

Canonical teaching examples (homepage):

- Our spreads → `spread-cards` (`27873:297368`)
- Ready to start trading? → `cta` / footer (`27873:297571`)
- How it works → `steps` (`31517:366918`)

Footer AU mega chrome: `24400:154127` — see `header-footer.md` + playbook §5.

## Ingest Figma tokens (foundations)

1. Add Figma URLs + access notes to `design-system/sources.md`.
2. Extract primitives (color, type, space, radius, elevation, motion).
3. Map to semantic roles (canvas, surface, text, action, border…).
4. Update tokens; set `meta.status` to `figma-synced` (or partial status with notes).
5. Update component inventories for atoms if needed.
6. Changelog + open questions for anything ambiguous.
7. Rebuild; deploy if visual output should go live.

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
3. Use only semantic tokens (or document Figma-parity exceptions).
4. Changelog + mark status honestly (`draft` / `ready`).

## Visual QA gate (before claiming done)

Mandatory when the task is UI / Figma parity:

1. **Figma node open** (same node user linked).
2. **Measure** gaps, widths, type, fills — not eye-ball only.
3. **Assets** from Figma MCP committed under `public/`.
4. **CSS cascade** check (generic rules vs specific variants).
5. **Content** is TZ (no Figma sample competitors/copy).
6. **Prod** hard-refresh after deploy.

Details and anti-patterns: `docs/IMPLEMENTATION_PLAYBOOK.md` §§2–9.
