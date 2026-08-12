export type NavItem = {
  label: string;
  href: string;
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
 * Footer link groups — Website Redesign Footer AU (15866:27010), simplified for landings.
 * Full mega-footer catalog documented in header-footer.md; not all Figma nodes ported.
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
      { label: "Energy & Soft Commodities", href: "https://fusionmarkets.com/Trading/Energy-and-soft-commodities" },
      { label: "Cryptocurrency", href: "https://fusionmarkets.com/Trading/Crypto-CFD" },
      { label: "US Share CFDs", href: "https://fusionmarkets.com/" },
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
    title: "Company",
    links: [
      { label: "About Us", href: "https://fusionmarkets.com/" },
      { label: "Partner with Us", href: "https://fusionmarkets.com/" },
      { label: "Learn", href: "https://fusionmarkets.com/" },
      { label: "Legal", href: "https://fusionmarkets.com/" },
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

export const footerSocial: NavItem[] = [
  { label: "X", href: "https://x.com/FusionMarkets" },
  { label: "Facebook", href: "https://www.facebook.com/FusionMarkets" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/fusion-markets" },
  { label: "Telegram", href: "https://t.me/fusionmarkets" },
  { label: "TikTok", href: "https://www.tiktok.com/@fusionmarkets" },
];

export const footerLegalLinks: NavItem[] = [
  { label: "Privacy Policy", href: "https://fusionmarkets.com/" },
  { label: "Terms and Conditions", href: "https://fusionmarkets.com/" },
];
