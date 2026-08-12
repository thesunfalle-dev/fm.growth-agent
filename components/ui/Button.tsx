import type { ReactNode } from "react";

export type ButtonVariant = "primary" | "secondary" | "text";
export type ButtonSize = "lg" | "md" | "sm";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  /** Trailing arrow (text/link style + optional on filled) */
  arrow?: boolean;
  className?: string;
};

function ArrowIcon() {
  return (
    <svg
      className="ui-btn__arrow"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M3.333 8h9.334M8.667 4l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

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

  return (
    <a className={classes} href={href}>
      <span className="ui-btn__label">{children}</span>
      {arrow ? <ArrowIcon /> : null}
    </a>
  );
}
