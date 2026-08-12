# Typography — Website Redesign FM 2.0

**SoT:** Figma `Typography` frame (`14711:15263`)  
**Fonts in design system (only these):**

| Role | Font | Loaded weights |
|------|------|----------------|
| Display / Heading / CTA | **Plus Jakarta Sans** | 500, 600, 700 |
| Body / Caption | **Roboto** | 300, 400, 500, 700 |

## Display — Plus Jakarta Sans

| Style | Size | Weight | Line-height |
|-------|------|--------|-------------|
| Display 1 – Desktop | 72 | 600 | 110% |
| Display 2 – Mobile | 40 | 600 | 120% |

## Heading — Plus Jakarta Sans

| Style | Size | Weight | Line-height |
|-------|------|--------|-------------|
| Heading 1 | 60 | 600 | 110% |
| Heading 2 / section title | 48 | 600 | 110% |
| Heading 3 | 24 | 500 / 700* | 120% |
| Heading 4 | 20 | 500–700* | 120% |

\* Full scale in Figma; runtime loads 500/600/700.

## Body — Roboto

| Style | Size | Line-height |
|-------|------|-------------|
| Body 1 | 24 | 150% |
| Body 2 | 20 | 150% |
| Body 3 | 16 | 150% |

## Caption — Roboto

| Style | Size | Line-height |
|-------|------|-------------|
| Caption 1 | 14 | 150% |
| Caption 2 | 12 | 150% |

## CTA — Plus Jakarta Sans

| Style | Size | Weight | Line-height |
|-------|------|--------|-------------|
| CTA Large | 20 | 600 | 120% |
| CTA Medium | 16 | 600 | 120% |
| CTA Small | 14 | 600 | 120% |

## Shared landing baseline

| Role | Family / style | Used by |
|------|----------------|---------|
| Hero H1 | Plus Jakarta Sans SemiBold, 60 / 110% | `hero` |
| Section H2 | Plus Jakarta Sans SemiBold, 48 / 110% | features, tables, steps, FAQ, footer CTA |
| Lead | Roboto Light, 20 / 150% | hero and section lead copy |
| Body | Roboto Light, 16–20 / 150% | descriptions and FAQ answers |
| UI data / links | Roboto Regular, 12–16 / 150% | tables, footer links, metadata |
| CTA / nav | Plus Jakarta Sans SemiBold | buttons, navigation, labels |

Every landing must compose these shared roles through common components; content files may vary strings and block order, but not typography, colours, spacing, or component styling.
