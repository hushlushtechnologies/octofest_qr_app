import { type ReactNode } from "react";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  action?: ReactNode;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  action,
}: SectionHeadingProps) {
  return (
    <div className="flex items-end justify-between gap-4">
      <div className="flex flex-col gap-1.5">
        {eyebrow && <p className="text-caption text-accent">{eyebrow}</p>}
        <h2 className="text-section text-foreground">{title}</h2>
        {description && (
          <p className="text-body text-text-secondary">{description}</p>
        )}
      </div>
      {action}
    </div>
  );
}
