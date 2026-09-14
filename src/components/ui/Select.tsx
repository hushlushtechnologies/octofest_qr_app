import { forwardRef, type SelectHTMLAttributes } from "react";
import { ChevronDown } from "lucide-react";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  options: readonly string[];
  placeholder?: string;
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  function Select(
    {
      label,
      error,
      options,
      placeholder = "Select an option",
      id,
      className = "",
      ...props
    },
    ref,
  ) {
    return (
      <div className="flex flex-col gap-1.5">
        {label && (
          <label htmlFor={id} className="text-label text-text-secondary">
            {label}
          </label>
        )}
        <div className="relative">
          <select
            ref={ref}
            id={id}
            defaultValue=""
            className={`h-12 w-full appearance-none rounded-xl border bg-surface px-4 pr-10 text-body text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background ${
              error ? "border-error" : "border-border"
            } ${className}`}
            aria-invalid={!!error}
            aria-describedby={error && id ? `${id}-error` : undefined}
            {...props}
          >
            <option value="" disabled>
              {placeholder}
            </option>
            {options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <ChevronDown className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-text-muted" />
        </div>
        {error && (
          <p
            id={id ? `${id}-error` : undefined}
            className="text-caption text-error"
          >
            {error}
          </p>
        )}
      </div>
    );
  },
);
