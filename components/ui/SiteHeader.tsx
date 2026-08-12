import { Button } from "@/components/ui/Button";
import { primaryNav } from "@/lib/navigation";

/**
 * Marketing site header — Website Redesign Header_Desktop / Header_Mobile.
 * Frame: 15192:11125 · components Header_Desktop 15086:11710, Header_Mobile 15366:10884.
 * Static-export friendly: mobile menu uses details/summary (no client JS).
 */
export function SiteHeader() {
  return (
    <header className="ui-mkt-header">
      <div className="ui-mkt-header__inner">
        <a
          className="ui-mkt-header__logo"
          href="https://fusionmarkets.com/"
          aria-label="Fusion Markets"
        >
          <img
            className="ui-mkt-header__logo-mark"
            src="/brand/logo-mark.svg"
            alt=""
            width={34}
            height={40}
          />
          <img
            className="ui-mkt-header__logo-wordmark"
            src="/brand/logo-wordmark.svg"
            alt="Fusion Markets"
            width={81}
            height={37}
          />
        </a>

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
            href="https://hub.fusionmarkets.com/auth/sign-in"
          >
            Log In
          </a>
          <Button
            href="https://hub.fusionmarkets.com/auth/sign-up"
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
            <img src="/brand/icon-language.svg" alt="" width={24} height={24} />
          </a>
        </div>

        <div className="ui-mkt-header__mobile">
          <a
            className="ui-mkt-header__icon-btn"
            href="https://fusionmarkets.com/"
            aria-label="Search"
          >
            <img src="/brand/icon-search.svg" alt="" width={24} height={24} />
          </a>
          <details className="ui-mkt-header__menu">
            <summary
              className="ui-mkt-header__icon-btn"
              aria-label="Open menu"
            >
              <img src="/brand/icon-menu.svg" alt="" width={24} height={24} />
            </summary>
            <div className="ui-mkt-header__mobile-panel">
              <ul className="ui-mkt-header__mobile-list">
                {primaryNav.map((item) => (
                  <li key={item.label}>
                    <a href={item.href}>{item.label}</a>
                  </li>
                ))}
              </ul>
              <div className="ui-mkt-header__mobile-actions">
                <Button
                  href="https://hub.fusionmarkets.com/auth/sign-in"
                  variant="secondary"
                  size="md"
                >
                  Log In
                </Button>
                <Button
                  href="https://hub.fusionmarkets.com/auth/sign-up"
                  variant="primary"
                  size="md"
                >
                  Start Trading
                </Button>
              </div>
              <p className="ui-mkt-header__preview-note">
                Internal preview · noindex
              </p>
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}
