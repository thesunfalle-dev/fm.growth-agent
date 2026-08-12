import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";
import { Steps, type StepItem } from "@/components/ui/Steps";
import { Text } from "@/components/ui/Text";

type StepsBandProps = {
  title?: string;
  subtitle?: string;
  items: StepItem[];
  orientation?: "vertical" | "horizontal";
  mode?: "light" | "dark";
};

/**
 * How-it-works / Step by Steps section — Sections frame 15313:11090.
 */
export function StepsBand({
  title,
  subtitle,
  items,
  orientation = "vertical",
  mode = "light",
}: StepsBandProps) {
  return (
    <Section
      id="steps"
      className={mode === "dark" ? "ui-section--steps-dark" : undefined}
    >
      <Container>
        {title ? <Heading variant="section">{title}</Heading> : null}
        {subtitle ? <Text variant="lead">{subtitle}</Text> : null}
        <Steps items={items} orientation={orientation} mode={mode} />
      </Container>
    </Section>
  );
}
