# Responsive rules

## Breakpoints (tokens)

| Token | Default value | Use |
|-------|---------------|-----|
| `breakpoint.sm` | 640px | small tablets / large phones |
| `breakpoint.md` | 768px | tablet |
| `breakpoint.lg` | 1024px | desktop |
| `breakpoint.xl` | 1280px | wide desktop |

Media queries must reference these values (literal match + comment) until a CSS `@custom-media` pipeline exists.

## Layout behavior (from Spacing & Layout frame)

| Element | Mobile | Desktop |
|---------|--------|---------|
| Container | fluid + **16px** side padding | content **1280px**, side margin **80px** |
| Between sections | **60px** | **120px** |
| H1 → description | **32px** | **24px** |
| Description → content | **24px** | **40px** |
| Hero title | fluid clamp (type tokens) | H1 / Display |
| Feature / USP grid | carousel or 1-col stack | 3–4 cards; USP >4 → horizontal scroll |
| CTA row | full-width column stack | inline row |
| Split sections | single column | title \| content or media \| steps |

## Homepage-derived patterns (AU desktop + mobile)

Source: `homepage-patterns.md` (Figma Desktop `27873:297355`, Mobile `27873:296438`).

| Pattern | Desktop | Mobile |
|---------|---------|--------|
| Hero order | title → lead → CTA · visual | title → **visual** → **CTA** → lead |
| USP cards | row / scroll rail | **snap carousel** + dots |
| Spreads cards | horizontal TV cards | **vertical stack** |
| How it works | split + vertical steps | stack; CTAs full width |
| Tabs | horizontal pills | may overflow-x / wrap |
| Logo strip | marquee row | same idea, fewer in view |

## Rules for agents

- Do not invent breakpoint-specific block types; blocks themselves reflow (stack / rail / split).
- **Default** to single-column stacking for long copy.
- **Allow** horizontal scroll or carousel for **card rails** (USP) and **logo strips** — matches homepage Figma.
- Prefer stack over carousel for dense list cards (e.g. spreads TV cards on mobile).
- Keep primary CTA reachable without trapping the user in a horizontal-only scroller.
- Document special order cases (hero) in the block, not as a second block type.

See also: `homepage-patterns.md`.
