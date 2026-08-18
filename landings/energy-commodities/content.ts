import { defaultInstrumentsColumns, sharedCtas } from "@/lib/block-defaults";
import { platformStores } from "@/lib/platform-stores";
import type { LandingDocument } from "@/lib/types";

/**
 * Energy and Soft Commodities — USER STORY / TZ
 * “USER STORY – Energy and Soft Com LP”.
 *
 * Structure (layout, block types): Figma DS / recipe M1 only.
 * Content (copy, numbers, which rows): TZ + live FM Energy page. Never Figma sample copy.
 *
 * Stack: market-hero energy → features usp → platforms → instruments table →
 * logo-marquee → steps → reviews → faq (site footer CTA below).
 */
const landing: LandingDocument = {
  slug: "energy-commodities",
  name: "Energy and Soft Commodities",
  note: "Market recipe M1 with energy well hero. TZ 2026-08-17.",
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
      atmosphere: "energy",
      eyebrow: "Energy and Soft Commodities",
      title: "Pay $0 Commission on Commodity CFDs",
      bullets: [
        "$0 brokerage with tight spreads",
        "Trade CFDs on Oil, Natural Gas, Wheat, Soybeans and much more",
        "No deposit fees and no minimum account size",
        "MT4, MT5 or cTrader platforms",
      ],
      secondaryCta: sharedCtas.tryDemo,
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
      type: "platforms",
      title: "Choose your trading platform",
      subtitle:
        "Trade on your MetaTrader 4, MetaTrader 5, cTrader or Myfxbook AutoTrade with your Fusion Markets login.",
      items: [
        {
          id: "mt4",
          label: "MetaTrader 4",
          icon: "desktop_windows",
          title: "MetaTrader 4",
          bullets: [
            "Trade on your phone, tablet, desktop or web browser",
            "Develop and run EAs using MQL4",
            "Choose from 1000s of trading tools to plug into MT4",
            "Backtesting for more robust Expert Advisors",
          ],
          stores: [...platformStores.mt4],
        },
        {
          id: "mt5",
          label: "MetaTrader 5",
          icon: "analytics",
          title: "MetaTrader 5",
          bullets: [
            "Trade Forex, Stocks, Futures and CFDs",
            "Faster processing speeds",
            "Built-in Virtual Private Server (VPS)",
          ],
          stores: [...platformStores.mt5],
        },
        {
          id: "ctrader",
          label: "cTrader",
          icon: "wysiwyg",
          title: "cTrader",
          bullets: [
            "Advanced trading features including advanced market depth options",
            "26 time frames",
            "Over 70 built in indicators",
          ],
          stores: [...platformStores.ctrader],
        },
      ],
    },
    {
      type: "table",
      title: "Our Energy and Commodities Trading Instruments",
      showSearch: true,
      columns: defaultInstrumentsColumns,
      rows: [
        { id: "xtiusd", cells: { symbol: { title: "West Texas Intermediate", meta: "XTIUSD" }, minimum: "1", average: "2.86" } },
        { id: "xbrusd", cells: { symbol: { title: "UK Oil (Brent)", meta: "XBRUSD" }, minimum: "1", average: "3.31" } },
        { id: "xngusd", cells: { symbol: { title: "Natural Gas", meta: "XNGUSD" }, minimum: "6.0", average: "7.39" } },
        { id: "wheat", cells: { symbol: { title: "Wheat", meta: "WHEAT" }, minimum: "3.00", average: "6.27" } },
        { id: "soybean", cells: { symbol: { title: "Soybeans", meta: "SOYBEAN" }, minimum: "5", average: "8.26" } },
        { id: "corn", cells: { symbol: { title: "Corn", meta: "CORN" }, minimum: "3", average: "5.77" } },
        { id: "cofara", cells: { symbol: { title: "Coffee Arabica", meta: "COFARA" }, minimum: "1", average: "2.17" } },
        { id: "cofrob", cells: { symbol: { title: "Coffee Robusta", meta: "COFROB" }, minimum: "5.00", average: "29.40" } },
        { id: "cotton", cells: { symbol: { title: "Cotton", meta: "COTTON" }, minimum: "6", average: "9.03" } },
        { id: "uscocoa", cells: { symbol: { title: "US Cocoa", meta: "USCOCOA" }, minimum: "25.00", average: "62.06" } },
        { id: "sugarraw", cells: { symbol: { title: "Raw Sugar", meta: "SUGARRAW" }, minimum: "2", average: "3.23" } },
      ],
      footnote:
        "Minimum and average spreads from Fusion Markets trading conditions. Indicative; confirm live pricing in the Client Hub or Spreads Tool.",
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
