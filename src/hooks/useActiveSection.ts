"use client";

import { useEffect, useState } from "react";

// Watches a fixed list of section ids and reports whichever one is
// currently crossing the vertical middle of the viewport — simpler
// and cheaper than manually comparing scrollY against each section's
// offsetTop on every scroll event.
export function useActiveSection(ids: string[]) {
  const [activeId, setActiveId] = useState<string | null>(ids[0] ?? null);

  useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      // Treat the vertical middle band of the viewport as "current" —
      // a section is active once it crosses this band, not merely
      // once any sliver of it is visible at the very edge.
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [ids]);

  return activeId;
}
