"use client";

import {
  Children,
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
 * USP card rail — desktop arrows (Figma `29987:341441`);
 * mobile snap + Navigate dots (Forex / homepage 375).
 */
export function UspCarousel({ children }: UspCarouselProps) {
  const railRef = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);
  const [active, setActive] = useState(0);
  const count = Children.count(children);

  const updateNav = useCallback(() => {
    const el = railRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    const left = el.scrollLeft;
    setCanPrev(left > 4);
    setCanNext(left < max - 4);

    const midpoint = left + el.clientWidth / 2;
    let best = 0;
    let bestDist = Number.POSITIVE_INFINITY;
    Array.from(el.children).forEach((child, index) => {
      const card = child as HTMLElement;
      const center = card.offsetLeft + card.offsetWidth / 2;
      const dist = Math.abs(center - midpoint);
      if (dist < bestDist) {
        bestDist = dist;
        best = index;
      }
    });
    setActive(best);
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

  const scrollToIndex = (index: number) => {
    const el = railRef.current;
    const card = el?.children[index] as HTMLElement | undefined;
    if (!el || !card) return;
    const left = card.offsetLeft - (el.clientWidth - card.offsetWidth) / 2;
    el.scrollTo({ left: Math.max(left, 0), behavior: "smooth" });
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
      {count > 1 ? (
        <div className="ui-usp-carousel__dots" role="tablist" aria-label="USP cards">
          {Array.from({ length: count }, (_, index) => (
            <button
              key={index}
              type="button"
              role="tab"
              aria-selected={index === active}
              aria-label={`Show card ${index + 1}`}
              className={
                index === active
                  ? "ui-usp-carousel__dot ui-usp-carousel__dot--on"
                  : "ui-usp-carousel__dot"
              }
              onClick={() => scrollToIndex(index)}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}
