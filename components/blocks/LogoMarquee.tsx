import { Container } from "@/components/ui/Container";
import { FundingMarquee } from "@/components/ui/FundingMarquee";
import { Heading } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";
import { Text } from "@/components/ui/Text";
import { blockDefaults } from "@/lib/block-defaults";
import {
  defaultFundingLogoIds,
  resolveFundingLogos,
} from "@/lib/funding-logos";

type LogoMarqueeProps = {
  title?: string;
  subtitle?: string;
  providers?: string[];
};

/** Funding methods — Figma `28259:298800`: dark band + infinite logo ticker. */
export function LogoMarquee({
  title = blockDefaults.logoMarquee.title,
  subtitle = blockDefaults.logoMarquee.subtitle,
  providers,
}: LogoMarqueeProps) {
  const logos = resolveFundingLogos(providers?.length ? providers : defaultFundingLogoIds);

  return (
    <Section className="ui-section--funding">
      <Container>
        <div className="ui-funding__header">
          <Heading variant="section">{title}</Heading>
          {subtitle ? <Text variant="lead">{subtitle}</Text> : null}
        </div>
      </Container>
      {logos.length > 0 ? <FundingMarquee logos={logos} /> : null}
    </Section>
  );
}
