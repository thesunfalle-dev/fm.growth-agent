import {
  MATERIAL_ICON_DEFAULT_SIZE,
  type MaterialIconName,
} from "@/lib/icons";

export type IconSize = 16 | 20 | 24 | 32 | 40 | 48 | 60 | 80;

type IconProps = {
  /** Material Symbols ligature name from the DS catalog (lib/icons.ts). */
  name: MaterialIconName;
  size?: IconSize | number;
  className?: string;
  /** Accessible label; omit for decorative icons (aria-hidden). */
  title?: string;
};

/**
 * Base UI icon — Material Symbols Outlined only.
 * SoT: Figma Logos & Icons 14994:6445 (“All icons are based on Material Symbols”).
 */
export function Icon({
  name,
  size = MATERIAL_ICON_DEFAULT_SIZE,
  className = "",
  title,
}: IconProps) {
  const classes = ["material-symbols-outlined", "ui-icon", className]
    .filter(Boolean)
    .join(" ");

  return (
    <span
      className={classes}
      style={{
        fontSize: size,
        width: size,
        height: size,
        // Optical size tracks icon box (Material variable font opsz).
        ["--icon-opsz" as string]: String(size),
      }}
      role={title ? "img" : undefined}
      aria-label={title}
      aria-hidden={title ? undefined : true}
    >
      {name}
    </span>
  );
}
