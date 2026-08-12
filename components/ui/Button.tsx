import type { ReactNode } from "react";
import { Icon } from "@/components/ui/Icon";

export type ButtonVariant = "primary" | "secondary" | "text";
export type ButtonSize = "lg" | "md" | "sm";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  /** Trailing Material `east` arrow (text/link style + optional on filled) */
  arrow?: boolean;
  className?: string;
};

export function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  arrow = false,
  className = "",
}: ButtonProps) {
  const classes = [
    "ui-btn",
    `ui-btn--${variant}`,
    `ui-btn--${size}`,
    arrow ? "ui-btn--arrow" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const iconSize = size === "sm" ? 16 : size === "lg" ? 20 : 18;

  return (
    <a className={classes} href={href}>
      <span className="ui-btn__label">{children}</span>
      {arrow ? (
        <Icon name="east" size={iconSize} className="ui-btn__arrow" />
      ) : null}
    </a>
  );
}
