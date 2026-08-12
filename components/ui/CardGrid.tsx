import type { ReactNode } from "react";

type CardGridProps = {
  children: ReactNode;
  /**
   * USP rule: max 4 visible; more → horizontal scroll.
   * Default 4 for usp; use 0/undefined for auto-fit feature grids.
   */
  maxVisible?: number;
  /** usp = fixed card width track; feature = fluid auto-fit */
  variant?: "usp" | "feature";
  className?: string;
};

/**
 * Card layout helper.
 * USP (cards.md / Figma): horizontal row, max ~4 visible, MORE → horizontal scroll
 * (never wrap to a second row).
 */
export function CardGrid({
  children,
  maxVisible = 4,
  variant = "usp",
  className = "",
}: CardGridProps) {
  const classes = [
    "ui-card-grid",
    `ui-card-grid--${variant}`,
    maxVisible > 0 ? `ui-card-grid--max-${maxVisible}` : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classes} data-max-visible={maxVisible || undefined}>
      {children}
    </div>
  );
}
