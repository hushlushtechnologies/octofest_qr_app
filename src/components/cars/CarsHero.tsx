"use client";

import Image from "next/image";

import { useRef } from "react";

import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";

import {
  ArrowDown,
  ArrowRight,
  CarFront,
  Gauge,
  MapPin,
  Sparkles,
} from "lucide-react";

import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";
import { ScanContextNote } from "@/components/scan/ScanContextNote";

export function CarsHero() {
  const heroRef = useRef<HTMLElement>(null);

  const reduceMotion = useReducedMotion();

  /* =====================================================
     SCROLL PARALLAX
  ====================================================== */

  const { scrollYProgress } = useScroll({
    target: heroRef,

    offset: ["start start", "end start"],
  });

  const carY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, reduceMotion ? 0 : 150],
  );

  const carScale = useTransform(
    scrollYProgress,
    [0, 1],
    [1, reduceMotion ? 1 : 0.88],
  );

  const carRotate = useTransform(
    scrollYProgress,
    [0, 1],
    [0, reduceMotion ? 0 : -2.5],
  );

  const contentY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, reduceMotion ? 0 : -55],
  );

  const titleOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0.12]);

  /* =====================================================
     POINTER PARALLAX
  ====================================================== */

  const pointerX = useMotionValue(0);

  const pointerY = useMotionValue(0);

  const smoothX = useSpring(pointerX, {
    stiffness: 60,
    damping: 22,
  });

  const smoothY = useSpring(pointerY, {
    stiffness: 60,
    damping: 22,
  });

  const imageX = useTransform(smoothX, [-1, 1], [-16, 16]);

  const imageRotateY = useTransform(smoothX, [-1, 1], [-2.5, 2.5]);

  const imageRotateX = useTransform(smoothY, [-1, 1], [1.5, -1.5]);

  /* =====================================================
     POINTER HANDLER
  ====================================================== */

  const handlePointerMove = (event: React.PointerEvent<HTMLElement>) => {
    if (reduceMotion) {
      return;
    }

    const bounds = event.currentTarget.getBoundingClientRect();

    const x = (event.clientX - bounds.left) / bounds.width;

    const y = (event.clientY - bounds.top) / bounds.height;

    pointerX.set((x - 0.5) * 2);

    pointerY.set((y - 0.5) * 2);
  };

  const resetPointer = () => {
    pointerX.set(0);
    pointerY.set(0);
  };

  /* =====================================================
     SECTION SCROLL
  ====================================================== */

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: reduceMotion ? "auto" : "smooth",

      block: "start",
    });
  };

  return (
    <section
      ref={heroRef}
      id="overview"
      onPointerMove={handlePointerMove}
      onPointerLeave={resetPointer}
      className="
        relative
        isolate
        min-h-[100svh]
        overflow-hidden
        border-b
        border-border/40
      "
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="absolute inset-0 -z-20 bg-background" />

      {/* Grid */}

      <div
        className="
          octo-grid-overlay
          pointer-events-none
          absolute
          inset-0
          -z-10
          opacity-30
        "
      />

      {/* Violet glow */}

      <div
        className="
          pointer-events-none
          absolute
          -left-56
          top-[25%]
          -z-10

          h-[520px]
          w-[520px]

          rounded-full
          bg-accent-violet/12
          blur-[150px]
        "
      />

      {/* Cyan glow */}

      <div
        className="
          pointer-events-none
          absolute
          -right-52
          top-[16%]
          -z-10

          h-[520px]
          w-[520px]

          rounded-full
          bg-accent-cyan/10
          blur-[150px]
        "
      />

      {/* Pink floor glow */}

      <div
        className="
          pointer-events-none
          absolute
          bottom-[-250px]
          left-1/2
          -z-10

          h-[420px]
          w-[75%]

          -translate-x-1/2

          rounded-full
          bg-accent-pink/10
          blur-[150px]
        "
      />

      {/* =====================================================
          GIANT BACKGROUND WORD
      ====================================================== */}

      <motion.div
        aria-hidden="true"
        style={{
          opacity: titleOpacity,
        }}
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
        MEGATRON
      </motion.div>

      {/* =====================================================
          CONTENT
      ====================================================== */}

      <Container
        className="
          relative
          flex
          min-h-[100svh]
          flex-col

          pb-10
          pt-24

          md:pb-14
          md:pt-28
        "
      >
        {/* Scan note */}

        <div className="relative z-30">
          <ScanContextNote />
        </div>

        <div
          className="
            grid
            flex-1
            items-center
            gap-4

            lg:grid-cols-[0.82fr_1.18fr]
            lg:gap-0
          "
        >
          {/* =================================================
              LEFT CONTENT
          ================================================== */}

          <motion.div
            style={{
              y: contentY,
            }}
            className="
              relative
              z-30
              order-2

              pb-8

              lg:order-1
              lg:pb-0
            "
          >
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
                  <Sparkles className="h-3.5 w-3.5 text-accent-cyan" />

                  <span
                    className="
                      text-[10px]
                      font-semibold
                      uppercase
                      tracking-[0.18em]
                      text-accent-cyan
                    "
                  >
                    Optimus Megatron Cars
                  </span>
                </div>

                <div className="flex items-center gap-2 text-text-muted">
                  <MapPin className="h-3.5 w-3.5" />

                  <span className="text-xs">Dubai, UAE</span>
                </div>
              </div>
            </Reveal>

            {/* Heading */}

            <Reveal delay={0.05}>
              <h1
                className="
                  max-w-2xl

                  text-[2.9rem]
                  font-semibold
                  leading-[0.94]
                  tracking-[-0.055em]
                  text-foreground

                  sm:text-[3.8rem]

                  lg:text-[4.6rem]

                  xl:text-[5.3rem]
                "
              >
                Performance,
                <br />
                <span className="octo-gradient-text">curated.</span>
              </h1>
            </Reveal>

            {/* Description */}

            <Reveal delay={0.1}>
              <p
                className="
                  mt-6
                  max-w-lg

                  text-sm
                  leading-6
                  text-text-secondary

                  md:text-base
                  md:leading-7
                "
              >
                Discover a curated selection of premium automobiles designed for
                drivers who value performance, presence and exceptional
                experiences.
              </p>
            </Reveal>

            {/* Micro categories */}

            <Reveal delay={0.15}>
              <div className="mt-7 flex flex-wrap gap-2">
                <CarTag>Premium</CarTag>

                <CarTag>Performance</CarTag>

                <CarTag>Luxury</CarTag>
              </div>
            </Reveal>

            {/* CTA */}

            <Reveal delay={0.2}>
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
                  onClick={() => scrollToSection("collection")}
                >
                  Explore Cars
                  <ArrowDown className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-1" />
                </Button>

                <Button
                  variant="secondary"
                  size="lg"
                  onClick={() => scrollToSection("interest")}
                >
                  Enquire Now
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </div>
            </Reveal>
          </motion.div>

          {/* =================================================
              RIGHT — CAR VISUAL
          ================================================== */}

          <motion.div
            style={{
              y: carY,
              scale: carScale,
              rotateZ: carRotate,
            }}
            className="
              relative
              z-20
              order-1

              h-[390px]

              sm:h-[470px]

              lg:order-2
              lg:h-[650px]

              xl:h-[720px]
            "
          >
            {/* Large radial glow */}

            <div
              className="
                pointer-events-none
                absolute
                left-1/2
                top-[48%]

                h-[58%]
                w-[78%]

                -translate-x-1/2
                -translate-y-1/2

                rounded-full

                bg-accent-cyan/10
                blur-[100px]
              "
            />

            {/* =================================================
                SHOWCASE STAGE
            ================================================== */}

            <div
              className="
                absolute
                inset-1

                overflow-hidden
                rounded-[32px]

                md:inset-5
                md:rounded-[42px]
              "
            >
              {/* Glass panel */}

              <div
                className="
                  absolute
                  inset-0

                  rounded-[inherit]

                  border
                  border-white/[0.07]

                  bg-linear-to-br
                  from-white/[0.045]
                  via-transparent
                  to-accent-cyan/[0.025]

                  backdrop-blur-[2px]
                "
              />

              {/* Perspective floor */}

              <div
                className="
                  pointer-events-none
                  absolute
                  bottom-0
                  left-1/2

                  h-[42%]
                  w-[125%]

                  -translate-x-1/2

                  bg-[linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)]
                  bg-[size:42px_42px]

                  [mask-image:linear-gradient(to_top,black,transparent)]
                  [transform:perspective(500px)_rotateX(68deg)]
                  [transform-origin:bottom]
                "
              />

              {/* Car */}

              <motion.div
                style={{
                  x: imageX,

                  rotateY: imageRotateY,

                  rotateX: imageRotateX,
                }}
                className="
                  absolute
                  inset-[5%]

                  [perspective:1200px]
                  [transform-style:preserve-3d]
                "
              >
                <Image
                  src="/investment/cars.png"
                  alt="Optimus Megatron premium car"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="
                    object-contain

                    drop-shadow-[0_35px_40px_rgba(0,0,0,0.45)]
                  "
                />
              </motion.div>

              {/* =================================================
                  MOVING LIGHT SCAN
              ================================================== */}

              {!reduceMotion && (
                <motion.div
                  aria-hidden="true"
                  animate={{
                    x: ["-200%", "500%"],
                  }}
                  transition={{
                    duration: 4.5,
                    repeat: Infinity,
                    repeatDelay: 2.5,
                    ease: "easeInOut",
                  }}
                  className="
                    pointer-events-none
                    absolute
                    -bottom-[20%]
                    -top-[20%]
                    left-0

                    w-[8%]

                    rotate-[12deg]

                    bg-linear-to-r
                    from-transparent
                    via-white/25
                    to-transparent

                    opacity-60
                    blur-xl
                  "
                />
              )}

              {/* Floor glow */}

              <div
                className="
                  pointer-events-none
                  absolute
                  bottom-[10%]
                  left-1/2

                  h-14
                  w-[65%]

                  -translate-x-1/2

                  rounded-[50%]

                  bg-accent-cyan/20
                  blur-[35px]
                "
              />
            </div>

            {/* =================================================
                FLOATING CARD — CURATED
            ================================================== */}

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
                top-[16%]
                z-30

                rounded-2xl
                px-4
                py-3

                sm:right-2

                lg:right-[-5px]
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

                    bg-accent-cyan/10
                    text-accent-cyan
                  "
                >
                  <CarFront className="h-4 w-4" />
                </div>

                <div>
                  <p
                    className="
                      text-[9px]
                      uppercase
                      tracking-[0.16em]
                      text-text-muted
                    "
                  >
                    Collection
                  </p>

                  <p className="mt-0.5 text-sm font-semibold text-foreground">
                    Premium Selection
                  </p>
                </div>
              </div>
            </motion.div>

            {/* =================================================
                FLOATING CARD — PERFORMANCE
            ================================================== */}

            <motion.div
              animate={
                reduceMotion
                  ? undefined
                  : {
                      y: [0, 7, 0],

                      rotate: [-1.5, 1, -1.5],
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
                bottom-[18%]
                left-0
                z-30

                rounded-2xl
                px-4
                py-3

                lg:left-[-8px]
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

                    bg-accent-violet/10
                    text-accent-violet
                  "
                >
                  <Gauge className="h-4 w-4" />
                </div>

                <div>
                  <p
                    className="
                      text-[9px]
                      uppercase
                      tracking-[0.16em]
                      text-text-muted
                    "
                  >
                    Experience
                  </p>

                  <p className="mt-0.5 text-sm font-semibold text-foreground">
                    Performance Driven
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* =====================================================
            BOTTOM STRIP
        ====================================================== */}

        <Reveal delay={0.3}>
          <div
            className="
              relative
              z-30

              flex
              items-center
              justify-between

              border-t
              border-border/50

              pt-5
            "
          >
            <div className="flex items-center gap-2">
              <span
                className="
                  relative
                  flex
                  h-2
                  w-2
                "
              >
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-cyan opacity-40" />

                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-cyan" />
              </span>

              <span
                className="
                  text-[10px]
                  uppercase
                  tracking-[0.18em]
                  text-text-muted
                "
              >
                Optimus Megatron Cars
              </span>
            </div>

            <button
              type="button"
              onClick={() => scrollToSection("collection")}
              className="
                flex
                items-center
                gap-2

                text-[10px]
                font-semibold
                uppercase
                tracking-[0.16em]
                text-text-muted

                transition-colors

                hover:text-foreground
              "
            >
              Discover
              <ArrowDown className="h-3.5 w-3.5" />
            </button>
          </div>
        </Reveal>
      </Container>

      {/* Bottom fade */}

      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          bottom-0

          h-28

          bg-linear-to-t
          from-background
          to-transparent
        "
      />
    </section>
  );
}

/* =========================================================
   CAR TAG
========================================================= */

function CarTag({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="
        rounded-full

        border
        border-border

        bg-surface/40

        px-3
        py-1.5

        text-[10px]
        font-medium
        uppercase
        tracking-[0.12em]
        text-text-secondary

        backdrop-blur-lg
      "
    >
      {children}
    </span>
  );
}
