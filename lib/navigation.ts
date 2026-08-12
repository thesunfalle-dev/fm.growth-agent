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

/** Default marketing site nav — Website Redesign Header_Desktop */
export const primaryNav: NavItem[] = [
  { label: "Trading", href: "https://fusionmarkets.com/Trading/Forex" },
  { label: "Platforms", href: "https://fusionmarkets.com/Platforms/TradingView" },
  { label: "Resources", href: "https://fusionmarkets.com/" },
  { label: "For Partners", href: "https://fusionmarkets.com/" },
  { label: "About", href: "https://fusionmarkets.com.au/About-us/Regulations" },
  { label: "Help", href: "https://fusionmarkets.com/" },
];

/**
 * Footer link groups — Figma Footer AU `24400:154127` / `15866:27010`.
 * Column order mirrors desktop mega-footer (simplified link set for landings).
 */
export const footerColumns: Array<{ title: string; links: NavItem[] }> = [
  {
    title: "Accounts",
    links: [
      { label: "Zero Account", href: "https://fusionmarkets.com/" },
      { label: "Classic Account", href: "https://fusionmarkets.com/" },
      { label: "Demo Account", href: "https://hub.fusionmarkets.com/auth/sign-up" },
      { label: "Swap Free Accounts", href: "https://fusionmarkets.com/" },
    ],
  },
  {
    title: "Markets",
    links: [
      { label: "Forex", href: "https://fusionmarkets.com/Trading/Forex" },
      { label: "Metals", href: "https://fusionmarkets.com/" },
      { label: "Indices", href: "https://fusionmarkets.com/Trading/Equity-Indices-CFD" },
      {
        label: "Energy & Soft Commodities",
        href: "https://fusionmarkets.com/Trading/Energy-and-soft-commodities",
      },
      { label: "Cryptocurrency", href: "https://fusionmarkets.com/Trading/Crypto-CFD" },
      { label: "US Share CFDs", href: "https://fusionmarkets.com/" },
    ],
  },
  {
    title: "Tools",
    links: [
      { label: "Trading Calculators", href: "https://fusionmarkets.com/" },
      { label: "Economic Calendar", href: "https://fusionmarkets.com/" },
      { label: "Live & Historical Spreads", href: "https://fusionmarkets.com/" },
      { label: "Client Hub Trading Tools", href: "https://hub.fusionmarkets.com/" },
    ],
  },
  {
    title: "Conditions & Funding",
    links: [
      { label: "Trading Conditions", href: "https://fusionmarkets.com/" },
      { label: "Deposit Options", href: "https://fusionmarkets.com/" },
      { label: "Withdrawal options", href: "https://fusionmarkets.com/" },
    ],
  },
  {
    title: "Platforms",
    links: [
      { label: "TradingView", href: "https://fusionmarkets.com/Platforms/TradingView" },
      { label: "MetaTrader 5", href: "https://fusionmarkets.com/Platforms/Metatrader-5" },
      { label: "MetaTrader 4", href: "https://fusionmarkets.com/Platforms/Metatrader-4" },
      { label: "cTrader", href: "https://fusionmarkets.com/Platforms/cTrader" },
    ],
  },
  {
    title: "Partner with Us",
    links: [
      { label: "Partners Overview", href: "https://fusionmarkets.com/" },
      { label: "Introducing Brokers", href: "https://fusionmarkets.com/" },
      { label: "Affiliate", href: "https://fusionmarkets.com/" },
      { label: "Refer a Friend", href: "https://fusionmarkets.com/" },
      { label: "Partners Login", href: "https://fusionmarkets.com/" },
    ],
  },
  {
    title: "Learn",
    links: [
      { label: "Learn Overview", href: "https://fusionmarkets.com/" },
      { label: "Market Analysis", href: "https://fusionmarkets.com/" },
      { label: "Learn Forex Courses", href: "https://fusionmarkets.com/" },
      { label: "Trading Tips", href: "https://fusionmarkets.com/" },
      { label: "How-tos", href: "https://fusionmarkets.com/" },
    ],
  },
  {
    title: "About Us",
    links: [
      { label: "Who We Are", href: "https://fusionmarkets.com/" },
      { label: "Why Fusion", href: "https://fusionmarkets.com/" },
      { label: "What Others Say", href: "https://fusionmarkets.com/" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Regulations and Legal Documents", href: "https://fusionmarkets.com/" },
      { label: "ID Documentation", href: "https://fusionmarkets.com/" },
    ],
  },
];

export const footerContact = {
  email: "help@fusionmarkets.com",
  phone: "+61 3 8376 2706",
  addressLines: [
    "Level 10, 627 Chapel St South Yarra",
    "VIC 3141 Australia",
  ],
};

/** Social icons — Figma Footer AU brand row */
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
  { label: "Privacy Policy", href: "https://fusionmarkets.com/" },
  { label: "Terms and Conditions", href: "https://fusionmarkets.com/" },
];

/** Bottom legal stack — structure from Figma Footer AU (shortened for landings). */
export const footerLegalParagraphs: string[] = [
  "*Based on a spread comparison of 40+ global FX/CFD brokers with a Tier-1 licence conducted by ForexBenchmark as of 1 January 2026.",
  "**Based on research conducted by CompareForexBrokers on Market Order execution speed verified on 1 January 2026.",
  "All financial products involve risk and you should ensure you understand the risk involved as certain financial products may not be suitable for everyone. Trading in margin foreign exchange and derivatives carries a high level of risk and you may incur a loss that is far greater than the amount you invested. Past performance of any product described on this website is not a reliable indication of future performance. Any information or advice contained on this website is general in nature and has been prepared without taking into account your objectives, financial situation or needs. Before acting on any information or advice on this website, you should consider the appropriateness of it (and any relevant product) having regard to your circumstances and we recommend that you seek independent financial advice if necessary. Please read our Financial Services Guide (FSG) and Product Disclosure Statement (PDS) which are important documents, and which are available for downloading from this website.",
  "The information on this website is not intended to be an inducement, offer or solicitation to anyone outside of Australia and is not directed at residents in any country or jurisdiction where such distribution or use would be contrary to local law or regulation. Fusion Markets is not able to take clients from Afghanistan, Congo, Iran, Iraq, Japan, Myanmar, New Zealand, North Korea, Ontario, Palestine, Russia, Spain, Somalia, Sudan, Syria, Ukraine, Yemen, or the United States or its territories.",
  "The information on this site is not directed at residents in any country or jurisdiction where such distribution or use would be contrary to local law or regulation.",
  "Fusion Markets is a trading name of FMSP Trading Group Pty Ltd (ABN 74 146 086 017) registered address Level 27, 25 Bligh Street, Sydney NSW 2000, and is regulated and licensed in Australia to provide financial services under Australian Financial Services Licence No.385620.",
  "Fusion Markets Pty Ltd is a Corporate Authorised Representative (CAR No. 001275595) of FMSP Trading Group Pty Ltd (AFSL No. 385620).",
];
