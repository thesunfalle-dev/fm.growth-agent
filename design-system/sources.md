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

### 2026-08-12 — Cards

- File: https://www.figma.com/design/5PQJiXq7xZNGCqV1XNvKro/Website-Redesign-FM-2.0?node-id=15166-10610
- Frame: **Cards** `15166:10610`
- USP foundation ready; remaining card families planned
- Docs: `cards.md`, extract `figma/extract-2026-08-12-cards.json`
- Actor: agent + user

### 2026-08-12 — Sections

- File: https://www.figma.com/design/5PQJiXq7xZNGCqV1XNvKro/Website-Redesign-FM-2.0?node-id=15313-11090
- Frame: **Sections** `15313:11090`
- FAQ Desktop/Mobile + Step by Steps variants
- Docs: `sections.md`, extract `figma/extract-2026-08-12-sections.json`
- Actor: agent + user

### 2026-08-12 — Images

- File: https://www.figma.com/design/5PQJiXq7xZNGCqV1XNvKro/Website-Redesign-FM-2.0?node-id=15235-13486
- Frame: **Images** `15235:13486`
- Component 9 illustrations + BG Image “use consistently for most backgrounds”
- Docs: `images.md`, extract `figma/extract-2026-08-12-images.json`
- Actor: agent + user

### 2026-08-12 — Logos & Icons

- File: https://www.figma.com/design/5PQJiXq7xZNGCqV1XNvKro/Website-Redesign-FM-2.0?node-id=14994-6445
- Frame: **Logos & Icons** `14994:6445`
- Rule: base icons = Material Symbols; logos FM desktop/mobile
- Docs: `logos-icons.md`, extract `figma/extract-2026-08-12-logos-icons.json`
- Actor: agent + user

### 2026-08-12 — Header & Footer

- File: https://www.figma.com/design/5PQJiXq7xZNGCqV1XNvKro/Website-Redesign-FM-2.0?node-id=15192-11125
- Frame: **Header & Footer** `15192:11125`
- Nodes: Header_Desktop `15086:11710`, Header_Mobile `15366:10884`, Footer AU `15866:27010`
- Docs: `header-footer.md`, extract `figma/extract-2026-08-12-header-footer.json`
- Actor: agent + user

### 2026-08-12 — Inputs & Labels

- File: https://www.figma.com/design/5PQJiXq7xZNGCqV1XNvKro/Website-Redesign-FM-2.0?node-id=14382-8478
- Frame: **Inputs & Labels** `14382:8478`
- Field, Search, Tabs, chips, Toggle foundation
- Docs: `inputs-labels.md`, extract `figma/extract-2026-08-12-inputs-labels.json`
- Actor: agent + user

### 2026-08-12 — Tables

- File: https://www.figma.com/design/5PQJiXq7xZNGCqV1XNvKro/Website-Redesign-FM-2.0?node-id=15276-11158
- Frame: **Tables** `15276:11158`
- Rules + Forex header/row measurements; foundation DataTable
- Docs: `tables.md`, extract `figma/extract-2026-08-12-tables.json`
- Actor: agent + user

### 2026-08-12 — Buttons

- File: https://www.figma.com/design/5PQJiXq7xZNGCqV1XNvKro/Website-Redesign-FM-2.0?node-id=14765-9245
- Frame: **Buttons** `14765:9245`
- Primary/Secondary/Text + sizes; states default/hover/pressed
- Docs: `buttons.md`, extract `figma/extract-2026-08-12-buttons.json`
- Actor: agent + user

### 2026-08-12 — Spacing & Layout

- File: https://www.figma.com/design/5PQJiXq7xZNGCqV1XNvKro/Website-Redesign-FM-2.0?node-id=14765-7184
- Frame: **Spacing & Layout** `14765:7184`
- 4px grid; desktop content 1280 / margin 80; section 120/60; H1→desc 24/32; desc→content 40/24
- Docs: `spacing-layout.md`, extract `figma/extract-2026-08-12-spacing-layout.json`
- Actor: agent + user

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
