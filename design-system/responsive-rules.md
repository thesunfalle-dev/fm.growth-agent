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
| Feature grid | 1 column | auto-fit min ~240px |
| CTA row | wrap | inline row |

## Rules for agents

- Do not invent breakpoint-specific block types; blocks themselves reflow.
- Prefer single-column stacking over horizontal scroll for marketing content.
- Keep primary CTA reachable without horizontal scroll.
