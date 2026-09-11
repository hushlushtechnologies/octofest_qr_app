import { type HTMLAttributes, type ReactNode } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export function Card({ className = "", children, ...props }: CardProps) {
  return (
    <div
      className={`rounded-2xl border border-border bg-surface p-5 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

export function GlassCard({ className = "", children, ...props }: CardProps) {
  return (
    <div
      className={`rounded-2xl border border-border/60 bg-glass p-5 backdrop-blur-xl ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
