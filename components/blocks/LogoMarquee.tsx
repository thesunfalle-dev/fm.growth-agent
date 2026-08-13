import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";
import { Text } from "@/components/ui/Text";
import { blockDefaults } from "@/lib/block-defaults";

type LogoMarqueeProps = {
  title?: string;
  subtitle?: string;
  providers: string[];
};

/** Funding-method row; provider labels are supplied by landing content. */
export function LogoMarquee({
  title = blockDefaults.logoMarquee.title,
  subtitle,
  providers,
}: LogoMarqueeProps) {
  return (
    <Section className="ui-section--funding">
      <Container>
        <div className="ui-funding__header">
          <Heading variant="section">{title}</Heading>
          {subtitle ? <Text variant="lead">{subtitle}</Text> : null}
        </div>
        <ul className="ui-funding__providers" aria-label="Funding methods">
          {providers.map((provider) => <li key={provider}>{provider}</li>)}
        </ul>
      </Container>
    </Section>
  );
}
