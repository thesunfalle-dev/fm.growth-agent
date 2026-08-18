"use client";

import {
  Children,
  useCallback,
  useEffect,
  useLayoutEffect,
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
const COMPACT_MQ = "(max-width: 768px)";
/** Homepage Why we’re different `27873:296738`: center 270×500, sides 256×388. */
const SIDE_WIDTH = 256;
const CENTER_WIDTH = 270;
const SIDE_HEIGHT = 388;
const CENTER_HEIGHT = 500;

/**
 * USP rail.
 * Desktop: finite row + arrows (Figma `29987:341441`).
 * Mobile: infinite snap, 270×500 center / 256×388 sides, wrap after settle.
 */
export function UspCarousel({ children }: UspCarouselProps) {
  const items = useMemo(() => Children.toArray(children), [children]);
  const count = items.length;
  const railRef = useRef<HTMLDivElement>(null);
  const jumping = useRef(false);
  const settleTimer = useRef(0);
  const [compact, setCompact] = useState(false);
  const [active, setActive] = useState(0);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  const looping = compact && count > 1;

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

  const stepSize = (el: HTMLElement) => {
    const first = el.children[0] as HTMLElement | undefined;
    if (!first) return 0;
    const styles = getComputedStyle(el);
    const gap = parseFloat(styles.columnGap || styles.gap || "0") || 0;
    return first.offsetWidth + gap;
  };

  /** Extra end-pad so 6 cards have two full one-card steps (bleed rail is wider than 4 cards). */
  const padDesktopRail = useCallback(() => {
    const el = railRef.current;
    if (!el) return;
    if (looping) {
      el.style.paddingRight = "";
      return;
    }
    const first = el.children[0] as HTMLElement | undefined;
    if (!first) return;
    const styles = getComputedStyle(el);
    const gap = parseFloat(styles.columnGap || styles.gap || "0") || 0;
    const step = first.offsetWidth + gap;
    if (step <= 0) return;
    const content = count * first.offsetWidth + Math.max(0, count - 1) * gap;
    const visible = Math.max(1, Math.floor(el.clientWidth / step));
    const neededMax = Math.max(0, count - visible) * step;
    const pad = Math.max(0, neededMax - (content - el.clientWidth));
    el.style.paddingRight = `${pad}px`;
  }, [count, looping]);

  const morphCards = useCallback(() => {
    const el = railRef.current;
    if (!el) return;
    const kids = Array.from(el.children) as HTMLElement[];
    if (!kids.length) return;

    const mid = el.scrollLeft + el.clientWidth / 2;
    const step = stepSize(el) || 1;
    let best = 0;
    let bestDist = Number.POSITIVE_INFINITY;

    kids.forEach((slot, index) => {
      const center = slot.offsetLeft + slot.offsetWidth / 2;
      const dist = Math.abs(center - mid);
      const t = Math.max(0, 1 - dist / step);
      const card = slot.firstElementChild as HTMLElement | null;
      if (card) {
        card.style.width = "";
        card.style.height = "";
        if (compact) {
          const sx = SIDE_WIDTH / CENTER_WIDTH + (1 - SIDE_WIDTH / CENTER_WIDTH) * t;
          const sy = SIDE_HEIGHT / CENTER_HEIGHT + (1 - SIDE_HEIGHT / CENTER_HEIGHT) * t;
          card.style.transform = `scale(${sx}, ${sy})`;
        } else {
          card.style.transform = "";
        }
      }
      slot.classList.toggle("ui-usp-card-slot--on", t > 0.55);
      if (dist < bestDist) {
        bestDist = dist;
        best = index;
      }
    });

    setActive(Number(kids[best]?.dataset.index ?? 0));

    if (looping) {
      setCanPrev(true);
      setCanNext(true);
    } else {
      const max = el.scrollWidth - el.clientWidth;
      setCanPrev(el.scrollLeft > 4);
      setCanNext(el.scrollLeft < max - 4);
    }
  }, [compact, looping]);

  const wrapIfNeeded = useCallback(() => {
    const el = railRef.current;
    if (!el || !looping || jumping.current) return;
    const step = stepSize(el);
    const setWidth = step * count;
    if (setWidth <= 0) return;

    let shift = 0;
    if (el.scrollLeft < setWidth * 0.5) shift = setWidth;
    else if (el.scrollLeft > setWidth * 1.5) shift = -setWidth;
    if (!shift) return;

    jumping.current = true;
    const snap = el.style.scrollSnapType;
    el.style.scrollSnapType = "none";
    el.scrollLeft += shift;
    requestAnimationFrame(() => {
      el.style.scrollSnapType = snap;
      jumping.current = false;
      morphCards();
    });
  }, [count, looping, morphCards]);

  const centerSlot = useCallback((slot: HTMLElement, smooth: boolean) => {
    const el = railRef.current;
    if (!el) return;
    const left = slot.offsetLeft - (el.clientWidth - slot.offsetWidth) / 2;
    el.scrollTo({ left, behavior: smooth ? "smooth" : "auto" });
  }, []);

  useLayoutEffect(() => {
    const mq = window.matchMedia(COMPACT_MQ);
    const sync = () => setCompact(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    const el = railRef.current;
    if (!el) return;

    padDesktopRail();

    if (looping) {
      const start = el.children[count] as HTMLElement | undefined;
      if (start) centerSlot(start, false);
    } else {
      el.scrollLeft = 0;
    }

    morphCards();

    const onSettled = () => {
      if (jumping.current) return;
      wrapIfNeeded();
      morphCards();
    };

    const onScroll = () => {
      if (jumping.current) return;
      morphCards();
      window.clearTimeout(settleTimer.current);
      settleTimer.current = window.setTimeout(onSettled, 80);
    };

    el.addEventListener("scroll", onScroll, { passive: true });
    el.addEventListener("scrollend", onSettled);
    const onResize = () => {
      padDesktopRail();
      morphCards();
    };
    const ro = new ResizeObserver(onResize);
    ro.observe(el);
    window.addEventListener("resize", onResize);
    return () => {
      el.removeEventListener("scroll", onScroll);
      el.removeEventListener("scrollend", onSettled);
      window.clearTimeout(settleTimer.current);
      ro.disconnect();
      window.removeEventListener("resize", onResize);
    };
  }, [centerSlot, count, looping, morphCards, padDesktopRail, wrapIfNeeded]);

  const scrollByCard = (dir: -1 | 1) => {
    const el = railRef.current;
    if (!el) return;

    // Desktop rail: advance one card from the current start snap.
    // Do not center the "active" (viewport-mid) card — with 4 visible
    // cards that jumps 2–3 positions and feels random.
    if (!looping) {
      const step = stepSize(el);
      if (step <= 0) return;
      const current = Math.round(el.scrollLeft / step);
      const maxScroll = Math.max(0, el.scrollWidth - el.clientWidth);
      const maxIndex = Math.max(0, Math.round(maxScroll / step));
      const next = Math.min(maxIndex, Math.max(0, current + dir));
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      el.scrollTo({ left: next * step, behavior: reduce ? "auto" : "smooth" });
      return;
    }

    scrollToIndex((active + dir + count) % count);
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
    <div className={compact ? "ui-usp-carousel is-compact" : "ui-usp-carousel"}>
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
          aria-label="Previous card"
        >
          <Icon name="west" size={24} />
        </button>
        <button
          type="button"
          className="ui-usp-carousel__btn"
          onClick={() => scrollByCard(1)}
          disabled={!canNext}
          aria-label="Next card"
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
