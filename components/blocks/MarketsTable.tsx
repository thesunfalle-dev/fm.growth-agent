import { CompareTable } from "@/components/ui/CompareTable";
import {
  DataTable,
  type TableColumn,
  type TableRow,
} from "@/components/ui/DataTable";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";
import { Text } from "@/components/ui/Text";
import { blockDefaults } from "@/lib/block-defaults";

type MarketsTableProps = {
  title?: string;
  subtitle?: string;
  footnote?: string;
  columns: TableColumn[];
  rows: TableRow[];
  scrollable?: boolean;
  showSearch?: boolean;
  /** markets instruments | compare matrix (How We Compare) */
  variant?: "markets" | "compare";
};

function cellToCompareValue(cell: TableRow["cells"][string] | undefined) {
  if (cell == null) return "—";
  if (typeof cell === "string") {
    if (cell.includes("\n")) return { lines: cell.split("\n") };
    return cell;
  }
  if (cell.imageSrc) {
    return { imageSrc: cell.imageSrc, imageAlt: cell.meta ?? cell.title };
  }
  if (cell.lines && cell.lines.length > 0) {
    return { lines: cell.lines };
  }
  if (cell.title) return cell.title;
  return "—";
}

/**
 * Markets instruments OR How We Compare section.
 * Compare SoT: Figma `23570:105086`.
 */
export function MarketsTable({
  title,
  subtitle,
  footnote,
  columns,
  rows,
  scrollable = blockDefaults.table.scrollable,
  showSearch = blockDefaults.table.showSearch,
  variant = blockDefaults.table.variant,
}: MarketsTableProps) {
  const isCompare = variant === "compare";

  return (
    <Section
      className={
        isCompare
          ? "ui-section--markets-table ui-section--compare"
          : "ui-section--markets-table"
      }
    >
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

        {isCompare ? (
          <CompareTable
            columns={columns
              .filter((c) => c.id !== "feature" && c.id !== "label")
              .map((c) => ({ id: c.id, header: c.header }))}
            rows={rows.map((row) => {
              const labelCell = row.cells.feature ?? row.cells.label;
              const label =
                typeof labelCell === "string"
                  ? labelCell
                  : labelCell?.title ?? "";
              const values: Record<string, ReturnType<typeof cellToCompareValue>> =
                {};
              for (const col of columns) {
                if (col.id === "feature" || col.id === "label") continue;
                values[col.id] = cellToCompareValue(row.cells[col.id]);
              }
              const tall =
                row.id === "trust" ||
                row.id === "trustpilot" ||
                label.toLowerCase().includes("trustpilot") ||
                Object.values(row.cells).some(
                  (c) => typeof c !== "string" && Boolean(c?.imageSrc)
                );
              return { id: row.id, label, values, tall };
            })}
          />
        ) : (
          <DataTable
            columns={columns}
            rows={rows}
            scrollable={scrollable}
            showSearch={showSearch}
          />
        )}

        {footnote ? (
          <p className="ui-markets-band__footnote">{footnote}</p>
        ) : null}
      </Container>
    </Section>
  );
}
