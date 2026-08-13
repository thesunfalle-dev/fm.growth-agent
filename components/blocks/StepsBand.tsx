import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";
import { Steps, type StepItem } from "@/components/ui/Steps";
import { StepsProcess } from "@/components/ui/StepsProcess";
import { Text } from "@/components/ui/Text";
import { blockDefaults } from "@/lib/block-defaults";
import type { LandingCta } from "@/lib/types";

type StepsBandProps = {
  title?: string;
  subtitle?: string;
  items: StepItem[];
  /**
   * horizontal — marketing “How it works” process (Figma 29987:339011)
   * vertical — left timeline (Sections vertical light)
   */
  orientation?: "vertical" | "horizontal";
  mode?: "light" | "dark";
  /** Optional dual CTAs under steps (Figma process section). */
  primaryCta?: LandingCta;
  secondaryCta?: LandingCta;
};

/**
 * How-it-works / Step by Steps — Figma Sections + Final Pages process band.
 * Canonical marketing layout: centered H2 + lead + horizontal steps + dual CTA
 * @see https://www.figma.com/design/5PQJiXq7xZNGCqV1XNvKro/Website-Redesign-FM-2.0?node-id=29987-339011
 */
export function StepsBand({
  title = blockDefaults.steps.title,
  subtitle = blockDefaults.steps.subtitle,
  items,
  orientation = blockDefaults.steps.orientation,
  mode = "light",
  primaryCta,
  secondaryCta,
}: StepsBandProps) {
  const isProcess = orientation === "horizontal";

  const header =
    title || subtitle ? (
      <div
        className={
          isProcess ? "ui-steps-band__header" : "ui-steps-band__header-plain"
        }
      >
        {title ? (
          <Heading
            variant="section"
            className={isProcess ? "ui-steps-band__title" : undefined}
          >
            {title}
          </Heading>
        ) : null}
        {subtitle ? (
          <Text
            variant="lead"
            className={isProcess ? "ui-steps-band__subtitle" : undefined}
          >
            {subtitle}
          </Text>
        ) : null}
      </div>
    ) : null;

  const actions =
    primaryCta || secondaryCta ? (
      <div className="ui-cta-row ui-cta-row--center ui-steps-band__actions">
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
    ) : null;

  return (
    <Section
      id="steps"
      className={[
        mode === "dark" ? "ui-section--steps-dark" : "",
        isProcess ? "ui-section--steps-process" : "",
        isProcess ? "ui-section--steps-scroll" : "",
      ]
        .filter(Boolean)
        .join(" ") || undefined}
    >
      {isProcess ? (
        <StepsProcess items={items} mode={mode} header={header} actions={actions} />
      ) : (
        <Container>
          {header}
          <Steps items={items} orientation={orientation} mode={mode} />
          {actions}
        </Container>
      )}
    </Section>
  );
}
