import { defaultInstrumentsColumns, sharedCtas } from "@/lib/block-defaults";
import type { LandingDocument } from "@/lib/types";

/** Equity Indices CFDs — content from USER STORY - Equity Indices Landing Page. */
const landing: LandingDocument = {
  slug: "equity-indices",
  name: "Equity Indices CFDs",
  note: "M1 market landing. Spread values are illustrative placeholders approved for this preview.",
  listed: true,
  status: "draft",
  createdAt: "2026-08-12",
  updatedAt: "2026-08-13",
  seo: {
    title: "Trade Equity Indices CFDs — $0 Commission | Fusion Markets",
    description: "Trade CFDs on world-leading equity indices with $0 commission.",
  },
  blocks: [
    {
      type: "market-hero",
      atmosphere: "indices",
      eyebrow: "Equity Indices CFDs",
      title: "Trade CFDs on world’s top equity indices with $0 commission",
      subtitle: "Trade the S&P 500, NASDAQ, Hang Seng and more.",
      bullets: [
        "Use leverage to increase your exposure",
        "Take advantage of our tight spreads",
        "No deposit fees and no minimum account size",
      ],
    },
    {
      type: "features",
      variant: "usp",
      title: "Why Trade Index CFDs with Fusion Markets?",
      items: [
        { title: "Zero Commissions", description: "When you trade CFDs on equity indices, you’ll pay $0 in commissions.", illustration: "coin" },
        { title: "No Account Size Minimum", description: "We have no requirements for account size, so you can fund and trade with as much or as little as you’d like.", illustration: "safe-box" },
        { title: "No Deposit Fees", description: "We cover all deposit fees across our 20+ methods of funding including Visa, MasterCard, PayPal and more.", illustration: "deposit" },
        { title: "No Long Sign-Up Process", description: "Many of our clients open, fund and start trading all within five minutes.", illustration: "user-auth" },
        { title: "Go Long and Short", description: "Trade long or short with leverage on equity indices.", illustration: "trade" },
        { title: "Trade the World’s Largest Indices", description: "Trade AUS200, HK50, JPN225, NAS100, US500 and many more with $0 brokerage.", illustration: "chart" },
      ],
    },
    {
      type: "table",
      title: "Our Equity Index CFD Products",
      showSearch: true,
      columns: defaultInstrumentsColumns,
      rows: [
        ["AUS200", "0.8", "1.14"], ["CA60", "0.2", "0.35"], ["CHINAH", "1.6", "2.00"],
        ["E35", "2.1", "6.1"], ["EUSTX50", "0.2", "1.31"], ["FRA40", "0.2", "0.93"], ["GER40", "0.8", "1.22"],
      ].map(([symbol, minimum, average]) => ({
        id: symbol.toLowerCase(),
        cells: { symbol: { title: symbol }, minimum, average },
      })),
      footnote: "Illustrative preview spreads only. Confirm live pricing in the Client Hub or Spreads Tool before trading.",
    },
    {
      type: "logo-marquee",
    },
    {
      type: "steps",
      items: [
        { title: "Enter personal details", description: "Fill in your personal details in our secure online application.", active: true },
        { title: "Verify your identity", description: "Confirm your ID electronically or by submitting supporting documents." },
        { title: "Start trading", description: "Fund your account and start trading equity index CFDs." },
      ],
      primaryCta: sharedCtas.tryDemo,
      secondaryCta: sharedCtas.getLiveAccount,
    },
    {
      type: "spread-cards",
      title: "See our Index Live Spreads",
      subtitle:
        "Trade CFDs on the S&P 500, NASDAQ, Hang Seng and more with $0 commission and tight spreads.",
      featuredId: "us500",
      tabs: ["Popular", "US", "Europe", "Asia-Pacific"],
      cards: [
        {
          id: "us500",
          symbol: "US500",
          bid: 5482.6,
          ask: 5483.4,
          digits: 1,
          trend: 0.42,
          iconSrc: "/brand/flags/us.svg",
          tab: "US",
        },
        {
          id: "nas100",
          symbol: "NAS100",
          bid: 19620.4,
          ask: 19622.1,
          digits: 1,
          trend: 0.61,
          iconSrc: "/brand/flags/us.svg",
          tab: "US",
        },
        {
          id: "aus200",
          symbol: "AUS200",
          bid: 8214.8,
          ask: 8215.6,
          digits: 1,
          trend: 0.18,
          iconSrc: "/brand/flags/au.svg",
          tab: "Asia-Pacific",
        },
        {
          id: "ger40",
          symbol: "GER40",
          bid: 18540.2,
          ask: 18541.5,
          digits: 1,
          trend: -0.12,
          iconSrc: "/brand/flags/de.svg",
          tab: "Europe",
        },
        {
          id: "hk50",
          symbol: "HK50",
          bid: 17680.0,
          ask: 17682.4,
          digits: 1,
          trend: 0.27,
          iconSrc: "/brand/flags/hk.svg",
          tab: "Asia-Pacific",
        },
      ],
    },
    { type: "reviews" },
  ],
};

export default landing;
