"use client";

import Image from "next/image";

import { ArrowUpRight, Sparkles } from "lucide-react";

import { motion, useReducedMotion } from "motion/react";

import { useEffect, useRef, useState } from "react";

import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";

type Brand = {
  name: string;
  category: string;
  description: string;
  logo: string;
  href: string;
  accent: "cyan" | "violet" | "pink";
};

const brands: Brand[] = [
  {
    name: "Optimus Megatron Cars",
    category: "Automotive Opportunity",
    description:
      "Explore premium automotive opportunities and connect with the team behind Megatron Cars.",
    logo: "/cars.svg",

    // Replace with the real website URL
    href: "https://www.optimusmegatroncars.com/",

    accent: "cyan",
  },

  {
    name: "Afaq Al Manzil Properties",
    category: "Property Investment",
    description:
      "Discover UAE property opportunities and investment possibilities with Afaq Al Manzil Properties.",
    logo: "/property.svg",

    // Replace with the real website URL
    href: "https://www.afaqalmanzilproperties.com/",

    accent: "violet",
  },

  {
    name: "Hush Lush Technologies",
    category: "Technology Opportunity",
    description:
      "Explore digital products, technology solutions and future-focused opportunities from Hush Lush Technologies.",
    logo: "/tech.svg",

    // Replace with the real website URL
    href: "https://www.hushlushtechnologies.com/",

    accent: "pink",
  },
];

export function JourneySection() {
  return (
    <section className="relative overflow-hidden py-16 md:py-24">
      {/* =====================================================
          BACKGROUND ATMOSPHERE
      ====================================================== */}

      <div className="pointer-events-none absolute -left-56 top-1/3 h-120 w-120 rounded-full bg-accent-cyan/6 blur-[150px]" />

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-110 w-110 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-purple/5 blur-[150px]" />

      <Container className="relative z-10">
        {/* =====================================================
            SECTION HEADING
        ====================================================== */}

        <Reveal>
          <SectionHeading
            eyebrow="Investment Ecosystem"
            title="Three brands. Three opportunities."
            description="Explore the businesses presented through Octofest and connect directly with the opportunity that interests you."
          />
        </Reveal>

        {/* =====================================================
            BRAND CARDS
        ====================================================== */}

        <div
          className="
            no-scrollbar
            -mx-4
            mt-10
            flex
            snap-x
            snap-mandatory
            gap-4
            overflow-x-auto
            px-4
            pb-5

            md:mx-0
            md:grid
            md:grid-cols-3
            md:gap-5
            md:overflow-visible
            md:px-0
            md:pb-0
          "
        >
          {brands.map((brand, index) => (
            <div
              key={brand.name}
              className="
                w-[84vw]
                shrink-0
                snap-center

                sm:w-[65vw]

                md:w-auto
                md:shrink
              "
            >
              <BrandCard brand={brand} index={index} />
            </div>
          ))}
        </div>

        {/* Mobile swipe indicator */}

        <div className="mt-2 flex items-center justify-center gap-1.5 md:hidden">
          <span className="h-1.5 w-6 rounded-full bg-accent-cyan" />
          <span className="h-1.5 w-1.5 rounded-full bg-border-strong" />
          <span className="h-1.5 w-1.5 rounded-full bg-border-strong" />
        </div>
      </Container>
    </section>
  );
}

/* =========================================================
   BRAND CARD
========================================================= */

function BrandCard({ brand, index }: { brand: Brand; index: number }) {
  const accent = getAccentStyles(brand.accent);

  return (
    <article
      className="
        group
        octo-card
        relative
        flex
        min-h-120
        flex-col
        overflow-hidden
        rounded-[30px]
        p-5

        md:min-h-130
        md:p-6
      "
    >
      {/* =====================================================
          BACKGROUND GRID
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.12]

          bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)]
        "
      />

      {/* =====================================================
          GLOW
      ====================================================== */}

      <div
        className={`
          pointer-events-none
          absolute
          left-1/2
          top-[35%]

          h-64
          w-64

          -translate-x-1/2
          -translate-y-1/2

          rounded-full

          blur-[90px]

          transition-all
          duration-700

          group-hover:h-80
          group-hover:w-80

          ${accent.glow}
        `}
      />

      {/* =====================================================
          TOP
      ====================================================== */}

      <div className="relative z-20 flex items-center justify-between">
        <div
          className="
            octo-glass
            inline-flex
            items-center
            gap-2
            rounded-full
            px-3
            py-2
          "
        >
          <Sparkles className={`h-3.5 w-3.5 ${accent.text}`} />

          <span className="text-[9px] font-semibold uppercase tracking-[0.17em] text-text-secondary sm:text-[10px]">
            {brand.category}
          </span>
        </div>

        <span className="text-[10px] font-semibold tracking-[0.2em] text-text-muted">
          0{index + 1}
        </span>
      </div>

      {/* =====================================================
          3D LOGO STAGE
      ====================================================== */}

      <div
        className="
          relative
          z-10
          flex
          flex-1
          items-center
          justify-center

          py-8

          perspective-[1100px]
        "
      >
        {/* Floor ring */}

        <div
          className={`
            pointer-events-none
            absolute
            bottom-[14%]
            left-1/2

            h-14
            w-[70%]

            -translate-x-1/2

            rounded-[50%]

            blur-2xl

            ${accent.floor}
          `}
        />

        {/* Floating logo */}

        <FloatingBrandLogo
          src={brand.logo}
          alt={`${brand.name} logo`}
          index={index}
          accent={brand.accent}
        />
      </div>

      {/* =====================================================
          BRAND INFO
      ====================================================== */}

      <div className="relative z-20">
        <div className="mb-5 h-px w-full bg-linear-to-r from-transparent via-white/10 to-transparent" />

        <h3 className="text-[1.3rem] font-semibold leading-tight tracking-[-0.02em] text-foreground md:text-[1.45rem]">
          {brand.name}
        </h3>

        <p className="mt-3 line-clamp-3 text-sm leading-6 text-text-secondary">
          {brand.description}
        </p>

        {/* CTA */}

        <a
          href={brand.href}
          target={brand.href === "#" ? undefined : "_blank"}
          rel={brand.href === "#" ? undefined : "noopener noreferrer"}
          className={`
            mt-6
            flex
            h-12.5
            w-full
            items-center
            justify-between

            rounded-full

            border
            border-white/10

            bg-background/35

            px-5

            text-sm
            font-semibold
            text-foreground

            backdrop-blur-xl

            transition-all
            duration-300

            hover:-translate-y-0.5

            ${accent.button}
          `}
        >
          <span>Visit Website</span>

          <span
            className="
              flex
              h-8
              w-8
              items-center
              justify-center
              rounded-full
              bg-white/5

              transition-transform
              duration-300

              group-hover:rotate-45
            "
          >
            <ArrowUpRight className="h-4 w-4" />
          </span>
        </a>
      </div>
    </article>
  );
}

/* =========================================================
   RANDOM 3D FLOATING LOGO
========================================================= */

function FloatingBrandLogo({
  src,
  alt,
  index,
  accent,
}: {
  src: string;
  alt: string;
  index: number;
  accent: Brand["accent"];
}) {
  const reduceMotion = useReducedMotion();

  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const [rotation, setRotation] = useState({
    x: 0,
    y: 0,
    z: 0,
    moveY: 0,
  });

  /* -------------------------------------------------------
     Generate a new random 3D position periodically
  -------------------------------------------------------- */

  useEffect(() => {
    if (reduceMotion) {
      return;
    }

    let mounted = true;

    const animateRandomly = () => {
      if (!mounted) {
        return;
      }

      setRotation({
        x: Math.random() * 14 - 7,

        y: Math.random() * 28 - 14,

        z: Math.random() * 5 - 2.5,

        moveY: Math.random() * 12 - 6,
      });

      /*
       * Every brand gets a slightly different
       * random timing so they don't move together.
       */

      const nextDelay = 2200 + Math.random() * 2200 + index * 180;

      timeoutRef.current = setTimeout(animateRandomly, nextDelay);
    };

    animateRandomly();

    return () => {
      mounted = false;

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [index, reduceMotion]);

  const accentStyles = getAccentStyles(accent);

  return (
    <motion.div
      animate={
        reduceMotion
          ? undefined
          : {
              rotateX: rotation.x,

              rotateY: rotation.y,

              rotateZ: rotation.z,

              y: rotation.moveY,
            }
      }
      transition={{
        type: "spring",
        stiffness: 45,
        damping: 18,
        mass: 1.15,
      }}
      whileHover={{
        scale: 1.08,
        rotateY: 0,
        rotateX: 0,
      }}
      className="
        relative
        h-47.5
        w-47.5

        sm:h-55
        sm:w-55

        md:h-52.5
        md:w-52.5

        xl:h-60
        xl:w-60

        transform-3d
      "
    >
      {/* Rear neon duplicate */}

      <div
        className={`
          pointer-events-none
          absolute
          inset-4

          translate-y-3
          scale-95

          rounded-full

          opacity-30
          blur-2xl

          ${accentStyles.logoGlow}
        `}
      />

      {/* Glass stage */}

      <div
        className="
          absolute
          inset-0

          rounded-[34px]

          border
          border-white/10

          bg-linear-to-br
          from-white/8
          via-white/2.5
          to-transparent

          shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_25px_70px_rgba(0,0,0,0.25)]

          backdrop-blur-md

          transform-[translateZ(0px)]
        "
      />

      {/* Logo */}

      <div
        className="
          absolute
          inset-6

          transform-[translateZ(35px)]
        "
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes="240px"
          className="object-contain drop-shadow-[0_18px_28px_rgba(0,0,0,0.35)]"
        />
      </div>

      {/* Light shine */}

      <motion.div
        aria-hidden="true"
        animate={
          reduceMotion
            ? undefined
            : {
                x: ["-150%", "220%"],
              }
        }
        transition={{
          duration: 3.5,
          repeat: Infinity,
          repeatDelay: 2 + index,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          -bottom-10
          -top-10
          left-0

          w-14

          rotate-18

          bg-linear-to-r
          from-transparent
          via-white/20
          to-transparent

          blur-md
        "
      />
    </motion.div>
  );
}

/* =========================================================
   BRAND COLOR STYLES
========================================================= */

function getAccentStyles(accent: Brand["accent"]) {
  switch (accent) {
    case "violet":
      return {
        text: "text-accent-violet",

        glow: "bg-accent-violet/15",

        floor: "bg-accent-violet/15",

        logoGlow: "bg-accent-violet/25",

        button:
          "hover:border-accent-violet/40 hover:bg-accent-violet/8 hover:shadow-[0_12px_40px_rgba(134,92,255,0.12)]",
      };

    case "pink":
      return {
        text: "text-accent-pink",

        glow: "bg-accent-pink/15",

        floor: "bg-accent-pink/15",

        logoGlow: "bg-accent-pink/25",

        button:
          "hover:border-accent-pink/40 hover:bg-accent-pink/8 hover:shadow-[0_12px_40px_rgba(244,43,199,0.12)]",
      };

    default:
      return {
        text: "text-accent-cyan",

        glow: "bg-accent-cyan/15",

        floor: "bg-accent-cyan/15",

        logoGlow: "bg-accent-cyan/25",

        button:
          "hover:border-accent-cyan/40 hover:bg-accent-cyan/8 hover:shadow-[0_12px_40px_rgba(0,229,255,0.12)]",
      };
  }
}
