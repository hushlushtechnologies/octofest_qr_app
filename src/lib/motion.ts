import type { Variants, Transition } from "motion/react";

/* ---------- Durations (seconds) ----------
   micro:     button presses, toggles — instant feedback
   fast:      hover states, small UI transitions
   normal:    section/card reveals — the default
   cinematic: hero moments, page transitions — used sparingly
*/

export const duration = {
  micro: 0.15,
  fast: 0.25,
  normal: 0.5,
  cinematic: 0.8,
} as const;

/* ---------- Easings ----------
   A small, fixed set — not a different curve per component.
*/

export const easing = {
  // Cubic Bézier easing for entrances
  standard: [0.22, 1, 0.36, 1] as const,

  // Cubic Bézier easing for transitions
  inOut: [0.65, 0, 0.35, 1] as const,

  // Spring for press / interaction feedback
  spring: {
    type: "spring",
    stiffness: 260,
    damping: 26,
  } as const,
};

/* ---------- Standard entrance transition ---------- */

export const entranceTransition: Transition = {
  duration: duration.normal,
  ease: easing.standard,
};

/* ---------- Reveal variants ---------- */

export const fadeIn: Variants = {
  hidden: {
    opacity: 0,
  },

  visible: {
    opacity: 1,
    transition: entranceTransition,
  },
};

export const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: entranceTransition,
  },
};

export const scaleIn: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.96,
  },

  visible: {
    opacity: 1,
    scale: 1,
    transition: entranceTransition,
  },
};

/* ---------- Stagger container ----------
   Apply to a parent; children using fadeUp/fadeIn/scaleIn as their
   own variants will animate in sequence automatically.
*/

export const staggerContainer: Variants = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};
