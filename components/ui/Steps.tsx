import { Step } from "@/components/ui/Step";

export type StepItem = {
  title: string;
  description: string;
  /** Defaults to 1-based index. */
  number?: number | string;
  active?: boolean;
};

type StepsProps = {
  items: StepItem[];
  /**
   * vertical — timeline (desktop/mobile foundation)
   * horizontal — numbered row with connectors (desktop process)
   */
  orientation?: "vertical" | "horizontal";
  /** light | dark surface (dark = text on purple/dark band). */
  mode?: "light" | "dark";
  /** When set, overrides per-item `active` for scroll-driven process. */
  activeIndex?: number;
  /** Connector fill 0–1 per step (scroll-driven). */
  fills?: number[];
  className?: string;
};

/**
 * Step by Steps list — Website Redesign Sections 15313:11090.
 */
export function Steps({
  items,
  orientation = "vertical",
  mode = "light",
  activeIndex,
  fills,
  className = "",
}: StepsProps) {
  const classes = [
    "ui-steps",
    `ui-steps--${orientation}`,
    `ui-steps--${mode}`,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <ol className={classes}>
      {items.map((item, index) => {
        const scrolled = typeof activeIndex === "number";
        const state = !scrolled
          ? undefined
          : index < activeIndex
            ? "done"
            : index === activeIndex
              ? "current"
              : "upcoming";
        const defaultActive =
          orientation === "horizontal" ? index === 0 : true;
        return (
          <Step
            key={`${item.title}-${index}`}
            number={item.number ?? index + 1}
            title={item.title}
            description={item.description}
            active={scrolled ? index <= activeIndex : item.active ?? defaultActive}
            state={state}
            fill={fills?.[index]}
            last={index === items.length - 1}
          />
        );
      })}
    </ol>
  );
}
