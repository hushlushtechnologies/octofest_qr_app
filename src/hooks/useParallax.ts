"use client";

import { useRef } from "react";
import { useScroll, useTransform, useReducedMotion } from "motion/react";

export type ParallaxIntensity = "subtle" | "medium" | "strong";

// Pixel range of vertical movement as the element travels through
// the viewport. Kept deliberately small — parallax should read as
// "premium depth," not a dramatic scroll-jacking effect.
const intensityRange: Record<ParallaxIntensity, number> = {
  subtle: 30,
  medium: 80,
  strong: 160,
};

export function useParallax(intensity: ParallaxIntensity = "subtle") {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"], // tracks from entering to leaving viewport
  });

  const range = prefersReducedMotion ? 0 : intensityRange[intensity];
  const y = useTransform(scrollYProgress, [0, 1], [range, -range]);

  return { ref, y };
}
