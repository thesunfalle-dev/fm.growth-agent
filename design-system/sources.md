# Sources & provenance

Everything visual should be traceable. When you change tokens or inventories, note **where** the value came from.

## Upstream design

| Source | URL / location | Status | Notes |
|--------|----------------|--------|-------|
| **Website Redesign FM 2.0** | https://www.figma.com/design/5PQJiXq7xZNGCqV1XNvKro/Website-Redesign-FM-2.0?node-id=14711-15263 | **active SoT** | Marketing site DS. File key `5PQJiXq7xZNGCqV1XNvKro` |
| Live site | https://fusionmarkets.com/ | legacy | Not redesign SoT |

## Implementation sources in this repo

| Artifact | Role |
|----------|------|
| `design-tokens.json` | Authoritative token values for code |
| `generated/tokens.css` | Build output for runtime CSS variables |
| `figma/extract-2026-08-12-website-redesign-styles.json` | Typography + spacing extract |
| `figma/extract-website-redesign-paints.json` | Paint + gradient styles |
| `typography-styles.md` | Human map of type scale |
| `CHANGELOG.md` | History |

## Current token provenance

`meta.status = figma-partial-sync` (Website Redesign FM 2.0)

### 2026-08-12 — Colors (paint styles + Color frame)

- File: https://www.figma.com/design/5PQJiXq7xZNGCqV1XNvKro/Website-Redesign-FM-2.0?node-id=14749-6364
- Frame: **Color** `14749:6364`
- 60 solid paint styles + 10 gradients → tokens (hex verified 1:1)
- Docs: `color-styles.md`, extract `figma/extract-2026-08-12-color-styles.json`
- Actor: agent + user

### 2026-08-12 — Correct SoT: Website Redesign

- File: https://www.figma.com/design/5PQJiXq7xZNGCqV1XNvKro/Website-Redesign-FM-2.0
- Frames: Typography, Color, Spacing & Layout
- Fonts: **Noto Sans** + **Roboto**
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
