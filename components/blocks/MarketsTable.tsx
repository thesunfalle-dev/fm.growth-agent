import {
  DataTable,
  type TableColumn,
  type TableRow,
} from "@/components/ui/DataTable";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";
import { Text } from "@/components/ui/Text";

type MarketsTableProps = {
  title?: string;
  subtitle?: string;
  /** Optional footnote under table (Figma markets pricing disclaimer). */
  footnote?: string;
  columns: TableColumn[];
  rows: TableRow[];
  scrollable?: boolean;
  showSearch?: boolean;
};

/**
 * Markets instruments table section — Figma Pricing / Forex `23570:104166`
 * + Crypto_2 row pattern (icon + symbol + metric columns).
 */
export function MarketsTable({
  title,
  subtitle,
  footnote,
  columns,
  rows,
  scrollable = true,
  showSearch = true,
}: MarketsTableProps) {
  return (
    <Section className="ui-section--markets-table">
      <Container className="ui-markets-band">
        {title || subtitle ? (
          <div className="ui-markets-band__header">
            {title ? (
              <Heading variant="section" className="ui-markets-band__title">
                {title}
              </Heading>
            ) : null}
            {subtitle ? (
              <Text variant="lead" className="ui-markets-band__subtitle">
                {subtitle}
              </Text>
            ) : null}
          </div>
        ) : null}
        <DataTable
          columns={columns}
          rows={rows}
          scrollable={scrollable}
          showSearch={showSearch}
        />
        {footnote ? <p className="ui-markets-band__footnote">{footnote}</p> : null}
      </Container>
    </Section>
  );
}
