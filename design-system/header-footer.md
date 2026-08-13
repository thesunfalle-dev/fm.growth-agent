# Header & Footer — Website Redesign FM 2.0

**SoT:** Figma frame [`Header & Footer` `15192:11125`](https://www.figma.com/design/5PQJiXq7xZNGCqV1XNvKro/Website-Redesign-FM-2.0?node-id=15192-11125)

Extract: `figma/extract-2026-08-12-header-footer.json`

Fonts in code: **Plus Jakarta Sans** (nav, CTAs, titles) + **Roboto** (footer links, body). Header and footer are global chrome — one `SiteHeader` / `SiteFooter` for every slug.

## Catalog

| Component | Figma node | Status in code |
|-----------|------------|----------------|
| Header_Desktop | `15086:11710` | **ready** (`SiteHeader`) |
| Header_Mobile Default | `15366:10884` | **ready** (F mark 28×33 + search + menu) |
| Header_Mobile Nav Bar close | `16373:19318` | **ready** (open menu hides search, shows X) |
| Header_Mobile Nav Bar return | `16373:19336` | planned (back + close on nested views) |
| Nav Bar On/Off indicator | `16370:19277` | planned (active underline) |
| Mobile Menu Dropdown | `15781:20623` | partial (`details` panel + primary nav) |
| Footer desktop AU | `15866:27010` / `24400:154127` | **ready** 1:1 stacks (`SiteFooter`) |
| Footer desktop EN | `23377:111177` | planned (legal content variant) |
| Footer mobile AU/EN | `15977:21970` / `23368:105447` | responsive layout ready; **CTAFooter-Mobile** measured (`26258:282738`); full accordion planned |
| Social icon set + TV badge | in footer | **ready** (SVG icons + TV badge) |

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
| Logo | F mark **28×33** (`logo-mobile.svg`, Header_Mobile `15366:10884`) |
| Shadow | `0 8px 12px rgba(234, 219, 255, 0.2)` |

## Desktop footer rules (frame)

| Spec | Value |
|------|--------|
| Placement | always **below** “Ready to start trading?” CTA band |
| Vertical padding | **60px** |
| Horizontal padding | **80px** |
| CTA title | 48px Noto Sans SemiBold `#0D1350`, tracking −0.02em |
| CTA actions gap | **24px** (Start trading · or · Try a free demo) |
| Brand → links gap | **40px** |
| Social | Follow us Light 16 · icons 24 · icon gap **24** · label gap **28** · TV badge 143×40 |
| Link columns | **3 stacks × 215px**, column gap **100**, group stack gap **56** |
| Group title → links | **12px** |
| Column titles | 20px SemiBold / 130% `#0D1350` |
| Column links | Roboto 14 Regular / 150% `#0D1350`, gap **8** |
| Help cards | width **332**, border blue100, radius **12**, Need help? + contact |
| Bar | copyright 16 + Privacy/Terms SemiBold 16 |
| Legal | 12px Gray/600 stack |

## Mobile footer rules (frame)

| Spec | Value |
|------|--------|
| Vertical padding | **60px** |
| Horizontal padding | **16px** |
| Placement | same: below CTA band |
| CTA band | **CTAFooter-Mobile** (`26258:282738` / `26258:284540`): 2-line title “Ready to Start Trading?” → Primary **343×54** → “or” → Secondary **343×54**. Band height ~**350**. Pad 20 / 16 |
| Link columns | Accordion (`15977:21970`) — `details` groups, help cards first, 16px side pad |
| Instance | Homepage `27873:296885`, Forex `23570:104498`, Products `26258:282351`, Zero `26258:282744`, Demo `26258:284546`, Pro `26258:286399` |

**Not every mobile page paints CTAFooter as a sibling** (Products / Pro / Homepage fold it into the Footer instance). Still one `SiteFooter` — do not add a `cta` block to compensate.

## Components

```tsx
// Wired in app/layout.tsx on every page
<SiteHeader />
<main>{children}</main>
<SiteFooter />
```

Nav/footer content lives in `lib/navigation.ts` (not hard-coded in CSS).

## Logos & icons

Use **`Logo`** + **`Icon`** (Material Symbols only). See `logos-icons.md`.

| Usage | Implementation |
|-------|----------------|
| Brand mark | `Logo` → `public/brand/logo-desktop.svg` / `logo-mobile.svg` |
| language / search / menu | Material: `language`, `search`, `menu` |
| Footer contact | Material: `mail_outline`, `call`, `room` |

## Out of scope / later

- Country flag **switcher** UI (flag mark in contact is shipped)
- Nav Bar active purple underline component
- Full EN legal variant (`23377:111177`)

## Agent notes (do not regress)

- Language control: **`public/brand/language.svg`** (Figma), not Material `language`.
- Social icons: Figma purple **gradient** SVGs; hrefs from **live** fusionmarkets.com (see `lib/navigation.ts`).
- Contact card: icon **above** text, centered (not horizontal Material row).
- Full process: `docs/IMPLEMENTATION_PLAYBOOK.md` §5 and anti-patterns #10–14.
