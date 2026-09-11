import { type InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export function Input({
  label,
  error,
  id,
  className = "",
  ...props
}: InputProps) {
  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label htmlFor={id} className="text-label text-text-secondary">
          {label}
        </label>
      )}
      <input
        id={id}
        className={`h-12 rounded-xl border bg-surface px-4 text-body text-foreground transition-colors placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background ${
          error ? "border-error" : "border-border"
        } ${className}`}
        aria-invalid={!!error}
        aria-describedby={error && id ? `${id}-error` : undefined}
        {...props}
      />
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
}
