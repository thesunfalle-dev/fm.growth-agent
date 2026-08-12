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

    // —— 2. Why Trade… USP (Figma 23570:105076 — exactly 4 cards) ——
    {
      type: "features",
      variant: "usp",
      title: "Why Trade Crypto CFDs with Fusion",
      items: [
        {
          title: "Zero Commissions",
          illustration: "bitcoin",
          description:
            "We offer some of the lowest fees in the market, tight spreads and charge A$0 in commissions.\n\nSee our comparison table and compare us against other providers.",
        },
        {
          title: "Go long or short",
          illustration: "trade",
          description:
            "Our Crypto CFDs allow you to go both long or short, so you can take advantage of any price movements.",
        },
        {
          title: "No Minimum Account size",
          illustration: "user-auth",
          description:
            "Unlike other brokers who charge fees to deposit, we want to make trading accessible to everyone.\n\nThat’s why we have no minimum deposit requirements or deposit fees.",
        },
        {
          title: "Trade with Leverage",
          illustration: "chart",
          description:
            "Increase your buying power with leverage and get greater exposure on your trades.\n\nGet 1:2 leverage as a Retail Client or 1:10 as a Pro Client on Fusion Markets.",
        },
      ],
    },

    // —— 3. Instruments (Figma Crypto_2 + Pricing section 23570:104166 layout) ——
    {
      type: "table",
      title: "Our Crypto Trading Instruments",
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
              meta: "Bitcoin / US Dollar",
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
              meta: "Ethereum / US Dollar",
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
              meta: "Dogecoin / US Dollar",
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
              meta: "Solana / US Dollar",
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
              meta: "Cardano / US Dollar",
              iconSrc: "/images/markets/ada.svg",
            },
            hours: "24/7",
            minSpread: "See live",
            avgSpread: "See live",
          },
        },
      ],
      footnote:
        "Indicative spreads for this internal preview. Confirm live pricing in the Client Hub or Spreads Tool. Cryptocurrency spreads are not measured in pips.",
    },

    // —— 4. How We Compare (Figma Crypto 23570:105086) ——
    {
      type: "table",
      variant: "compare",
      title: "How We Compare",
      subtitle: "See why we have an edge over other Crypto Providers",
      showSearch: false,
      columns: [
        { id: "feature", header: "" },
        { id: "fusion", header: "Fusion Markets" },
        { id: "coinbase", header: "Coinbase" },
        { id: "coinspot", header: "CoinSpot" },
        { id: "gemini", header: "Gemini" },
        { id: "binance", header: "Binance" },
      ],
      rows: [
        {
          id: "min",
          cells: {
            feature: "Minimum Deposit",
            fusion: "$0",
            coinbase: "$50",
            coinspot: "$1",
            gemini: "$0",
            binance: "$0 or $50",
          },
        },
        {
          id: "demo",
          cells: {
            feature: "Demo Account",
            fusion: "Yes",
            coinbase: "No",
            coinspot: "No",
            gemini: "No",
            binance: "No",
          },
        },
        {
          id: "fees",
          cells: {
            feature: "Bitcoin Trading Fees",
            fusion: "0.06%",
            coinbase: {
              lines: ["0.4%/0.6%", "(Maker/Taker)"],
            },
            coinspot: "0.1%",
            gemini: {
              lines: ["0.2%/0.4%", "(Maker/Taker)"],
            },
            binance: {
              lines: ["0.1%/0.1%", "(Maker/Taker)"],
            },
          },
        },
        {
          id: "leverage",
          cells: {
            feature: "Leverage Available",
            fusion: "Yes",
            coinbase: "No",
            coinspot: "No",
            gemini: "No",
            binance: "No",
          },
        },
        {
          id: "trust",
          cells: {
            feature: "TrustPilot Score",
            fusion: {
              imageSrc: "/images/compare/fusion-trust.png",
              meta: "Fusion Markets on Trustpilot",
            },
            coinbase: {
              imageSrc: "/images/compare/coinbase-trust.png",
              meta: "Coinbase on Trustpilot",
            },
            coinspot: {
              imageSrc: "/images/compare/coinspot-trust.png",
              meta: "CoinSpot on Trustpilot",
            },
            gemini: {
              imageSrc: "/images/compare/gemini-trust.png",
              meta: "Gemini on Trustpilot",
            },
            binance: {
              imageSrc: "/images/compare/binance-trust.png",
              meta: "Binance on Trustpilot",
            },
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
      title: "FAQs",
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
