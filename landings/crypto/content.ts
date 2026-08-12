import type { LandingDocument } from "@/lib/types";

/**
 * Crypto CFDs — USER STORY “Crypto LP”.
 * Desktop stack aligned to market recipe M1 (Forex template) + campaign extras.
 * Ready-only blocks (design-system/assembly.md, page-recipes.md M1).
 *
 * M1 ideal: market-hero → education-split → features usp → instruments table → faq → footer CTA
 * Ready now:  hero brandBackground (Primary/Light) → features usp → table →
 *             optional compare table + steps → faq → disclaimer
 *             (end CTA = SiteFooter CTAFooter — no mid/end `cta` blocks)
 */
const landing: LandingDocument = {
  slug: "crypto",
  name: "Crypto CFDs",
  note: "M1 market desktop: brand hero + USP → instruments → compare → steps → FAQ. Footer CTA.",
  listed: true,
  status: "draft",
  createdAt: "2026-08-12",
  updatedAt: "2026-08-12",
  seo: {
    title: "Trade Crypto CFDs — No Commission | Fusion Markets",
    description:
      "Trade CFDs on Bitcoin, Ethereum, Dogecoin and more. Bitcoin spreads from 0.04% and 0.09% for ETH. No deposit fees and no minimum account size.",
  },
  blocks: [
    // —— 1. Market header substitute (M1 market-hero planned; no TV chart yet) ——
    {
      type: "hero",
      brandBackground: true,
      eyebrow: "Crypto CFDs",
      title: "Trade Crypto CFDs No Commission",
      subtitle:
        "CFDs on Bitcoin, Ethereum, Dogecoin and more — Bitcoin spreads from 0.04% and 0.09% for ETH. No deposit fees and no minimum account size.",
      primaryCta: {
        label: "Start trading",
        href: "https://hub.fusionmarkets.com/auth/sign-up",
      },
      secondaryCta: {
        label: "Try a free demo",
        href: "https://hub.fusionmarkets.com/auth/sign-up",
      },
    },

    // —— 2. Why trade (M1 USP rail; education-split planned → skip) ——
    {
      type: "features",
      variant: "usp",
      title: "Why trade Crypto CFDs with Fusion Markets?",
      items: [
        {
          title: "No Commission",
          illustration: "bitcoin",
          description:
            "As part of our mission to keep our fees low, we charge 0.04% as opposed to 1%+ on Aussie Crypto exchanges.",
        },
        {
          title: "$0 Minimum Account Size",
          illustration: "hand",
          description:
            "We don’t believe in teasing you with lower costs and then making you pay more later. With Fusion Markets, you can start with as much or as little as you’d like.",
        },
        {
          title: "$0 Deposit Fees",
          illustration: "deposit",
          description:
            "We cover all deposit fees on all of our 20+ methods of funding including Visa, MasterCard, PayPal and more.",
        },
        {
          title: "Easy sign-up",
          illustration: "user-auth",
          description:
            "The majority of our clients open, fund and start trading all within five minutes.",
        },
        {
          title: "Go Long and Short",
          illustration: "trade",
          description:
            "With our Crypto CFDs, you can capitalise on all price movements by being able to go both long or short.",
        },
        {
          title: "Leverage your Trades",
          illustration: "chart",
          description:
            "Get 1:2 leverage as a Retail Client or 1:10 as a Pro Client with Fusion Markets and increase your buying power with leverage and get increased exposure on your trades.",
        },
      ],
    },

    // —— 3. Instruments table (M1 / Markets DataTable — symbol + meta row pattern) ——
    {
      type: "table",
      title: "Our crypto CFD instruments",
      subtitle:
        "Sample pairs from the campaign brief. Confirm live pricing in the Client Hub or Spreads Tool.",
      columns: [
        { id: "symbol", header: "Pair", width: "40%" },
        { id: "spread", header: "From", width: "30%" },
        { id: "hours", header: "Hours", width: "30%" },
      ],
      rows: [
        {
          id: "btcusd",
          cells: {
            symbol: { title: "BTC/USD", meta: "Bitcoin" },
            spread: "0.04%",
            hours: "24/7",
          },
        },
        {
          id: "ethusd",
          cells: {
            symbol: { title: "ETH/USD", meta: "Ethereum" },
            spread: "0.09%",
            hours: "24/7",
          },
        },
        {
          id: "dogeusd",
          cells: {
            symbol: { title: "DOGE/USD", meta: "Dogecoin" },
            spread: "See live",
            hours: "24/7",
          },
        },
        {
          id: "solusd",
          cells: {
            symbol: { title: "SOL/USD", meta: "Solana" },
            spread: "See live",
            hours: "24/7",
          },
        },
        {
          id: "adausd",
          cells: {
            symbol: { title: "ADA/USD", meta: "Cardano" },
            spread: "See live",
            hours: "24/7",
          },
        },
      ],
    },

    // —— 4. Campaign compare (flat table until comparison-table is ready) ——
    {
      type: "table",
      title: "How we compare against other crypto providers",
      subtitle:
        "Indicative comparison for illustration on this internal preview. Always verify live fees and conditions before trading.",
      columns: [
        { id: "feature", header: "Feature", width: "34%" },
        { id: "fusion", header: "Fusion Markets", width: "22%" },
        { id: "exchange", header: "Typical AU exchange", width: "22%" },
        { id: "notes", header: "Notes", width: "22%" },
      ],
      rows: [
        {
          id: "min",
          cells: {
            feature: "Minimum deposit",
            fusion: "$0",
            exchange: "Often $50+",
            notes: "Start with any amount",
          },
        },
        {
          id: "fees",
          cells: {
            feature: "Trading cost (BTC)",
            fusion: "From 0.04%",
            exchange: "Often 1%+",
            notes: "Per TZ / low-fee mission",
          },
        },
        {
          id: "commission",
          cells: {
            feature: "Commission",
            fusion: "$0",
            exchange: "Varies",
            notes: "No commission crypto CFDs",
          },
        },
        {
          id: "direction",
          cells: {
            feature: "Go long & short",
            fusion: "Yes",
            exchange: "Usually long only",
            notes: "CFD structure",
          },
        },
        {
          id: "leverage",
          cells: {
            feature: "Leverage",
            fusion: "Retail 1:2 / Pro 1:10",
            exchange: "Typically none",
            notes: "Client classification applies",
          },
        },
        {
          id: "deposit-fees",
          cells: {
            feature: "Deposit fees",
            fusion: "$0",
            exchange: "Often charged",
            notes: "20+ methods covered",
          },
        },
      ],
    },

    // —— 5. How it works (Figma process 29987:339011 — horizontal + dual CTA) ——
    {
      type: "steps",
      title: "How It Works",
      subtitle: "Opening a trading account with Fusion Markets is simple:",
      orientation: "horizontal",
      items: [
        {
          title: "Create your account",
          description:
            "Fill in your personal details in our secure online application. It only takes a few minutes.",
          active: true,
        },
        {
          title: "Verify your identity",
          description:
            "Confirm your ID electronically or with two forms of ID documentation. 90% of new accounts are approved within the hour.",
          active: false,
        },
        {
          title: "Fund and trade crypto CFDs",
          description:
            "Deposit with no deposit fees and start trading Bitcoin, Ethereum and other crypto CFDs on MT4, MT5, TradingView or cTrader.",
          active: false,
        },
      ],
      primaryCta: {
        label: "Start trading",
        href: "https://hub.fusionmarkets.com/auth/sign-up",
      },
      secondaryCta: {
        label: "Try a free demo",
        href: "https://hub.fusionmarkets.com/auth/sign-up",
      },
    },

    // —— 6. FAQ (M1) ——
    {
      type: "faq",
      title: "Crypto CFDs FAQ",
      openFirst: true,
      items: [
        {
          question: "How is trading Crypto CFDs different from buying crypto?",
          answer:
            "When you typically buy crypto you cannot take a leveraged position or go short — you usually just buy the asset. With a Crypto CFD you trade a derivative of the asset, so you can go long or short and use leverage (subject to your client classification) without holding the coin itself.",
        },
        {
          question: "Do I need to pay a commission to open a position?",
          answer:
            "Fusion Markets offers crypto CFDs with no commission. Pricing is via spreads — for example Bitcoin from 0.04% and Ethereum from 0.09% as specified for this page. Always check live pricing in the platform.",
        },
        {
          question: "Are there any other fees?",
          answer:
            "Deposit fees are covered on 20+ funding methods. Overnight financing (swap) may apply to positions held open; rates are shown in the trading platform and update daily.",
        },
        {
          question: "What leverage is available?",
          answer:
            "Per the user story for this landing: 1:2 as a Retail Client or 1:10 as a Pro Client, subject to eligibility, product rules and your account jurisdiction.",
        },
        {
          question: "Can I try a demo?",
          answer:
            "Yes. Open a free demo from the Client Hub to practise crypto CFD trading without risking real funds before you go live.",
        },
      ],
    },

    // —— 7. Disclaimer only — Ready to start = SiteFooter CTAFooter ——
    {
      type: "disclaimer",
      text: "CFDs are complex instruments and come with a high risk of losing money rapidly due to leverage. You should consider whether you understand how CFDs work and whether you can afford to take the high risk of losing your money. Crypto CFDs are especially volatile. This is an internal Growth Agent preview on fm.growth-agent.org and is not an official Fusion Markets publication. Spreads, leverage and product availability depend on entity and client classification — verify on the live site and legal documents before trading.",
    },
  ],
};

export default landing;
