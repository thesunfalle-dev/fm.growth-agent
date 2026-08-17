import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { ReviewRail } from "@/components/ui/ReviewRail";
import { Section } from "@/components/ui/Section";
import { Text } from "@/components/ui/Text";
import { blockDefaults } from "@/lib/block-defaults";
import type { ReviewItem, ReviewsSummary } from "@/lib/types";

const STAR_TILE = "/brand/trustpilot/star-tile.svg";
const TRUSTPILOT_MARK = "/brand/trustpilot/star-logo.svg";
const TRUSTPILOT_WORD = "/brand/trustpilot/trustpilot-word.svg";
const STAR_COUNT = 5;

type ReviewsProps = {
  title?: string;
  subtitle?: string;
  summary?: ReviewsSummary;
  items?: ReviewItem[];
};

/**
 * Reviews from Real Traders — Figma `29987:342098` / mobile `29987:343348`.
 * Left title + Trustpilot header + peeking review-card rail.
 */
export function Reviews({
  title = blockDefaults.reviews.title,
  subtitle = blockDefaults.reviews.subtitle,
  summary = blockDefaults.reviews.summary,
  items,
}: ReviewsProps) {
  const cards = items?.length ? items : [...blockDefaults.reviews.items];
  const href = summary.href ?? blockDefaults.reviews.summary.href;
  const score = Math.max(1, Math.min(STAR_COUNT, Math.round(Number(summary.rating) || STAR_COUNT)));

  return (
    <Section id="reviews" className="ui-section--reviews">
      <Container className="ui-reviews-band">
        <header className="ui-reviews-band__intro">
          {title ? (
            <Heading variant="section" className="ui-reviews-band__title">
              {title}
            </Heading>
          ) : null}
          {subtitle ? (
            <Text variant="lead" className="ui-reviews-band__lead">
              {subtitle}
            </Text>
          ) : null}
        </header>

        <div className="ui-reviews__proof">
          <a
            className="ui-reviews__brand"
            href={href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="ui-reviews__logo">
              <img src={TRUSTPILOT_MARK} alt="" width={40} height={37} />
              <img src={TRUSTPILOT_WORD} alt="Trustpilot" width={122} height={26} />
            </span>
          </a>
          <div className="ui-reviews__score">
            <div className="ui-reviews__score-row">
              <p className="ui-reviews__label">{summary.label}</p>
              <p className="ui-reviews__stars" aria-hidden="true">
                {Array.from({ length: score }, (_, index) => (
                  <img key={index} src={STAR_TILE} alt="" width={30} height={30} />
                ))}
              </p>
            </div>
            <p className="ui-reviews__count">
              <strong>
                {summary.rating} | {summary.count}
              </strong>{" "}
              reviews
            </p>
          </div>
        </div>

        <ReviewRail items={cards} />
      </Container>
    </Section>
  );
}
