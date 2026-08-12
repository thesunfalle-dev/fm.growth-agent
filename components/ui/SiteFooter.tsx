import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Logo } from "@/components/ui/Logo";
import {
  footerContact,
  footerLegalLinks,
  footerLegalParagraphs,
  footerSocial,
  footerStacks,
  footerTradingViewBadge,
  type FooterLinkGroup,
} from "@/lib/navigation";

function FooterGroup({ group }: { group: FooterLinkGroup }) {
  return (
    <div className="ui-mkt-footer__group">
      <p className="ui-mkt-footer__col-title">{group.title}</p>
      <ul className="ui-mkt-footer__link-list">
        {group.links.map((link) => (
          <li key={link.label}>
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

/**
 * Marketing footer — Figma Website Redesign Footer AU 1:1
 * `24400:154127` / `15866:27010`
 *
 * Layout: CTA band → brand+social → 3×215 stacks (gap 100) + help cards → bar → legal
 */
export function SiteFooter() {
  return (
    <footer className="ui-mkt-footer">
      {/* CTAFooter-Desktop — h~264, pad 80 outer / 40 inner content */}
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
        {/* Brand row: logo left · Follow us + icons + TV badge right */}
        <div className="ui-mkt-footer__brand-row">
          <Logo variant="desktop" className="ui-mkt-footer__logo" />
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

        {/* Links: 3 stacks × 215 + 100 gap · help 332 */}
        <div className="ui-mkt-footer__main-inner">
          <div className="ui-mkt-footer__stacks">
            {footerStacks.map((stack, i) => (
              <div key={i} className="ui-mkt-footer__stack">
                {stack.map((group) => (
                  <FooterGroup key={group.title} group={group} />
                ))}
              </div>
            ))}
          </div>

          <aside className="ui-mkt-footer__help">
            <div className="ui-mkt-footer__help-card ui-mkt-footer__help-card--center">
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
            <p key={para.slice(0, 56)}>{para}</p>
          ))}
        </div>
      </div>
    </footer>
  );
}
