import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";
import { SpreadQuotes } from "@/components/ui/SpreadQuotes";
import { Text } from "@/components/ui/Text";
import { blockDefaults } from "@/lib/block-defaults";
import type { LandingCta, SpreadQuoteCard } from "@/lib/types";

type SpreadCardsProps = {
  title: string;
  subtitle?: string;
  toolPrefix?: string;
  toolSuffix?: string;
  toolLink?: LandingCta;
  tabs?: string[];
  featuredId?: string;
  cards: SpreadQuoteCard[];
  actionLabel?: string;
  primaryCta?: LandingCta;
};

/**
 * Live spreads — Figma desktop `29987:341476` (title + tabs + TV_Card rail) /
 * mobile `29987:342771` (tabs + TV_Card stack).
 */
export function SpreadCards({
  title,
  subtitle,
  toolPrefix = blockDefaults.spreadCards.toolPrefix,
  toolSuffix = blockDefaults.spreadCards.toolSuffix,
  toolLink = blockDefaults.spreadCards.toolLink,
  tabs,
  featuredId,
  cards,
  actionLabel,
  primaryCta = blockDefaults.spreadCards.primaryCta,
}: SpreadCardsProps) {
  return (
    <Section id="spreads" className="ui-section--spread-cards">
      <Container>
        <div className="ui-spread-cards">
          <div className="ui-spread-cards__copy">
            <Heading variant="section">{title}</Heading>
            {subtitle ? <Text variant="lead">{subtitle}</Text> : null}
          </div>
          <SpreadQuotes cards={cards} tabs={tabs} featuredId={featuredId} actionLabel={actionLabel} />
          {toolLink ? (
            <p className="ui-spread-cards__tool">
              {toolPrefix}{" "}
              <a href={toolLink.href} target="_blank" rel="noopener noreferrer">
                {toolLink.label}
              </a>{" "}
              {toolSuffix}
            </p>
          ) : null}
          {primaryCta ? (
            <Button href={primaryCta.href} variant="primary" size="lg">
              {primaryCta.label}
            </Button>
          ) : null}
        </div>
      </Container>
    </Section>
  );
}
