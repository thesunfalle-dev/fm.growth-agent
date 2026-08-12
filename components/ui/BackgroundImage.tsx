import { BACKGROUND_IMAGE_SRC } from "@/lib/illustrations";

type BackgroundImageProps = {
  /**
   * decorative — absolute fill behind content (default)
   * band — section strip with fixed aspect
   * inline — flow image (img tag)
   */
  variant?: "decorative" | "band" | "inline";
  className?: string;
  alt?: string;
};

/**
 * Shared brand background art from Images frame 15235:13486.
 * Figma note: “Using this image consistently for most of the backgrounds”.
 */
export function BackgroundImage({
  variant = "decorative",
  className = "",
  alt = "",
}: BackgroundImageProps) {
  if (variant === "inline" || variant === "band") {
    return (
      <img
        className={`ui-bg-image ui-bg-image--${variant} ${className}`.trim()}
        src={BACKGROUND_IMAGE_SRC}
        alt={alt}
        width={1211}
        height={743}
        loading={variant === "band" ? "lazy" : "eager"}
        decoding="async"
      />
    );
  }

  return (
    <div
      className={`ui-bg-image ui-bg-image--decorative ${className}`.trim()}
      aria-hidden="true"
      style={{ backgroundImage: `url(${BACKGROUND_IMAGE_SRC})` }}
    />
  );
}
