import { BackgroundImage } from "@/components/ui/BackgroundImage";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { DataTable } from "@/components/ui/DataTable";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Heading } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";
import { Text } from "@/components/ui/Text";
import type {
  LandingCta,
  TableColumnSpec,
  TableRowSpec,
} from "@/lib/types";

type HeroProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  bullets?: string[];
  proofNote?: string;
  primaryCta?: LandingCta;
  secondaryCta?: LandingCta;
  brandBackground?: boolean;
  table?: {
    title?: string;
    columns: TableColumnSpec[];
    rows: TableRowSpec[];
  };
};

/**
 * Landing hero — default stack or market split with optional bullets + aside table.
 * Mobile order (homepage/market pattern): title → copy → CTAs → table.
 */
export function Hero({
  eyebrow,
  title,
  subtitle,
  bullets,
  proofNote,
  primaryCta,
  secondaryCta,
  brandBackground = false,
  table,
}: HeroProps) {
  const hasSplit = Boolean(table);
  const sectionClass = [
    brandBackground ? "ui-section--brand-bg" : "",
    hasSplit ? "ui-section--hero-split" : "",
  ]
    .filter(Boolean)
    .join(" ");

  const copy = (
    <div className="ui-hero__copy">
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <Heading variant="display">{title}</Heading>
      {subtitle ? <Text variant="lead">{subtitle}</Text> : null}
      {bullets && bullets.length > 0 ? (
        <ul className="ui-hero__bullets">
          {bullets.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      ) : null}
      {(primaryCta || secondaryCta) && (
        <div className="ui-cta-row">
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
      )}
      {proofNote ? <p className="ui-hero__proof">{proofNote}</p> : null}
    </div>
  );

  return (
    <Section variant="hero" className={sectionClass || undefined}>
      {brandBackground ? <BackgroundImage variant="decorative" /> : null}
      <Container>
        {hasSplit && table ? (
          <div className="ui-hero ui-hero--split">
            {copy}
            <div className="ui-hero__aside">
              {table.title ? (
                <p className="ui-hero__aside-title">{table.title}</p>
              ) : null}
              <DataTable
                columns={table.columns}
                rows={table.rows}
                scrollable={false}
              />
            </div>
          </div>
        ) : (
          copy
        )}
      </Container>
    </Section>
  );
}
