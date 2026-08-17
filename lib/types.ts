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
      title?: string;
      meta?: string;
      /** Market icon under /public (crypto logo, etc.) */
      iconSrc?: string;
      iconSrcSecondary?: string;
      /** Compare matrix image cell (e.g. TrustPilot badge) */
      imageSrc?: string;
      /** Multi-line value for compare cells */
      lines?: string[];
    };

export type TableRowSpec = {
  id: string;
  cells: Record<string, TableCellSpec>;
  action?: LandingCta;
};

export type MarketHeroQuote = {
  label: string;
  price: string;
  change?: string;
  period: string;
  tone?: "positive" | "negative";
};

export type MarketHeroQuoteRow = {
  id: string;
  symbol: string;
  /** Human pair name shown on the TV card, e.g. "Bitcoin". */
  label?: string;
  /** Indicative seed for the animated ticker — not a live feed. */
  bid: number;
  ask: number;
  /** Decimal places for bid / ask. */
  digits: number;
  quoteCurrency?: string;
  iconSrc?: string;
  iconSrcSecondary?: string;
  period?: string;
  action?: LandingCta;
};

export type MarketHeroTrustpilot = {
  label: string;
  rating: string;
  reviews: string;
};

export type ReviewItem = {
  id: string;
  name: string;
  date: string;
  quote: string;
  rating?: number;
  avatarSrc?: string;
};

export type ReviewsSummary = {
  label: string;
  rating: string;
  count: string;
  href?: string;
};

export type SpreadQuoteCard = {
  id: string;
  symbol: string;
  /** Indicative seed — not a live feed. */
  bid: number;
  ask: number;
  digits: number;
  /** If omitted, ask − bid. */
  spread?: number;
  /** Decorative percent move. */
  trend?: number;
  iconSrc?: string;
  iconSrcSecondary?: string;
  /** Tabs this card appears on, e.g. Popular + US. */
  tabs?: string[];
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
      /** Optional short list under H1 (campaign TZ). Prefer subtitle when Figma is one paragraph. */
      bullets?: string[];
      primaryCta?: LandingCta;
      secondaryCta?: LandingCta;
      /** Shared brand purple BG art (Images frame / Gold Market Header). */
      brandBackground?: boolean;
      // No nested table/chart — use a following `type: "table"` block (assembly.md).
    }
  | {
      /** Market Header — shared hero foundation for market campaign landings. */
      type: "market-hero";
      eyebrow?: string;
      title: string;
      subtitle?: string;
      bullets?: string[];
      primaryCta?: LandingCta;
      secondaryCta?: LandingCta;
      /** Instruments for the Market Header TV chart card (Figma 15303:14755). */
      quotes?: MarketHeroQuoteRow[];
      /** Optional indicative instrument card. Values must come from the brief or approved source. */
      quote?: MarketHeroQuote;
      /** Optional review summary; validate rating freshness before a public campaign launch. */
      trustpilot?: MarketHeroTrustpilot;
      /**
       * brand — shared purple Market Header art (default).
       * crypto — light field + 3D coins + white quotes card.
       * indices — light field + globe + chips + in-flow ticker (no quotes card).
       */
      atmosphere?: "brand" | "crypto" | "indices";
    }
  | {
      type: "features";
      title?: string;
      /** usp = Why Fusion USP cards; feature = simple benefit cards */
      variant?: "usp" | "feature";
      items: Array<{
        title: string;
        description: string;
        /** Optional isometric illustration name (Images catalog). */
        illustration?: IllustrationKey;
        imageSrc?: string;
        learnMore?: LandingCta;
      }>;
    }
  | {
      type: "table";
      title?: string;
      subtitle?: string;
      /** Footnote under table (spreads disclaimer). */
      footnote?: string;
      columns: TableColumnSpec[];
      rows: TableRowSpec[];
      scrollable?: boolean;
      /** Markets header search (default true for instruments tables). */
      showSearch?: boolean;
      /**
       * markets — instruments DataTable
       * compare — How We Compare matrix (Figma 23570:105086)
       */
      variant?: "markets" | "compare";
    }
  | {
      type: "cta";
      /** Omit to use block default “Ready to start trading?” */
      title?: string;
      subtitle?: string;
      primaryCta?: LandingCta;
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
      /** Omit to use block default “How It Works”. */
      title?: string;
      subtitle?: string;
      items: Array<{
        title: string;
        description: string;
        number?: number | string;
        active?: boolean;
      }>;
      /** Default horizontal = marketing How it works (Figma 29987:339011). */
      orientation?: "vertical" | "horizontal";
      mode?: "light" | "dark";
      /** Dual CTAs under process (common on Final Pages). */
      primaryCta?: LandingCta;
      secondaryCta?: LandingCta;
    }
  | {
      type: "disclaimer";
      /** Omit to use the shared CFD risk warning. */
      text?: string;
    }
  | {
      type: "reviews";
      title?: string;
      subtitle?: string;
      summary?: ReviewsSummary;
      items?: ReviewItem[];
    }
  | {
      /** Live-spreads proof: centered title + tabs + TV_Card rail / mobile stack. */
      type: "spread-cards";
      title: string;
      subtitle?: string;
      toolPrefix?: string;
      toolSuffix?: string;
      toolLink?: LandingCta;
      tabs?: string[];
      featuredId?: string;
      cards: SpreadQuoteCard[];
      actionLabel?: string;
      primaryCta?: LandingCta;
    }
  | {
      /** Funding-method logo row. Provider names are content; visual shell is shared. */
      type: "logo-marquee";
      /** Omit to use block default “Our Funding Methods”. */
      title?: string;
      subtitle?: string;
      providers?: string[];
    }
  | {
      /** Choose Your Platform — Tabs_Icon + device mock + panel (Figma 28610:429747). */
      type: "platforms";
      /** Omit to use block default “Choose Your Platform”. */
      title?: string;
      subtitle?: string;
      items: Array<{
        id: string;
        label: string;
        /** Material Symbols name from lib/icons.ts */
        icon?: string;
        title: string;
        body?: string;
        bullets?: string[];
        imageSrc?: string;
        primaryCta?: LandingCta;
      }>;
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
