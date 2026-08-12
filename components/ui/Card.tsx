import type { ReactNode } from "react";

export type CardVariant = "usp" | "feature" | "content" | "instrument";

type CardProps = {
  children: ReactNode;
  /**
   * usp — “Why Fusion…” USP cards (Images + title + body + optional Learn more)
   * feature — simple benefit card (legacy landings)
   * content — platform/product feature content card foundation
   * instrument — markets instrument tile foundation
   */
  variant?: CardVariant;
  className?: string;
};

/**
 * Card shell — Website Redesign Cards frame 15166:10610.
 * Prefer structured helpers (`UspCard`) for USP content.
 */
export function Card({
  children,
  variant = "feature",
  className = "",
}: CardProps) {
  const classes = ["ui-card", `ui-card--${variant}`, className]
    .filter(Boolean)
    .join(" ");

  return <article className={classes}>{children}</article>;
}
