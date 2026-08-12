import type { LandingDocument } from "@/lib/types";

/**
 * Crypto CFDs — USER STORY / TZ “Crypto LP”.
 *
 * Structure (layout, block types): Figma DS / recipes only.
 * Content (copy, numbers, which rows/cards): TZ / user story only — never Figma placeholder text.
 *
 * Stack (ready-only): hero brand BG → features usp → instruments table →
 * compare matrix → steps → faq → disclaimer (footer CTAFooter).
 */
const landing: LandingDocument = {
  slug: "crypto",
  name: "Crypto CFDs",
  note: "M1 structure + TZ content. Figma = layout only.",
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
    // —— 1. Market hero structure; pitch from TZ ——
    {
      type: "hero",
      brandBackground: true,
      eyebrow: "Crypto CFDs",
      title: "Trade Crypto CFDs No Commission",
      subtitle:
        "Trade CFDs on Bitcoin, Ethereum, Dogecoin and more. Bitcoin spreads from 0.04% and 0.09% for ETH. No deposit fees and no minimum account size.",
      primaryCta: {
        label: "Start trading",
        href: "https://hub.fusionmarkets.com/auth/sign-up",
      },
      secondaryCta: {
        label: "Try a free demo",
        href: "https://hub.fusionmarkets.com/auth/sign-up",
      },
    },

    // —— 2. USP card structure (Figma); 6 points from TZ ——
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

    // —— 3. Markets table structure; instruments/spreads from TZ ——
    {
      type: "table",
      title: "Our crypto CFD instruments",
      showSearch: true,
      columns: [
        { id: "symbol", header: "Symbol", width: "400px", align: "left" },
        { id: "hours", header: "Trading Hours", width: "200px", align: "center" },
        {
          id: "minSpread",
          header: "Minimum Spread",
          width: "200px",
          align: "center",
        },
        {
          id: "avgSpread",
          header: "Average Spread",
          width: "200px",
          align: "center",
        },
      ],
      rows: [
        {
          id: "btcusd",
          cells: {
            symbol: {
              title: "Bitcoin",
              meta: "BTC/USD",
              iconSrc: "/images/markets/btc.png",
            },
            hours: "24/7",
            minSpread: "0.04%",
            avgSpread: "See live",
          },
        },
        {
          id: "ethusd",
          cells: {
            symbol: {
              title: "Ethereum",
              meta: "ETH/USD",
              iconSrc: "/images/markets/eth.svg",
            },
            hours: "24/7",
            minSpread: "0.09%",
            avgSpread: "See live",
          },
        },
        {
          id: "dogeusd",
          cells: {
            symbol: {
              title: "Dogecoin",
              meta: "DOGE/USD",
              iconSrc: "/images/markets/doge.svg",
            },
            hours: "24/7",
            minSpread: "See live",
            avgSpread: "See live",
          },
        },
        {
          id: "solusd",
          cells: {
            symbol: {
              title: "Solana",
              meta: "SOL/USD",
              iconSrc: "/images/markets/sol.svg",
            },
            hours: "24/7",
            minSpread: "See live",
            avgSpread: "See live",
          },
        },
        {
          id: "adausd",
          cells: {
            symbol: {
              title: "Cardano",
              meta: "ADA/USD",
              iconSrc: "/images/markets/ada.svg",
            },
            hours: "24/7",
            minSpread: "See live",
            avgSpread: "See live",
          },
        },
        // Extra example rows so the instruments table scrolls (demo data)
        {
          id: "xrpusd",
          cells: {
            symbol: {
              title: "XRP",
              meta: "XRP/USD",
              iconSrc: "/images/markets/xrp.svg",
            },
            hours: "24/7",
            minSpread: "See live",
            avgSpread: "See live",
          },
        },
        {
          id: "ltcusd",
          cells: {
            symbol: {
              title: "Litecoin",
              meta: "LTC/USD",
              iconSrc: "/images/markets/ltc.svg",
            },
            hours: "24/7",
            minSpread: "See live",
            avgSpread: "See live",
          },
        },
        {
          id: "avaxusd",
          cells: {
            symbol: {
              title: "Avalanche",
              meta: "AVAX/USD",
              iconSrc: "/images/markets/avax.svg",
            },
            hours: "24/7",
            minSpread: "See live",
            avgSpread: "See live",
          },
        },
        {
          id: "dotusd",
          cells: {
            symbol: {
              title: "Polkadot",
              meta: "DOT/USD",
              iconSrc: "/images/markets/dot.svg",
            },
            hours: "24/7",
            minSpread: "See live",
            avgSpread: "See live",
          },
        },
        {
          id: "linkusd",
          cells: {
            symbol: {
              title: "Chainlink",
              meta: "LINK/USD",
              iconSrc: "/images/markets/link.svg",
            },
            hours: "24/7",
            minSpread: "See live",
            avgSpread: "See live",
          },
        },
        {
          id: "maticusd",
          cells: {
            symbol: {
              title: "Polygon",
              meta: "MATIC/USD",
              iconSrc: "/images/markets/matic.svg",
            },
            hours: "24/7",
            minSpread: "See live",
            avgSpread: "See live",
          },
        },
        {
          id: "bnbusd",
          cells: {
            symbol: {
              title: "BNB",
              meta: "BNB/USD",
              iconSrc: "/images/markets/bnb.svg",
            },
            hours: "24/7",
            minSpread: "See live",
            avgSpread: "See live",
          },
        },
      ],
      footnote:
        "Sample pairs for this campaign preview. Confirm live pricing in the Client Hub or Spreads Tool.",
    },

    // —— 4. Compare matrix structure; columns/rows from TZ (not Figma sample competitors) ——
    {
      type: "table",
      variant: "compare",
      title: "How we compare against other crypto providers",
      subtitle:
        "Indicative comparison for this campaign. Always verify live fees and conditions before trading.",
      showSearch: false,
      columns: [
        { id: "feature", header: "" },
        { id: "fusion", header: "Fusion Markets" },
        { id: "exchange", header: "Typical AU exchange" },
      ],
      rows: [
        {
          id: "min",
          cells: {
            feature: "Minimum deposit",
            fusion: "$0",
            exchange: "Often $50+",
          },
        },
        {
          id: "fees",
          cells: {
            feature: "Trading cost (BTC)",
            fusion: "From 0.04%",
            exchange: "Often 1%+",
          },
        },
        {
          id: "commission",
          cells: {
            feature: "Commission",
            fusion: "$0",
            exchange: "Varies",
          },
        },
        {
          id: "direction",
          cells: {
            feature: "Go long & short",
            fusion: "Yes",
            exchange: "Usually long only",
          },
        },
        {
          id: "leverage",
          cells: {
            feature: "Leverage",
            fusion: "Retail 1:2 / Pro 1:10",
            exchange: "Typically none",
          },
        },
        {
          id: "deposit-fees",
          cells: {
            feature: "Deposit fees",
            fusion: "$0",
            exchange: "Often charged",
          },
        },
      ],
    },

    // —— 5. Steps process structure; onboarding copy for this campaign ——
    {
      type: "steps",
      title: "How it works",
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
            "We need to confirm your ID. This can be done electronically or by submitting two forms of ID Documentation. 90% of new accounts are approved within the hour.",
          active: false,
        },
        {
          title: "Fund and trade crypto CFDs",
          description:
            "Deposit with your preferred method (no deposit fees) and start trading Bitcoin, Ethereum and other crypto CFDs on MT4, MT5, TradingView or cTrader.",
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

    // —— 6. FAQ structure; Q&A from TZ ——
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

    {
      type: "disclaimer",
      text: "CFDs are complex instruments and come with a high risk of losing money rapidly due to leverage. You should consider whether you understand how CFDs work and whether you can afford to take the high risk of losing your money. Crypto CFDs are especially volatile. This is an internal Growth Agent preview on fm.growth-agent.org and is not an official Fusion Markets publication. Spreads, leverage and product availability depend on entity and client classification — verify on the live site and legal documents before trading.",
    },
  ],
};

export default landing;
