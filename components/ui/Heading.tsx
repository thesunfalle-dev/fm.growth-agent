import type { ReactNode } from "react";

type HeadingProps = {
  children: ReactNode;
  as?: "h1" | "h2" | "h3";
  variant?: "display" | "section";
};

export function Heading({ children, as, variant = "section" }: HeadingProps) {
  const Tag = as ?? (variant === "display" ? "h1" : "h2");
  return <Tag className={`ui-heading ui-heading--${variant}`}>{children}</Tag>;
}
