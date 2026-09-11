"use client";

import { motion } from "motion/react";
import { type ReactNode } from "react";
import { useParallax, type ParallaxIntensity } from "@/hooks/useParallax";

interface ParallaxProps {
  children?: ReactNode;
  intensity?: ParallaxIntensity;
  className?: string;
}

export function Parallax({
  children,
  intensity = "subtle",
  className = "",
}: ParallaxProps) {
  const { ref, y } = useParallax(intensity);

  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  );
}
