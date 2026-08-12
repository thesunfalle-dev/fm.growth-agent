import type { ReactNode } from "react";
import { Button } from "@/components/ui/Button";

export type TableColumn = {
  id: string;
  header: string;
  /** CSS width e.g. 400px or 1fr */
  width?: string;
  align?: "left" | "right" | "center";
};

export type TableCellValue =
  | string
  | {
      title: string;
      meta?: string;
    };

export type TableRow = {
  id: string;
  cells: Record<string, TableCellValue>;
  /** Optional right-side action */
  action?: { label: string; href: string };
};

type DataTableProps = {
  columns: TableColumn[];
  rows: TableRow[];
  /** Show sticky header + max-height scroll shell (Figma: 600px) */
  scrollable?: boolean;
  caption?: string;
};

function CellContent({ value }: { value: TableCellValue }) {
  if (typeof value === "string") {
    return <span className="ui-table__value">{value}</span>;
  }
  return (
    <span className="ui-table__symbol">
      <span className="ui-table__value">{value.title}</span>
      {value.meta ? <span className="ui-table__meta">{value.meta}</span> : null}
    </span>
  );
}

export function DataTable({
  columns,
  rows,
  scrollable = true,
  caption,
}: DataTableProps) {
  const gridTemplate = columns
    .map((c) => c.width ?? "minmax(0, 1fr)")
    .concat(rows.some((r) => r.action) ? ["auto"] : [])
    .join(" ");

  return (
    <div
      className={
        scrollable ? "ui-table-shell ui-table-shell--scroll" : "ui-table-shell"
      }
    >
      <table className="ui-table" style={{ ["--ui-table-cols" as string]: gridTemplate }}>
        {caption ? <caption className="ui-table__caption">{caption}</caption> : null}
        <thead className="ui-table__head">
          <tr className="ui-table__row ui-table__row--header">
            {columns.map((col) => (
              <th
                key={col.id}
                className={`ui-table__cell ui-table__cell--header ui-table__cell--${col.align ?? "left"}`}
                scope="col"
              >
                {col.header}
              </th>
            ))}
            {rows.some((r) => r.action) ? (
              <th className="ui-table__cell ui-table__cell--header ui-table__cell--action" scope="col">
                <span className="ui-table__sr-only">Action</span>
              </th>
            ) : null}
          </tr>
        </thead>
        <tbody className="ui-table__body">
          {rows.map((row, index) => {
            const isLast = index === rows.length - 1;
            return (
              <tr
                key={row.id}
                className={
                  isLast
                    ? "ui-table__row ui-table__row--body ui-table__row--last"
                    : "ui-table__row ui-table__row--body"
                }
              >
                {columns.map((col) => (
                  <td
                    key={col.id}
                    className={`ui-table__cell ui-table__cell--${col.align ?? "left"}`}
                  >
                    <CellContent value={row.cells[col.id] ?? "—"} />
                  </td>
                ))}
                {rows.some((r) => r.action) ? (
                  <td className="ui-table__cell ui-table__cell--action">
                    {row.action ? (
                      <Button href={row.action.href} variant="secondary" size="sm">
                        {row.action.label}
                      </Button>
                    ) : null}
                  </td>
                ) : null}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

/** Simple helper for section titles above tables if needed */
export function TableSectionTitle({ children }: { children: ReactNode }) {
  return <h3 className="ui-table-section-title">{children}</h3>;
}
