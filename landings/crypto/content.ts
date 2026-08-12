import type { LandingDocument } from "@/lib/types";

/**
 * Crypto CFDs landing — USER STORY “Crypto LP”.
 * Sections 1–2 from TZ verbatim; 3–7 empty in TZ → filled with market-recipe
 * modules (GP + current FM crypto page) using Fusion DS blocks only.
 */
const landing: LandingDocument = {
  slug: "crypto",
  name: "Crypto CFDs",
  note: "From USER STORY – Crypto LP. Market recipe + TZ sections 1–2.",
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
    // —— Section 1 (TZ) ——
    {
      type: "hero",
      brandBackground: true,
      eyebrow: "Crypto CFDs",
      title: "Trade Crypto CFDs No Commission",
      bullets: [
        "Trade CFDs on Bitcoin, Ethereum, Dogecoin and more",
        "Bitcoin spreads from 0.04% and 0.09% for ETH",
        "No deposit fees and no minimum account size",
      ],
      primaryCta: {
        label: "Start trading",
        href: "https://hub.fusionmarkets.com/auth/sign-up",
      },
      secondaryCta: {
        label: "Try a free demo",
        href: "https://hub.fusionmarkets.com/auth/sign-up",
      },
      proofNote: "Rated by traders on Trustpilot",
      table: {
        title: "Crypto CFD spreads",
        columns: [
          { id: "pair", header: "Pair", width: "40%" },
          { id: "spread", header: "From", width: "30%" },
          { id: "hours", header: "Hours", width: "30%" },
        ],
        rows: [
          {
            id: "btcusd",
            cells: {
              pair: { title: "BTC/USD", meta: "Bitcoin" },
              spread: "0.04%",
              hours: "24/7",
            },
          },
          {
            id: "ethusd",
            cells: {
              pair: { title: "ETH/USD", meta: "Ethereum" },
              spread: "0.09%",
              hours: "24/7",
            },
          },
          {
            id: "dogeusd",
            cells: {
              pair: { title: "DOGE/USD", meta: "Dogecoin" },
              spread: "—",
              hours: "24/7",
            },
          },
          {
            id: "solusd",
            cells: {
              pair: { title: "SOL/USD", meta: "Solana" },
              spread: "—",
              hours: "24/7",
            },
          },
          {
            id: "adausd",
            cells: {
              pair: { title: "ADA/USD", meta: "Cardano" },
              spread: "—",
              hours: "24/7",
            },
          },
        ],
      },
    },

    // —— Section 2 (TZ) ——
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
    {
      type: "cta",
      title: "Ready to trade Crypto CFDs?",
      subtitle: "Open a live account or practise risk-free on a free demo.",
      primaryCta: {
        label: "Start trading",
        href: "https://hub.fusionmarkets.com/auth/sign-up",
      },
      secondaryCta: {
        label: "Try a free demo",
        href: "https://hub.fusionmarkets.com/auth/sign-up",
      },
    },

    // —— Section 3 (TZ empty → market recipe / GP “How we compare”) ——
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

    // —— Section 4 (spreads instruments — extends TZ hero table) ——
    {
      type: "table",
      title: "Here’s our crypto spreads",
      subtitle:
        "You can’t control the markets, but you can control what you pay to trade them. Sample pairs from the user story; confirm live pricing in the Client Hub or Spreads Tool.",
      columns: [
        { id: "pair", header: "Symbol", width: "28%" },
        { id: "name", header: "Name", width: "28%" },
        { id: "spread", header: "Spread from", width: "22%" },
        { id: "hours", header: "Trading hours", width: "22%" },
      ],
      rows: [
        {
          id: "btc",
          cells: {
            pair: "BTC/USD",
            name: "Bitcoin",
            spread: "0.04%",
            hours: "24/7",
          },
        },
        {
          id: "eth",
          cells: {
            pair: "ETH/USD",
            name: "Ethereum",
            spread: "0.09%",
            hours: "24/7",
          },
        },
        {
          id: "doge",
          cells: {
            pair: "DOGE/USD",
            name: "Dogecoin",
            spread: "See live",
            hours: "24/7",
          },
        },
        {
          id: "sol",
          cells: {
            pair: "SOL/USD",
            name: "Solana",
            spread: "See live",
            hours: "24/7",
          },
        },
        {
          id: "ada",
          cells: {
            pair: "ADA/USD",
            name: "Cardano",
            spread: "See live",
            hours: "24/7",
          },
        },
      ],
    },

    // —— Section 5 (How it works — FM crypto page / market recipe) ——
    {
      type: "steps",
      title: "How it works",
      subtitle: "Opening a trading account with Fusion Markets is simple:",
      orientation: "vertical",
      items: [
        {
          title: "Create your account",
          description:
            "Fill in your personal details in our secure online application. It only takes a few minutes.",
        },
        {
          title: "Verify your identity",
          description:
            "We need to confirm your ID. This can be done electronically or by submitting two forms of ID Documentation. 90% of new accounts are approved within the hour.",
        },
        {
          title: "Fund and trade crypto CFDs",
          description:
            "Deposit with your preferred method (no deposit fees) and start trading Bitcoin, Ethereum and other crypto CFDs on MT4, MT5, TradingView or cTrader.",
        },
      ],
    },

    // —— Section 6 (FAQ — GP crypto adapted to Fusion wording from TZ) ——
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

    // —— Section 7 (closing CTA — TZ empty; FM pattern) ——
    {
      type: "cta",
      title: "Ready to start trading?",
      subtitle: "Get a live account or try a free demo — no minimum account size.",
      primaryCta: {
        label: "Start trading",
        href: "https://hub.fusionmarkets.com/auth/sign-up",
      },
      secondaryCta: {
        label: "Try a free demo",
        href: "https://hub.fusionmarkets.com/auth/sign-up",
      },
    },
    {
      type: "disclaimer",
      text: "CFDs are complex instruments and come with a high risk of losing money rapidly due to leverage. You should consider whether you understand how CFDs work and whether you can afford to take the high risk of losing your money. Crypto CFDs are especially volatile. This is an internal Growth Agent preview on fm.growth-agent.org and is not an official Fusion Markets publication. Spreads, leverage and product availability depend on entity and client classification — verify on the live site and legal documents before trading.",
    },
  ],
};

export default landing;
