/**
 * Crypto “How We Compare” matrix — Figma Markets Crypto CFDs How we Compare
 * Final Pages Pricing `23570:105086` / Tables frame Crypto-desktop.
 *
 * Layout: sticky side labels (feature) + provider columns; optional image cells (TrustPilot).
 */

export type CompareColumn = {
  id: string;
  header: string;
};

export type CompareCell =
  | string
  | {
      /** Multi-line text (e.g. Maker/Taker fees) */
      lines?: string[];
      /** TrustPilot / logo badge */
      imageSrc?: string;
      imageAlt?: string;
    };

export type CompareRow = {
  id: string;
  /** Left sticky label */
  label: string;
  /** Values keyed by column id (providers) */
  values: Record<string, CompareCell>;
  /** Taller row (TrustPilot badges) */
  tall?: boolean;
};

type CompareTableProps = {
  columns: CompareColumn[];
  rows: CompareRow[];
};

function renderCell(value: CompareCell | undefined) {
  if (value == null || value === "") {
    return <span className="ui-compare__value">—</span>;
  }
  if (typeof value === "string") {
    return <span className="ui-compare__value">{value}</span>;
  }
  if (value.imageSrc) {
    return (
      <img
        className="ui-compare__badge"
        src={value.imageSrc}
        alt={value.imageAlt ?? ""}
        width={144}
        height={76}
      />
    );
  }
  if (value.lines && value.lines.length > 0) {
    return (
      <span className="ui-compare__value ui-compare__value--stack">
        {value.lines.map((line) => (
          <span key={line} className="ui-compare__line">
            {line}
          </span>
        ))}
      </span>
    );
  }
  return <span className="ui-compare__value">—</span>;
}

export function CompareTable({ columns, rows }: CompareTableProps) {
  return (
    <div className="ui-compare-shell">
      <table className="ui-compare">
        <thead>
          <tr className="ui-compare__row ui-compare__row--header">
            <th className="ui-compare__corner" scope="col">
              <span className="ui-table__sr-only">Feature</span>
            </th>
            {columns.map((col) => (
              <th key={col.id} className="ui-compare__provider" scope="col">
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => {
            const isLast = index === rows.length - 1;
            return (
              <tr
                key={row.id}
                className={[
                  "ui-compare__row",
                  "ui-compare__row--body",
                  row.tall ? "ui-compare__row--tall" : "",
                  isLast ? "ui-compare__row--last" : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
              >
                <th className="ui-compare__label" scope="row">
                  {row.label}
                </th>
                {columns.map((col) => (
                  <td key={col.id} className="ui-compare__cell">
                    {renderCell(row.values[col.id])}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
