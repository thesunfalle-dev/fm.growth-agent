type LabelChipProps = {
  children: string;
  size?: "lg" | "sm";
  /** Light translucent chip for dark/image backgrounds (blog categories) */
  tone?: "onMedia" | "soft";
  className?: string;
};

export function LabelChip({
  children,
  size = "sm",
  tone = "soft",
  className = "",
}: LabelChipProps) {
  return (
    <span className={`ui-chip ui-chip--${size} ui-chip--${tone} ${className}`.trim()}>
      {children}
    </span>
  );
}
