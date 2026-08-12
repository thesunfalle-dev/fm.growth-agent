import type { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  variant?: "feature";
};

export function Card({ children, variant = "feature" }: CardProps) {
  return <article className={`ui-card ui-card--${variant}`}>{children}</article>;
}
