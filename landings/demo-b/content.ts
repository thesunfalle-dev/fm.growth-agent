import type { LandingDocument } from "@/lib/types";

const landing: LandingDocument = {
  slug: "demo-b",
  name: "Demo B — alternate layout emphasis",
  note: "Second slug to prove multi-variant flow.",
  listed: true,
  status: "draft",
  createdAt: "2026-08-12",
  updatedAt: "2026-08-12",
  seo: {
    title: "Demo B — FM Landings",
    description: "Second smoke-test variant",
  },
  blocks: [
    {
      type: "hero",
      eyebrow: "Variant B",
      title: "Same system, different pitch",
      subtitle:
        "Use separate slugs for A/B style options: /demo vs /demo-b. Marketing compares links, not mockups.",
      primaryCta: {
        label: "Get started",
        href: "https://hub.fusionmarkets.com/auth/sign-up",
      },
    },
    {
      type: "features",
      items: [
        {
          title: "Low friction share",
          description: "fm.growth-agent.org/demo-b — one URL, full page.",
        },
        {
          title: "Iterate same day",
          description: "Copy a landing folder, tweak blocks, redeploy.",
        },
      ],
    },
    {
      type: "cta",
      title: "This is variant B",
      primaryCta: {
        label: "Try demo account",
        href: "https://hub.fusionmarkets.com/auth/sign-up",
      },
    },
    {
      type: "disclaimer",
      text: "CFDs are complex instruments and come with a high risk of losing money rapidly due to leverage. Internal preview only — not an official Fusion Markets publication.",
    },
  ],
};

export default landing;
