"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import { SiteHeaderMobile } from "@/components/ui/SiteHeaderMobile";
import { hubSignIn, hubSignUp, primaryNav } from "@/lib/navigation";

/**
 * Marketing site header — Website Redesign Header_Desktop / Header_Mobile.
 * Hides on downward scroll; returns on a small upward move.
 */
export function SiteHeader() {
  const [away, setAway] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    lastY.current = window.scrollY;
    let frame = 0;
    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        frame = 0;
        if (menuOpen) {
          setAway(false);
          lastY.current = window.scrollY;
          return;
        }
        const y = window.scrollY;
        const delta = y - lastY.current;
        if (y < 12) setAway(false);
        else if (delta > 8) setAway(true);
        else if (delta < -4) setAway(false);
        lastY.current = y;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [menuOpen]);

  return (
    <header className={away ? "ui-mkt-header is-away" : "ui-mkt-header"}>
      <div className="ui-mkt-header__inner">
        <Logo variant="auto" className="ui-mkt-header__logo" />

        <nav className="ui-mkt-header__nav" aria-label="Primary">
          <ul className="ui-mkt-header__nav-list">
            {primaryNav.map((item) => (
              <li key={item.label}>
                <a className="ui-mkt-header__nav-link" href={item.href}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="ui-mkt-header__actions">
          <a
            className="ui-mkt-header__login"
            href={hubSignIn}
          >
            Log In
          </a>
          <Button
            href={hubSignUp}
            variant="primary"
            size="md"
          >
            Start Trading
          </Button>
          <a
            className="ui-mkt-header__lang"
            href="https://fusionmarkets.com/"
            aria-label="Language"
          >
            {/* Figma Header_Desktop Language 14686:11112 — brand SVG, not Material */}
            <img
              className="ui-mkt-header__lang-icon"
              src="/brand/language.svg"
              alt=""
              width={24}
              height={24}
            />
          </a>
        </div>

        <SiteHeaderMobile onOpenChange={setMenuOpen} />
      </div>
    </header>
  );
}
