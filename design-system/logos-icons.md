# Logos & Icons — Website Redesign FM 2.0

**SoT:** Figma frame [`Logos & Icons` `14994:6445`](https://www.figma.com/design/5PQJiXq7xZNGCqV1XNvKro/Website-Redesign-FM-2.0?node-id=14994-6445)

Extract: `figma/extract-2026-08-12-logos-icons.json`

## Hard rule — base UI icons

> **All non-custom icons are based on Material Symbols.**

- Use component **`Icon`** (`components/ui/Icon.tsx`) with names from **`lib/icons.ts`**.
- **Do not** hand-draw SVG / invent paths for UI chrome (menu, search, chevrons, close, mail, call, …).
- Font: **Material Symbols Outlined**, weight 400, FILL 0, optical size ≈ box size (default **24×24**).
- Color: inherits `currentColor` (typically Blue/500 `#0D1350`).

Custom brand sets (flags, crypto, key nav art, social glyphs, deposit methods, review widgets) are **not** Material — they are separate assets; do not mix them into `Icon`.

## Catalog (frame)

| Group | Status in code |
|-------|----------------|
| FM_Logo_Desktop `15368:10679` (123×48) | **ready** (`Logo` variant desktop/auto) |
| FM_Logo_Mobile `15368:10678` (24×28) | **ready** (`Logo` variant mobile/auto) |
| Material Design Icons (row, 24×24) | **ready** (`Icon` + `MATERIAL_ICONS`) |
| Flags | planned |
| Indices | planned |
| Crypto Icons | planned |
| Precious Metals & Commodities | planned |
| Other Icons (social / OS / blog share) | planned |
| Key Icons (nav domain, L/M/S) | planned |
| Review Widgets | planned |
| Deposit & Withdrawal Icons | planned |
| Chatbot / AI Icon | planned (`smart_toy` exists in Material catalog) |

## Material icon set (approved ligatures)

```
chevron_left  chevron_right  west  east  expand_less  expand_more
language  menu  close  search  north_east  south_east
call  mail_outline  check_circle  room  error_outline  info
access_time  link  account_balance  content_paste_search  list
auto_awesome_mosaic  analytics  fact_check  request_page
desktop_windows  phone_android  wysiwyg  smart_toy
```

Source: Figma frame row `15188:11176`.

## Logos

| Asset | Path | Size |
|-------|------|------|
| Desktop composite | `public/brand/logo-desktop.svg` | 123×48 |
| Mobile mark | `public/brand/logo-mobile.svg` | 24×28 |
| Parts | `logo-mark.svg`, `logo-wordmark.svg` | source parts |

```tsx
import { Logo } from "@/components/ui/Logo";
import { Icon } from "@/components/ui/Icon";

<Logo variant="auto" />      {/* header: full → mark on mobile */}
<Logo variant="desktop" />   {/* footer brand row */}
<Icon name="search" size={24} />
<Icon name="menu" size={24} />
<Icon name="language" size={24} />
```

## Agent rules

1. Need a base UI glyph → pick from `MATERIAL_ICONS` only.
2. Name must match Material ligature (snake_case as in Figma).
3. Prefer `size={24}` unless component token says otherwise (search sm → 16).
4. Buttons with trailing arrow use Material `east` via `Button arrow`.
5. Never re-add custom SVGs under `public/brand/icon-*` for base UI.

## Wired usage

| Place | Icons |
|-------|--------|
| `SiteHeader` | language, search, menu |
| `SiteFooter` contact | mail_outline, call, room |
| `SearchInput` | search |
| `Button` (arrow) | east |
