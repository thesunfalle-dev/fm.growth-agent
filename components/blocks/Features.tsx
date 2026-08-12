import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";
import { Text } from "@/components/ui/Text";

type FeaturesProps = {
  title?: string;
  items: Array<{ title: string; description: string }>;
};

export function Features({ title, items }: FeaturesProps) {
  return (
    <Section id="features">
      <Container>
        {title ? <Heading variant="section">{title}</Heading> : null}
        <div className="ui-feature-grid">
          {items.map((item) => (
            <Card key={item.title}>
              <h3 className="ui-card__title">{item.title}</h3>
              <Text variant="muted">{item.description}</Text>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
