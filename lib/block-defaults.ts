import { hubSignUp } from "@/lib/navigation";
import type { LandingCta, TableColumnSpec } from "@/lib/types";

/**
 * Shared block chrome — source of truth for repeating section titles, CTAs, and table headers.
 *
 * Landings fill campaign content only. Omit a prop to use the default.
 * Do not recase, restyle, or fork these strings per slug.
 */
export const sharedCtas = {
  startTrading: { label: "Start trading", href: hubSignUp } satisfies LandingCta,
  tryDemo: { label: "Try a free demo", href: hubSignUp } satisfies LandingCta,
  getLiveAccount: { label: "Get a live account", href: hubSignUp } satisfies LandingCta,
} as const;

export const instrumentsColumns = {
  symbol: { id: "symbol", header: "Symbol", width: "400px", align: "left" },
  hours: { id: "hours", header: "Trading Hours", width: "200px", align: "center" },
  minimum: { id: "minimum", header: "Minimum Spread", width: "200px", align: "center" },
  average: { id: "average", header: "Average Spread", width: "200px", align: "center" },
} as const satisfies Record<string, TableColumnSpec>;

export const blockDefaults = {
  steps: {
    title: "How It Works",
    subtitle: "Opening a trading account with Fusion Markets is simple:",
    orientation: "horizontal" as const,
  },
  logoMarquee: {
    title: "Our Funding Methods",
  },
  cta: {
    title: "Ready to start trading?",
  },
  marketHero: {
    primaryCta: sharedCtas.startTrading,
  },
} as const;
