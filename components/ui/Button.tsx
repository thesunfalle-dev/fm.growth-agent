import type { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
};

export function Button({ href, children, variant = "primary" }: ButtonProps) {
  const className =
    variant === "primary" ? "ui-btn ui-btn--primary" : "ui-btn ui-btn--secondary";
  return (
    <a className={className} href={href}>
      {children}
    </a>
  );
}
