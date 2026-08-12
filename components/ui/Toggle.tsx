type ToggleProps = {
  id: string;
  label: string;
  checked?: boolean;
  disabled?: boolean;
  onChange?: (checked: boolean) => void;
};

export function Toggle({
  id,
  label,
  checked = false,
  disabled,
  onChange,
}: ToggleProps) {
  return (
    <label className={`ui-toggle ${disabled ? "ui-toggle--disabled" : ""}`} htmlFor={id}>
      <input
        id={id}
        type="checkbox"
        className="ui-toggle__input"
        role="switch"
        checked={checked}
        disabled={disabled}
        aria-checked={checked}
        onChange={(e) => onChange?.(e.target.checked)}
      />
      <span className="ui-toggle__track" aria-hidden="true">
        <span className="ui-toggle__knob" />
      </span>
      <span className="ui-toggle__label">{label}</span>
    </label>
  );
}
