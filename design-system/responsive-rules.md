# Responsive rules

**Canonical mobile frames (2026-08-13 ingest):** Homepage AU `27873:296438`, Forex `23570:104433`, Products overview `26258:282017`, Zero `26258:282352`, Demo `26258:284389`, Fusion Pro `26258:285898`.  
Desktop recipes stay in `page-recipes.md`. This file owns **how the same block reflows**.

## Breakpoints (tokens)

| Token | Default value | Use |
|-------|---------------|-----|
| `breakpoint.sm` | 640px | small tablets / large phones |
| `breakpoint.md` | 768px | tablet |
| `breakpoint.lg` | 1024px | desktop |
| `breakpoint.xl` | 1280px | wide desktop |

Media queries must reference these values (literal match + comment) until a CSS `@custom-media` pipeline exists.

**Figma mobile artboard is 375.** Implement against the 375 contract below; `breakpoint.md` (768) is the flip to desktop recipes, not a third layout system.

## Layout behavior (from Spacing & Layout frame)

| Element | Mobile | Desktop |
|---------|--------|---------|
| Container | fluid + **16px** side padding | content **1280px**, side margin **80px** |
| Content column | **343** (375 − 16 − 16) | **1280** |
| Between sections | **60px** | **120px** |
| Section inner pad Y | **40–60** (hero often 40) | **120** |
| H1 → description | **32px** | **24px** |
| Description → content | **24px** | **40px** |
| Hero title | fluid clamp (type tokens) | H1 / Display |
| Feature / USP grid | carousel **or** 1-col stack (see modes) | 3–4 cards; USP >4 → horizontal scroll |
| CTA row | full-width column stack (exceptions below) | inline row |
| Split sections | single column | title \| content or media \| steps |

Some account heroes use **20px** side pad / **335** content (Zero, Demo, Pro). Prefer **16 / 343** as the default; 20 / 335 is the product-hero exception, not a second grid.

## Measured 375 contract (do not invent)

| Token-like measure | Value | Where it appears |
|--------------------|-------|------------------|
| Artboard | **375** | every mobile page frame |
| Header_Mobile | **57** high, pad **16**, mark-only logo, search + menu | all six frames |
| iOS browser chrome (Figma only) | **94** — **do not implement** | Homepage, Forex frames |
| Footer CTA band | **CTAFooter-Mobile**: title 2-line, then Primary **343×54** → “or” → Secondary **343×54**; band ~350 | Zero, Demo; implied on others via Footer instance |
| Instrument tile | **165×165**, gap **12**, **2×3** | Homepage + Products |
| USP carousel card | side **250×470**, center **270×500**; dots **Navigate** under rail | Homepage, Forex, Zero “Why”, Demo |
| Compact USP row | **343×134**, stack gap **16** | Zero “What does it mean”, Fusion Pro benefits |
| TV quote card | **TV_Card-Mobile 343×118**, stack gap **16** | Homepage Our spreads |
| Market chart / quotes slot | **TV-Mobile 343×364** | Forex market header |
| Markets table | **Forex-Mobile 343**; header **54**, rows **80**, inner scroll + 16px bar | Forex instruments |
| Compare (accounts) | **Tabs_Icon** (2) + one **Comparison Table 343** | Zero vs Classic |
| Compare (Pro) | **two stacked** Pro Table - Mobile (no tabs) | Fusion Pro Retail vs Pro |
| Platform tabs | **Tabs_Icon** overflow-x (tab row wider than 343) | Homepage + Products |
| Download bar | full-bleed **375×69**, icon+label row, **horizontal scroll** | Homepage + Products |
| Funding marquee | dark band, **two offset logo rows**, overflow | Homepage (visible instance `28673:314863`) |
| FAQ | **FAQ-Mobile 343**; first item open; chevron 24 | Forex, Zero, Demo |

## Hero order (same `hero` / `market-hero` type)

Do **not** create `hero-mobile`. Reorder with CSS / grid `order`.

| Recipe | Mobile order | CTA treatment |
|--------|--------------|---------------|
| **Homepage** | title (centered wrap) → visual → **Primary** → lead | Primary/Dark **162×44**, **centered, not full-bleed** |
| **Market (Forex)** | title → lead → **Primary/Light** → **TV-Mobile 343×364** | Light CTA **163×44** (hug, not 343). Brand BG + gradient is full-bleed |
| **Account / product (Zero, Demo, Pro, Products) + MT5 overview** | **visual first** → title → CTAs → long body | Dual stack **full width** 335–343 × 40–44 (Pro is single Primary) |
| **Campaign (award / promo / TV)** | title (optional partner mark) → visual 280 → body (+ T&Cs) → dual CTA | Dual **343×40**. Award image **280×275**; promo **280×222**; TV **280×280** |
| **Story / conditions (A6, A7, C1)** | visual → title → body | **No CTA** (hidden in file). Conditions body includes inline tool links |
| **Platform device (P2)** | visual → H1 + “Available on …” → **store buttons** → body | Store download **343×40** stacked, gap 16. Count is content (3 / 2 / 1 web) |

Homepage is the **only** hero that keeps a compact centered primary. Account / overview pages stack full-width buttons **before** the long body. Campaign landings put CTAs **after** the body. Market pages keep a **hug-width** light primary on the dark band.

## Card / rail modes (one type, two layouts)

| Intent | Desktop | Mobile | Do not |
|--------|---------|--------|--------|
| Why Fusion / equal USP | 4-up rail; >4 scroll | **Snap carousel**: peek left/right cards, center card larger, **Navigate dots** | Wrap to a 2-col grid |
| Compact benefit list (account “what it means”, Pro benefits) | bento / mixed | **Full-width stack 343×134** (optional featured visual card on top) | Force carousel if Figma stacks |
| Spreads TV cards | horizontal rail | **Vertical stack** 343×118 | Carousel |
| Instrument / market tiles | 6-up row | **2×3 grid**, 165×165 | Carousel |
| Content / account pair cards | 2-col | **Stack** 335, gap ~32 | |
| Reviews / awards / ratings | row | ratings = **horizontal overflow**; video+award = **stacked 343×190 + dots** | |

## Steps / FAQ / tables / platforms

| Pattern | Mobile behavior |
|---------|-----------------|
| `steps` | Always **vertical**. Homepage: title + lead → device visual → steps → dual CTA **343 full width**, gap 20. Account how-to: title + long lead → device mock → vertical steps → **single** Primary 343×54 |
| `faq` | Same accordion; width 343; first open. Title left-aligned on account pages, centered “FAQs” on Forex |
| `table` markets | Compact **Forex-Mobile** rows (symbol + pair on two lines, two numeric cols). Tabs_Text above may overflow-x. Body scrolls inside a ~534 shell |
| `comparison-table` | **Zero:** 2 **Tabs_Icon** (Zero / Classic) + one panel. **Pro:** two sequential tables (leverage, then other criteria) — still one pattern, two content panels |
| `platforms` | Title + lead → **Tabs_Icon overflow-x** → mock → body → accordion list 343 → `download-bar` |
| `download-bar` | Always full-bleed **375×69**; never wrap OS links to a 2-col grid |
| Store download buttons | **343×40** stacked, gap 16 — same family as the strip, used in P2 heroes and under `platforms` tabs |
| `platform-crossnav` | **Platform Card carousel**: peek ~279 / center **320×518** + Navigate dots. Not `instrument-grid` |
| `review-rail` | Title + lead → Trustpilot header → **review cards 280×322** horizontal overflow |
| `tier-cards` | Promo = **3-card stack**. Full TV platform = **one card + dots** (carousel) + dual CTA. Who We Are Mission = one 343×371 card + dots |
| `accordion-table` | Tabs overflow + first expander **open** with Forex-Mobile 343; rest collapsed 58 |
| `bento-usp` (Why Fusion) | Featured 343×374 + compact stack — **not** the Values carousel |
| `logo-marquee` | Same ticker; homepage / promo mobile uses **two staggered rows** in a 375 band |
| `cta` / footer band | Title stacked above actions; **never** two half-width buttons on 375. Exception: BrokerChooser spreads uses a **hug 163** Primary under the TV stack |

## Homepage-derived patterns (AU desktop + mobile)

Source: `homepage-patterns.md` (Figma Desktop `27873:297355`, Mobile `27873:296438`).

| Pattern | Desktop | Mobile |
|---------|---------|--------|
| Hero order | title → lead → CTA · visual | title → **visual** → **CTA** → lead |
| USP cards | row / scroll rail | **snap carousel** + dots |
| Spreads cards | horizontal TV cards | **vertical stack** |
| How it works | split + vertical steps | stack; visual mid; CTAs full width |
| Tabs | horizontal pills | **overflow-x** (do not wrap) |
| Logo strip | marquee row | two-row overflow ticker |
| Instruments | 6-up | **2×3** 165 |
| Platforms | tabs + mock + accordion | same stack; download bar scrolls |

## Rules for agents

- Do not invent breakpoint-specific block types; blocks themselves reflow (stack / rail / split / carousel).
- **Default** to single-column stacking for long copy.
- **Allow** horizontal scroll or carousel for **equal USP rails**, **logo strips**, **platform tabs**, and **download bars**.
- Prefer **stack** over carousel for dense list cards (spreads TV, compact USP rows, content cards).
- Keep the primary CTA reachable without trapping the user in a horizontal-only scroller.
- Document special order cases (hero) on the existing block, not as a second type.
- Figma iPhone status/browser chrome is a **mock**, not a site component.

See also: `homepage-patterns.md`, `page-recipes.md` (mobile stacks on M1 / A1–A4), `pattern-catalog.md` Adaptive rows.
