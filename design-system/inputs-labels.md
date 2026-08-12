# Inputs & Labels — Website Redesign FM 2.0

**SoT:** Figma frame [`Inputs & Labels` `14382:8478`](https://www.figma.com/design/5PQJiXq7xZNGCqV1XNvKro/Website-Redesign-FM-2.0?node-id=14382-8478)

Extract: `figma/extract-2026-08-12-inputs-labels.json`

## Catalog (frame)

| Group | Status in code |
|-------|----------------|
| Field / Standard | **ready** (`Field`) |
| Field / Text + Image | planned |
| Selectors / Standard | planned (dropdown) |
| Selectors / Image + Text | planned |
| Input / Search | **ready** (`SearchInput`) |
| Tabs (text / icon) | **ready** foundation (`Tabs`) |
| Blog category labels / tags | **ready** foundation (`LabelChip`) |
| Deposit currency labels | planned |
| Navigation / carousel bars | planned |
| Toggle | **ready** (`Toggle`) |
| Scroll bar | planned (native scroll used) |

## Field / Standard (measured)

Structure: **Label** (gap 4) → **Control 48×** (gap 4) → **Hint**

| Token | Value |
|-------|--------|
| Label | Roboto 12 Regular, Gray/500 |
| Control height | 48px |
| Control pad | 12 × 16 |
| Radius | 10px |
| Placeholder | Roboto 16, Gray/500 |
| Value | Roboto 16, Blue/500 |
| Hint | Roboto 12, Gray/500 |
| Border default | Gray/300 `#E4E6E9` |
| Border hover | Blue/200 `#C4C7E4` |
| Border active/focus | `#99B1E5` @ 1.5px |
| Border error | Red/500 `#C70101` (+ hint error) |
| Disabled | same border, reduced opacity |

States: Default · Hover · Active · Error · Disabled × Empty/Filled.

## Search

| Size | Height | Pad | Radius | Border focus |
|------|--------|-----|--------|--------------|
| Default | 48 | 12×16 | 10 | `#99B1E5` 1.5 |
| Small | 34 | 5×12 | 10 | same |

Placeholder Roboto 16 Gray/500; optional leading icon + trailing chevron (dropdown variants planned).

## Tabs (text, white surface)

| State | Background | Text | Font |
|-------|------------|------|------|
| Active | Purple/200 | Purple/600 | Roboto 16 **Bold** |
| Inactive | Gray/100 | Gray/600 | Roboto 16 Regular |

Pad 8×24, radius ~28 (pill). Purple surface variant: inactive Purple/100.

## Blog category chips

Large: text 20 / pad 8×20 / radius 50 / white @ 20% on media.  
Small: text 16, same pad.

## Toggle

51×31 track, 27 knob; On = Purple/500; Off = gray @ 16%.

## Components

```tsx
<Field id="name" label="Label" placeholder="Name" hint="Some information" required />
<Field id="email" label="Email" error="Some information" />
<SearchInput placeholder="Search" />
<Tabs items={[...]} value="all" onChange={...} />
<LabelChip size="sm" tone="soft">Markets</LabelChip>
<Toggle id="alerts" label="Email alerts" checked />
```
