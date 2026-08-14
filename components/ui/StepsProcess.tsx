"use client";

import {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";
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
  const [compact, setCompact] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [fills, setFills] = useState<number[]>(() => items.map(() => 0));

  useEffect(() => {
    const compactMq = window.matchMedia("(max-width: 768px)"); /* breakpoint.md */
    const syncCompact = () => setCompact(compactMq.matches);
    syncCompact();
    compactMq.addEventListener("change", syncCompact);
    return () => compactMq.removeEventListener("change", syncCompact);
  }, []);

  useLayoutEffect(() => {
    const pin = pinRef.current;
    if (!pin) return;
    if (compact || items.length < 2) return;

    let frame = 0;
    const last = items.length - 1;

    const updatePinned = () => {
      const stickyTop =
        parseFloat(
          getComputedStyle(document.documentElement).getPropertyValue("--layout-header-height"),
        ) || 80;
      const rect = pin.getBoundingClientRect();
      const travel = Math.max(pin.offsetHeight - window.innerHeight + stickyTop, 1);
      const scrolled = Math.min(Math.max(-rect.top + stickyTop, 0), travel);
      const progress = scrolled / travel;
      const usable = Math.min(1, progress / 0.75);
      const scaled = usable * last;
      const index = Math.min(last, Math.floor(scaled + 1e-4));
      const flow = index >= last ? 1 : Math.min(1, Math.max(0, scaled - index));
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
        updatePinned();
      });
    };

    updatePinned();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [compact, items]);

  return (
    <div
      ref={pinRef}
      className="ui-steps-pin"
      data-active-step={compact ? undefined : activeIndex + 1}
      style={{ "--steps-count": String(items.length) } as CSSProperties}
    >
      <div className="ui-steps-pin__sticky">
        <Container className="ui-steps-band">
          {header}
          <Steps
            items={items}
            orientation="horizontal"
            mode={mode}
            activeIndex={compact ? undefined : activeIndex}
            fills={compact ? undefined : fills}
            className={compact ? undefined : "ui-steps--scroll"}
          />
          {actions}
        </Container>
      </div>
    </div>
  );
}
