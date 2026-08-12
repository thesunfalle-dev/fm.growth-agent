export type NavItem = {
  label: string;
  href: string;
};

export type SocialItem = {
  label: string;
  href: string;
  /** Path under /public */
  iconSrc: string;
};

/** One titled link group (Figma: title 20 + links 14, gap 12 / 8). */
export type FooterLinkGroup = {
  title: string;
  links: NavItem[];
};

/**
 * Desktop mega-footer — Figma Footer AU `24400:154127` / `15866:27010`.
 * Three vertical stacks (gap 56 between groups), then help cards.
 * Column width 215px, stack gap 100px between columns.
 */
export type FooterStack = FooterLinkGroup[];

/** Default marketing site nav — Website Redesign Header_Desktop */
export const primaryNav: NavItem[] = [
  { label: "Trading", href: "https://fusionmarkets.com/Trading/Forex" },
  { label: "Platforms", href: "https://fusionmarkets.com/Platforms/TradingView" },
  { label: "Resources", href: "https://fusionmarkets.com/" },
  { label: "For Partners", href: "https://fusionmarkets.com/" },
  { label: "About", href: "https://fusionmarkets.com.au/About-us/Regulations" },
  { label: "Help", href: "https://fusionmarkets.com/" },
];

const fm = "https://fusionmarkets.com";
const hub = "https://hub.fusionmarkets.com";

/** Column 1 — Accounts / Markets / Tools / Conditions & Funding */
export const footerStack1: FooterStack = [
  {
    title: "Accounts",
    links: [
      { label: "Zero Account", href: `${fm}/` },
      { label: "Classic Account", href: `${fm}/` },
      { label: "Demo Account", href: `${hub}/auth/sign-up` },
      { label: "Swap Free Accounts", href: `${fm}/` },
    ],
  },
  {
    title: "Markets",
    links: [
      { label: "Forex", href: `${fm}/Trading/Forex` },
      { label: "Metals", href: `${fm}/` },
      { label: "Indices", href: `${fm}/Trading/Equity-Indices-CFD` },
      { label: "Energy & Soft Commodities", href: `${fm}/Trading/Energy-and-soft-commodities` },
      { label: "Cryptocurrency", href: `${fm}/Trading/Crypto-CFD` },
      { label: "US Share CFDs", href: `${fm}/` },
    ],
  },
  {
    title: "Tools",
    links: [
      { label: "Trading Calculators", href: `${fm}/` },
      { label: "Economic Calendar", href: `${fm}/` },
      { label: "Live & Historical Spreads", href: `${fm}/` },
      { label: "Client Hub Trading Tools", href: `${hub}/` },
    ],
  },
  {
    title: "Conditions & Funding",
    links: [
      { label: "Trading Conditions", href: `${fm}/` },
      { label: "Deposit Options", href: `${fm}/` },
      { label: "Withdrawal options", href: `${fm}/` },
    ],
  },
];

/** Column 2 — Platforms (TV / MT5 / MT4 / cTrader) + Automated Trading Systems */
export const footerStack2: FooterStack = [
  {
    title: "Platforms",
    links: [
      { label: "TradingView", href: `${fm}/Platforms/TradingView` },
      { label: "TradingView Desktop", href: `${fm}/Platforms/TradingView` },
      { label: "TradingView Mobile", href: `${fm}/Platforms/TradingView` },
    ],
  },
  {
    title: "MetaTrader 5",
    links: [
      { label: "MT5 Desktop", href: `${fm}/Platforms/Metatrader-5` },
      { label: "MT5 Mobile", href: `${fm}/Platforms/Metatrader-5` },
      { label: "Webtrader for MT5", href: `${fm}/Platforms/Metatrader-5` },
    ],
  },
  {
    title: "MetaTrader 4",
    links: [
      { label: "MT4 Desktop", href: `${fm}/Platforms/Metatrader-4` },
      { label: "MT4 Mobile", href: `${fm}/Platforms/Metatrader-4` },
      { label: "WebTrader for MT4", href: `${fm}/Platforms/Metatrader-4` },
    ],
  },
  {
    title: "cTrader",
    links: [
      { label: "cTrader Desktop", href: `${fm}/Platforms/cTrader` },
      { label: "cTrader Mobile", href: `${fm}/Platforms/cTrader` },
      { label: "cTrader Web", href: `${fm}/Platforms/cTrader` },
    ],
  },
  {
    title: "Automated Trading Systems",
    links: [
      { label: "Multi Account Manager", href: `${fm}/` },
      { label: "Duplitrade", href: `${fm}/` },
      { label: "Fusion+ Copy Trading", href: `${fm}/` },
      { label: "Sponsored VPS", href: `${fm}/` },
    ],
  },
];

/** Column 3 — Partner / Learn / Trading Updates / About / Legal */
export const footerStack3: FooterStack = [
  {
    title: "Partner with Us",
    links: [
      { label: "Partners Overview", href: `${fm}/` },
      { label: "Introducing Brokers", href: `${fm}/` },
      { label: "Affiliate", href: `${fm}/` },
      { label: "Refer a Friend", href: `${fm}/` },
      { label: "Partners Login", href: `${fm}/` },
    ],
  },
  {
    title: "Learn",
    links: [
      { label: "Learn Overview", href: `${fm}/` },
      { label: "Market Analysis", href: `${fm}/` },
      { label: "Learn Forex Courses", href: `${fm}/` },
      { label: "Trading Tips", href: `${fm}/` },
      { label: "How-tos", href: `${fm}/` },
    ],
  },
  {
    title: "Trading Updates",
    links: [
      { label: "Market News", href: `${fm}/` },
      { label: "New Promotions / Programmes", href: `${fm}/` },
      { label: "Holiday Hours", href: `${fm}/` },
      { label: "Dividend updates", href: `${fm}/` },
    ],
  },
  {
    title: "About Us",
    links: [
      { label: "Who We Are", href: `${fm}/` },
      { label: "Why Fusion", href: `${fm}/` },
      { label: "What Others Say", href: `${fm}/` },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Regulations and Legal Documents", href: `${fm}/` },
      { label: "ID Documentation", href: `${fm}/` },
    ],
  },
];

export const footerStacks: FooterStack[] = [
  footerStack1,
  footerStack2,
  footerStack3,
];

/** @deprecated use footerStacks — kept for any residual imports */
export const footerColumns: FooterLinkGroup[] = [
  ...footerStack1,
  ...footerStack2,
  ...footerStack3,
];

export const footerContact = {
  email: "help@fusionmarkets.com",
  phone: "+61 3 8376 2706",
  addressLines: [
    "Level 10, 627 Chapel St South Yarra",
    "VIC 3141 Australia",
  ],
};

/** Social icons — Figma Footer AU brand row (FB / IG / YT / TG / TikTok) */
export const footerSocial: SocialItem[] = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/FusionMarkets",
    iconSrc: "/brand/social/facebook.svg",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/fusionmarkets/",
    iconSrc: "/brand/social/instagram.svg",
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@fusionmarkets",
    iconSrc: "/brand/social/youtube.svg",
  },
  {
    label: "Telegram",
    href: "https://t.me/fusionmarkets",
    iconSrc: "/brand/social/telegram.svg",
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@fusionmarkets",
    iconSrc: "/brand/social/tiktok.svg",
  },
];

export const footerTradingViewBadge = {
  label: "Trade on TradingView",
  href: "https://www.tradingview.com/broker/FusionMarkets/",
  iconSrc: "/brand/social/tradingview-badge.svg",
};

export const footerLegalLinks: NavItem[] = [
  { label: "Privacy Policy", href: `${fm}/` },
  { label: "Terms and Conditions", href: `${fm}/` },
];

/**
 * Bottom legal stack — Figma Footer AU (verbatim structure).
 * Links to FSG/PDS left as plain text names in paragraph (official URLs on live site).
 */
export const footerLegalParagraphs: string[] = [
  "*Based on a spread comparison of 40+ global FX/CFD brokers with a Tier-1 licence conducted by ForexBenchmark as of 1 January 2026.",
  "**Based on research conducted by CompareForexBrokers on Market Order execution speed verified on 1 January 2026.",
  "All financial products involve risk and you should ensure you understand the risk involved as certain financial products may not be suitable for everyone. Trading in margin foreign exchange and derivatives carries a high level of risk and you may incur a loss that is far greater than the amount you invested. Past performance of any product described on this website is not a reliable indication of future performance. Any information or advice contained on this website is general in nature and has been prepared without taking into account your objectives, financial situation or needs. Before acting on any information or advice on this website, you should consider the appropriateness of it (and any relevant product) having regard to your circumstances and we recommend that you seek independent financial advice if necessary. Please read our Financial Services Guide (FSG) and Product Disclosure Statement (PDS) which are important documents, and which are available for downloading from this website.",
  "The information on this website is not intended to be an inducement, offer or solicitation to anyone outside of Australia and is not directed at residents in any country or jurisdiction where such distribution or use would be contrary to local law or regulation. Fusion Markets is not able to take clients from Afghanistan, Congo, Iran, Iraq, Japan, Myanmar, New Zealand, North Korea, Ontario, Palestine, Russia, Spain, Somalia, Sudan, Syria, Ukraine, Yemen, or the United States or its territories.",
  "The information on this site is not directed at residents in any country or jurisdiction where such distribution or use would be contrary to local law or regulation.",
  "Fusion Markets is a trading name of FMSP Trading Group Pty Ltd (ABN 74 146 086 017) registered address Level 27, 25 Bligh Street, Sydney NSW 2000, and is regulated and licensed in Australia to provide financial services under Australian Financial Services Licence No.385620.",
  "Fusion Markets Pty Ltd is a Corporate Authorised Representative (CAR No. 001275595) of FMSP Trading Group Pty Ltd (AFSL No. 385620).",
];
