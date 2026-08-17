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
    id: "platforms",
    name: "BruceWayne001",
    date: "2 Nov",
    quote:
      "I am very satisfied with Fusion Markets. I have a small spread and a 1/500 account. They are very fair and kind and I have never had any problems with them. I really liked that they have three platforms that I have used and it is very easy to transfer money and trade from one to another. All in all, after 11 years of trading, I can say that I give them a clean five stars and I think I will have a long cooperation with them.",
  },
  {
    id: "platforms-2",
    name: "BruceWayne001",
    date: "2 Nov",
    quote:
      "I am very satisfied with Fusion Markets. I have a small spread and a 1/500 account. They are very fair and kind and I have never had any problems with them. I really liked that they have three platforms that I have used and it is very easy to transfer money and trade from one to another. All in all, after 11 years of trading, I can say that I give them a clean five stars and I think I will have a long cooperation with them.",
  },
  {
    id: "platforms-3",
    name: "BruceWayne001",
    date: "2 Nov",
    quote:
      "I am very satisfied with Fusion Markets. I have a small spread and a 1/500 account. They are very fair and kind and I have never had any problems with them. I really liked that they have three platforms that I have used and it is very easy to transfer money and trade from one to another. All in all, after 11 years of trading, I can say that I give them a clean five stars and I think I will have a long cooperation with them.",
  },
] as const satisfies ReviewItem[];

export const defaultReviewsSummary = {
  label: "Excellent",
  rating: "4.8",
  count: "7.2k",
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
  disclaimer: {
    text: defaultDisclaimer,
  },
} as const;
