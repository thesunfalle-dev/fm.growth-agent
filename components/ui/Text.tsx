import type { ReactNode } from "react";

type TextVariant = "lead" | "body" | "muted" | "disclaimer";

export function Text({
  children,
  variant = "body",
}: {
  children: ReactNode;
  variant?: TextVariant;
}) {
  return <p className={`ui-text ui-text--${variant}`}>{children}</p>;
}
