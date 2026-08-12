import type { InputHTMLAttributes } from "react";

type SearchInputProps = {
  id?: string;
  size?: "md" | "sm";
} & Omit<InputHTMLAttributes<HTMLInputElement>, "size" | "type">;

export function SearchInput({
  id = "search",
  size = "md",
  className = "",
  placeholder = "Search",
  ...props
}: SearchInputProps) {
  return (
    <label className={`ui-search ui-search--${size} ${className}`.trim()} htmlFor={id}>
      <span className="ui-search__icon" aria-hidden="true">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <circle cx="7" cy="7" r="4.5" stroke="currentColor" strokeWidth="1.5" />
          <path d="M10.5 10.5L13.5 13.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </span>
      <input
        id={id}
        type="search"
        className="ui-search__control"
        placeholder={placeholder}
        {...props}
      />
    </label>
  );
}
