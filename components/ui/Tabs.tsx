import { Icon } from "@/components/ui/Icon";
import type { MaterialIconName } from "@/lib/icons";

type TabItem = {
  id: string;
  label: string;
  icon?: MaterialIconName;
};

type TabsProps = {
  items: TabItem[];
  value: string;
  onChange?: (id: string) => void;
  /** White surface vs purple-tinted surface (Figma BG variants) */
  surface?: "white" | "purple";
  /** text = Tabs_Text; icon = Tabs_Icon (Figma 28610:429753) */
  variant?: "text" | "icon";
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
  variant = "text",
  className = "",
}: TabsProps) {
  const useIcons = variant === "icon" || items.some((item) => item.icon);
  return (
    <div
      className={`ui-tabs ui-tabs--${surface}${useIcons ? " ui-tabs--icon" : ""} ${className}`.trim()}
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
            {item.icon ? <Icon name={item.icon} size={24} /> : null}
            <span>{item.label}</span>
          </button>
        );
      })}
    </div>
  );
}
