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
    <div className="group relative pb-8">
      {/* Decorative background glow */}
      <div className="pointer-events-none absolute -left-16 top-1/2 h-32 w-32 -translate-y-1/2 rounded-full bg-accent-violet/30 blur-[60px]" />

      <div className="relative flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        {/* ----------------------------------------------
            Heading content
        ----------------------------------------------- */}

        <div className="max-w-2xl">
          {/* Eyebrow */}
          {eyebrow && (
            <div className="mb-4 flex items-center gap-3">
              {/* Live glowing dot */}
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-cyan opacity-40" />

                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-accent-cyan shadow-[0_0_16px_var(--accent-cyan)]" />
              </span>

              <p className="text-label uppercase tracking-[0.18em] text-accent-cyan">
                {eyebrow}
              </p>

              {/* Accent line */}
              <div className="h-px w-10 bg-linear-to-r from-accent-cyan/70 to-transparent transition-all duration-500 group-hover:w-16" />
            </div>
          )}

          {/* Title */}
          <h2 className="text-title text-foreground">{title}</h2>

          {/* Gradient accent line */}
          <div className="mt-4 h-0.5 w-16 overflow-hidden rounded-full bg-border">
            <div className="h-full w-full bg-linear-to-r from-accent-pink via-accent-violet to-accent-cyan" />
          </div>

          {/* Description */}
          {description && (
            <p className="mt-5 max-w-xl text-body text-text-secondary">
              {description}
            </p>
          )}
        </div>

        {/* ----------------------------------------------
            Optional action
        ----------------------------------------------- */}

        {action && (
          <div className="flex shrink-0 items-center md:pb-1">{action}</div>
        )}
      </div>
    </div>
  );
}
