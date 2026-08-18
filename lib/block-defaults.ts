import { hubSignUp } from "@/lib/navigation";
import type { LandingCta, ReviewItem, ReviewsSummary, TableColumnSpec } from "@/lib/types";

/**
 * Shared block chrome — source of truth for every registered block.
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

/** Standard instruments table: Symbol + min/avg spread. Add `hours` when TZ has trading hours. */
export const defaultInstrumentsColumns: TableColumnSpec[] = [
  instrumentsColumns.symbol,
  instrumentsColumns.minimum,
  instrumentsColumns.average,
];

export const defaultFundingProviders = [
  "VISA",
  "Apple Pay",
  "Bank transfer",
  "Mastercard",
  "PayPal",
] as const;

export const defaultReviewItems = [
  {
    id: "support",
    name: "BruceWayne001",
    date: "2 Nov",
    quote:
      "Fusion Markets has a fantastic management and support...all suggestions and questions become answered satisfying and if there are problems they get solved quick as possible and very friendly.",
  },
  {
    id: "execution",
    name: "salemhaddad34",
    date: "11 Aug",
    quote:
      "I've been trading with Fusion Markets for about 3 years now and honestly, I've had a great experience. Good execution, competitive spreads, and withdrawals have been smooth. Never had any major issues. Definitely recommend them.",
  },
  {
    id: "gold",
    name: "mcyassie",
    date: "14 Aug",
    quote:
      "I've been trading with Fusion Markets for a while now and what keeps me here is simple: low spreads + fast execution. As a gold trader, I need tight spreads during news and Fusion delivers. Platform is clean, withdrawals are smooth, and support actually replies.",
  },
  {
    id: "helpdesk",
    name: "ransuliman",
    date: "13 Aug",
    quote:
      "Excellent experience with Fusion Markets customer support. I had an issue accessing my funded trading account through TradingView, and Brian was extremely helpful, professional, and patient throughout the process.",
  },
] as const satisfies ReviewItem[];

export const defaultReviewsSummary = {
  label: "Excellent",
  rating: "4.5",
  count: "1.7k",
  href: "https://www.trustpilot.com/review/fusionmarkets.com",
} as const satisfies ReviewsSummary;

export const defaultDisclaimer =
  "CFDs are complex instruments and come with a high risk of losing money rapidly due to leverage. You should consider whether you understand how CFDs work and whether you can afford to take the high risk of losing your money.";

export const blockDefaults = {
  hero: {
    primaryCta: sharedCtas.startTrading,
  },
  marketHero: {
    primaryCta: sharedCtas.startTrading,
    quoteAction: { label: "Trade", href: hubSignUp } satisfies LandingCta,
  },
  features: {
    variant: "usp" as const,
  },
  table: {
    variant: "markets" as const,
    showSearch: true,
    scrollable: true,
  },
  steps: {
    title: "How It Works",
    subtitle: "Opening a trading account with Fusion Markets is simple:",
    orientation: "horizontal" as const,
  },
  reviews: {
    title: "Reviews from Real Traders",
    subtitle:
      "We're proud to serve our clients all around the world. Here's what hundreds had to say about us.",
    summary: defaultReviewsSummary,
    items: defaultReviewItems,
  },
  spreadCards: {
    toolPrefix: "Visit our",
    toolSuffix: "and see our spreads for yourself.",
    toolLink: {
      label: "Spreads Tool",
      href: "https://fusionmarkets.com/Trading/Forex-cfd-spreads",
    } satisfies LandingCta,
    actionLabel: "Trade",
    action: { label: "Trade", href: hubSignUp } satisfies LandingCta,
    primaryCta: sharedCtas.startTrading,
  },
  faq: {
    title: "FAQ",
    openFirst: true,
  },
  cta: {
    title: "Ready to start trading?",
    primaryCta: sharedCtas.startTrading,
    secondaryCta: sharedCtas.tryDemo,
  },
  logoMarquee: {
    title: "Our Funding Methods",
    subtitle: "Fund your account securely with a range of convenient payment methods.",
    providers: defaultFundingProviders,
  },
  platforms: {
    title: "Choose Your Platform",
    imageSrc: "/images/platforms/devices.svg",
  },
  disclaimer: {
    text: defaultDisclaimer,
  },
} as const;
