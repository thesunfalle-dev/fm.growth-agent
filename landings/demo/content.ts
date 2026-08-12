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
      title: "How this will work",
      items: [
        {
          title: "Brief in",
          illustration: "build",
          description:
            "Marketing brief → structured content + block order for the page.",
        },
        {
          title: "Variants out",
          illustration: "rocket",
          description:
            "Same day: /campaign-a, /campaign-b — share links, not Figma handoffs.",
        },
        {
          title: "Design system later",
          illustration: "chart",
          description:
            "Tokens + blocks from the new Figma redesign. Until then: neutral shell.",
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
