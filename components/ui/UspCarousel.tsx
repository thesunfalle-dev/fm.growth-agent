"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { Icon } from "@/components/ui/Icon";

type UspCarouselProps = {
  children: ReactNode;
};

/**
 * USP card rail — Figma Final Pages `29987:341441`
 * Horizontal scroll, cards peek off the right edge, prev/next arrows bottom-left.
 */
export function UspCarousel({ children }: UspCarouselProps) {
  const railRef = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  const updateNav = useCallback(() => {
    const el = railRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    const left = el.scrollLeft;
    setCanPrev(left > 4);
    setCanNext(left < max - 4);
  }, []);

  useEffect(() => {
    const el = railRef.current;
    if (!el) return;
    updateNav();
    el.addEventListener("scroll", updateNav, { passive: true });
    const ro = new ResizeObserver(updateNav);
    ro.observe(el);
    window.addEventListener("resize", updateNav);
    return () => {
      el.removeEventListener("scroll", updateNav);
      ro.disconnect();
      window.removeEventListener("resize", updateNav);
    };
  }, [updateNav, children]);

  const scrollByCard = (dir: -1 | 1) => {
    const el = railRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>(":scope > *");
    const step = card
      ? card.getBoundingClientRect().width + 24
      : el.clientWidth * 0.75;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  return (
    <div className="ui-usp-carousel">
      <div className="ui-usp-carousel__bleed">
        <div
          ref={railRef}
          className="ui-card-grid ui-card-grid--usp ui-usp-carousel__rail"
          data-max-visible={4}
        >
          {children}
        </div>
      </div>
      <div className="ui-usp-carousel__nav" role="group" aria-label="Card navigation">
        <button
          type="button"
          className="ui-usp-carousel__btn"
          onClick={() => scrollByCard(-1)}
          disabled={!canPrev}
          aria-label="Previous cards"
        >
          <Icon name="west" size={24} />
        </button>
        <button
          type="button"
          className="ui-usp-carousel__btn"
          onClick={() => scrollByCard(1)}
          disabled={!canNext}
          aria-label="Next cards"
        >
          <Icon name="east" size={24} />
        </button>
      </div>
    </div>
  );
}
