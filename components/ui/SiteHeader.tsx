import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import { SiteHeaderMobile } from "@/components/ui/SiteHeaderMobile";
import { hubSignIn, hubSignUp, primaryNav } from "@/lib/navigation";

/**
 * Marketing site header — Website Redesign Header_Desktop / Header_Mobile.
 * Icons: Material Symbols only (Logos & Icons 14994:6445).
 */
export function SiteHeader() {
  return (
    <header className="ui-mkt-header">
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

        <SiteHeaderMobile />
      </div>
    </header>
  );
}
