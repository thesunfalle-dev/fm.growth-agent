type TabItem = {
  id: string;
  label: string;
};

type TabsProps = {
  items: TabItem[];
  value: string;
  onChange?: (id: string) => void;
  /** White surface vs purple-tinted surface (Figma BG variants) */
  surface?: "white" | "purple";
  className?: string;
};

/**
 * Presentational tabs. For static landings pass onChange as undefined and
 * use anchor hrefs via items mapped to links if needed later.
 */
export function Tabs({
  items,
  value,
  onChange,
  surface = "white",
  className = "",
}: TabsProps) {
  return (
    <div
      className={`ui-tabs ui-tabs--${surface} ${className}`.trim()}
      role="tablist"
    >
      {items.map((item) => {
        const active = item.id === value;
        return (
          <button
            key={item.id}
            type="button"
            role="tab"
            aria-selected={active}
            className={active ? "ui-tab ui-tab--active" : "ui-tab"}
            onClick={() => onChange?.(item.id)}
          >
            {item.label}
          </button>
        );
      })}
    </div>
  );
}
