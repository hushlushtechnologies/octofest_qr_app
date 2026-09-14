"use client";

import { Parallax } from "@/components/motion/Parallax";

export function ArchitecturalLines({ color }: { color: string }) {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <Parallax
        intensity="medium"
        className="absolute left-[8%] top-0 h-full w-px opacity-15"
        style={{ backgroundColor: color }}
      />
      <Parallax
        intensity="subtle"
        className="absolute left-[22%] top-0 h-2/3 w-px opacity-10"
        style={{ backgroundColor: color }}
      />
      <Parallax
        intensity="strong"
        className="absolute right-[15%] top-0 h-3/4 w-px opacity-15"
        style={{ backgroundColor: color }}
      />
      <Parallax
        intensity="medium"
        className="absolute right-[6%] top-0 h-1/2 w-px opacity-10"
        style={{ backgroundColor: color }}
      />
    </div>
  );
}
