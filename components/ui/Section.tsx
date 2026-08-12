import type { ReactNode } from "react";

type SectionVariant = "default" | "hero" | "cta" | "disclaimer";

type SectionProps = {
  children: ReactNode;
  variant?: SectionVariant;
  id?: string;
  as?: "section" | "footer" | "div";
};

export function Section({
  children,
  variant = "default",
  id,
  as: Tag = "section",
}: SectionProps) {
  return (
    <Tag className={`ui-section ui-section--${variant}`} id={id}>
      {children}
    </Tag>
  );
}
