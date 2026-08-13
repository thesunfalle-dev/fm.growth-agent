/**
 * Shared block chrome — source of truth for repeating section titles.
 *
 * Landings fill campaign content only. Omit a prop to use the default.
 * Do not recase or restyle these strings per slug.
 */
export const blockDefaults = {
  steps: {
    title: "How It Works",
    orientation: "horizontal" as const,
  },
  logoMarquee: {
    title: "Our Funding Methods",
  },
  cta: {
    title: "Ready to start trading?",
  },
} as const;
