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
          description:
            "Marketing brief → structured content + block order for the page.",
        },
        {
          title: "Variants out",
          description:
            "Same day: /campaign-a, /campaign-b — share links, not Figma handoffs.",
        },
        {
          title: "Design system later",
          description:
            "Tokens + blocks from the new Figma redesign. Until then: neutral shell.",
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
