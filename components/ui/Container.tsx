import type { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  narrow?: boolean;
};

export function Container({ children, narrow = false }: ContainerProps) {
  return (
    <div className={narrow ? "ui-container ui-container--narrow" : "ui-container"}>
      {children}
    </div>
  );
}
