import type { InputHTMLAttributes } from "react";

type FieldProps = {
  id: string;
  label: string;
  hint?: string;
  error?: string;
  required?: boolean;
} & Omit<InputHTMLAttributes<HTMLInputElement>, "id">;

export function Field({
  id,
  label,
  hint,
  error,
  required,
  disabled,
  className = "",
  ...inputProps
}: FieldProps) {
  const describedBy = error ? `${id}-error` : hint ? `${id}-hint` : undefined;
  const stateClass = error
    ? "ui-field--error"
    : disabled
      ? "ui-field--disabled"
      : "";

  return (
    <div className={`ui-field ${stateClass} ${className}`.trim()}>
      <label className="ui-field__label" htmlFor={id}>
        {label}
        {required ? <span className="ui-field__required" aria-hidden="true"> *</span> : null}
      </label>
      <input
        id={id}
        className="ui-field__control"
        disabled={disabled}
        required={required}
        aria-invalid={Boolean(error) || undefined}
        aria-describedby={describedBy}
        {...inputProps}
      />
      {error ? (
        <p className="ui-field__hint ui-field__hint--error" id={`${id}-error`}>
          {error}
        </p>
      ) : hint ? (
        <p className="ui-field__hint" id={`${id}-hint`}>
          {hint}
        </p>
      ) : null}
    </div>
  );
}
