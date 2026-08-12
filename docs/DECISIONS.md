# Decisions (ADR-lite)

Append-only log. Newest first. Each entry: context → decision → consequences.

---

## 2026-08-12 — Multi-agent onboarding entrypoints

**Context:** User needs Claude Code, Codex, Cursor, or Grok to fully orient on “ознакомься с проектом” without missing process docs.

**Decision:**

| File | Role |
|------|------|
| `ONBOARDING.md` | Canonical bootstrap: trigger phrases + Tier 1/2/3 read order + confirm template |
| `AGENTS.md` | Codex/Grok primary contract; bootstrap section points to `ONBOARDING.md` |
| `CLAUDE.md` | Claude Code auto-entry; same rules + read path |
| `README.md` | Human + agent pointer to onboarding |
| `.cursor/rules/fm-landings.mdc` | Cursor always-apply rules |

Agents told to familiarize must complete Tier 1 before large implementation.

**Consequences:** One phrase works across tools; process docs stay discoverable.

---

## 2026-08-12 — Implementation playbook is mandatory agent process

**Context:** Crypto LP iteration exposed repeated process failures: Figma copy used as content, wrong chrome assets (Material vs Figma SVG), invented social URLs, flat footer instead of 3-stack mega layout, CSS cascade gaps, “done” without measuring Figma.

**Decision:**

1. Agents must follow `docs/IMPLEMENTATION_PLAYBOOK.md` for any landing / chrome / Figma UI work.
2. Anti-patterns in that playbook are a **pre-merge self-review** list (not optional lore).
3. New failure modes discovered in production must be **appended** to the playbook anti-patterns + CHANGELOG when DS-related.
4. `AGENTS.md` orientation list includes the playbook.

**Consequences:** Slightly more reading before coding; fewer multi-round “fix alignment” loops.

---

## 2026-08-12 — Live site owns public social hrefs

**Context:** Footer social links were invented (`facebook.com/FusionMarkets`, generic handles). Live `fusionmarkets.com` uses AU-specific pages and channel IDs.

**Decision:** Social **URLs** come from the live Fusion marketing site footer (or explicit product list). Figma owns **icon art and layout** only. If a network (e.g. TikTok) is in Figma but absent on the live footer, keep the icon for layout parity and document the best-known public handle until product confirms.

**Consequences:** Scrape or check live site when adding/updating social chrome.

---

## 2026-08-12 — Figma brand assets over Material for chrome icons

**Context:** Header language used Material `language`; Figma Header_Desktop uses a custom Language SVG with primary purple gradient. Footer social fills are purple gradient, not text navy.

**Decision:** For marketing chrome (header language, footer social, TV badge, contact row icons when Figma provides them), **prefer Figma-exported SVG** under `public/brand/`. Material Symbols remain the default for generic UI (FAQ chevrons, search, menu) when Figma specifies Material / system icons.

**Consequences:** More assets in `public/brand/`; fewer “looks almost like Figma” mismatches.

---

## 2026-08-12 — Figma = structure only; TZ = content

**Context:** Agents were filling USP/compare/etc. with Figma sample marketing copy (Coinbase, “Zero Commissions” placeholder text). Figma Final Pages are **composition reference**, not campaign copy.

**Decision:**  
- **Figma / DS:** block structure, spacing, variants, which pattern.  
- **TZ / user story / brief:** all user-facing strings, numbers, product claims, competitor lists.  
- Never ship Figma lorem or sample competitor tables as if they were the campaign.

**Consequences:** Crypto and future landings keep Figma layouts; content always reverts to TZ when they diverge.

---

## 2026-08-12 — Figma screens register reusable patterns

**Context:** New Figma links are not for casual visual memory. Marketing pages share the same section designs with different content; agents must not invent parallel layouts.

**Decision:**

1. Every shared screen is **ingested** into `design-system/pattern-catalog.md` (match existing pattern or add entry: structure, content props, rules, Figma canons).
2. `block-inventory.json` stays the machine contract (`type` + props + status).
3. Landings only **fill content** for registered types; they do not invent new section chrome.
4. Workflow: `docs/WORKFLOW.md` → “Ingest Figma screens”.

**Consequences:** More documentation when screens arrive; reusable blocks accumulate instead of per-slug freestyle.

## 2026-08-12 — Website Redesign FM 2.0 is marketing SoT

**Context:** Client Hub Figma was provided first by mistake. Correct marketing DS is Website Redesign FM 2.0. Typography frame documents Noto Sans + Roboto.

**Decision:** Marketing landings use **Website Redesign FM 2.0**. Fonts exactly as Typography frame: **Noto Sans** (headings/CTA) + **Roboto** (body).

**Consequences:** Only these two families are loaded and referenced in tokens.

## 2026-08-12 — Client Hub Figma as interim style SoT (superseded)

**Context:** User provided Fusion Client Hub Design System Figma for styles (type + colors). Marketing website redesign may differ.

**Decision:** ~~Until a marketing-specific file is confirmed, implement landings against Client Hub.~~ **Superseded** same day by Website Redesign decision above.

**Consequences:** Brief wrong-path implementation; corrected immediately.

---

## 2026-08-12 — Production-first delivery

**Context:** Previews are for marketing stakeholders; local servers are optional.

**Decision:** Source of truth for “does it work?” is production (`fm.growth-agent.org`). Ship via `npm run deploy` (or GitHub Actions when secrets exist).

**Consequences:** Every merge that should be visible must be deployed. DNS/custom domain is part of the delivery path.

---

## 2026-08-12 — Agentic design-system contract

**Context:** Landings will be generated by agents under a Fusion redesign that currently lives in Figma (not fully available yet).

**Decision:** Mirror the Growth Agent design-contract model:

1. `design-tokens.json` is authoritative for visual values.
2. Tokens generate deterministic CSS variables (`npm run generate:tokens`).
3. Components/blocks may only consume semantic CSS variables.
4. Inventories describe allowed UI primitives and landing blocks for agents.
5. All material DS changes are changelogged; provenance is recorded in `sources.md`.

**Consequences:** Slightly more ceremony early; far fewer hallucinated styles and silent drift later. Until Figma is ingested, tokens are explicitly `provisional-shell`.

---

## 2026-08-12 — Content vs presentation split

**Context:** Marketing will iterate on offers/copy faster than on design system.

**Decision:** Landing **content** lives in `landings/{slug}/content.ts`. Landing **presentation** lives in design-system + block components. Agents must not invent per-page CSS.

**Consequences:** A/B variants are content/structure differences (or block order), not fork of styles.

---

## 2026-08-12 — URL model

**Context:** Need shareable preview URLs without cluttering the main Growth Agent app.

**Decision:** Host on `fm.growth-agent.org/{slug}/` via Cloudflare Pages static export. All pages `noindex`.

**Consequences:** Static generation requires registry of slugs at build time (`generateStaticParams`).
