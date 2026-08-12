import { Container } from "@/components/ui/Container";
import { DataTable, type TableColumn, type TableRow } from "@/components/ui/DataTable";
import { Heading } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";
import { Text } from "@/components/ui/Text";

type MarketsTableProps = {
  title?: string;
  subtitle?: string;
  columns: TableColumn[];
  rows: TableRow[];
  scrollable?: boolean;
};

export function MarketsTable({
  title,
  subtitle,
  columns,
  rows,
  scrollable = true,
}: MarketsTableProps) {
  return (
    <Section>
      <Container>
        {title ? <Heading variant="section">{title}</Heading> : null}
        {subtitle ? <Text variant="lead">{subtitle}</Text> : null}
        <DataTable columns={columns} rows={rows} scrollable={scrollable} />
      </Container>
    </Section>
  );
}
