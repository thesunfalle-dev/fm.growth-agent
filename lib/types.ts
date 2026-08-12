export type LandingCta = {
  label: string;
  href: string;
};

export type TableColumnSpec = {
  id: string;
  header: string;
  width?: string;
  align?: "left" | "right" | "center";
};

export type TableCellSpec =
  | string
  | {
      title: string;
      meta?: string;
    };

export type TableRowSpec = {
  id: string;
  cells: Record<string, TableCellSpec>;
  action?: LandingCta;
};

/** Brand illustration key from lib/illustrations.ts (Images frame). */
export type IllustrationKey = string;

export type LandingBlock =
  | {
      type: "hero";
      eyebrow?: string;
      title: string;
      subtitle?: string;
      primaryCta?: LandingCta;
      secondaryCta?: LandingCta;
      /** Use shared brand purple background art (Images frame). */
      brandBackground?: boolean;
    }
  | {
      type: "features";
      title?: string;
      items: Array<{
        title: string;
        description: string;
        /** Optional isometric illustration name (Images catalog). */
        illustration?: IllustrationKey;
      }>;
    }
  | {
      type: "table";
      title?: string;
      subtitle?: string;
      columns: TableColumnSpec[];
      rows: TableRowSpec[];
      scrollable?: boolean;
    }
  | {
      type: "cta";
      title: string;
      subtitle?: string;
      primaryCta: LandingCta;
      secondaryCta?: LandingCta;
    }
  | {
      type: "faq";
      title?: string;
      items: Array<{ question: string; answer: string }>;
      openFirst?: boolean;
    }
  | {
      type: "steps";
      title?: string;
      subtitle?: string;
      items: Array<{
        title: string;
        description: string;
        number?: number | string;
        active?: boolean;
      }>;
      orientation?: "vertical" | "horizontal";
      mode?: "light" | "dark";
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
