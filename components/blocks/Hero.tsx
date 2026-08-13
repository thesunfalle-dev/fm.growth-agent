import { BackgroundImage } from "@/components/ui/BackgroundImage";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Heading } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";
import { Text } from "@/components/ui/Text";
import { blockDefaults } from "@/lib/block-defaults";
import type { LandingCta } from "@/lib/types";

type HeroProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  bullets?: string[];
  primaryCta?: LandingCta;
  secondaryCta?: LandingCta;
  brandBackground?: boolean;
};

/**
 * Landing hero — pitch + optional bullets + dual CTAs.
 * Do not nest tables/charts here; sequence a separate `table` block (see assembly.md).
 */
export function Hero({
  eyebrow,
  title,
  subtitle,
  bullets,
  primaryCta = blockDefaults.hero.primaryCta,
  secondaryCta,
  brandBackground = false,
}: HeroProps) {
  return (
    <Section
      variant="hero"
      className={brandBackground ? "ui-section--brand-bg" : undefined}
    >
      {brandBackground ? <BackgroundImage variant="decorative" /> : null}
      <Container>
        <div className="ui-hero__copy">
          {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
          <Heading variant="display">{title}</Heading>
          {subtitle ? <Text variant="lead">{subtitle}</Text> : null}
          {bullets && bullets.length > 0 ? (
            <ul className="ui-hero__bullets">
              {bullets.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          ) : null}
          {(primaryCta || secondaryCta) && (
            <div className="ui-cta-row">
              {primaryCta ? (
                <Button
                  href={primaryCta.href}
                  variant={brandBackground ? "primaryLight" : "primary"}
                  size="lg"
                >
                  {primaryCta.label}
                </Button>
              ) : null}
              {secondaryCta ? (
                <Button href={secondaryCta.href} variant="secondary" size="lg">
                  {secondaryCta.label}
                </Button>
              ) : null}
            </div>
          )}
        </div>
      </Container>
    </Section>
  );
}
