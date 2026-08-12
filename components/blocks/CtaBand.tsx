import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";
import { Text } from "@/components/ui/Text";
import type { LandingCta } from "@/lib/types";

type CtaBandProps = {
  title: string;
  subtitle?: string;
  primaryCta: LandingCta;
  secondaryCta?: LandingCta;
};

export function CtaBand({ title, subtitle, primaryCta, secondaryCta }: CtaBandProps) {
  return (
    <Section variant="cta">
      <Container narrow>
        <Heading variant="section">{title}</Heading>
        {subtitle ? <Text variant="lead">{subtitle}</Text> : null}
        <div className="ui-cta-row ui-cta-row--center">
          <Button href={primaryCta.href} variant="primary">
            {primaryCta.label}
          </Button>
          {secondaryCta ? (
            <Button href={secondaryCta.href} variant="secondary">
              {secondaryCta.label}
            </Button>
          ) : null}
        </div>
      </Container>
    </Section>
  );
}
