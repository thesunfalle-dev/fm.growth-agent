import { Card } from "@/components/ui/Card";
import { CardGrid } from "@/components/ui/CardGrid";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Illustration } from "@/components/ui/Illustration";
import { Section } from "@/components/ui/Section";
import { Text } from "@/components/ui/Text";
import { UspCard } from "@/components/ui/UspCard";
import {
  isIllustration,
  type IllustrationName,
} from "@/lib/illustrations";
import type { LandingCta } from "@/lib/types";

type FeaturesProps = {
  title?: string;
  /**
   * usp — “Why Fusion…” cards (Cards frame USP)
   * feature — simpler product/benefit cards
   */
  variant?: "usp" | "feature";
  items: Array<{
    title: string;
    description: string;
    illustration?: string;
    imageSrc?: string;
    learnMore?: LandingCta;
  }>;
};

export function Features({
  title,
  variant = "feature",
  items,
}: FeaturesProps) {
  const useUsp = variant === "usp";

  return (
    <Section id="features">
      <Container>
        {title ? <Heading variant="section">{title}</Heading> : null}
        <CardGrid
          variant={useUsp ? "usp" : "feature"}
          maxVisible={useUsp ? 4 : 0}
        >
          {items.map((item) => {
            if (useUsp) {
              return (
                <UspCard
                  key={item.title}
                  title={item.title}
                  description={item.description}
                  illustration={item.illustration}
                  imageSrc={item.imageSrc}
                  learnMore={item.learnMore}
                />
              );
            }

            const illo =
              item.illustration && isIllustration(item.illustration)
                ? (item.illustration as IllustrationName)
                : null;

            return (
              <Card key={item.title} variant="feature">
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
        </CardGrid>
      </Container>
    </Section>
  );
}
