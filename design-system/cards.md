# Cards — Website Redesign FM 2.0

**SoT:** Figma frame [`Cards` `15166:10610`](https://www.figma.com/design/5PQJiXq7xZNGCqV1XNvKro/Website-Redesign-FM-2.0?node-id=15166-10610)

Extract: `figma/extract-2026-08-12-cards.json`

## Catalog

| Group | Usage rule (Figma) | Status |
|-------|-------------------|--------|
| **USP / “Why Fusion…”** | Only Fusion unique selling points — **not** other benefits | **ready** (`UspCard`, `features` + `variant: "usp"`) |
| Content cards | Product features of platforms/apps | foundation (`Card` `content`) |
| Content cards (4+ USPs) | Sections with at least 4 USPs | planned |
| FAQ cards | FAQs page only | planned (page-level; landings use `faq` block) |
| Blog cards | Blog sections only | planned |
| Platform card | “Other Platform” sections | planned |
| Trading chart + Trade button | TV chart widgets | planned |
| Deposit/Withdrawal | Funding methods | planned |
| TradingView chart cards | Logos / Logo / Text states | planned |
| Accordion card | Expandable product cards | planned |
| Instrument cards | Forex/Metals/… tiles | foundation sizes (`instrument`) |

## USP cards (primary foundation)

### Rules

- **On / Off:** Learn more CTA visible or hidden.
- **Hover:** soft purple drop shadow.
- Image via illustration catalog (Images frame) preferred.
- Width **min 276 / max 296** desktop; mobile ~**250**.
- Height **min 364**; flexible with content; **equal height** in a block.
- Bottom padding **24** from last content to edge.
- **Max 4 visible** per block; more → **horizontal scroll**.

### Anatomy

| Part | Spec |
|------|------|
| Media | h **180**, Gray/100, top radius **16**, border Gray/300 0.5 |
| Body | white, pad **24**, bottom radius **16** |
| Title | Noto SemiBold **24** |
| Description | Roboto Light **16** |
| Gap title↔body | **16** |
| Learn more | Text CTA gradient + Material `east` |
| Hover shadow | `0 10px 40px rgba(99, 70, 211, 0.1)` |

```tsx
{
  type: "features",
  variant: "usp",
  title: "Why Fusion",
  items: [
    {
      title: "$0 Commissions…",
      description: "…",
      illustration: "coin",
      learnMore: { label: "Learn more", href: "/…" },
    },
  ],
}
```

```tsx
import { UspCard } from "@/components/ui/UspCard";
import { CardGrid } from "@/components/ui/CardGrid";

<CardGrid variant="usp" maxVisible={4}>
  <UspCard title="…" description="…" illustration="shield" learnMore={{ href: "#", label: "Learn more" }} />
</CardGrid>
```

## Components

| Name | Path |
|------|------|
| `Card` | shell: usp / feature / content / instrument |
| `UspCard` | structured USP card |
| `CardGrid` | layout + scroll rule |

## Agent rules

1. USP cards **only** for Fusion USPs (Figma warning).
2. Prefer `illustration` from Images catalog over random images.
3. Learn more = `Button` text + `arrow` (Material `east`).
4. Do not invent blog/platform/instrument art until those variants are ingested.
