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
  toolLink?: LandingCta;
  tabs?: string[];
  featuredId?: string;
  cards: SpreadQuoteCard[];
  actionLabel?: string;
};

/**
 * Live spreads — Figma desktop `29987:342067` (copy + TV_Card) /
 * mobile `29987:342771` (tabs + TV_Card stack).
 */
export function SpreadCards({
  title,
  subtitle,
  toolPrefix = blockDefaults.spreadCards.toolPrefix,
  toolLink = blockDefaults.spreadCards.toolLink,
  tabs,
  featuredId,
  cards,
  actionLabel,
}: SpreadCardsProps) {
  return (
    <Section id="spreads" className="ui-section--spread-cards">
      <Container>
        <div className="ui-spread-cards">
          <div className="ui-spread-cards__copy">
            <Heading variant="section">{title}</Heading>
            {subtitle ? <Text variant="lead">{subtitle}</Text> : null}
            {toolLink ? (
              <p className="ui-spread-cards__tool">
                {toolPrefix}{" "}
                <a href={toolLink.href} target="_blank" rel="noopener noreferrer">
                  {toolLink.label}
                </a>
                .
              </p>
            ) : null}
          </div>
          <SpreadQuotes cards={cards} tabs={tabs} featuredId={featuredId} actionLabel={actionLabel} />
        </div>
      </Container>
    </Section>
  );
}
