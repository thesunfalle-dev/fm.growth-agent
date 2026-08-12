import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Text } from "@/components/ui/Text";

export function Disclaimer({ text }: { text: string }) {
  return (
    <Section variant="disclaimer" as="footer">
      <Container>
        <Text variant="disclaimer">{text}</Text>
      </Container>
    </Section>
  );
}
