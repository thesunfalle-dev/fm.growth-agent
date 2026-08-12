import type { LandingDocument } from "@/lib/types";

/** Equity Indices CFDs — content from USER STORY - Equity Indices Landing Page. */
const landing: LandingDocument = {
  slug: "equity-indices",
  name: "Equity Indices CFDs",
  note: "M1 market landing. Spread values are illustrative placeholders approved for this preview.",
  listed: true,
  status: "draft",
  createdAt: "2026-08-12",
  updatedAt: "2026-08-12",
  seo: {
    title: "Trade Equity Indices CFDs — $0 Commission | Fusion Markets",
    description: "Trade CFDs on world-leading equity indices with $0 commission.",
  },
  blocks: [
    {
      type: "hero",
      brandBackground: true,
      eyebrow: "Equity Indices CFDs",
      title: "Trade CFDs on world’s top equity indices with $0 commission",
      subtitle: "Trade the S&P 500, NASDAQ, Hang Seng and more.",
      bullets: [
        "Use leverage to increase your exposure",
        "Take advantage of our tight spreads",
        "No deposit fees and no minimum account size",
      ],
      primaryCta: { label: "Start trading", href: "https://hub.fusionmarkets.com/auth/sign-up" },
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
      columns: [
        { id: "symbol", header: "Symbol", align: "left" },
        { id: "minimum", header: "Minimum Spread", align: "center" },
        { id: "average", header: "Average Spread", align: "center" },
      ],
      rows: [
        ["AUS200", "0.8", "1.14"], ["CA60", "0.2", "0.35"], ["CHINAH", "1.6", "2.00"],
        ["E35", "2.1", "6.1"], ["EUSTX50", "0.2", "1.31"], ["FRA40", "0.2", "0.93"], ["GER40", "0.8", "1.22"],
      ].map(([symbol, minimum, average]) => ({ id: symbol.toLowerCase(), cells: { symbol, minimum, average } })),
      footnote: "Illustrative preview spreads only. Confirm live pricing in the Client Hub or Spreads Tool before trading.",
    },
    {
      type: "steps",
      title: "How It Works",
      subtitle: "Opening a trading account with Fusion Markets is simple:",
      orientation: "horizontal",
      items: [
        { title: "Enter Personal Details", description: "Fill in your personal details in our secure online application.", active: true },
        { title: "Verify Your Identity", description: "Confirm your ID electronically or by submitting supporting documents." },
        { title: "Start Trading", description: "Fund your account and start trading equity index CFDs." },
      ],
      primaryCta: { label: "Try a free demo", href: "https://hub.fusionmarkets.com/auth/sign-up" },
      secondaryCta: { label: "Get a live account", href: "https://hub.fusionmarkets.com/auth/sign-up" },
    },
    { type: "disclaimer", text: "CFDs are complex financial instruments. Ensure you understand the risks before trading." },
  ],
};

export default landing;
