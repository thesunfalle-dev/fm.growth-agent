import type { LandingDocument } from "@/lib/types";

const landing: LandingDocument = {
  slug: "demo",
  name: "Demo shell",
  note: "Smoke-test landing for pipeline + deploy. Replace with real briefs.",
  listed: true,
  status: "draft",
  createdAt: "2026-08-12",
  updatedAt: "2026-08-12",
  seo: {
    title: "Demo — FM Landings",
    description: "Pipeline smoke test for fm.growth-agent.org",
  },
  blocks: [
    {
      type: "hero",
      brandBackground: true,
      eyebrow: "Fusion Markets · internal preview",
      title: "Landing pipeline is live",
      subtitle:
        "This is a placeholder page on /demo. Real variants will reuse design-system tokens and blocks from Figma.",
      primaryCta: {
        label: "Primary CTA",
        href: "https://hub.fusionmarkets.com/auth/sign-up",
      },
      secondaryCta: {
        label: "Secondary",
        href: "#features",
      },
    },
    {
      type: "features",
      variant: "usp",
      title: "Why this pipeline",
      items: [
        {
          title: "Brief in",
          illustration: "build",
          description:
            "Marketing brief → structured content + block order for the page.",
          learnMore: { label: "Learn more", href: "#steps" },
        },
        {
          title: "Variants out",
          illustration: "rocket",
          description:
            "Same day: /campaign-a, /campaign-b — share links, not Figma handoffs.",
          learnMore: { label: "Learn more", href: "#faq" },
        },
        {
          title: "Design system later",
          illustration: "chart",
          description:
            "Tokens + blocks from the new Figma redesign. Cards and sections are live.",
          learnMore: { label: "Learn more", href: "#features" },
        },
        {
          title: "$0 commissions style USP",
          illustration: "coin",
          description:
            "USP cards are only for Fusion unique selling points — illustration + title + body + optional Learn more.",
        },
      ],
    },
    {
      type: "table",
      title: "Markets — Forex (demo)",
      subtitle: "Sample DataTable using Website Redesign table rules (header 54px, row 78px, sticky scroll).",
      columns: [
        { id: "symbol", header: "Symbol", width: "40%" },
        { id: "min", header: "Minimum Spread", width: "30%" },
        { id: "avg", header: "Average Spread", width: "30%" },
      ],
      rows: [
        {
          id: "usdjpy",
          cells: {
            symbol: { title: "USDJPY", meta: "US dollar / Japanese Yen" },
            min: "0.64139",
            avg: "0.64139",
          },
        },
        {
          id: "eurusd",
          cells: {
            symbol: { title: "EURUSD", meta: "Euro / US dollar" },
            min: "0.00",
            avg: "0.12",
          },
        },
        {
          id: "gbpusd",
          cells: {
            symbol: { title: "GBPUSD", meta: "British Pound / US dollar" },
            min: "0.10",
            avg: "0.35",
          },
        },
        {
          id: "audusd",
          cells: {
            symbol: { title: "AUDUSD", meta: "Australian Dollar / US dollar" },
            min: "0.20",
            avg: "0.41",
          },
        },
      ],
    },
    {
      type: "steps",
      title: "Get started in three steps",
      subtitle: "Sections frame — Step by Steps (vertical, light).",
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
          title: "Fund and trade",
          description:
            "Deposit with your preferred method and start trading on the platforms you know.",
        },
      ],
    },
    { type: "reviews" },
    {
      type: "faq",
      title: "FAQ",
      openFirst: true,
      items: [
        {
          question: "What other products does Fusion Markets offer?",
          answer:
            "You can find the list of our trading products including assets like TESLA, BITCOIN, and Gold on our trading conditions page.",
        },
        {
          question: "Can I trade any other Precious Metals?",
          answer:
            "Yes — precious metals CFDs are available depending on your account region. See markets for the full list.",
        },
        {
          question: "How fast are accounts approved?",
          answer:
            "Most applications are reviewed quickly. 90% of new accounts are approved within the hour when documentation is complete.",
        },
      ],
    },
    {
      type: "cta",
      title: "Ready for real briefs",
      subtitle: "Drop a brief → generate 2–3 slugs → push → live URLs.",
      primaryCta: {
        label: "Open account (example)",
        href: "https://hub.fusionmarkets.com/auth/sign-up",
      },
    },
    {
      type: "disclaimer",
      text: "CFDs are complex instruments and come with a high risk of losing money rapidly due to leverage. You should consider whether you understand how CFDs work and whether you can afford to take the high risk of losing your money. This page is an internal preview and is not a live marketing offer.",
    },
  ],
};

export default landing;
