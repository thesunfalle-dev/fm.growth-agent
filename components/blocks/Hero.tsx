import { BackgroundImage } from "@/components/ui/BackgroundImage";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Heading } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";
import { Text } from "@/components/ui/Text";
import type { LandingCta } from "@/lib/types";

type HeroProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  primaryCta?: LandingCta;
  secondaryCta?: LandingCta;
  /** Shared purple brand art from Images frame (most site backgrounds). */
  brandBackground?: boolean;
};

export function Hero({
  eyebrow,
  title,
  subtitle,
  primaryCta,
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
        {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
        <Heading variant="display">{title}</Heading>
        {subtitle ? <Text variant="lead">{subtitle}</Text> : null}
        {(primaryCta || secondaryCta) && (
          <div className="ui-cta-row">
            {primaryCta ? (
              <Button href={primaryCta.href} variant="primary" size="lg">
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
      </Container>
    </Section>
  );
}
