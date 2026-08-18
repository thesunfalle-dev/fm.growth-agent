"use client";

import { useEffect, useRef } from "react";

const ITEMS = [
  {
    id: "oil",
    src: "/images/energy/oil.png",
    label: "Crude oil",
    from: "8%",
    duration: "18s",
    dir: "normal",
  },
  {
    id: "gas",
    src: "/images/energy/gas.png",
    label: "Natural gas",
    from: "42%",
    duration: "24s",
    dir: "reverse",
  },
  {
    id: "wheat",
    src: "/images/energy/wheat.png",
    label: "Wheat",
    from: "70%",
    duration: "30s",
    dir: "normal",
  },
  {
    id: "soy",
    src: "/images/energy/soy.png",
    label: "Soybeans",
    from: "18%",
    duration: "21s",
    dir: "reverse",
  },
] as const;

/**
 * Energy well — a right-rail still-life.
 * Four commodities ride elliptical paths around a pulsing core.
 * Not the crypto scatter and not the indices globe/ticker.
 */
export function EnergyField() {
  const wellRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const well = wellRef.current;
    const section = well?.closest("section");
    if (!well || !section) return;

    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const compactQuery = window.matchMedia("(max-width: 768px)");

    const reset = () => {
      well.style.setProperty("--well-y", "0deg");
      well.style.setProperty("--well-x", "0deg");
    };

    const onMove = (event: PointerEvent) => {
      if (motionQuery.matches || compactQuery.matches) {
        reset();
        return;
      }
      const box = well.getBoundingClientRect();
      const x = ((event.clientX - box.left) / box.width - 0.5) * 2;
      const y = ((event.clientY - box.top) / box.height - 0.5) * 2;
      well.style.setProperty("--well-y", `${(x * 7).toFixed(2)}deg`);
      well.style.setProperty("--well-x", `${(y * -5).toFixed(2)}deg`);
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
    <div className="ui-energy-well" ref={wellRef} aria-hidden="true">
      <div className="ui-energy-well__scene">
        <span className="ui-energy-well__floor" />
        <span className="ui-energy-well__ring ui-energy-well__ring--outer" />
        <span className="ui-energy-well__ring ui-energy-well__ring--inner" />
        <span className="ui-energy-well__core" />
        <span className="ui-energy-well__drop" />
        {ITEMS.map((item) => (
          <span
            key={item.id}
            className={`ui-energy-well__item ui-energy-well__item--${item.id}`}
            style={{
              ["--orbit-from" as string]: item.from,
              ["--orbit-dur" as string]: item.duration,
              ["--orbit-dir" as string]: item.dir,
            }}
          >
            <img src={item.src} alt="" width={320} height={320} draggable={false} />
          </span>
        ))}
      </div>
    </div>
  );
}
