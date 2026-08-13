import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Logo } from "@/components/ui/Logo";
import { blockDefaults, sharedCtas } from "@/lib/block-defaults";
import {
  footerColumns,
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
          <h2 className="ui-mkt-footer__cta-title">{blockDefaults.cta.title}</h2>
          <div className="ui-mkt-footer__cta-actions">
            <Button
              href={sharedCtas.startTrading.href}
              variant="primary"
              size="lg"
            >
              {sharedCtas.startTrading.label}
            </Button>
            <span className="ui-mkt-footer__or">or</span>
            <Button
              href={sharedCtas.tryDemo.href}
              variant="secondary"
              size="lg"
            >
              {sharedCtas.tryDemo.label}
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

          <div className="ui-mkt-footer__accordion">
            {footerColumns.map((group) => (
              <details key={group.title} className="ui-mkt-footer__acc">
                <summary className="ui-mkt-footer__acc-summary">
                  <span>{group.title}</span>
                  <Icon name="expand_more" size={24} />
                </summary>
                <ul className="ui-mkt-footer__link-list">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <a href={link.href}>{link.label}</a>
                    </li>
                  ))}
                </ul>
              </details>
            ))}
          </div>

          <aside className="ui-mkt-footer__help">
            {/* Need help? — Figma 15861:21881: center stack, Secondary sm full width */}
            <div className="ui-mkt-footer__help-card ui-mkt-footer__help-card--center">
              <div className="ui-mkt-footer__help-inner">
                <p className="ui-mkt-footer__help-title">Need help?</p>
                <Button
                  href="https://fusionmarkets.com/"
                  variant="secondary"
                  size="sm"
                  className="ui-mkt-footer__help-cta"
                >
                  View our FAQs
                </Button>
              </div>
            </div>

            {/*
              Contact us — Figma 15861:21889
              Vertical centered rows: icon 24 → text 14 (gap 16), rows gap 32
            */}
            <div className="ui-mkt-footer__help-card ui-mkt-footer__help-card--contact">
              <div className="ui-mkt-footer__contact">
                <a
                  className="ui-mkt-footer__contact-row"
                  href={`mailto:${footerContact.email}`}
                >
                  <img
                    className="ui-mkt-footer__contact-icon"
                    src="/brand/icons/mail.svg"
                    alt=""
                    width={24}
                    height={24}
                  />
                  <span className="ui-mkt-footer__contact-text">
                    {footerContact.email}
                  </span>
                </a>

                <a
                  className="ui-mkt-footer__contact-row"
                  href={`tel:${footerContact.phone.replace(/\s/g, "")}`}
                >
                  <img
                    className="ui-mkt-footer__contact-icon"
                    src="/brand/icons/call.svg"
                    alt=""
                    width={24}
                    height={24}
                  />
                  <span className="ui-mkt-footer__contact-text">
                    {footerContact.phone}
                  </span>
                </a>

                <div className="ui-mkt-footer__contact-row ui-mkt-footer__contact-row--address">
                  <img
                    className="ui-mkt-footer__contact-icon"
                    src="/brand/icons/room.svg"
                    alt=""
                    width={24}
                    height={24}
                  />
                  <div className="ui-mkt-footer__contact-address">
                    {footerContact.addressLines.map((line) => (
                      <p key={line} className="ui-mkt-footer__contact-text">
                        {line}
                      </p>
                    ))}
                    <img
                      className="ui-mkt-footer__flag"
                      src="/brand/flags/au.svg"
                      alt="Australia"
                      width={24}
                      height={24}
                    />
                  </div>
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
          {footerLegalParagraphs.map((para) => (
            <p key={para.slice(0, 56)}>{para}</p>
          ))}
        </div>
      </div>
    </footer>
  );
}
