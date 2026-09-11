"use client";

import { MotionConfig } from "motion/react";
import { type ReactNode } from "react";

export function MotionProvider({ children }: { children: ReactNode }) {
  // reducedMotion="user" makes every `motion.*` component in the app
  // automatically honor the OS-level "reduce motion" setting —
  // transforms/opacity still apply, but movement is stripped out.
  // No individual component needs to check this itself.
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
