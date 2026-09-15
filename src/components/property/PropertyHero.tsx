"use client";

import { useRef } from "react";

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";

import {
  ArrowDown,
  ArrowRight,
  Building2,
  MapPin,
  Maximize2,
  Percent,
  Sparkles,
} from "lucide-react";

import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";

import { PropertyThreeShowcase } from "@/components/three/PropertyThreeShowcase";

import { getAccentColor } from "@/lib/accents";
import { useTheme } from "@/hooks/useTheme";

import { propertyContent } from "@/data/property";

export function PropertyHero() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { theme } = useTheme();
  const reduceMotion = useReducedMotion();

  const color = getAccentColor("property", theme);

  /* =====================================================
     SCROLL PARALLAX
  ====================================================== */

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  /*
   * Different layers move at different speeds.
   * This gives the hero actual depth while scrolling.
   */

  const visualY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, reduceMotion ? 0 : 150],
  );

  const visualScale = useTransform(
    scrollYProgress,
    [0, 1],
    [1, reduceMotion ? 1 : 0.88],
  );

  const visualRotate = useTransform(
    scrollYProgress,
    [0, 1],
    [0, reduceMotion ? 0 : 4],
  );

  const contentY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, reduceMotion ? 0 : -45],
  );

  const cyanGlowY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, reduceMotion ? 0 : 100],
  );

  const purpleGlowY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, reduceMotion ? 0 : -80],
  );

  const gridY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, reduceMotion ? 0 : 55],
  );

  /* =====================================================
     SCROLL TO PAGE SECTIONS
  ====================================================== */

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: reduceMotion ? "auto" : "smooth",

      block: "start",
    });
  };

  return (
    <section
      ref={sectionRef}
      id="overview"
      className="
        relative
        isolate
        min-h-svh
        overflow-hidden
        border-b
        border-border/40
       
      "
    >
      {/* =====================================================
          BACKGROUND GRID
      ====================================================== */}

      <motion.div
        style={{
          y: gridY,
        }}
        className="
          octo-grid-overlay
          pointer-events-none
          absolute
          inset-0
          -z-10
          opacity-40
        "
      />

      {/* =====================================================
          BACKGROUND GLOWS
      ====================================================== */}

      <motion.div
        style={{
          y: cyanGlowY,
        }}
        className="
          pointer-events-none
          absolute
          -left-56
          top-[20%]
          -z-10

          h-130
          w-130

          rounded-full
          bg-accent-cyan/10
          blur-[150px]
        "
      />

      <motion.div
        style={{
          y: purpleGlowY,
        }}
        className="
          pointer-events-none
          absolute
          -right-52
          top-[15%]
          -z-10

          h-135
          w-135

          rounded-full
          bg-accent-purple/10
          blur-[160px]
        "
      />

      {/* Large soft center bloom */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          -z-10

          h-155
          w-155

          -translate-x-1/2
          -translate-y-1/2

          rounded-full
          bg-accent-cyan/[0.035]
          blur-[170px]
        "
      />

      {/* =====================================================
          HERO
      ====================================================== */}

      <Container
        className="
          relative
          flex
          min-h-svh
          items-center
max-w-7xl
mx-auto
          pb-16
          pt-24

          md:pb-20
          md:pt-28
        "
      >
        <div
          className="
            grid
            w-full
            items-center
            gap-10

            lg:grid-cols-[0.9fr_1.1fr]
            lg:gap-8

            xl:grid-cols-[0.85fr_1.15fr]
          "
        >
          {/* =================================================
              LEFT — CONTENT
          ================================================== */}

          <motion.div
            style={{
              y: contentY,
            }}
            className="
              relative
              z-20
              order-2

              lg:order-1
            "
          >
            {/* ---------------------------------------------
                EYEBROW
            ---------------------------------------------- */}

            <Reveal>
              <div className="mb-5 flex flex-wrap items-center gap-3">
                <div
                  className="
                    octo-glass
                    inline-flex
                    items-center
                    gap-2

                    rounded-full
                    px-3.5
                    py-2
                  "
                >
                  <Sparkles
                    className="h-3.5 w-3.5"
                    style={{
                      color,
                    }}
                  />

                  <span
                    className="
                      text-[10px]
                      font-semibold
                      uppercase
                      tracking-[0.18em]
                    "
                    style={{
                      color,
                    }}
                  >
                    {propertyContent.eyebrow}
                  </span>
                </div>

                <div className="flex items-center gap-2 text-text-muted">
                  <MapPin className="h-3.5 w-3.5" />

                  <span className="text-xs">{propertyContent.location}</span>
                </div>
              </div>
            </Reveal>

            {/* ---------------------------------------------
                HEADING
            ---------------------------------------------- */}

            <Reveal delay={0.05}>
              <h1
                className="
                  max-w-4xl

                  text-[2.65rem]
                  font-semibold
                  leading-[0.96]
                  tracking-[-0.045em]
                  text-foreground

                  sm:text-[3.4rem]

                  lg:text-6xl
                "
              >
                High-occupancy
                <br />
                <span className="octo-gradient-text">property investment</span>
                <br />
                in Al Jaddaf.
              </h1>
            </Reveal>

            {/* ---------------------------------------------
                PRICE
            ---------------------------------------------- */}

            <Reveal delay={0.1}>
              <div className="mt-8">
                <p
                  className="
                    text-[10px]
                    font-semibold
                    uppercase
                    tracking-[0.2em]
                    text-text-muted
                  "
                >
                  Asking Price
                </p>

                <div className="mt-2 flex flex-wrap items-end gap-3">
                  <p
                    className="
                      text-[2.8rem]
                      font-bold
                      leading-none
                      tracking-[-0.045em]

                      sm:text-[3.4rem]
                    "
                    style={{
                      color,
                    }}
                  >
                    AED 11.3M
                  </p>

                  <span
                    className="
                      mb-1
                      rounded-full
                      border
                      border-success/20
                      bg-success/10

                      px-3
                      py-1

                      text-[10px]
                      font-semibold
                      text-success
                    "
                  >
                    95% Occupied
                  </span>
                </div>
              </div>
            </Reveal>

            {/* ---------------------------------------------
                DESCRIPTION
            ---------------------------------------------- */}

            <Reveal delay={0.15}>
              <p
                className="
                  mt-6
                  max-w-xl

                  text-body
                  text-text-secondary
                "
              >
                {propertyContent.description}
              </p>
            </Reveal>

            {/* ---------------------------------------------
                MOBILE / DESKTOP STATS
            ---------------------------------------------- */}

            <Reveal delay={0.2}>
              <div
                className="
                  octo-glass

                  mt-7
                  grid
                  grid-cols-3

                  overflow-hidden
                  rounded-[22px]

                  lg:max-w-xl
                "
              >
                <HeroStat
                  icon={Percent}
                  value="95%"
                  label="Occupied"
                  color={color}
                />

                <HeroStat
                  icon={Building2}
                  value="119"
                  label="Total Units"
                  color={color}
                  border
                />

                <HeroStat
                  icon={Maximize2}
                  value="120K+"
                  label="Sq.ft Saleable"
                  color={color}
                  border
                />
              </div>
            </Reveal>

            {/* ---------------------------------------------
                BUTTONS
            ---------------------------------------------- */}

            <Reveal delay={0.25}>
              <div
                className="
                  mt-8
                  flex
                  flex-col
                  gap-3

                  sm:flex-row
                "
              >
                <Button
                  variant="primary"
                  size="lg"
                  onClick={() => scrollToSection("snapshot")}
                >
                  Explore More
                  <ArrowDown className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-1" />
                </Button>

                <Button
                  variant="secondary"
                  size="lg"
                  onClick={() => scrollToSection("interest")}
                >
                  Express Interest
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </div>
            </Reveal>
          </motion.div>

          {/* =================================================
              RIGHT — 3D PROPERTY EXPERIENCE
          ================================================== */}

          <motion.div
            style={{
              y: visualY,
              scale: visualScale,
              rotateZ: visualRotate,
            }}
            className="
              relative
              z-10
              order-1

              h-97.5

              sm:h-117.5

              lg:order-2
              lg:h-162.5

              xl:h-180
            "
          >
            {/* ---------------------------------------------
                LARGE STAGE GLOW
            ---------------------------------------------- */}

            <div
              className="
                pointer-events-none
                absolute
                left-1/2
                top-1/2

                h-[70%]
                w-[75%]

                -translate-x-1/2
                -translate-y-1/2

                rounded-full

                bg-accent-cyan/10
                blur-[110px]
              "
            />
            <motion.div
              aria-hidden="true"
              className="
          pointer-events-none
          absolute
          left-1/2
          top-[18%]
          -z-10

          hidden
          -translate-x-1/2

          whitespace-nowrap

          text-[10rem]
          font-black
          leading-none
          tracking-[-0.08em]

          text-foreground/[0.025]

          lg:block
          xl:text-[13rem]
        "
            >
              AFAQ
            </motion.div>

            {/* ---------------------------------------------
                3D STAGE
            ---------------------------------------------- */}

            <div
              className="
                absolute
                inset-4

                overflow-hidden
                rounded-4xl

                border
                border-white/10

                bg-linear-to-br
                from-white/5.5
                via-transparent
                to-accent-cyan/2.5

                shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_40px_120px_rgba(0,0,0,0.22)]

                backdrop-blur-sm

                md:inset-6
                md:rounded-[40px]
              "
            >
              {/* Grid inside stage */}

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0

                  opacity-[0.12]

                  bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)]
                "
              />

              <PropertyThreeShowcase />
            </div>

            {/* ---------------------------------------------
                FLOATING METRIC — OCCUPANCY
            ---------------------------------------------- */}

            <motion.div
              animate={
                reduceMotion
                  ? undefined
                  : {
                      y: [0, -8, 0],
                    }
              }
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                octo-glass
                absolute
                right-0
                top-[12%]
                z-20

                rounded-2xl
                px-4
                py-3

                sm:right-1

                lg:right-2.5
              "
            >
              <div className="flex items-center gap-3">
                <div
                  className="
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center

                    rounded-xl
                    bg-success/10
                    text-success
                  "
                >
                  <Percent className="h-4 w-4" />
                </div>

                <div>
                  <p className="text-[9px] uppercase tracking-[0.16em] text-text-muted">
                    Occupancy
                  </p>

                  <p className="mt-0.5 text-sm font-bold text-foreground">
                    95%
                  </p>
                </div>
              </div>
            </motion.div>

            {/* ---------------------------------------------
                FLOATING METRIC — UNITS
            ---------------------------------------------- */}

            <motion.div
              animate={
                reduceMotion
                  ? undefined
                  : {
                      y: [0, 7, 0],

                      rotate: [-2, 1, -2],
                    }
              }
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                octo-glass
                absolute
                bottom-[20%]
                left-0
                z-20

                rounded-2xl
                px-4
                py-3

                lg:-left-4.5
              "
            >
              <div className="flex items-center gap-3">
                <div
                  className="
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center

                    rounded-xl
                    bg-accent-purple/10
                    text-accent-purple
                  "
                >
                  <Building2 className="h-4 w-4" />
                </div>

                <div>
                  <p className="text-[9px] uppercase tracking-[0.16em] text-text-muted">
                    Property Scale
                  </p>

                  <p className="mt-0.5 text-sm font-bold text-foreground">
                    119 Units
                  </p>
                </div>
              </div>
            </motion.div>

            {/* ---------------------------------------------
                FLOATING AREA
                Hidden on smallest phones to avoid clutter
            ---------------------------------------------- */}

            <motion.div
              animate={
                reduceMotion
                  ? undefined
                  : {
                      y: [0, -5, 0],

                      x: [0, 5, 0],
                    }
              }
              transition={{
                duration: 5.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                octo-glass
                absolute
                bottom-[7%]
                right-[5%]
                z-20

                hidden
                rounded-full

                px-4
                py-2.5

                text-xs
                text-text-secondary

                sm:flex
                sm:items-center
                sm:gap-2
              "
            >
              <Maximize2
                className="h-3.5 w-3.5"
                style={{
                  color,
                }}
              />
              120,000+ Sq.ft Saleable
            </motion.div>
          </motion.div>
        </div>

        {/* =================================================
            SCROLL CUE
        ================================================== */}

        <motion.button
          type="button"
          onClick={() => scrollToSection("snapshot")}
          animate={
            reduceMotion
              ? undefined
              : {
                  y: [0, 6, 0],
                }
          }
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            bottom-5
            left-1/2

            hidden
            -translate-x-1/2

            items-center
            gap-2

            text-[9px]
            font-semibold
            uppercase
            tracking-[0.2em]
            text-text-muted

            transition-colors
            hover:text-foreground

            md:flex
          "
        >
          Explore More
          <ArrowDown className="h-3.5 w-3.5" />
        </motion.button>
      </Container>

      {/* Bottom transition */}

      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          bottom-0

          h-36

          bg-linear-to-t
          from-background
          to-transparent
        "
      />
    </section>
  );
}

/* =========================================================
   HERO STAT
========================================================= */

function HeroStat({
  icon: Icon,
  value,
  label,
  color,
  border = false,
}: {
  icon: typeof Percent;
  value: string;
  label: string;
  color: string;
  border?: boolean;
}) {
  return (
    <div
      className={`
        flex
        min-h-23.5
        flex-col
        justify-center

        px-3
        py-4

        sm:px-5

        ${border ? "border-l border-border" : ""}
      `}
    >
      <div className="flex items-center gap-1.5">
        <Icon
          className="hidden h-3.5 w-3.5 sm:block"
          style={{
            color,
          }}
        />

        <p className="text-xl font-bold leading-none tracking-tight text-foreground sm:text-2xl">
          {value}
        </p>
      </div>

      <p className="mt-2 text-[9px] leading-4 text-text-muted sm:text-[11px]">
        {label}
      </p>
    </div>
  );
}
