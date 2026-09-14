"use client";

import { motion } from "motion/react";
import { Parallax } from "@/components/motion/Parallax";
import { easing } from "@/lib/motion";

interface InvestmentStatProps {
  label: string;
  amount: string;
  size?: "hero" | "compact";
  color: string;
}

export function InvestmentStat({
  label,
  amount,
  size = "hero",
  color,
}: InvestmentStatProps) {
  const amountClass = size === "hero" ? "text-stat" : "text-title";

  const number = (
    <span className={amountClass} style={{ color }}>
      {amount}
    </span>
  );

  return (
    <motion.div
      className="flex items-baseline gap-2"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: easing.standard }}
    >
      <span className="text-label text-text-muted">{label}</span>
      {size === "hero" ? (
        <Parallax intensity="subtle">{number}</Parallax>
      ) : (
        number
      )}
    </motion.div>
  );
}
