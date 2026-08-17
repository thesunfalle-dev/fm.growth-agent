# Buttons — Website Redesign FM 2.0

**SoT:** Figma frame [`Buttons` `14765:9245`](https://www.figma.com/design/5PQJiXq7xZNGCqV1XNvKro/Website-Redesign-FM-2.0?node-id=14765-9245)

Extract: `figma/extract-2026-08-12-buttons.json`  
Component: `components/ui/Button.tsx`

> CTA typeface in Typography frame = **Noto Sans SemiBold**. Some Figma button components still bind Plus Jakarta — runtime uses Noto Sans (site DS fonts).

## Variants

| Variant | Default | Hover / Pressed |
|---------|---------|-----------------|
| **Primary** | Fill `Gradient/Primary` (`#742CCE` → `#6B4AFF`), text `Gray/200` | Fill `Gradient/Tertiary` (`#640CD2` → `#06007A`) |
| **Primary/Light** | Fill canvas white, text `Purple/500` | Surface fill, purple hover/active |
| **Secondary** | Transparent fill, border `Gradient/Primary`, label gradient Primary | Fill `Gradient/Secondary Button`, border Primary; pressed label uses Tertiary gradient |
| **Text / Link** | Text only, Noto SemiBold 14–16, optional icon gap **4px** | Darker / pressed purple |

**When:** Use **Primary/Light** on brand/dark heroes (`brandBackground`, `market-hero` atmosphere `brand`). `Hero` auto-selects it for the primary CTA when `brandBackground` is true. Light-field atmospheres (`crypto`, `indices`) use the default primary.

## Sizes (guidelines + component measurements)

| Size | Font | Padding (H × V) | Radius | Typical height |
|------|------|-----------------|--------|----------------|
| **Large** | 20 / 600 / 120% | **36 × 14** | **12px** | ~52–54 |
| **Medium** (mobile default) | 16 / 600 / 120% | **28 × 10** | **10px** | ~44 |
| **Small** | 14 / 600 / 120% | **24 × 10** | **8px** | ~36 |

Guideline note: minimum padding — give text enough horizontal space so the control does not feel cramped.

## API

```tsx
<Button href="..." variant="primary" size="lg">Start Trading</Button>
<Button href="..." variant="primaryLight" size="lg">Start Trading</Button>
<Button href="..." variant="secondary" size="md">Learn more</Button>
<Button href="..." variant="text" size="sm" arrow>Start Trading</Button>
```

| Prop | Values | Default |
|------|--------|---------|
| `variant` | `primary` \| `primaryLight` \| `secondary` \| `text` | `primary` |
| `size` | `lg` \| `md` \| `sm` | `md` |
| `arrow` | boolean | `false` |
| `href` | string | required (static export) |

## States

- **default / hover / pressed** — CSS `:hover` / `:active`
- **focus-visible** — purple focus ring token
- **disabled** — not in first marketing slice; add when needed

## Out of scope (this pass)

- Download store buttons (App Store / Play / OS)
- Buy/Sell toggle
- Icon+Text+Arrow filled variants beyond trailing arrow on text/primary
