# Sections — Website Redesign FM 2.0

**SoT:** Figma frame [`Sections` `15313:11090`](https://www.figma.com/design/5PQJiXq7xZNGCqV1XNvKro/Website-Redesign-FM-2.0?node-id=15313-11090)

Extract: `figma/extract-2026-08-12-sections.json`

Page-level building blocks for structured layouts. Spacing between main sections still comes from **Spacing & Layout** (120 desktop / 60 mobile).

## Catalog

| Group | Figma | Status in code |
|-------|-------|----------------|
| FAQ Desktop Open=off/on | `15162:14217` / `24824:12478` | **ready** (`FaqItem` / block `faq`) |
| FAQ Mobile Open=Off/On | `15429:11358` / `15429:11359` | **ready** (responsive styles) |
| Step by Steps vertical light | e.g. `18545:48950` | **ready** (`Steps` / block `steps`) |
| Step vertical dark | e.g. `18549:82142` | **ready** foundation (`mode="dark"`) |
| Step horizontal light | e.g. `28358:173515` | **ready** (`orientation="horizontal"`) |
| Step Off (inactive) | various | **ready** (`active={false}`) |

## FAQ

| Spec | Desktop | Mobile |
|------|---------|--------|
| Question | Noto Sans **Medium** 20 | Roboto **Medium** 16 |
| Answer | Roboto Light 16 | Roboto Light 16 |
| Divider | Blue/100 `#E5EAFF` bottom border | same |
| Padding bottom | 32 | 24 |
| Title ↔ icon gap | 16 | 16 |
| Title ↔ answer (open) | 20 | 16 |
| Icons | Material `expand_more` / `expand_less` 24 | same |

Implementation: native **`<details>` / `<summary>`** (static export, no client JS).

```tsx
// Block content
{
  type: "faq",
  title: "FAQ",
  openFirst: true,
  items: [
    { question: "…", answer: "…" },
  ],
}
```

## Step by Steps

### Vertical (default)

| Element | Spec |
|---------|------|
| Number disc | 40×40, radius pill |
| Active | fill Purple/500, number white, Roboto Medium ~24 |
| Inactive | Purple/200 fill, Purple/400 number |
| Connector | 2px vertical, same color as active/inactive |
| Title | Noto SemiBold 20 (light mode) |
| Body | Roboto Light 16 |
| Title↔body gap | 8 |
| Indicator column | ~58 wide |

### Horizontal

| Element | Spec |
|---------|------|
| Number disc | 44×44 + purple soft shadow |
| Connectors | 2px horizontal between steps |
| Title | Roboto Medium 16, centered |
| Body | Roboto Light 14, centered |
| Mobile | falls back to vertical-like row layout |

### Dark mode

Section surface Purple/500; number disc white with purple digit; body text on-accent.

```tsx
{
  type: "steps",
  title: "Get started",
  orientation: "vertical", // or "horizontal"
  mode: "light",           // or "dark"
  items: [
    { title: "Create your account", description: "…" },
    { title: "Verify your identity", description: "…" },
  ],
}
```

## Components

| Name | Path |
|------|------|
| `FaqItem` | `components/ui/FaqItem.tsx` |
| `Faq` | `components/blocks/Faq.tsx` |
| `Step` | `components/ui/Step.tsx` |
| `Steps` | `components/ui/Steps.tsx` |
| `StepsBand` | `components/blocks/StepsBand.tsx` |

## Agent rules

1. Prefer block types `faq` and `steps` over free-form HTML.
2. FAQ chevrons = Material only (`expand_more` / `expand_less`).
3. Do not invent accordion JS for static landings — use `details`.
4. Section vertical padding stays on `Section` (120/60), not re-declared inside FAQ/steps chrome.
