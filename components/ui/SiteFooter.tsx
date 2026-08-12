import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Logo } from "@/components/ui/Logo";
import {
  footerColumns,
  footerContact,
  footerLegalLinks,
  footerLegalParagraphs,
  footerSocial,
  footerTradingViewBadge,
} from "@/lib/navigation";

/**
 * Marketing footer — Figma Website Redesign Footer AU
 * `24400:154127` / `15866:27010`
 */
export function SiteFooter() {
  return (
    <footer className="ui-mkt-footer">
      <div className="ui-mkt-footer__cta">
        <div className="ui-mkt-footer__cta-inner">
          <h2 className="ui-mkt-footer__cta-title">Ready to start trading?</h2>
          <div className="ui-mkt-footer__cta-actions">
            <Button
              href="https://hub.fusionmarkets.com/auth/sign-up"
              variant="primary"
              size="lg"
            >
              Start trading
            </Button>
            <span className="ui-mkt-footer__or">or</span>
            <Button
              href="https://hub.fusionmarkets.com/auth/sign-up"
              variant="secondary"
              size="lg"
            >
              Try a free demo
            </Button>
          </div>
        </div>
      </div>

      <div className="ui-mkt-footer__main">
        <div className="ui-mkt-footer__brand-row">
          <Logo variant="desktop" />
          <div className="ui-mkt-footer__social">
            <span className="ui-mkt-footer__social-label">Follow us</span>
            <ul className="ui-mkt-footer__social-list">
              {footerSocial.map((item) => (
                <li key={item.label}>
                  <a
                    className="ui-mkt-footer__social-link"
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={item.label}
                  >
                    <img
                      className="ui-mkt-footer__social-icon"
                      src={item.iconSrc}
                      alt=""
                      width={24}
                      height={24}
                    />
                  </a>
                </li>
              ))}
            </ul>
            <a
              className="ui-mkt-footer__tv-badge"
              href={footerTradingViewBadge.href}
              target="_blank"
              rel="noreferrer"
              aria-label={footerTradingViewBadge.label}
            >
              <img
                src={footerTradingViewBadge.iconSrc}
                alt={footerTradingViewBadge.label}
                width={143}
                height={40}
              />
            </a>
          </div>
        </div>

        <div className="ui-mkt-footer__main-inner">
          <div className="ui-mkt-footer__columns">
            {footerColumns.map((col) => (
              <div key={col.title} className="ui-mkt-footer__col">
                <p className="ui-mkt-footer__col-title">{col.title}</p>
                <ul>
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <a href={link.href}>{link.label}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <aside className="ui-mkt-footer__help">
            <div className="ui-mkt-footer__help-card">
              <p className="ui-mkt-footer__help-title">Need help?</p>
              <Button
                href="https://fusionmarkets.com/"
                variant="secondary"
                size="sm"
              >
                View our FAQs
              </Button>
            </div>
            <div className="ui-mkt-footer__help-card ui-mkt-footer__help-card--contact">
              <a
                className="ui-mkt-footer__help-link"
                href={`mailto:${footerContact.email}`}
              >
                <Icon name="mail_outline" size={20} />
                <span>{footerContact.email}</span>
              </a>
              <a
                className="ui-mkt-footer__help-link"
                href={`tel:${footerContact.phone.replace(/\s/g, "")}`}
              >
                <Icon name="call" size={20} />
                <span>{footerContact.phone}</span>
              </a>
              <div className="ui-mkt-footer__address-block">
                <Icon name="room" size={20} />
                <div>
                  {footerContact.addressLines.map((line) => (
                    <p key={line} className="ui-mkt-footer__address">
                      {line}
                    </p>
                  ))}
                </div>
              </div>
              <img
                className="ui-mkt-footer__flag"
                src="/brand/flags/au.svg"
                alt="Australia"
                width={24}
                height={24}
              />
            </div>
          </aside>
        </div>

        <div className="ui-mkt-footer__bar">
          <p className="ui-mkt-footer__copy">
            Fusion Markets {new Date().getFullYear()}. All rights reserved
          </p>
          <ul className="ui-mkt-footer__bar-links">
            {footerLegalLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="ui-mkt-footer__legal">
          {footerLegalParagraphs.map((para) => (
            <p key={para.slice(0, 48)}>{para}</p>
          ))}
        </div>
      </div>
    </footer>
  );
}
