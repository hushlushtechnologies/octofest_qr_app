import { type TextareaHTMLAttributes } from "react";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

export function Textarea({
  label,
  error,
  id,
  className = "",
  ...props
}: TextareaProps) {
  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label htmlFor={id} className="text-label text-text-secondary">
          {label}
        </label>
      )}
      <textarea
        id={id}
        rows={4}
        className={`resize-none rounded-xl border bg-surface px-4 py-3 text-body text-foreground transition-colors placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background ${
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
