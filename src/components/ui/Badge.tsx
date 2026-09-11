import { type ReactNode } from "react";

type BadgeVariant = "default" | "accent" | "success" | "warning" | "error";

interface BadgeProps {
  variant?: BadgeVariant;
  children: ReactNode;
  className?: string;
}

const variantStyles: Record<BadgeVariant, string> = {
  default: "bg-surface-soft text-text-secondary border-border",
  accent: "bg-accent/10 text-accent border-accent/30",
  success: "bg-success/10 text-success border-success/30",
  warning: "bg-warning/10 text-warning border-warning/30",
  error: "bg-error/10 text-error border-error/30",
};

export function Badge({
  variant = "default",
  children,
  className = "",
}: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 text-label ${variantStyles[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
