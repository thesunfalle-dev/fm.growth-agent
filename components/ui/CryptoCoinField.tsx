"use client";

import { useEffect, useRef, type CSSProperties } from "react";

type CoinSize = "xs" | "sm" | "md" | "lg" | "xl";
type CoinSide = "left" | "right";

type CoinSlot = {
  src: string;
  label: string;
  size: CoinSize;
  side: CoinSide;
  depth: string;
  appearDelay: string;
  duration: string;
  opacity: "full" | "soft";
  priority: "high" | "low";
  floatX: string;
  floatY: string;
  tiltA: string;
  tiltB: string;
};

const SLOTS: CoinSlot[] = [
  {
    src: "/images/coins/btc.png",
    label: "Bitcoin",
    size: "lg",
    side: "left",
    depth: "1.15",
    appearDelay: "0ms",
    duration: "var(--component-coin-field-duration-drift-slow)",
    opacity: "full",
    priority: "high",
    floatX: "var(--space-2)",
    floatY: "var(--component-coin-field-float)",
    tiltA: "-8deg",
    tiltB: "6deg",
  },
  {
    src: "/images/coins/eth.png",
    label: "Ethereum",
    size: "lg",
    side: "left",
    depth: "0.9",
    appearDelay: "90ms",
    duration: "var(--component-coin-field-duration-drift)",
    opacity: "full",
    priority: "high",
    floatX: "calc(var(--space-2) * -1)",
    floatY: "var(--component-coin-field-float-small)",
    tiltA: "5deg",
    tiltB: "-7deg",
  },
  {
    src: "/images/coins/sol.png",
    label: "Solana",
    size: "md",
    side: "left",
    depth: "0.55",
    appearDelay: "180ms",
    duration: "var(--component-coin-field-duration-drift-fast)",
    opacity: "full",
    priority: "low",
    floatX: "var(--space-1)",
    floatY: "var(--component-coin-field-float-small)",
    tiltA: "-5deg",
    tiltB: "7deg",
  },
  {
    src: "/images/coins/doge.png",
    label: "Dogecoin",
    size: "sm",
    side: "left",
    depth: "0.7",
    appearDelay: "260ms",
    duration: "var(--component-coin-field-duration-drift)",
    opacity: "soft",
    priority: "low",
    floatX: "var(--space-3)",
    floatY: "var(--component-coin-field-float)",
    tiltA: "7deg",
    tiltB: "-4deg",
  },
  {
    src: "/images/coins/ada.png",
    label: "Cardano",
    size: "md",
    side: "right",
    depth: "0.95",
    appearDelay: "40ms",
    duration: "var(--component-coin-field-duration-drift-slow)",
    opacity: "full",
    priority: "high",
    floatX: "calc(var(--space-3) * -1)",
    floatY: "var(--component-coin-field-float-small)",
    tiltA: "-6deg",
    tiltB: "5deg",
  },
  {
    src: "/images/coins/xrp.png",
    label: "XRP",
    size: "lg",
    side: "right",
    depth: "1.05",
    appearDelay: "130ms",
    duration: "var(--component-coin-field-duration-drift)",
    opacity: "full",
    priority: "high",
    floatX: "var(--space-2)",
    floatY: "var(--component-coin-field-float)",
    tiltA: "6deg",
    tiltB: "-8deg",
  },
  {
    src: "/images/coins/link.png",
    label: "Chainlink",
    size: "sm",
    side: "right",
    depth: "0.45",
    appearDelay: "210ms",
    duration: "var(--component-coin-field-duration-drift-fast)",
    opacity: "soft",
    priority: "low",
    floatX: "calc(var(--space-1) * -1)",
    floatY: "var(--component-coin-field-float-small)",
    tiltA: "-4deg",
    tiltB: "6deg",
  },
  {
    src: "/images/coins/ltc.png",
    label: "Litecoin",
    size: "sm",
    side: "right",
    depth: "0.6",
    appearDelay: "300ms",
    duration: "var(--component-coin-field-duration-drift-slow)",
    opacity: "soft",
    priority: "low",
    floatX: "var(--space-2)",
    floatY: "var(--component-coin-field-float-small)",
    tiltA: "8deg",
    tiltB: "-5deg",
  },
];

/**
 * Decorative crypto atmosphere for market-hero.
 * Coins fly in from the sides, then hover. Desktop also tracks the pointer slightly.
 */
export function CryptoCoinField() {
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
    <div className="ui-coin-field" ref={fieldRef} aria-hidden="true">
      <span className="ui-coin-field__orb ui-coin-field__orb--a" />
      <span className="ui-coin-field__orb ui-coin-field__orb--b" />
      {SLOTS.map((slot, index) => (
        <span
          key={slot.src}
          className={[
            "ui-coin-field__coin",
            `ui-coin-field__coin--${slot.size}`,
            `ui-coin-field__coin--${slot.opacity}`,
            `ui-coin-field__coin--${slot.priority}`,
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
          <span className="ui-coin-field__float">
            <span className="ui-coin-field__disc">
              <img src={slot.src} alt="" width={512} height={512} draggable={false} />
            </span>
          </span>
        </span>
      ))}
    </div>
  );
}
