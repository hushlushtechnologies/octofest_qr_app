"use client";

import { useActiveSection } from "@/hooks/useActiveSection";
import { getAccentColor } from "@/lib/accents";
import { useTheme } from "@/hooks/useTheme";

const sections = [
  { id: "overview", label: "Overview" },
  { id: "gallery", label: "Gallery" },
  { id: "opportunity", label: "Opportunity" },
  { id: "interest", label: "Interest" },
];

const sectionIds = sections.map((s) => s.id);

export function PropertyLocalNav() {
  const activeId = useActiveSection(sectionIds);
  const { theme } = useTheme();
  const color = getAccentColor("property", theme);

  return (
    <nav
      aria-label="Property sections"
      className="sticky z-30 flex gap-2 overflow-x-auto border-b border-border bg-background/90 px-4 py-2.5 backdrop-blur-xl [scrollbar-width:none] mx-auto [&::-webkit-scrollbar]:hidden"
      style={{ top: "calc(3.5rem + env(safe-area-inset-top))" }}
    >
      {sections.map(({ id, label }) => {
        const isActive = activeId === id;
        return (
          <a
            key={id}
            href={`#${id}`}
            aria-current={isActive ? "true" : undefined}
            className="shrink-0 whitespace-nowrap rounded-full px-3.5 py-1.5 text-label transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            style={
              isActive
                ? { backgroundColor: `${color}22`, color }
                : { color: "var(--text-muted)" }
            }
          >
            {label}
          </a>
        );
      })}
    </nav>
  );
}
