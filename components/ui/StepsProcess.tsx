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
    const reduceMq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const compactMq = window.matchMedia("(max-width: 768px)"); /* breakpoint.md */
    if (reduceMq.matches || compactMq.matches || items.length < 2) return;

    const pin = pinRef.current;
    if (!pin) return;

    let frame = 0;
    const mobileQuery = window.matchMedia("(max-width: 768px)");

    const apply = (index: number, flow: number) => {
      setActiveIndex(index);
      setFills(
        items.map((_, itemIndex) => {
          if (itemIndex < index) return 1;
          if (itemIndex === index) return flow;
          return 0;
        }),
      );
    };

    const updatePinned = () => {
      const desktopHeader =
        parseFloat(
          getComputedStyle(document.documentElement).getPropertyValue("--layout-header-height"),
        ) || 80;
      const stickyTop = desktopHeader;
      const rect = pin.getBoundingClientRect();
      const travel = pin.offsetHeight - window.innerHeight + stickyTop;
      const scrolled = Math.min(Math.max(-rect.top + stickyTop, 0), Math.max(travel, 1));
      const progress = travel <= 0 ? 0 : scrolled / travel;
      const scaled = progress * items.length;
      const index = Math.min(items.length - 1, Math.floor(scaled));
      const flow = index >= items.length - 1 ? 1 : Math.min(1, Math.max(0, scaled - index));
      apply(index, flow);
    };

    const updateMobile = () => {
      const steps = [...pin.querySelectorAll<HTMLElement>(".ui-step")];
      if (!steps.length) return;
      const marker = window.innerHeight * 0.45;
      let index = 0;
      steps.forEach((step, itemIndex) => {
        if (step.getBoundingClientRect().top <= marker) index = itemIndex;
      });
      apply(index, 1);
    };

    const update = () => {
      if (mobileQuery.matches) updateMobile();
      else updatePinned();
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
    mobileQuery.addEventListener("change", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      mobileQuery.removeEventListener("change", onScroll);
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
