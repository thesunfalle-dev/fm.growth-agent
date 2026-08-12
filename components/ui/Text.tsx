import type { ReactNode } from "react";

type TextVariant = "lead" | "body" | "muted" | "disclaimer";

export function Text({
  children,
  variant = "body",
  className = "",
}: {
  children: ReactNode;
  variant?: TextVariant;
  className?: string;
}) {
  const classes = ["ui-text", `ui-text--${variant}`, className]
    .filter(Boolean)
    .join(" ");
  return <p className={classes}>{children}</p>;
}
