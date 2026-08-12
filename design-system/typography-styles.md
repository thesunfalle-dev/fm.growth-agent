# Typography styles — Website Redesign FM 2.0

**SoT:** Figma frame `Typography` (`14711:15263`)  
**System (only these two):**

| Role | Font |
|------|------|
| Display / Heading / CTA | **Noto Sans** |
| Body / Caption | **Roboto** |

Do not load or use Plus Jakarta Sans, Lato, or other families.

Full extract: `figma/extract-2026-08-12-website-redesign-styles.json`

## Display — Noto Sans

| Style | Size | Weight | Line-height |
|-------|------|--------|-------------|
| Display 1 – Desktop | 72 | 600 | 110% (79px) |
| Display 2 – Mobile | 40 | 600 | 120% (58px) |

## Heading — Noto Sans

| Style | Size | Weight | Line-height |
|-------|------|--------|-------------|
| Heading 1 | 56 | 600 | 120% |
| Heading 2 – Light / Medium / Semibold / Bold | 32 | 300–700 | 130% |
| Heading 3 – Medium / Bold | 24 | 500 / 700 | 120% |
| Heading 4 – Medium / Semibold / Bold | 20 | 500–700 | 120% |

## Body — Roboto

| Style | Size | Weights | Line-height |
|-------|------|---------|-------------|
| Body 1 | 24 | 300–700 | 150% |
| Body 2 | 20 | 300–700 | 150% |
| Body 3 | 16 | 300, 400, 500, 700 | 150% |

## Caption — Roboto

| Style | Size | Weights | Line-height |
|-------|------|---------|-------------|
| Caption 1 | 14 | 400 / 700 | 150% |
| Caption 2 | 12 | 400 / 700 | 150% |

## CTA — Noto Sans

| Style | Size | Weight | Line-height |
|-------|------|--------|-------------|
| CTA Large | 20 | 600 | 120% |
| CTA Medium | 16 | 600 | 120% |
| CTA Small | 14 | 600 | 120% |

## CSS mapping (current landings)

| Role | Style | Class |
|------|-------|-------|
| Hero title | Heading 1 / Display | `.ui-heading--display` |
| Section title | Heading 2 Semibold | `.ui-heading--section` |
| Lead / body | Body 3 Regular | `.ui-text--lead` / `.ui-text--body` |
| Muted | Body 3 / Caption 1 | `.ui-text--muted` |
| Disclaimer | Caption 2 | `.ui-text--disclaimer` |
| Button | CTA Medium | `.ui-btn` |
