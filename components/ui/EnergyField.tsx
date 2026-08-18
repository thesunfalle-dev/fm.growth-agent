"use client";

import { useEffect, useRef } from "react";

const SATELLITES = [
  {
    id: "coffee",
    src: "/images/energy/coffee-v2.png",
    label: "Coffee",
    duration: "22s",
    delay: "0s",
    dir: "normal",
  },
  {
    id: "wheat",
    src: "/images/energy/wheat-v2.png",
    label: "Wheat",
    duration: "30s",
    delay: "-10s",
    dir: "reverse",
  },
  {
    id: "soy",
    src: "/images/energy/soy-v2.png",
    label: "Soybeans",
    duration: "26s",
    delay: "-17s",
    dir: "normal",
  },
] as const;

/**
 * Energy atmosphere — light field mesh + right-rail still-life.
 * A large oil barrel sits in the centre; coffee, wheat and soy orbit it.
 * Not the crypto scatter, not the indices globe, not a HUD well.
 */
export function EnergyField() {
  return (
    <div className="ui-energy-field" aria-hidden="true">
      <span className="ui-energy-field__orb ui-energy-field__orb--a" />
      <span className="ui-energy-field__orb ui-energy-field__orb--b" />
      <span className="ui-energy-field__orb ui-energy-field__orb--c" />
      <span className="ui-energy-field__orb ui-energy-field__orb--d" />
    </div>
  );
}

export function EnergyWell() {
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
      well.style.setProperty("--well-y", `${(x * 8).toFixed(2)}deg`);
      well.style.setProperty("--well-x", `${(y * -6).toFixed(2)}deg`);
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
        <span className="ui-energy-well__halo" />
        <span className="ui-energy-well__glow ui-energy-well__glow--warm" />
        <span className="ui-energy-well__glow ui-energy-well__glow--cool" />
        {SATELLITES.map((item) => (
          <span
            key={item.id}
            className={`ui-energy-well__sat ui-energy-well__sat--${item.id}`}
            style={{
              ["--orbit-dur" as string]: item.duration,
              ["--orbit-delay" as string]: item.delay,
              ["--orbit-dir" as string]: item.dir,
            }}
          >
            <img src={item.src} alt="" width={320} height={320} draggable={false} />
          </span>
        ))}
        <span className="ui-energy-well__barrel">
          <img src="/images/energy/oil-v2.png" alt="" width={640} height={640} draggable={false} />
        </span>
      </div>
    </div>
  );
}
