"use client";

import Image from "next/image";
import Link from "next/link";

import { ArrowUpRight, CarFront } from "lucide-react";

import { motion, useReducedMotion } from "motion/react";

import { AvailabilityBadge } from "@/components/cars/AvailabilityBadge";

import { getAccentColor } from "@/lib/accents";
import { useTheme } from "@/hooks/useTheme";

import type { Car } from "@/types/car";

interface CarCardProps {
  car: Car;
  index?: number;
}

export function CarCard({ car, index = 0 }: CarCardProps) {
  const { theme } = useTheme();

  const reduceMotion = useReducedMotion();

  const color = getAccentColor("cars", theme);

  /*
   * Temporary placeholder SVGs don't need
   * Next Image optimization.
   *
   * Once you replace them with webp/jpg/png,
   * Next will optimize them normally.
   */
  const isSvg = car.image.toLowerCase().endsWith(".svg");

  return (
    <motion.article
      whileHover={
        reduceMotion
          ? undefined
          : {
              y: -7,
            }
      }
      transition={{
        duration: 0.35,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        group
        relative
        flex
        h-full
        flex-col
        overflow-hidden
        rounded-[26px]
        border
        border-white/[0.08]
        bg-surface/60
        shadow-[0_20px_60px_rgba(0,0,0,0.15)]
        backdrop-blur-xl
        transition-all
        duration-500
        hover:border-accent-cyan/25
        hover:shadow-[0_30px_80px_rgba(0,229,255,0.08)]
      "
    >
      {/* =====================================================
          IMAGE
      ====================================================== */}

      <div
        className="
          relative
          h-[250px]
          overflow-hidden
          sm:h-[230px]
          lg:h-[240px]
        "
      >
        <Image
          src={car.image}
          alt={`${car.brand} ${car.model}`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
          loading="lazy"
          unoptimized={isSvg}
          className="
            object-cover
            transition-transform
            duration-[1000ms]
            ease-out
            group-hover:scale-[1.07]
          "
        />

        {/* Dark overlay */}

        <div
          className="
            absolute
            inset-0
            bg-linear-to-t
            from-[#070A11]/85
            via-transparent
            to-black/10
          "
        />

        {/* Color tint */}

        <div
          className="
            absolute
            inset-0
            bg-linear-to-br
            from-accent-purple/0
            via-transparent
            to-accent-cyan/0
            transition-colors
            duration-700
            group-hover:from-accent-purple/10
            group-hover:to-accent-cyan/10
          "
        />

        {/* Shine */}

        {!reduceMotion && (
          <motion.div
            aria-hidden="true"
            animate={{
              x: ["-250%", "650%"],
            }}
            transition={{
              duration: 4.5 + index * 0.2,

              repeat: Infinity,

              repeatDelay: 4 + index * 0.3,

              ease: "easeInOut",
            }}
            className="
              pointer-events-none
              absolute
              -bottom-[30%]
              -top-[30%]
              left-0
              w-[8%]
              rotate-[15deg]
              bg-linear-to-r
              from-transparent
              via-white/20
              to-transparent
              opacity-50
              blur-xl
            "
          />
        )}

        {/* Top */}

        <div className="absolute inset-x-0 top-0 z-20 flex items-start justify-between p-4">
          <div
            className="
              flex
              h-9
              min-w-9
              items-center
              justify-center
              rounded-full
              border
              border-white/10
              bg-black/20
              px-2.5
              backdrop-blur-xl
            "
          >
            <span className="text-[9px] font-semibold tracking-[0.15em] text-white/70">
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>

          <AvailabilityBadge status={car.availability} />
        </div>

        {/* Year */}

        <div className="absolute bottom-4 right-4 z-20">
          <span
            className="
              rounded-full
              border
              border-white/10
              bg-black/25
              px-3
              py-1.5
              text-[10px]
              font-semibold
              text-white/75
              backdrop-blur-xl
            "
          >
            {car.year}
          </span>
        </div>
      </div>

      {/* =====================================================
          CONTENT
      ====================================================== */}

      <div
        className="
          relative
          flex
          flex-1
          flex-col
          p-5
        "
      >
        <div className="flex items-center gap-2">
          <span
            className="
              h-1.5
              w-1.5
              rounded-full
              bg-accent-cyan
              shadow-[0_0_12px_var(--accent-cyan)]
            "
          />

          <p
            className="
              text-[9px]
              font-semibold
              uppercase
              tracking-[0.17em]
            "
            style={{
              color,
            }}
          >
            {car.brand}
          </p>
        </div>

        <h3
          className="
            mt-2
            text-[1.45rem]
            font-semibold
            leading-tight
            tracking-[-0.03em]
            text-foreground
          "
        >
          {car.model}
        </h3>

        {car.variant && (
          <p className="mt-1.5 text-xs text-text-muted">{car.variant}</p>
        )}

        <div
          className="
            my-5
            h-px
            w-full
            bg-linear-to-r
            from-border
            via-border/50
            to-transparent
          "
        />

        <Link
          href={`/enquiry?interest=automobile&car=${encodeURIComponent(
            car.slug,
          )}`}
          className="
            group/button
            mt-auto
            flex
            h-[50px]
            w-full
            items-center
            justify-between
            rounded-full
            border
            border-white/10
            bg-background/30
            px-5
            text-sm
            font-semibold
            text-foreground
            backdrop-blur-xl
            transition-all
            duration-300
            hover:border-accent-cyan/35
            hover:bg-accent-cyan/[0.07]
          "
        >
          <span className="flex items-center gap-2">
            <CarFront className="h-4 w-4 text-accent-cyan" />
            Enquire Now
          </span>

          <span
            className="
              flex
              h-8
              w-8
              items-center
              justify-center
              rounded-full
              bg-white/5
              transition-all
              duration-300
              group-hover/button:rotate-45
              group-hover/button:bg-accent-cyan/10
              group-hover/button:text-accent-cyan
            "
          >
            <ArrowUpRight className="h-4 w-4" />
          </span>
        </Link>
      </div>

      {/* Glow */}

      <div
        className="
          pointer-events-none
          absolute
          -bottom-28
          left-1/2
          h-56
          w-56
          -translate-x-1/2
          rounded-full
          bg-accent-violet/0
          blur-[90px]
          transition-all
          duration-700
          group-hover:bg-accent-cyan/10
        "
      />
    </motion.article>
  );
}
