import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Logo } from "@/components/ui/Logo";
import {
  footerColumns,
  footerContact,
  footerLegalLinks,
  footerSocial,
} from "@/lib/navigation";

/**
 * Marketing footer — Website Redesign Header & Footer frame 15192:11125.
 * Contact icons: Material Symbols (call, mail_outline, room).
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
                  <a href={item.href} target="_blank" rel="noreferrer">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
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
              <p className="ui-mkt-footer__help-title">Contact us</p>
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
          <p>
            CFDs are complex instruments and come with a high risk of losing
            money rapidly due to leverage. You should consider whether you
            understand how CFDs work and whether you can afford to take the high
            risk of losing your money. This is an internal Growth Agent preview
            on fm.growth-agent.org and is not an official Fusion Markets
            publication.
          </p>
        </div>
      </div>
    </footer>
  );
}
