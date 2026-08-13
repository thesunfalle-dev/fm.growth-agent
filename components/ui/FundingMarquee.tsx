"use client";

import { useEffect, useRef } from "react";
import type { FundingLogo } from "@/lib/funding-logos";

type FundingMarqueeProps = {
  logos: FundingLogo[];
};

/**
 * Infinite funding-logo ticker — Figma `28259:298800`.
 * Auto-scrolls; drag to scrub (same interaction as the Otterdev testimonials rail).
 */
export function FundingMarquee({ logos }: FundingMarqueeProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const offsetRef = useRef(0);
  const dragRef = useRef<{ pointer: number; origin: number } | null>(null);
  const pausedRef = useRef(false);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let frame = 0;

    const tick = () => {
      if (!reduceMotion && !pausedRef.current && !dragRef.current) {
        offsetRef.current -= 0.55;
      }
      const loop = track.scrollWidth / 2;
      if (loop > 0) {
        if (offsetRef.current <= -loop) offsetRef.current += loop;
        if (offsetRef.current > 0) offsetRef.current -= loop;
      }
      track.style.transform = `translate3d(${offsetRef.current}px,0,0)`;
      frame = window.requestAnimationFrame(tick);
    };

    frame = window.requestAnimationFrame(tick);
    return () => window.cancelAnimationFrame(frame);
  }, [logos]);

  return (
    <div
      className="ui-funding-marquee"
      onPointerEnter={() => {
        pausedRef.current = true;
      }}
      onPointerLeave={() => {
        pausedRef.current = false;
        dragRef.current = null;
      }}
      onPointerDown={(event) => {
        event.currentTarget.setPointerCapture(event.pointerId);
        dragRef.current = { pointer: event.clientX, origin: offsetRef.current };
      }}
      onPointerMove={(event) => {
        const drag = dragRef.current;
        if (!drag) return;
        offsetRef.current = drag.origin + (event.clientX - drag.pointer);
      }}
      onPointerUp={() => {
        dragRef.current = null;
      }}
    >
      <div ref={trackRef} className="ui-funding-marquee__track">
        {[0, 1].map((copy) => (
          <ul
            key={copy}
            className="ui-funding-marquee__list"
            aria-hidden={copy === 1}
            aria-label={copy === 0 ? "Funding methods" : undefined}
          >
            {logos.map((logo) => (
              <li key={`${copy}-${logo.id}`}>
                <img src={logo.src} alt={copy === 0 ? logo.label : ""} height={40} />
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
