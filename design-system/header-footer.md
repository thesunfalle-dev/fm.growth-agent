# Header & Footer — Website Redesign FM 2.0

**SoT:** Figma frame [`Header & Footer` `15192:11125`](https://www.figma.com/design/5PQJiXq7xZNGCqV1XNvKro/Website-Redesign-FM-2.0?node-id=15192-11125)

Extract: `figma/extract-2026-08-12-header-footer.json`

Fonts in code: **Noto Sans** (nav, CTAs, titles) + **Roboto** (footer links, body). Plus Jakarta Sans appears in Figma published styles and is **ignored**.

## Catalog

| Component | Figma node | Status in code |
|-----------|------------|----------------|
| Header_Desktop | `15086:11710` | **ready** (`SiteHeader`) |
| Header_Mobile Default | `15366:10884` | **ready** (search + menu) |
| Header_Mobile Nav Bar close/return | `16373:19318` / `16373:19336` | planned |
| Nav Bar On/Off indicator | `16370:19277` | planned (active underline) |
| Mobile Menu Dropdown | `15781:20623` | partial (`details` panel) |
| Footer desktop AU | `15866:27010` | **ready** foundation (`SiteFooter`) |
| Footer desktop EN | `23377:111177` | planned (legal content variant) |
| Footer mobile AU/EN | `15977:21970` / `23368:105447` | responsive layout ready; full accordion planned |
| Social icon set + TV badge | in footer | partial (text links) |

## Desktop header rules (frame)

| Spec | Value |
|------|--------|
| Height | **80px** |
| Horizontal padding | **80px** |
| Menu items | centered between logo (left) and actions (right) |
| Spacing between menu items | **40px** |
| Spacing between header buttons | **16px** |
| Shadow | `0 10px 20px rgba(234, 219, 255, 0.2)` |
| Background | White / Gray 0 |
| Nav type | Noto Sans SemiBold 16 / Blue 500 |
| Log In | Text CTA with **Gradient/Primary** |
| Start Trading | Primary Medium button |
| Language | 24px globe icon |

## Mobile header rules (frame)

| Spec | Value |
|------|--------|
| Height | **57px** |
| Horizontal padding | **16px** |
| Menu items | hidden; **search** + **menu** icons on the right |
| Logo | mark only (wordmark hidden) |
| Shadow | `0 8px 12px rgba(234, 219, 255, 0.2)` |

## Desktop footer rules (frame)

| Spec | Value |
|------|--------|
| Placement | always **below** “Ready to start trading?” CTA band |
| Main block height (rules) | 545px (content-driven in code) |
| Vertical padding | **60px** |
| Horizontal padding | **80px** |
| CTA title | 48px Noto Sans SemiBold, “Ready to start trading?” |
| CTA actions gap | **24px** (Start trading · or · Try a free demo) |
| Column titles | 20px SemiBold |
| Column links | Roboto 14 Regular, gap 8 |
| Help cards | bordered 12px radius (Need help? + Contact us) |

## Mobile footer rules (frame)

| Spec | Value |
|------|--------|
| Vertical padding | **60px** |
| Horizontal padding | **16px** |
| Placement | same: below CTA band |

## Components

```tsx
// Wired in app/layout.tsx on every page
<SiteHeader />
<main>{children}</main>
<SiteFooter />
```

Nav/footer content lives in `lib/navigation.ts` (not hard-coded in CSS).

## Assets

| File | Role |
|------|------|
| `public/brand/logo-mark.svg` | F mark |
| `public/brand/logo-wordmark.svg` | FUSION MARKETS wordmark |
| `public/brand/icon-language.svg` | Globe |
| `public/brand/icon-search.svg` | Mobile search |
| `public/brand/icon-menu.svg` | Hamburger |

Exported from Figma Header nodes via MCP `download_assets`.

## Out of scope for landings v0.8

- Full mega-footer every sub-link from AU/EN legal PDFs
- Country flag switcher UI
- Nav Bar active purple underline component
- Mobile accordion footer sections
- Official social brand SVGs (text labels for now)
