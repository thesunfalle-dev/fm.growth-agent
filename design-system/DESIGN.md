# Fusion Markets landings — Design System

Concise policy for humans and agents. Machine values live in `design-tokens.json`.

## Purpose

Enable **fast, on-brand marketing landings** assembled from registered blocks, not free-form pages. Visual consistency comes from tokens + inventories, not from reinventing CSS per campaign.

## Principles

1. **Tokens first** — if a value isn’t a token, it doesn’t ship in UI code.
2. **Blocks over pages** — landings are ordered compositions of inventory blocks.
3. **Content is data** — copy and structure sit in landing documents; presentation sits in DS.
4. **Honest status** — `provisional-shell` until Figma redesign is synced; never fake brand approval.
5. **Traceable changes** — changelog + sources for every material update.
6. **Compliance-aware** — risk disclaimers and claim caution are part of the system, not an afterthought.

## Modes

- **Current:** light **Website Redesign FM 2.0** (`figma-partial-sync`).
- Client Hub Figma is a different product surface (not this SoT).

## Visual system (Website Redesign, from Figma)

- Colors: Figma **paint styles** / Color frame — see `color-styles.md`
- Light canvas (`Gray/0`), soft surfaces (`Gray/100–200`)
- Primary text navy (`Blue/500 (Text)` `#0D1350`)
- Accent purple (`Purple/500 (Accent)` `#742CCE` + `Gradient/Primary`)
- Type: **Noto Sans** (display/headings/CTA) + **Roboto** (body/caption)
- Heading LH ~120–130%; body/caption LH **150%**
- Spacing: multiples of **4**; content width **1280px**; section gaps **120px** desktop / **60px** mobile
- Section rhythm via space tokens, not magic numbers in components

## Handoff files

| File | Role |
|------|------|
| `design-tokens.json` | Authoritative values |
| `generated/tokens.css` | Runtime CSS variables |
| `component-inventory.json` | UI primitives |
| `block-inventory.json` | Landing sections |
| `implementation-contract.md` | Naming + React mapping + raw-value ban |
| `accessibility-checklist.md` | A11y gates |
| `responsive-rules.md` | Breakpoints + layout behavior |
| `sources.md` | Provenance / Figma links |
| `CHANGELOG.md` | History |

## Readiness language

| Status | Meaning |
|--------|---------|
| `draft` | Spec only or partial implementation |
| `provisional` | Implemented but not brand-approved |
| `ready` | Approved for production landings |
| `deprecated` | Do not use in new work |
