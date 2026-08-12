import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Illustration } from "@/components/ui/Illustration";
import { Section } from "@/components/ui/Section";
import { Text } from "@/components/ui/Text";
import {
  isIllustration,
  type IllustrationName,
} from "@/lib/illustrations";

type FeaturesProps = {
  title?: string;
  items: Array<{
    title: string;
    description: string;
    illustration?: string;
  }>;
};

export function Features({ title, items }: FeaturesProps) {
  return (
    <Section id="features">
      <Container>
        {title ? <Heading variant="section">{title}</Heading> : null}
        <div className="ui-feature-grid">
          {items.map((item) => {
            const illo =
              item.illustration && isIllustration(item.illustration)
                ? (item.illustration as IllustrationName)
                : null;

            return (
              <Card key={item.title}>
                {illo ? (
                  <div className="ui-card__media">
                    <Illustration name={illo} size="md" framed />
                  </div>
                ) : null}
                <h3 className="ui-card__title">{item.title}</h3>
                <Text variant="muted">{item.description}</Text>
              </Card>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
