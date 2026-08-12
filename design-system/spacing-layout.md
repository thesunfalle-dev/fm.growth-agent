# Spacing & Layout — Website Redesign FM 2.0

**SoT:** Figma frame [`Spacing & Layout` `14765:7184`](https://www.figma.com/design/5PQJiXq7xZNGCqV1XNvKro/Website-Redesign-FM-2.0?node-id=14765-7184)

Extract: `figma/extract-2026-08-12-spacing-layout.json`  
Tokens: `design-tokens.json` → `space.*`, `layout.*`

## Basic rules

- Spacing values are **multiples of 4**: `4, 8, 12, 16, 20, 24, 32, 40, 48, 56, 64, …`
- Also used in diagrams: **80**, **120** (and mobile **60**)

### Scale → tokens

| px | Token |
|----|--------|
| 4 | `space.1` |
| 8 | `space.2` |
| 12 | `space.3` |
| 16 | `space.4` |
| 20 | `space.5` |
| 24 | `space.6` |
| 32 | `space.8` |
| 40 | `space.10` |
| 48 | `space.12` |
| 56 | `space.14` |
| 64 | `space.16` |
| 80 | `space.20` |
| 120 | `space.30` / `space.section` |

## Desktop

| Rule | Value | Token |
|------|-------|--------|
| Content width | **1280px** fixed | `layout.container.max` |
| Page side margin (diagram) | **80px** | `layout.spacing.pageMarginDesktop` / `layout.container.gutter` |
| Between main sections (blocks) | **120px** | `layout.spacing.sectionDesktop` / `space.section` |
| H1 → description | **24px** | `layout.spacing.headingToDescriptionDesktop` |
| Description → next content in block | **40px** | `layout.spacing.descriptionToContentDesktop` |

## Mobile

| Rule | Value | Token |
|------|-------|--------|
| Content padding (both sides) | **16px** | `layout.spacing.pageMarginMobile` / `layout.container.gutterMobile` |
| Layout | Fluid | — |
| Between main sections | **60px** | `layout.spacing.sectionMobile` / `space.sectionMobile` |
| H1 → description | **32px** | `layout.spacing.headingToDescriptionMobile` |
| Description → next content | **24px** | `layout.spacing.descriptionToContentMobile` |

## CSS usage (landings)

| Element | Desktop | Mobile |
|---------|---------|--------|
| `.ui-section` vertical padding | `space.section` (120) | `space.sectionMobile` (60) |
| Hero title → lead | `layout.spacing.headingToDescriptionDesktop` | mobile token |
| Lead → CTAs / content | `layout.spacing.descriptionToContentDesktop` | mobile token |
| Container width | max 1280, side gutter | fluid + 16px gutters |
