import {
  ILLUSTRATION_DEFAULT_SIZE,
  illustrationSrc,
  type IllustrationName,
} from "@/lib/illustrations";

export type IllustrationSize = "sm" | "md" | "lg" | "xl";

const SIZE_PX: Record<IllustrationSize, number> = {
  sm: 80,
  md: 120,
  lg: ILLUSTRATION_DEFAULT_SIZE,
  xl: 240,
};

type IllustrationProps = {
  name: IllustrationName;
  /** sm 80 · md 120 · lg 180 (Figma default) · xl 240 */
  size?: IllustrationSize;
  /** Gray/100 tile behind art (Figma illustration cards). */
  framed?: boolean;
  className?: string;
  alt?: string;
};

/**
 * Brand marketing illustration (Images frame 15235:13486).
 * Not Material Icons — use `Icon` for UI chrome.
 */
export function Illustration({
  name,
  size = "lg",
  framed = true,
  className = "",
  alt = "",
}: IllustrationProps) {
  const px = SIZE_PX[size];
  const classes = [
    "ui-illustration",
    framed ? "ui-illustration--framed" : "",
    `ui-illustration--${size}`,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <span className={classes} style={{ width: px, height: px }}>
      <img
        className="ui-illustration__img"
        src={illustrationSrc(name)}
        alt={alt}
        width={px}
        height={px}
        loading="lazy"
        decoding="async"
      />
    </span>
  );
}
