import type { ReactNode } from "react";

type HeadingProps = {
  children: ReactNode;
  as?: "h1" | "h2" | "h3";
  variant?: "display" | "section";
  className?: string;
};

export function Heading({
  children,
  as,
  variant = "section",
  className = "",
}: HeadingProps) {
  const Tag = as ?? (variant === "display" ? "h1" : "h2");
  const classes = ["ui-heading", `ui-heading--${variant}`, className]
    .filter(Boolean)
    .join(" ");
  return <Tag className={classes}>{children}</Tag>;
}
