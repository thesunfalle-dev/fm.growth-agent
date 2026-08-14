"use client";

import { useEffect, useId, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { hubSignIn, hubSignUp, primaryNav } from "@/lib/navigation";

type SiteHeaderMobileProps = {
  onOpenChange?: (open: boolean) => void;
};

/**
 * Header_Mobile Default / Close — search + menu, smooth panel.
 */
export function SiteHeaderMobile({ onOpenChange }: SiteHeaderMobileProps) {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  const setMenu = (next: boolean) => {
    setOpen(next);
    onOpenChange?.(next);
  };

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenu(false);
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <div className={open ? "ui-mkt-header__mobile is-open" : "ui-mkt-header__mobile"}>
      <a
        className="ui-mkt-header__icon-btn ui-mkt-header__search"
        href="https://fusionmarkets.com/"
        aria-label="Search"
        aria-hidden={open}
        tabIndex={open ? -1 : undefined}
      >
        <Icon name="search" size={24} />
      </a>
      <button
        type="button"
        className="ui-mkt-header__icon-btn ui-mkt-header__menu-btn"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setMenu(!open)}
      >
        <Icon name="menu" size={24} className="ui-mkt-header__icon--menu" />
        <Icon name="close" size={24} className="ui-mkt-header__icon--close" />
      </button>
      <div id={panelId} className="ui-mkt-header__mobile-panel">
        <div className="ui-mkt-header__mobile-panel-inner">
          <ul className="ui-mkt-header__mobile-list">
            {primaryNav.map((item) => (
              <li key={item.label}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
          <div className="ui-mkt-header__mobile-actions">
            <Button href={hubSignIn} variant="secondary" size="md">
              Log In
            </Button>
            <Button href={hubSignUp} variant="primary" size="md">
              Start Trading
            </Button>
          </div>
          <p className="ui-mkt-header__preview-note">Internal preview · noindex</p>
        </div>
      </div>
    </div>
  );
}
