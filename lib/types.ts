export type LandingCta = {
  label: string;
  href: string;
};

export type LandingBlock =
  | {
      type: "hero";
      eyebrow?: string;
      title: string;
      subtitle?: string;
      primaryCta?: LandingCta;
      secondaryCta?: LandingCta;
    }
  | {
      type: "features";
      title?: string;
      items: Array<{
        title: string;
        description: string;
      }>;
    }
  | {
      type: "cta";
      title: string;
      subtitle?: string;
      primaryCta: LandingCta;
      secondaryCta?: LandingCta;
    }
  | {
      type: "disclaimer";
      text: string;
    };

export type LandingMeta = {
  /** URL path segment: fm.growth-agent.org/{slug} */
  slug: string;
  /** Internal name (not always shown publicly) */
  name: string;
  /** Optional note for you / registry index */
  note?: string;
  /** false = hidden from public index page */
  listed?: boolean;
  status: "draft" | "review" | "live" | "archived";
  createdAt: string;
  updatedAt: string;
};

export type LandingDocument = LandingMeta & {
  seo: {
    title: string;
    description: string;
  };
  blocks: LandingBlock[];
};
