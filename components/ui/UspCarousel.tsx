"use client";

import {
  Children,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { Icon } from "@/components/ui/Icon";

type UspCarouselProps = {
  children: ReactNode;
};

const LOOP_COPIES = 3;
/** Homepage Why we’re different `27873:296738`: center 270×500, sides 256×388. */
const SIDE_WIDTH = 256;
const CENTER_WIDTH = 270;
const SIDE_HEIGHT = 388;
const CENTER_HEIGHT = 500;

/**
 * USP card rail — desktop arrows (Figma `29987:341441`);
 * mobile infinite snap: 270×500 center, 256×388 sides, ~20px peek, loop.
 */
export function UspCarousel({ children }: UspCarouselProps) {
  const items = useMemo(() => Children.toArray(children), [children]);
  const count = items.length;
  const looping = count > 1;
  const railRef = useRef<HTMLDivElement>(null);
  const jumping = useRef(false);
  const [active, setActive] = useState(0);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  const slots = useMemo(() => {
    const copies = looping ? LOOP_COPIES : 1;
    const nodes: ReactNode[] = [];
    for (let copy = 0; copy < copies; copy += 1) {
      items.forEach((child, index) => {
        nodes.push(
          <div
            key={`${copy}-${index}`}
            className="ui-usp-card-slot"
            data-index={index}
          >
            {child}
          </div>,
        );
      });
    }
    return nodes;
  }, [items, looping]);

  const applyScale = useCallback(() => {
    const el = railRef.current;
    if (!el) return;
    const kids = Array.from(el.children) as HTMLElement[];
    if (!kids.length) return;

    const mid = el.scrollLeft + el.clientWidth / 2;
    const styles = getComputedStyle(el);
    const gap = parseFloat(styles.columnGap || styles.gap || "0") || 0;
    const step = kids[0].offsetWidth + gap;

    let best = 0;
    let bestDist = Number.POSITIVE_INFINITY;
    const compact = window.matchMedia("(max-width: 768px)").matches;
    kids.forEach((slot, index) => {
      const center = slot.offsetLeft + slot.offsetWidth / 2;
      const dist = Math.abs(center - mid);
      const t = Math.max(0, 1 - dist / step);
      const card = slot.firstElementChild as HTMLElement | null;
      slot.style.transform = "";
      if (compact && card) {
        card.style.width = `${SIDE_WIDTH + (CENTER_WIDTH - SIDE_WIDTH) * t}px`;
        card.style.height = `${SIDE_HEIGHT + (CENTER_HEIGHT - SIDE_HEIGHT) * t}px`;
      } else if (card) {
        card.style.width = "";
        card.style.height = "";
      }
      slot.classList.toggle("ui-usp-card-slot--on", t > 0.55);
      if (dist < bestDist) {
        bestDist = dist;
        best = index;
      }
    });

    const logical = Number(kids[best]?.dataset.index ?? 0);
    setActive(logical);

    if (looping) {
      setCanPrev(true);
      setCanNext(true);
    } else {
      const max = el.scrollWidth - el.clientWidth;
      setCanPrev(el.scrollLeft > 4);
      setCanNext(el.scrollLeft < max - 4);
    }
  }, [looping]);

  const wrapIfNeeded = useCallback(() => {
    const el = railRef.current;
    if (!el || !looping || jumping.current) return;
    const first = el.children[0] as HTMLElement | undefined;
    if (!first) return;
    const styles = getComputedStyle(el);
    const gap = parseFloat(styles.columnGap || styles.gap || "0") || 0;
    const setWidth = (first.offsetWidth + gap) * count;
    if (setWidth <= 0) return;
    if (el.scrollLeft < setWidth * 0.5) {
      jumping.current = true;
      el.style.scrollSnapType = "none";
      el.scrollLeft += setWidth;
      el.style.scrollSnapType = "";
      jumping.current = false;
    } else if (el.scrollLeft > setWidth * 1.5) {
      jumping.current = true;
      el.style.scrollSnapType = "none";
      el.scrollLeft -= setWidth;
      el.style.scrollSnapType = "";
      jumping.current = false;
    }
  }, [count, looping]);

  const centerSlot = useCallback((slot: HTMLElement, smooth: boolean) => {
    const el = railRef.current;
    if (!el) return;
    const left = slot.offsetLeft - (el.clientWidth - slot.offsetWidth) / 2;
    el.scrollTo({ left, behavior: smooth ? "smooth" : "auto" });
  }, []);

  useEffect(() => {
    const el = railRef.current;
    if (!el) return;

    if (looping) {
      const start = el.children[count] as HTMLElement | undefined;
      if (start) centerSlot(start, false);
    }

    applyScale();

    const onScroll = () => {
      if (jumping.current) return;
      wrapIfNeeded();
      applyScale();
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    const ro = new ResizeObserver(() => {
      applyScale();
    });
    ro.observe(el);
    window.addEventListener("resize", applyScale);
    return () => {
      el.removeEventListener("scroll", onScroll);
      ro.disconnect();
      window.removeEventListener("resize", applyScale);
    };
  }, [applyScale, centerSlot, count, looping, wrapIfNeeded]);

  const scrollByCard = (dir: -1 | 1) => {
    const next = looping
      ? (active + dir + count) % count
      : Math.min(count - 1, Math.max(0, active + dir));
    scrollToIndex(next);
  };

  const scrollToIndex = (logical: number) => {
    const el = railRef.current;
    if (!el) return;
    const kids = Array.from(el.children) as HTMLElement[];
    const mid = el.scrollLeft + el.clientWidth / 2;
    const matches = kids.filter((slot) => Number(slot.dataset.index) === logical);
    if (!matches.length) return;
    let target = matches[0];
    let best = Number.POSITIVE_INFINITY;
    matches.forEach((slot) => {
      const center = slot.offsetLeft + slot.offsetWidth / 2;
      const dist = Math.abs(center - mid);
      if (dist < best) {
        best = dist;
        target = slot;
      }
    });
    centerSlot(target, true);
  };

  return (
    <div className="ui-usp-carousel">
      <div className="ui-usp-carousel__bleed">
        <div
          ref={railRef}
          className="ui-card-grid ui-card-grid--usp ui-usp-carousel__rail"
          data-max-visible={4}
        >
          {slots}
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
