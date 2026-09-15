"use client";

import type { ReactNode } from "react";

import { motion, type HTMLMotionProps } from "motion/react";

import { useParallax, type ParallaxIntensity } from "@/hooks/useParallax";

/* =========================================================
   PROPS

   Extend normal motion.div props so Parallax can accept:
   - style
   - id
   - aria-*
   - onClick
   - onPointerMove
   - etc.
========================================================= */

interface ParallaxProps extends Omit<
  HTMLMotionProps<"div">,
  "children" | "ref"
> {
  children?: ReactNode;

  intensity?: ParallaxIntensity;
}

/* =========================================================
   PARALLAX
========================================================= */

export function Parallax({
  children,

  intensity = "subtle",

  className = "",

  style,

  ...props
}: ParallaxProps) {
  const { ref, y } = useParallax(intensity);

  return (
    <motion.div
      ref={ref}
      style={{
        ...style,

        /*
         * Keep the parallax Y motion while
         * still allowing external inline styles.
         */
        y,
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
