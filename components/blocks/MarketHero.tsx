import { BackgroundImage } from "@/components/ui/BackgroundImage";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Heading } from "@/components/ui/Heading";
import { MarketHeroQuotes } from "@/components/ui/MarketHeroQuotes";
import { Section } from "@/components/ui/Section";
import { Text } from "@/components/ui/Text";
import { blockDefaults } from "@/lib/block-defaults";
import type {
  LandingCta,
  MarketHeroQuote,
  MarketHeroQuoteRow,
  MarketHeroTrustpilot,
} from "@/lib/types";

type MarketHeroProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  bullets?: string[];
  primaryCta?: LandingCta;
  secondaryCta?: LandingCta;
  quotes?: MarketHeroQuoteRow[];
  quote?: MarketHeroQuote;
  trustpilot?: MarketHeroTrustpilot;
};

/** Shared Market Header shell based on the Figma market-header composition. */
export function MarketHero({
  eyebrow,
  title,
  subtitle,
  bullets,
  primaryCta = blockDefaults.marketHero.primaryCta,
  secondaryCta,
  quotes,
  quote,
  trustpilot,
}: MarketHeroProps) {
  const showQuotes = Boolean(quotes?.length);
  const showSummary = !showQuotes && Boolean(quote || trustpilot);
  return (
    <Section variant="hero" className="ui-section--brand-bg ui-section--market-hero">
      <BackgroundImage variant="decorative" />
      <Container>
        <div className="ui-market-hero__layout">
          <div className="ui-market-hero__copy">
            {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
            <Heading variant="display">{title}</Heading>
            {subtitle ? <Text variant="lead">{subtitle}</Text> : null}
            {bullets?.length ? (
              <ul className="ui-hero__bullets">
                {bullets.map((item) => <li key={item}>{item}</li>)}
              </ul>
            ) : null}
            {primaryCta || secondaryCta ? (
              <div className="ui-cta-row">
                {primaryCta ? <Button href={primaryCta.href} variant="primaryLight" size="lg">{primaryCta.label}</Button> : null}
                {secondaryCta ? <Button href={secondaryCta.href} variant="secondary" size="lg">{secondaryCta.label}</Button> : null}
              </div>
            ) : null}
          </div>
          {showQuotes ? (
            <aside className="ui-market-hero__panel ui-market-hero__panel--quotes" aria-label="Indicative quotes">
              <MarketHeroQuotes rows={quotes ?? []} />
            </aside>
          ) : showSummary ? (
            <aside className="ui-market-hero__panel" aria-label="Market summary">
              {quote ? (
                <div className="ui-market-hero__quote">
                  <div className="ui-market-hero__quote-top">
                    <span>{quote.label}</span>
                    <span>{quote.period}</span>
                  </div>
                  <strong>{quote.price}</strong>
                  {quote.change ? (
                    <span
                      className={[
                        "ui-market-hero__change",
                        quote.tone ? `ui-market-hero__change--${quote.tone}` : "",
                      ]
                        .filter(Boolean)
                        .join(" ")}
                    >
                      {quote.change}
                    </span>
                  ) : null}
                </div>
              ) : null}
              {trustpilot ? (
                <div className="ui-market-hero__rating">
                  <span className="ui-market-hero__rating-name">{trustpilot.label}</span>
                  <span className="ui-market-hero__stars" aria-label={`${trustpilot.rating} out of 5`}>★★★★★</span>
                  <span>{trustpilot.rating}</span>
                  <span>{trustpilot.reviews}</span>
                </div>
              ) : null}
            </aside>
          ) : null}
        </div>
      </Container>
    </Section>
  );
}
