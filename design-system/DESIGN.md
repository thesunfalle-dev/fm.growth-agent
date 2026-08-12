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

- **Current:** light **Fusion Client Hub** system (`figma-partial-sync`).
- **Note:** Marketing website redesign may use a related but separate library (Website Redesign FM 2.0). Confirm before pixel-chasing marketing comps.

## Visual system (Client Hub, from Figma)

- Light canvas (`White/Main`), soft gray surfaces (`Gray/Lightest`)
- Primary text navy (`Blue/Main - Text` `#0D1350`)
- Actions purple (`Purple/Main` + `Gradients/Main - Button`)
- Type: **Lato**, headings 120% LH, body 140% LH
- Spacing: **4px** base grid; container max **1440px**
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
