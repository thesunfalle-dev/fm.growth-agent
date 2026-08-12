# Sources & provenance

Everything visual should be traceable. When you change tokens or inventories, note **where** the value came from.

## Upstream design

| Source | URL / location | Status | Notes |
|--------|----------------|--------|-------|
| Fusion redesign Figma (DS) | _pending_ | not linked | User will provide |
| Fusion redesign Figma (pages) | _pending_ | not linked | User will provide |
| Live site (legacy reference only) | https://fusionmarkets.com/ | active | Next.js + MUI; **not** the redesign SoT |

## Implementation sources in this repo

| Artifact | Role |
|----------|------|
| `design-tokens.json` | Authoritative token values for code |
| `generated/tokens.css` | Build output for runtime CSS variables |
| `generated/tokens.ts` | Token name unions for TypeScript |
| `component-inventory.json` | Allowed UI primitives |
| `block-inventory.json` | Allowed landing sections for agents |
| `CHANGELOG.md` | History of DS changes |

## Current token provenance

`meta.status = provisional-shell` (as of 2026-08-12)

Values currently encode a **neutral dark marketing shell** chosen to bootstrap the pipeline—not the official Fusion redesign. Replace when Figma is available; do not present shell colors as brand-approved.

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
