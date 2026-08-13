"use client";

import { useMemo, useState, type ReactNode } from "react";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";

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
      title?: string;
      meta?: string;
      /** Market icon path under /public (crypto logo, flag, etc.) */
      iconSrc?: string;
      /** Overlapping dual icons (Forex flags); iconSrc is primary when single. */
      iconSrcSecondary?: string;
      imageSrc?: string;
      lines?: string[];
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
  /** Live filter on symbol/title/meta/id as user types. */
  showSearch?: boolean;
};

function cellSearchText(value: TableCellValue | undefined): string {
  if (value == null) return "";
  if (typeof value === "string") return value;
  return [value.title, value.meta, value.lines?.join(" ")].filter(Boolean).join(" ");
}

function CellContent({ value }: { value: TableCellValue }) {
  if (typeof value === "string") {
    return <span className="ui-table__value">{value}</span>;
  }

  if (value.imageSrc) {
    return (
      <img
        className="ui-compare__badge"
        src={value.imageSrc}
        alt={value.meta ?? ""}
        width={144}
        height={76}
      />
    );
  }

  if (value.lines && value.lines.length > 0) {
    return (
      <span className="ui-table__value ui-compare__value--stack">
        {value.lines.map((line) => (
          <span key={line} className="ui-compare__line">
            {line}
          </span>
        ))}
      </span>
    );
  }

  const hasIcon = Boolean(value.iconSrc);
  const dual = Boolean(value.iconSrc && value.iconSrcSecondary);

  return (
    <span className="ui-table__symbol-cell">
      {hasIcon ? (
        <span
          className={
            dual ? "ui-table__icons ui-table__icons--dual" : "ui-table__icons"
          }
          aria-hidden="true"
        >
          {value.iconSrcSecondary ? (
            <img
              className="ui-table__icon ui-table__icon--back"
              src={value.iconSrcSecondary}
              alt=""
              width={24}
              height={24}
            />
          ) : null}
          {value.iconSrc ? (
            <img
              className="ui-table__icon"
              src={value.iconSrc}
              alt=""
              width={32}
              height={32}
            />
          ) : null}
        </span>
      ) : null}
      <span className="ui-table__symbol">
        {value.title ? (
          <span className="ui-table__value ui-table__value--medium">
            {value.title}
          </span>
        ) : null}
        {value.meta ? <span className="ui-table__meta">{value.meta}</span> : null}
      </span>
    </span>
  );
}

export function DataTable({
  columns,
  rows,
  scrollable = true,
  caption,
  showSearch = false,
}: DataTableProps) {
  const [query, setQuery] = useState("");
  const hasAction = rows.some((r) => r.action);
  const firstColId = columns[0]?.id;

  const filteredRows = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return rows;
    return rows.filter((row) => {
      if (row.id.toLowerCase().includes(q)) return true;
      return columns.some((col) =>
        cellSearchText(row.cells[col.id]).toLowerCase().includes(q)
      );
    });
  }, [rows, columns, query]);

  return (
    <div
      className={
        scrollable ? "ui-table-shell ui-table-shell--scroll" : "ui-table-shell"
      }
    >
      <table className="ui-table">
        {caption ? (
          <caption className="ui-table__caption">{caption}</caption>
        ) : null}
        <thead className="ui-table__head">
          <tr className="ui-table__row ui-table__row--header">
            {columns.map((col, colIndex) => {
              const isFirst = colIndex === 0;
              const align = col.align ?? (isFirst ? "left" : "center");
              return (
                <th
                  key={col.id}
                  className={`ui-table__cell ui-table__cell--header ui-table__cell--${align}`}
                  scope="col"
                  style={col.width ? { width: col.width } : undefined}
                >
                  {isFirst && showSearch ? (
                    <span className="ui-table__header-symbol">
                      <span className="ui-table__header-label">{col.header}</span>
                      <label className="ui-table__search">
                        <Icon name="search" size={16} />
                        <span className="ui-table__sr-only">Search instruments</span>
                        <input
                          type="search"
                          className="ui-table__search-input"
                          placeholder="Search Symbol"
                          value={query}
                          onChange={(e) => setQuery(e.target.value)}
                          autoComplete="off"
                        />
                      </label>
                    </span>
                  ) : (
                    col.header
                  )}
                </th>
              );
            })}
            {hasAction ? (
              <th
                className="ui-table__cell ui-table__cell--header ui-table__cell--action"
                scope="col"
              >
                <span className="ui-table__sr-only">Action</span>
              </th>
            ) : null}
          </tr>
        </thead>
        <tbody className="ui-table__body">
          {filteredRows.length === 0 ? (
            <tr className="ui-table__row ui-table__row--body ui-table__row--last">
              <td
                className="ui-table__cell ui-table__cell--empty"
                colSpan={columns.length + (hasAction ? 1 : 0)}
              >
                <span className="ui-table__value">No instruments match “{query.trim()}”.</span>
              </td>
            </tr>
          ) : (
            filteredRows.map((row, index) => {
              const isLast = index === filteredRows.length - 1;
              return (
                <tr
                  key={row.id}
                  className={
                    isLast
                      ? "ui-table__row ui-table__row--body ui-table__row--last"
                      : "ui-table__row ui-table__row--body"
                  }
                >
                  {columns.map((col, colIndex) => {
                    const isFirst = col.id === firstColId;
                    const align =
                      col.align ?? (colIndex === 0 ? "left" : "center");
                    return (
                      <td
                        key={col.id}
                        className={`ui-table__cell ui-table__cell--${align}${
                          isFirst ? " ui-table__cell--symbol" : ""
                        }`}
                        style={col.width ? { width: col.width } : undefined}
                      >
                        <CellContent value={row.cells[col.id] ?? "—"} />
                      </td>
                    );
                  })}
                  {hasAction ? (
                    <td className="ui-table__cell ui-table__cell--action">
                      {row.action ? (
                        <Button
                          href={row.action.href}
                          variant="secondary"
                          size="sm"
                        >
                          {row.action.label}
                        </Button>
                      ) : null}
                    </td>
                  ) : null}
                </tr>
              );
            })
          )}
        </tbody>
      </table>
    </div>
  );
}

/** Simple helper for section titles above tables if needed */
export function TableSectionTitle({ children }: { children: ReactNode }) {
  return <h3 className="ui-table-section-title">{children}</h3>;
}
