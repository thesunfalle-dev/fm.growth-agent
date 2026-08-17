import { defaultInstrumentsColumns, sharedCtas } from "@/lib/block-defaults";
import type { LandingDocument } from "@/lib/types";

/**
 * Energy and Soft Commodities — USER STORY / TZ
 * “USER STORY – Energy and Soft Com LP”.
 *
 * Structure (layout, block types): Figma DS / recipe M1 only.
 * Content (copy, numbers, which rows): TZ + live FM Energy page. Never Figma sample copy.
 *
 * Stack: market-hero brand → features usp → instruments table →
 * logo-marquee → steps → reviews → faq (site footer CTA below).
 *
 * Planned `platforms` (“Choose your trading platform”) is skipped until that type is ready.
 */
const landing: LandingDocument = {
  slug: "energy-commodities",
  name: "Energy and Soft Commodities",
  note: "Market recipe M1 with brand atmosphere. Quotes in the hero. TZ 2026-08-17.",
  listed: true,
  status: "review",
  createdAt: "2026-08-17",
  updatedAt: "2026-08-17",
  seo: {
    title: "Pay $0 Commission on Commodity CFDs | Fusion Markets",
    description:
      "Trade CFDs on Oil, Natural Gas, Wheat, Soybeans and more. $0 brokerage, no deposit fees and no minimum account size.",
  },
  blocks: [
    {
      type: "market-hero",
      atmosphere: "brand",
      eyebrow: "Energy and Soft Commodities",
      title: "Pay $0 Commission on Commodity CFDs",
      bullets: [
        "$0 brokerage with tight spreads",
        "Trade CFDs on Oil, Natural Gas, Wheat, Soybeans and much more",
        "No deposit fees and no minimum account size",
        "MT4, MT5 or cTrader platforms",
      ],
      secondaryCta: sharedCtas.tryDemo,
      quotes: [
        { id: "xtiusd", symbol: "XTIUSD", label: "WTI Crude Oil", bid: 78.42, ask: 78.45, digits: 2 },
        { id: "xbrusd", symbol: "XBRUSD", label: "Brent Crude Oil", bid: 82.16, ask: 82.19, digits: 2 },
        { id: "xngusd", symbol: "XNGUSD", label: "Natural Gas", bid: 3.214, ask: 3.221, digits: 3 },
        { id: "wheat", symbol: "WHEAT", label: "Wheat", bid: 548.2, ask: 548.6, digits: 1 },
        { id: "soybn", symbol: "SOYBN", label: "Soybeans", bid: 1042.4, ask: 1043.0, digits: 1 },
      ],
    },
    {
      type: "features",
      variant: "usp",
      title: "Why trade Commodity CFDs with Fusion Markets?",
      items: [
        {
          title: "No Commission",
          illustration: "coin",
          description:
            "Trade CFDs on oil, natural gas and much more with no brokerage commissions.",
        },
        {
          title: "Over 250+ Instruments",
          illustration: "chart",
          description:
            "Experience Fusion’s low fees on our entire product range, including Forex, US stocks, commodities and more.",
        },
        {
          title: "$0 Minimum Account Size",
          illustration: "safe-box",
          description:
            "Yep, we don’t believe in attracting you with low costs and then making you pay big bucks later. With Fusion Markets, you can start trading with as little or as much as you feel comfortable.",
        },
        {
          title: "No Deposit Fees",
          illustration: "deposit",
          description:
            "No one likes fees. That’s why we cover all deposit fees on all of our 20+ methods of funding including Visa, MasterCard, PayPal and more.",
        },
        {
          title: "Real Transparency",
          illustration: "secure-file",
          description:
            "Examine our execution quality with Trade Receipts. See your spreads, execution speed, ticks, liquidity providers and more.",
        },
        {
          title: "24/7 Support",
          illustration: "support",
          description:
            "We’re here to help you all day, every day. The markets don’t sleep, so neither do we!",
        },
      ],
    },
    {
      type: "table",
      title: "Our Energy and Commodities Trading Instruments",
      showSearch: true,
      columns: defaultInstrumentsColumns,
      rows: [
        { id: "xtiusd", cells: { symbol: { title: "WTI Crude Oil", meta: "XTIUSD" }, minimum: "See live", average: "See live" } },
        { id: "xbrusd", cells: { symbol: { title: "Brent Crude Oil", meta: "XBRUSD" }, minimum: "See live", average: "See live" } },
        { id: "xngusd", cells: { symbol: { title: "Natural Gas", meta: "XNGUSD" }, minimum: "See live", average: "See live" } },
        { id: "wheat", cells: { symbol: { title: "Wheat", meta: "WHEAT" }, minimum: "See live", average: "See live" } },
        { id: "soybn", cells: { symbol: { title: "Soybeans", meta: "SOYBN" }, minimum: "See live", average: "See live" } },
        { id: "corn", cells: { symbol: { title: "Corn", meta: "CORN" }, minimum: "See live", average: "See live" } },
        { id: "coffee", cells: { symbol: { title: "Coffee", meta: "COFFEE" }, minimum: "See live", average: "See live" } },
        { id: "cotton", cells: { symbol: { title: "Cotton", meta: "COTTON" }, minimum: "See live", average: "See live" } },
        { id: "cocoa", cells: { symbol: { title: "Cocoa", meta: "COCOA" }, minimum: "See live", average: "See live" } },
        { id: "sugar", cells: { symbol: { title: "Sugar", meta: "SUGAR" }, minimum: "See live", average: "See live" } },
      ],
      footnote:
        "Instrument names from the Energy and Soft Commodities TZ and the live Fusion product page. Spreads are not specified in the TZ — confirm live pricing in the Client Hub or Spreads Tool.",
    },
    { type: "logo-marquee" },
    {
      type: "steps",
      items: [
        {
          title: "Enter personal details",
          description:
            "Fill in your personal details in our secure online application. It only takes a few minutes.",
          active: true,
        },
        {
          title: "Verify your identity",
          description:
            "We need to confirm your ID. This can be done electronically or by submitting two forms of ID documentation.",
        },
        {
          title: "Start trading",
          description:
            "Fund your account and start trading oil, natural gas, wheat, soybeans and other commodity CFDs.",
        },
      ],
      primaryCta: sharedCtas.tryDemo,
      secondaryCta: sharedCtas.getLiveAccount,
    },
    { type: "reviews" },
    {
      type: "faq",
      items: [
        {
          question: "What are soft commodities?",
          answer:
            "Soft commodities refer to the sector of the commodities market where products are grown rather than extracted or mined. This includes products such as coffee, wheat, cotton and soybeans. Fusion Markets offers a wide range and leverage on all our commodities products.",
        },
        {
          question: "Can I trade things other than commodities on Fusion Markets?",
          answer:
            "Yes. Traders have access to 250+ instruments including US Shares, cryptocurrencies, Forex and more. Visit the live trading conditions page for the full list.",
        },
        {
          question: "Can I try a demo?",
          answer:
            "Yes. Open a free demo from the Client Hub to practise commodity CFD trading without risking real funds before you go live.",
        },
        {
          question: "Are there any extra fees?",
          answer:
            "Deposit fees are covered on 20+ funding methods. Overnight financing (swap) may apply to CFD positions held open; rates are shown in MetaTrader, TradingView or cTrader and update daily.",
        },
      ],
    },
  ],
};

export default landing;
