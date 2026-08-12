import type { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  narrow?: boolean;
  className?: string;
};

export function Container({
  children,
  narrow = false,
  className = "",
}: ContainerProps) {
  const classes = [
    "ui-container",
    narrow ? "ui-container--narrow" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");
  return <div className={classes}>{children}</div>;
}
