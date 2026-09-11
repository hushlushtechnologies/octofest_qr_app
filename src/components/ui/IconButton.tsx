import { type ButtonHTMLAttributes, type ReactNode } from "react";

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  "aria-label": string;
}

export function IconButton({
  className = "",
  children,
  ...props
}: IconButtonProps) {
  return (
    <button
      className={`inline-flex h-12 w-12 items-center justify-center rounded-full border border-border bg-surface text-foreground transition-colors hover:border-border-strong active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
