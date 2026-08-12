# Color styles — Website Redesign FM 2.0

**SoT:** Figma Color frame [`14749:6364`](https://www.figma.com/design/5PQJiXq7xZNGCqV1XNvKro/Website-Redesign-FM-2.0?node-id=14749-6364) + local **paint styles** (hex verified 1:1).

Machine extract: `figma/extract-2026-08-12-color-styles.json`  
Runtime values: `design-tokens.json` → `primitive.color.*`

Agents must use **semantic** tokens in components (`--color-text-primary`, etc.), not raw primitives — except when inventing a new semantic role from the scale below.

## Solid scales (paint styles)

### Blue (text / brand navy)

| Figma style | Hex | Token |
|-------------|-----|-------|
| Blue/50 | `#F3F5FF` | `primitive.color.blue50` |
| Blue/100 | `#E5EAFF` | `primitive.color.blue100` |
| Blue/200 | `#C4C7E4` | `primitive.color.blue200` |
| Blue/300 | `#9DA4D1` | `primitive.color.blue300` |
| Blue/400 | `#6C75B8` | `primitive.color.blue400` |
| **Blue/500 (Text)** | `#0D1350` | `primitive.color.blue500` → text.primary |
| Blue/600 | `#0A1044` | `primitive.color.blue600` |
| Blue/700 | `#080D38` | `primitive.color.blue700` |
| Blue/800 | `#050A2C` | `primitive.color.blue800` |
| Blue/900 | `#030620` | `primitive.color.blue900` |

### Purple (accent / CTA)

| Figma style | Hex | Token |
|-------------|-----|-------|
| Purple/50 | `#F7F6FC` | `primitive.color.purple50` |
| Purple/100 | `#F1EBFB` | `primitive.color.purple100` |
| Purple/200 | `#E0CFF5` | `primitive.color.purple200` |
| Purple/300 | `#DAC3FF` | `primitive.color.purple300` |
| Purple/400 | `#985EFF` | `primitive.color.purple400` |
| **Purple/500 (Accent)** | `#742CCE` | `primitive.color.purple500` → action / link |
| Purple/600 | `#5B23A0` | `primitive.color.purple600` |
| Purple/700 | `#471B75` | `primitive.color.purple700` |
| Purple/800 | `#331448` | `primitive.color.purple800` |
| Purple/900 | `#1F0E2D` | `primitive.color.purple900` |

### Gray

| Figma style | Hex | Token |
|-------------|-----|-------|
| Gray/0 (White) | `#FFFFFF` | `primitive.color.gray0` → canvas |
| Gray/100 | `#FAFAFA` | `primitive.color.gray100` |
| Gray/200 | `#F5F6F7` | `primitive.color.gray200` |
| Gray/300 | `#E4E6E9` | `primitive.color.gray300` → border.default |
| Gray/400 | `#D1D5DA` | `primitive.color.gray400` |
| Gray/500 | `#93979F` | `primitive.color.gray500` → text.muted |
| Gray/600 | `#555A66` | `primitive.color.gray600` |
| Gray/700 | `#3F434C` | `primitive.color.gray700` |
| Gray/800 | `#2B2E34` | `primitive.color.gray800` |
| Gray/900 | `#191B1F` | `primitive.color.gray900` |

### Orange / Green / Red (status)

| Family | 50 … 900 | Semantic role |
|--------|----------|---------------|
| Orange | `#FFF8F2` … `#6B2C05` | warning (`orange500` `#FF7A21`) |
| Green | `#E9FCF2` … `#0C3F1D` | success (`green500` `#28A44B`) |
| Red | `#FFF1F1` … `#490000` | danger (`red500` `#C70101`) |

Full hex list: extract JSON.

## Gradients (paint styles)

| Figma style | Stops | Semantic token |
|-------------|-------|----------------|
| Gradient/Primary | `#742CCE` → `#6B4AFF` | `action.gradientPrimary` (primary CTA) |
| Gradient/Secondary | `#742CCE` → `#1811A2` | `action.gradientSecondary` |
| Gradient/Tertiary | `#640CD2` → `#06007A` | `action.gradientTertiary` |
| Gradient/Secondary Button | `#E3D9FF` → `#D8E7FF` | `action.gradientSecondaryButton` |
| Gradient/Gold | `#A97D2C` → `#F8CC79` → `#A97D2C` | `action.gradientGold` |
| Gradient/Card (Light) | purple wash ~3–5% | `action.gradientCardLight` |
| Gradient/Mint Gradient | mint soft | `action.gradientMint` |
| Gradient/Light Purple Gradient | light purple soft | `action.gradientLightPurple` |
| Gradient/Purple-Green Gradient | soft blend | `action.gradientPurpleGreen` |
| Gradient/Purple overlay | `#540EAB` 70% → 0% | `action.gradientPurpleOverlay` |

## Semantic defaults (landings)

| Role | Token | Figma basis |
|------|-------|-------------|
| Page background | `color.background.canvas` | Gray/0 |
| Surface | `color.background.surface` | Gray/100 |
| Primary text | `color.text.primary` | Blue/500 (Text) |
| Muted text | `color.text.muted` | Gray/500 |
| Accent / link | `color.text.link` | Purple/500 (Accent) |
| Border | `color.border.default` | Gray/300 |
| Primary button fill | `color.action.gradientPrimary` | Gradient/Primary |
