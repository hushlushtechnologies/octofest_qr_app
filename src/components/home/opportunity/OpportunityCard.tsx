"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { GlassCard } from "@/components/ui/Card";
import { getAccentColor } from "@/lib/accents";
import type { Opportunity } from "@/data/opportunities";

export function OpportunityCard({
  opportunity,
  highlighted = false,
}: {
  opportunity: Opportunity;
  highlighted?: boolean;
}) {
  const {
    icon: Icon,
    accent,
    brand,
    label,
    title,
    description,
    href,
  } = opportunity;
  const color = getAccentColor(accent, "light");

  return (
    <Link
      href={href}
      className="block w-[82%] shrink-0 snap-start rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:w-[65%] md:w-auto"
    >
      <motion.div
        whileTap={{ scale: 0.97 }}
        whileHover={{ y: -3 }}
        transition={{ duration: 0.15 }}
        className="h-full"
      >
        <GlassCard
          className={`relative flex h-full min-h-[280px] flex-col gap-4 overflow-hidden border-t-2 ${
            highlighted ? "ring-2 ring-offset-2 ring-offset-background" : ""
          }`}
          style={{
            borderTopColor: color,
            ...(highlighted ? { boxShadow: `0 0 0 2px ${color}` } : {}),
          }}
        >
          <div
            aria-hidden="true"
            className="absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-25 blur-3xl"
            style={{ backgroundColor: color }}
          />
          <div className="relative z-10 flex h-full flex-col gap-4">
            <div className="flex items-center justify-between">
              <Icon className="h-7 w-7" style={{ color }} />
              {highlighted && (
                <span
                  className="rounded-full px-2.5 py-1 text-label"
                  style={{ backgroundColor: `${color}22`, color }}
                >
                  Suggested for you
                </span>
              )}
            </div>
            <p className="text-caption" style={{ color }}>
              {brand}
            </p>
            <div className="flex flex-col gap-1.5">
              <p className="text-caption text-text-muted">{label}</p>
              <h3 className="text-section text-foreground">{title}</h3>
              <p className="text-body text-text-secondary">{description}</p>
            </div>
            <span className="mt-auto flex items-center gap-1.5 text-button text-foreground">
              Explore <ArrowRight className="h-3.5 w-3.5" />
            </span>
          </div>
        </GlassCard>
      </motion.div>
    </Link>
  );
}
