"use client";

import { useEffect, useRef, type CSSProperties } from "react";

type PropSize = "xs" | "sm" | "md" | "lg" | "xl";
type PropSide = "left" | "right";

type PropSlot = {
  src: string;
  label: string;
  size: PropSize;
  side: PropSide;
  depth: string;
  appearDelay: string;
  duration: string;
  opacity: "full" | "soft";
  floatX: string;
  floatY: string;
  tiltA: string;
  tiltB: string;
};

const SLOTS: PropSlot[] = [
  {
    src: "/images/energy/oil.png",
    label: "Crude oil",
    size: "xl",
    side: "left",
    depth: "1.15",
    appearDelay: "0ms",
    duration: "var(--component-energy-field-duration-drift-slow)",
    opacity: "full",
    floatX: "var(--space-2)",
    floatY: "var(--component-energy-field-float)",
    tiltA: "-6deg",
    tiltB: "5deg",
  },
  {
    src: "/images/energy/gas.png",
    label: "Natural gas",
    size: "lg",
    side: "left",
    depth: "0.85",
    appearDelay: "110ms",
    duration: "var(--component-energy-field-duration-drift)",
    opacity: "full",
    floatX: "calc(var(--space-2) * -1)",
    floatY: "var(--component-energy-field-float-small)",
    tiltA: "5deg",
    tiltB: "-7deg",
  },
  {
    src: "/images/energy/wheat.png",
    label: "Wheat",
    size: "md",
    side: "left",
    depth: "0.55",
    appearDelay: "200ms",
    duration: "var(--component-energy-field-duration-drift-fast)",
    opacity: "full",
    floatX: "var(--space-1)",
    floatY: "var(--component-energy-field-float-small)",
    tiltA: "-4deg",
    tiltB: "6deg",
  },
  {
    src: "/images/energy/soy.png",
    label: "Soybeans",
    size: "sm",
    side: "left",
    depth: "0.7",
    appearDelay: "280ms",
    duration: "var(--component-energy-field-duration-drift)",
    opacity: "soft",
    floatX: "var(--space-3)",
    floatY: "var(--component-energy-field-float)",
    tiltA: "7deg",
    tiltB: "-4deg",
  },
  {
    src: "/images/energy/oil.png",
    label: "Crude oil",
    size: "lg",
    side: "right",
    depth: "1.05",
    appearDelay: "40ms",
    duration: "var(--component-energy-field-duration-drift-slow)",
    opacity: "full",
    floatX: "calc(var(--space-2) * -1)",
    floatY: "var(--component-energy-field-float)",
    tiltA: "6deg",
    tiltB: "-5deg",
  },
  {
    src: "/images/energy/wheat.png",
    label: "Wheat",
    size: "lg",
    side: "right",
    depth: "0.8",
    appearDelay: "160ms",
    duration: "var(--component-energy-field-duration-drift)",
    opacity: "full",
    floatX: "var(--space-2)",
    floatY: "var(--component-energy-field-float-small)",
    tiltA: "-5deg",
    tiltB: "7deg",
  },
  {
    src: "/images/energy/gas.png",
    label: "Natural gas",
    size: "sm",
    side: "right",
    depth: "0.5",
    appearDelay: "240ms",
    duration: "var(--component-energy-field-duration-drift-fast)",
    opacity: "soft",
    floatX: "var(--space-1)",
    floatY: "var(--component-energy-field-float-small)",
    tiltA: "8deg",
    tiltB: "-6deg",
  },
  {
    src: "/images/energy/soy.png",
    label: "Soybeans",
    size: "md",
    side: "right",
    depth: "0.65",
    appearDelay: "320ms",
    duration: "var(--component-energy-field-duration-drift)",
    opacity: "soft",
    floatX: "var(--space-2)",
    floatY: "var(--component-energy-field-float)",
    tiltA: "-7deg",
    tiltB: "4deg",
  },
];

const TICKER = [
  { symbol: "XTIUSD", change: "+0.38%" },
  { symbol: "XBRUSD", change: "+0.21%" },
  { symbol: "XNGUSD", change: "−0.54%" },
  { symbol: "WHEAT", change: "+0.17%" },
  { symbol: "SOYBN", change: "−0.11%" },
  { symbol: "CORN", change: "+0.09%" },
  { symbol: "COTTON", change: "+0.26%" },
  { symbol: "COFARA", change: "−0.33%" },
] as const;

/**
 * Decorative energy / soft-commodities atmosphere.
 * Props fly in, then hover. Desktop also tracks the pointer slightly.
 */
export function EnergyField() {
  const fieldRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const field = fieldRef.current;
    const section = field?.closest("section");
    if (!field || !section) return;

    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const compactQuery = window.matchMedia("(max-width: 768px)");

    const reset = () => {
      field.style.setProperty("--px", "0");
      field.style.setProperty("--py", "0");
    };

    const onMove = (event: PointerEvent) => {
      if (motionQuery.matches || compactQuery.matches) {
        reset();
        return;
      }
      const box = section.getBoundingClientRect();
      const x = ((event.clientX - box.left) / box.width - 0.5) * 2;
      const y = ((event.clientY - box.top) / box.height - 0.5) * 2;
      field.style.setProperty("--px", x.toFixed(3));
      field.style.setProperty("--py", y.toFixed(3));
    };

    reset();
    section.addEventListener("pointermove", onMove);
    section.addEventListener("pointerleave", reset);
    return () => {
      section.removeEventListener("pointermove", onMove);
      section.removeEventListener("pointerleave", reset);
    };
  }, []);

  return (
    <div className="ui-energy-field" ref={fieldRef} aria-hidden="true">
      <span className="ui-energy-field__orb ui-energy-field__orb--a" />
      <span className="ui-energy-field__orb ui-energy-field__orb--b" />
      <span className="ui-energy-field__heat" />
      {SLOTS.map((slot, index) => (
        <span
          key={`${slot.src}-${index}`}
          className={[
            "ui-energy-field__prop",
            `ui-energy-field__prop--${slot.size}`,
            `ui-energy-field__prop--${slot.opacity}`,
          ].join(" ")}
          data-slot={String(index + 1)}
          data-side={slot.side}
          style={{
            "--enter-delay": slot.appearDelay,
            "--depth": slot.depth,
            "--float-duration": slot.duration,
            "--float-x": slot.floatX,
            "--float-y": slot.floatY,
            "--tilt-a": slot.tiltA,
            "--tilt-b": slot.tiltB,
          } as CSSProperties}
        >
          <span className="ui-energy-field__float">
            <span className="ui-energy-field__disc">
              <img src={slot.src} alt="" width={512} height={512} draggable={false} />
            </span>
          </span>
        </span>
      ))}
    </div>
  );
}

export function EnergyTicker() {
  return (
    <div className="ui-energy-field__tape" aria-hidden="true">
      <div className="ui-energy-ticker">
        <TickerTrack />
        <TickerTrack />
      </div>
    </div>
  );
}

function TickerTrack() {
  const items = [...TICKER, ...TICKER, ...TICKER];
  return (
    <div className="ui-energy-ticker__track">
      {items.map((item, index) => (
        <span
          key={`${item.symbol}-${index}`}
          className={
            item.change.startsWith("−") || item.change.startsWith("-")
              ? "ui-energy-ticker__item ui-energy-ticker__item--down"
              : "ui-energy-ticker__item"
          }
        >
          <b>{item.symbol}</b>
          <em>{item.change}</em>
        </span>
      ))}
    </div>
  );
}
