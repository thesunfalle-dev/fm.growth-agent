import type { InputHTMLAttributes } from "react";
import { Icon } from "@/components/ui/Icon";

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
        <Icon name="search" size={size === "sm" ? 16 : 20} />
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
