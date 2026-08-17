"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Icon } from "@/components/ui/Icon";
import type { ReviewItem } from "@/lib/types";

const STAR_COUNT = 5;
const DEFAULT_AVATAR = "/brand/trustpilot/avatar.svg";
const STAR_CARD = "/brand/trustpilot/star-card.svg";

type ReviewRailProps = {
  items: ReviewItem[];
};

function clampRating(value: number | undefined) {
  if (!value || value < 1) return STAR_COUNT;
  return Math.min(STAR_COUNT, Math.round(value));
}

export function ReviewRail({ items }: ReviewRailProps) {
  const railRef = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  const syncNav = useCallback(() => {
    const el = railRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setCanPrev(el.scrollLeft > 4);
    setCanNext(el.scrollLeft < max - 4);
  }, []);

  useEffect(() => {
    const el = railRef.current;
    if (!el) return;
    syncNav();
    el.addEventListener("scroll", syncNav, { passive: true });
    const ro = new ResizeObserver(syncNav);
    ro.observe(el);
    window.addEventListener("resize", syncNav);
    return () => {
      el.removeEventListener("scroll", syncNav);
      ro.disconnect();
      window.removeEventListener("resize", syncNav);
    };
  }, [items.length, syncNav]);

  const scrollByCard = (dir: -1 | 1) => {
    const el = railRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>(".ui-review-card");
    const styles = getComputedStyle(el);
    const gap = parseFloat(styles.columnGap || styles.gap || "0") || 0;
    const step = (card?.offsetWidth ?? el.clientWidth * 0.7) + gap;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollBy({ left: dir * step, behavior: reduce ? "auto" : "smooth" });
  };

  return (
    <div className="ui-review-rail">
      <div className="ui-review-rail__bleed">
        <div ref={railRef} className="ui-review-rail__track">
          {items.map((item) => {
            const stars = clampRating(item.rating);
            return (
              <article key={item.id} className="ui-review-card">
                <div className="ui-review-card__meta">
                  <div className="ui-review-card__who">
                    <img
                      className="ui-review-card__avatar"
                      src={item.avatarSrc ?? DEFAULT_AVATAR}
                      alt=""
                      width={33}
                      height={33}
                    />
                    <div className="ui-review-card__id">
                      <p className="ui-review-card__name">{item.name}</p>
                      <p className="ui-review-card__date">{item.date}</p>
                    </div>
                  </div>
                  <p className="ui-review-card__stars" aria-label={`${stars} out of 5 stars`}>
                    {Array.from({ length: stars }, (_, index) => (
                      <img
                        key={index}
                        src={STAR_CARD}
                        alt=""
                        width={18}
                        height={15}
                      />
                    ))}
                  </p>
                </div>
                <p className="ui-review-card__quote">{item.quote}</p>
              </article>
            );
          })}
        </div>
      </div>
      <div className="ui-review-rail__nav" role="group" aria-label="Review navigation">
        <button
          type="button"
          className="ui-usp-carousel__btn"
          onClick={() => scrollByCard(-1)}
          disabled={!canPrev}
          aria-label="Previous reviews"
        >
          <Icon name="west" size={24} />
        </button>
        <button
          type="button"
          className="ui-usp-carousel__btn"
          onClick={() => scrollByCard(1)}
          disabled={!canNext}
          aria-label="Next reviews"
        >
          <Icon name="east" size={24} />
        </button>
      </div>
    </div>
  );
}
