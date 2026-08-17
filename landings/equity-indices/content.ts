import { defaultInstrumentsColumns, sharedCtas } from "@/lib/block-defaults";
import type { LandingDocument } from "@/lib/types";

/**
 * Equity Indices CFDs — USER STORY / TZ.
 *
 * Structure (layout, block types): Figma DS / recipes only.
 * Content (copy, numbers, which rows/cards): TZ / user story only — never Figma placeholder text.
 *
 * Stack (locked): market-hero indices → features usp → instruments table →
 * logo-marquee → steps → spread-cards → reviews (site footer CTA below).
 */
const landing: LandingDocument = {
  slug: "equity-indices",
  name: "Equity Indices CFDs",
  note: "Canonical market recipe with indices atmosphere + spread-cards. Reuse types only; swap TZ content.",
  listed: true,
  status: "review",
  createdAt: "2026-08-12",
  updatedAt: "2026-08-17",
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
        ["AUS200", "1.0", "1.47"],
        ["CA60", "0.20", "0.46"],
        ["CHINAH", "0.80", "2.22"],
        ["E35", "4", "8.36"],
        ["EUSTX50", "0.40", "1.71"],
        ["FRA40", "0.20", "1.11"],
        ["GER40", "0.8", "1.32"],
        ["HK50", "4.2", "4.22"],
        ["JPN225", "6.0", "6.0"],
        ["NAS100", "0.8", "0.80"],
        ["NETH25", "0.02", "0.16"],
        ["UK100", "0.3", "1.44"],
        ["US30", "1.2", "1.70"],
        ["US500", "0.3", "0.31"],
        ["USDX", "0.01", "0.02"],
      ].map(([symbol, minimum, average]) => ({
        id: symbol.toLowerCase(),
        cells: { symbol: { title: symbol }, minimum, average },
      })),
      footnote:
        "Minimum and average spreads from Fusion Markets trading conditions. Indicative; confirm live pricing in the Client Hub or Spreads Tool.",
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
      title: "Here’s Our Spreads",
      subtitle:
        "Trade CFDs on the S&P 500, NASDAQ, Hang Seng and more with $0 commission and tight spreads.",
      tabs: ["Popular", "US", "Europe", "Asia-Pacific"],
      cards: [
        { id: "us500", symbol: "US500", bid: 5482.6, ask: 5483.4, digits: 1, trend: 0.42, iconSrc: "/brand/flags/us.svg", tabs: ["Popular", "US"] },
        { id: "nas100", symbol: "NAS100", bid: 19620.4, ask: 19622.1, digits: 1, trend: 0.61, iconSrc: "/brand/flags/us.svg", tabs: ["Popular", "US"] },
        { id: "aus200", symbol: "AUS200", bid: 8214.8, ask: 8215.6, digits: 1, trend: 0.18, iconSrc: "/brand/flags/au.svg", tabs: ["Popular", "Asia-Pacific"] },
        { id: "ger40", symbol: "GER40", bid: 18540.2, ask: 18541.5, digits: 1, trend: -0.12, iconSrc: "/brand/flags/de.svg", tabs: ["Popular", "Europe"] },
        { id: "hk50", symbol: "HK50", bid: 17680.0, ask: 17682.4, digits: 1, trend: 0.27, iconSrc: "/brand/flags/hk.svg", tabs: ["Popular", "Asia-Pacific"] },
        { id: "us30", symbol: "US30", bid: 39840.2, ask: 39842.0, digits: 1, trend: 0.21, iconSrc: "/brand/flags/us.svg", tabs: ["US"] },
        { id: "us2000", symbol: "US2000", bid: 2148.6, ask: 2149.2, digits: 1, trend: -0.08, iconSrc: "/brand/flags/us.svg", tabs: ["US"] },
        { id: "ca60", symbol: "CA60", bid: 24110.4, ask: 24110.8, digits: 1, trend: 0.11, iconSrc: "/brand/flags/ca.svg", tabs: ["US"] },
        { id: "fra40", symbol: "FRA40", bid: 7520.4, ask: 7521.2, digits: 1, trend: 0.09, iconSrc: "/brand/flags/fr.svg", tabs: ["Europe"] },
        { id: "eustx50", symbol: "EUSTX50", bid: 4892.2, ask: 4893.4, digits: 1, trend: 0.15, iconSrc: "/brand/flags/eu.svg", tabs: ["Europe"] },
        { id: "e35", symbol: "E35", bid: 11140.0, ask: 11144.2, digits: 1, trend: -0.19, iconSrc: "/brand/flags/es.svg", tabs: ["Europe"] },
        { id: "uk100", symbol: "UK100", bid: 8284.6, ask: 8286.0, digits: 1, trend: 0.06, iconSrc: "/brand/flags/gb.svg", tabs: ["Europe"] },
        { id: "jpn225", symbol: "JPN225", bid: 38120.0, ask: 38128.0, digits: 1, trend: 0.33, iconSrc: "/brand/flags/jp.svg", tabs: ["Asia-Pacific"] },
        { id: "chinah", symbol: "CHINAH", bid: 6488.2, ask: 6490.2, digits: 1, trend: -0.24, iconSrc: "/brand/flags/cn.svg", tabs: ["Asia-Pacific"] },
        { id: "sg30", symbol: "SG30", bid: 3482.4, ask: 3483.6, digits: 1, trend: 0.14, iconSrc: "/brand/flags/sg.svg", tabs: ["Asia-Pacific"] },
      ],
    },
    { type: "reviews" },
  ],
};

export default landing;
