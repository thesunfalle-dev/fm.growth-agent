"use client";

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { Steps, type StepItem } from "@/components/ui/Steps";

type StepsProcessProps = {
  items: StepItem[];
  mode?: "light" | "dark";
  header?: ReactNode;
  actions?: ReactNode;
};

/**
 * Scroll-pinned How It Works: step 1 is current, then 2, then 3 as you scroll.
 */
export function StepsProcess({ items, mode = "light", header, actions }: StepsProcessProps) {
  const pinRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [fills, setFills] = useState<number[]>(() => items.map(() => 0));

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || items.length < 2) return;

    const pin = pinRef.current;
    if (!pin) return;

    let frame = 0;
    const update = () => {
      const desktopHeader =
        parseFloat(
          getComputedStyle(document.documentElement).getPropertyValue("--layout-header-height"),
        ) || 80;
      const mobileHeader =
        parseFloat(
          getComputedStyle(document.documentElement).getPropertyValue(
            "--layout-header-height-mobile",
          ),
        ) || 57;
      const stickyTop = window.matchMedia("(max-width: 768px)").matches
        ? mobileHeader
        : desktopHeader;
      const rect = pin.getBoundingClientRect();
      const travel = pin.offsetHeight - window.innerHeight + stickyTop;
      const scrolled = Math.min(Math.max(-rect.top + stickyTop, 0), Math.max(travel, 1));
      const progress = travel <= 0 ? 0 : scrolled / travel;
      const span = Math.max(items.length - 1, 1);
      const scaled = progress * span;
      const index = Math.min(items.length - 1, Math.floor(scaled + 0.0001));
      const flow = Math.min(1, Math.max(0, scaled - index));
      setActiveIndex(index);
      setFills(
        items.map((_, itemIndex) => {
          if (itemIndex < index) return 1;
          if (itemIndex === index) return flow;
          return 0;
        }),
      );
    };

    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        frame = 0;
        update();
      });
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [items.length]);

  return (
    <div
      ref={pinRef}
      className="ui-steps-pin"
      style={{ "--steps-count": items.length } as CSSProperties}
    >
      <div className="ui-steps-pin__sticky">
        <Container className="ui-steps-band">
          {header}
          <Steps
            items={items}
            orientation="horizontal"
            mode={mode}
            activeIndex={activeIndex}
            fills={fills}
            className="ui-steps--scroll"
          />
          {actions}
        </Container>
      </div>
    </div>
  );
}
