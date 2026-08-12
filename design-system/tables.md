# Tables — Website Redesign FM 2.0

**SoT:** Figma frame [`Tables` `15276:11158`](https://www.figma.com/design/5PQJiXq7xZNGCqV1XNvKro/Website-Redesign-FM-2.0?node-id=15276-11158)

Extract: `figma/extract-2026-08-12-tables.json`  
Components: `components/ui/DataTable.tsx` (+ cells helpers)

## Table rules (from frame)

### General
- **Default width:** 1280px  
- **Max visible height:** 600px — scroll body, **sticky header**  
- **Horizontal padding:** 24px left/right  
- If table height &lt; 600px **or** last row → **hide bottom divider**

### Header
- **Height:** 54px  
- Always visible while scrolling  
- If last column is a button: no label required, space still reserved  

### Rows
- **Min height:** 78px  
- Bottom divider on all rows except last (or short table rule above)  
- Action button (if any) always on the **right**

## Measured styles (Forex desktop)

| Part | Value | Token / style |
|------|--------|----------------|
| Header fill | `#F5F6F7` Gray/200 | `component.table.headerBg` |
| Header label | Roboto Regular 14 / 150%, `#555A66` Gray/600 | `headerText` |
| Row value | Roboto Regular 16 / 150%, `#0D1350` Blue/500 | `rowText` |
| Row meta (pair name) | Roboto Regular 14, muted | `rowMetaText` |
| Row divider / stroke | `#F5F6F7` | `rowDivider` |
| Row hover | `#F7F6FC` Purple/50 | `rowHoverBg` |
| Header/row pad X | 24px | `paddingX` |
| Row pad Y | 16px | `rowPaddingY` |

## Table types in Figma (catalog)

Not all coded yet — foundation covers **markets data table** (header + rows). Full catalog in extract:

- Markets: Forex, Metals, Indices, Energy, Crypto, US Shares (+ mobile)
- Conditions: Commission, Session Time, Contract Spec, Margin & Leverage
- Comparison / Zero vs Classic / Pro criteria
- Partner charts, Refer a Friend

## API (foundation)

```tsx
<DataTable
  columns={[
    { id: "symbol", header: "Symbol", width: "400px" },
    { id: "min", header: "Minimum Spread" },
    { id: "avg", header: "Average Spread" },
  ]}
  rows={[
    {
      id: "usdjpy",
      cells: {
        symbol: { title: "USDJPY", meta: "US dollar / Japanese Yen" },
        min: "0.64139",
        avg: "0.64139",
      },
    },
  ]}
/>
```

Landing block: `type: "table"` — see `block-inventory.json` and `assembly.md`.

**Never nest a table inside `hero`.** Sequence `hero` then `table`.

Named Figma market tables that map to the same block:

| Figma label (Tables frame) | Content use |
|----------------------------|-------------|
| Markets - Crypto CFDs | Symbol / spread rows |
| Markets - Crypto CFDs - How we Compare | Feature × provider columns (flat) |
| Markets - Forex / Metals / … | Same markets DataTable foundation |
| Zero vs Classic / Comparison Table shells | Flatten to one `table` until multi-panel `comparison-table` is built |

## Status

| Piece | Status |
|-------|--------|
| Rules + tokens | ready |
| Markets DataTable (desktop) | ready |
| Sticky scroll shell | ready |
| Mobile specialized layouts | planned |
| Comparison / accordion tables | planned |
| Header search field | planned |
