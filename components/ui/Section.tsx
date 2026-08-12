import type { ReactNode } from "react";

type SectionVariant = "default" | "hero" | "cta" | "disclaimer";

type SectionProps = {
  children: ReactNode;
  variant?: SectionVariant;
  id?: string;
  as?: "section" | "footer" | "div";
  className?: string;
};

export function Section({
  children,
  variant = "default",
  id,
  as: Tag = "section",
  className = "",
}: SectionProps) {
  const classes = ["ui-section", `ui-section--${variant}`, className]
    .filter(Boolean)
    .join(" ");

  return (
    <Tag className={classes} id={id}>
      {children}
    </Tag>
  );
}
