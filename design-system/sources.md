# Sources & provenance

Everything visual should be traceable. When you change tokens or inventories, note **where** the value came from.

## Upstream design

| Source | URL / location | Status | Notes |
|--------|----------------|--------|-------|
| Fusion Client Hub Design System | https://www.figma.com/design/JRZk7VKq09NfBamSFcmAst/Fusion-Client-Hub-Design-System?node-id=32-9 | **active SoT (partial)** | File key `JRZk7VKq09NfBamSFcmAst`, page `HUB Design System` |
| Marketing website redesign Figma | _pending_ | not linked | May differ from Client Hub — confirm |
| Live site (legacy reference only) | https://fusionmarkets.com/ | active | Next.js + MUI; **not** SoT |

## Implementation sources in this repo

| Artifact | Role |
|----------|------|
| `design-tokens.json` | Authoritative token values for code |
| `generated/tokens.css` | Build output for runtime CSS variables |
| `generated/tokens.ts` | Token name unions for TypeScript |
| `figma/extract-2026-08-12-styles.json` | Raw Figma extract (paint + text styles) |
| `typography-styles.md` | Human map of Figma text styles |
| `component-inventory.json` | Allowed UI primitives |
| `block-inventory.json` | Allowed landing sections for agents |
| `CHANGELOG.md` | History of DS changes |

## Current token provenance

`meta.status = figma-partial-sync` (as of 2026-08-12)

### 2026-08-12 — Figma sync (styles first)

- File: https://www.figma.com/design/JRZk7VKq09NfBamSFcmAst/Fusion-Client-Hub-Design-System?node-id=32-9
- Page/frames: Typography (`32:9`), Colors (`32:8111`), Spacing & Layout (`34:9470`), paint/text styles via Plugin API
- What changed: full light palette, Lato type scale, 4px spacing grid, button gradients, layout max 1440
- Ambiguities: this is **Client Hub** DS — confirm if marketing landings should use same or Website Redesign FM 2.0; Shadows frame not mapped yet; no H5 Regular text style in file
- Actor: agent + user

## How to record a Figma sync

```md
### YYYY-MM-DD — Figma sync
- File: <url>
- Page/frames: <names>
- What changed: colors / type / spacing / components
- Ambiguities: link to OPEN_QUESTIONS
- Actor: <name or agent>
```

Append that block here and a matching entry in `CHANGELOG.md`.
