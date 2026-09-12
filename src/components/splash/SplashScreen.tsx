"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { easing } from "@/lib/motion";

const DISPLAY_MS = 900;

export function SplashScreen() {
  const prefersReducedMotion = useReducedMotion();
  const [visible, setVisible] = useState(!prefersReducedMotion);

  useEffect(() => {
    // Reduced motion: skip the splash moment entirely rather than
    // showing a static screen for no reason — go straight to content.
    if (prefersReducedMotion) return;

    const timer = setTimeout(() => setVisible(false), DISPLAY_MS);
    return () => clearTimeout(timer);
  }, [prefersReducedMotion]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          aria-hidden="true"
          className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-4 bg-background"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: easing.standard }}
        >
          <motion.img
            src="/Octo-Logo.png"
            alt="Octofest"
            width={100}
            height={100}
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: easing.standard }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
