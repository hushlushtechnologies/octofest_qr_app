"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export function StickyPropertyCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        setVisible((prev) => {
          const next = window.scrollY > 500;
          return prev === next ? prev : next;
        });
        ticking = false;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 60, opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-x-4 z-30 md:hidden"
          style={{
            bottom: "calc(4rem + env(safe-area-inset-bottom) + 0.75rem)",
          }}
        >
          <a
            href="#interest"
            className="flex octo-button octo-button-primary h-12 w-full items-center justify-center rounded-full bg-accent-gold text-button font-semibold text-ink shadow-lg"
          >
            Express Investment Interest
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
