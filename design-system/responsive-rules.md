# Responsive rules

## Breakpoints (tokens)

| Token | Default value | Use |
|-------|---------------|-----|
| `breakpoint.sm` | 640px | small tablets / large phones |
| `breakpoint.md` | 768px | tablet |
| `breakpoint.lg` | 1024px | desktop |
| `breakpoint.xl` | 1280px | wide desktop |

Media queries must reference these values (literal match + comment) until a CSS `@custom-media` pipeline exists.

## Layout behavior

| Element | Mobile | Desktop |
|---------|--------|---------|
| Container | full width minus gutter token | max-width `layout.container.max` |
| Hero title | fluid clamp using type tokens | display size |
| Feature grid | 1 column | auto-fit min ~220px |
| CTA row | wrap, full-width buttons OK | inline row |
| Header | compact brand + pill | same |

## Rules for agents

- Do not invent breakpoint-specific block types; blocks themselves reflow.
- Prefer single-column stacking over horizontal scroll for marketing content.
- Keep primary CTA reachable without horizontal scroll.
