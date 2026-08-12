type LogoProps = {
  /**
   * desktop — full wordmark (123×48)
   * mobile — F mark only (24×28)
   * auto — desktop on large screens, mobile mark below 1024px
   */
  variant?: "desktop" | "mobile" | "auto";
  href?: string | null;
  className?: string;
};

/**
 * Fusion Markets logo — Logos & Icons frame 14994:6445
 * (FM_Logo_Desktop 15368:10679 · FM_Logo_Mobile 15368:10678).
 */
export function Logo({
  variant = "auto",
  href = "https://fusionmarkets.com/",
  className = "",
}: LogoProps) {
  const classes = ["ui-logo", `ui-logo--${variant}`, className]
    .filter(Boolean)
    .join(" ");

  // Parent link carries aria-label; images are decorative to avoid double announcement.
  const content = (
    <>
      {(variant === "desktop" || variant === "auto") && (
        <img
          className="ui-logo__desktop"
          src="/brand/logo-desktop.svg"
          alt=""
          width={123}
          height={48}
        />
      )}
      {(variant === "mobile" || variant === "auto") && (
        <img
          className="ui-logo__mobile"
          src="/brand/logo-mobile.svg"
          alt=""
          width={24}
          height={28}
        />
      )}
    </>
  );

  if (href) {
    return (
      <a className={classes} href={href} aria-label="Fusion Markets">
        {content}
      </a>
    );
  }

  return <span className={classes}>{content}</span>;
}
