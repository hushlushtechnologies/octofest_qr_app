"use client";

import { motion, type Variants } from "motion/react";
import { type ReactNode } from "react";
import { fadeUp } from "@/lib/motion";

type RevealVariant = "fade-up" | "fade" | "scale";

interface RevealProps {
  children: ReactNode;
  variant?: Variants;
  as?: RevealVariant; // convenience shorthand, ignored if `variant` passed directly
  delay?: number;
  className?: string;
}

export function Reveal({ children, delay = 0, className = "" }: RevealProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={fadeUp}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}
