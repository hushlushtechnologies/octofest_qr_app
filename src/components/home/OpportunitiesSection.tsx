"use client";

import Image from "next/image";
import Link from "next/link";

import { ArrowUpRight, MoveHorizontal } from "lucide-react";

import { useEffect, useRef, useState } from "react";

import { useReducedMotion } from "motion/react";

import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

import { Reveal } from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";

import { opportunities } from "@/data/opportunities";

const opportunityImages = [
  "/investment/property.png",
  "/investment/cars.png",
  "/investment/events.png",
];

const AUTO_SCROLL_DELAY = 4000;

export function OpportunitiesSection() {
  const sliderRef = useRef<HTMLDivElement | null>(null);

  const autoScrollTimerRef = useRef<ReturnType<typeof setInterval> | null>(
    null,
  );

  const resumeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const [activeIndex, setActiveIndex] = useState(0);

  const [isPaused, setIsPaused] = useState(false);

  const reduceMotion = useReducedMotion();

  /* =====================================================
     SCROLL TO CARD
  ====================================================== */

  const scrollToCard = (index: number) => {
    const slider = sliderRef.current;

    if (!slider) return;

    const cards = Array.from(slider.children) as HTMLElement[];

    const card = cards[index];

    if (!card) return;

    /*
     * Center the selected card inside the mobile viewport.
     */
    const target =
      card.offsetLeft - (slider.clientWidth - card.clientWidth) / 2;

    slider.scrollTo({
      left: target,
      behavior: "smooth",
    });

    setActiveIndex(index);
  };

  /* =====================================================
     AUTO SCROLL
  ====================================================== */

  useEffect(() => {
    if (reduceMotion) {
      return;
    }

    const mobileQuery = window.matchMedia("(max-width: 767px)");

    if (!mobileQuery.matches || isPaused) {
      return;
    }

    autoScrollTimerRef.current = setInterval(() => {
      setActiveIndex((currentIndex) => {
        const nextIndex = (currentIndex + 1) % opportunities.length;

        scrollToCard(nextIndex);

        return nextIndex;
      });
    }, AUTO_SCROLL_DELAY);

    return () => {
      if (autoScrollTimerRef.current) {
        clearInterval(autoScrollTimerRef.current);
      }
    };
  }, [isPaused, reduceMotion]);

  /* =====================================================
     MANUAL SWIPE

     Pause autoplay when visitor interacts.
     Resume after 6 seconds.
  ====================================================== */

  const pauseAutoScroll = () => {
    setIsPaused(true);

    if (resumeTimerRef.current) {
      clearTimeout(resumeTimerRef.current);
    }

    resumeTimerRef.current = setTimeout(() => {
      setIsPaused(false);
    }, 6000);
  };

  /* =====================================================
     UPDATE ACTIVE DOT AFTER MANUAL SCROLL
  ====================================================== */

  const handleScroll = () => {
    const slider = sliderRef.current;

    if (!slider) return;

    const cards = Array.from(slider.children) as HTMLElement[];

    const center = slider.scrollLeft + slider.clientWidth / 2;

    let closestIndex = 0;
    let closestDistance = Infinity;

    cards.forEach((card, index) => {
      const cardCenter = card.offsetLeft + card.clientWidth / 2;

      const distance = Math.abs(center - cardCenter);

      if (distance < closestDistance) {
        closestDistance = distance;

        closestIndex = index;
      }
    });

    setActiveIndex(closestIndex);
  };

  return (
    <section
      id="opportunities"
      className="relative scroll-mt-20  py-16 md:py-24"
    >
      {/* =====================================================
          ATMOSPHERE
      ====================================================== */}

      <div className="pointer-events-none absolute -left-52 top-1/4 h-125 w-125 rounded-full bg-accent-purple/20 blur-[70px]" />

      <div className="pointer-events-none absolute -right-52 bottom-0 h-125 w-125 rounded-full bg-accent-cyan/20 blur-[70px]" />

      <Container className="relative z-20">
        {/* =====================================================
            HEADING
        ====================================================== */}

        <Reveal>
          <SectionHeading
            eyebrow="Three opportunities"
            title="Where do you want to start?"
            description="Three experiences. One Octofest ecosystem. Choose what interests you and explore."
          />
        </Reveal>

        {/* =====================================================
            MOBILE SWIPE HINT
        ====================================================== */}

        <Reveal delay={0.1}>
          <div className="mt-7 flex items-center justify-between md:hidden">
            <p className="text-xs text-text-muted">Choose your experience</p>

            <div className="flex items-center gap-2 text-accent-cyan">
              <MoveHorizontal className="h-4 w-4" />

              <span className="text-xs font-semibold uppercase tracking-[0.16em]">
                Swipe
              </span>
            </div>
          </div>
        </Reveal>

        {/* =====================================================
            CARDS
        ====================================================== */}

        <Stagger
          ref={sliderRef}
          onScroll={handleScroll}
          onPointerDown={pauseAutoScroll}
          onTouchStart={pauseAutoScroll}
          className="
            no-scrollbar
            -mx-4
            mt-5
            flex
            snap-x
            snap-mandatory
            gap-4
            overflow-x-auto
            px-4
            pb-4
            scroll-smooth

            md:mx-0
            md:mt-10
            md:grid
            md:grid-cols-3
            md:gap-5
            md:overflow-visible
            md:px-0
            md:pb-0
          "
        >
          {opportunities.map(
            ({ label, title, description, href, icon: Icon }, index) => (
              <StaggerItem
                key={href}
                className="
                  w-[84vw]
                  shrink-0
                  snap-center

                  sm:w-[70vw]

                  md:w-auto
                  md:shrink
                "
              >
                <Link href={href} className="group block h-full">
                  <article
                    className="
                      octo-border
                      relative
                      h-117.5
                      overflow-hidden
                      rounded-[30px]
                      border
                      border-white/10
                      bg-surface

                      shadow-[0_25px_80px_rgba(0,0,0,0.24)]

                      transition-all
                      duration-500

                      hover:-translate-y-1
                      hover:border-accent-cyan/30

                      md:h-125
                    "
                  >
                    {/* IMAGE */}

                    <Image
                      src={opportunityImages[index]}
                      alt={title}
                      fill
                      sizes="(max-width: 768px) 84vw, 33vw"
                      className="octo-image object-cover transition-transform duration-700 ease-out group-hover:scale-[1.07]"
                    />

                    {/* Dark overlay */}

                    <div className="absolute inset-0 bg-linear-to-t from-void-navy via-void-navy/45 to-transparent" />

                    <div className="absolute inset-0 bg-linear-to-b from-void-navy/25 via-transparent to-transparent" />

                    {/* Neon hover */}

                    <div className="absolute inset-0 bg-linear-to-br from-accent-purple/0 via-transparent to-accent-cyan/0 transition-colors duration-500 group-hover:from-accent-purple/10 group-hover:to-accent-cyan/10" />

                    {/* =================================================
                        TOP
                    ================================================= */}

                    <div className="absolute inset-x-0 top-0 flex items-start justify-between p-5">
                      <div className="octo-glass flex h-12 w-12 items-center justify-center rounded-2xl transition-all duration-500 group-hover:-translate-y-1 group-hover:scale-105">
                        <Icon className="h-5 w-5 text-white" />
                      </div>

                      <div className="flex h-11 min-w-11 items-center justify-center rounded-full border border-white/10 bg-black/20 px-3 backdrop-blur-xl">
                        <span className="text-[11px] font-semibold tracking-[0.18em] text-white/70">
                          0{index + 1}
                        </span>
                      </div>
                    </div>

                    {/* =================================================
                        CONTENT
                    ================================================= */}

                    <div className="absolute inset-x-0 bottom-0 p-6 md:p-7">
                      <div className="mb-3 flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-accent-cyan shadow-[0_0_12px_var(--accent-cyan)]" />

                        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent-cyan">
                          {label}
                        </p>
                      </div>

                      <h3 className="max-w-[90%] text-[1.65rem] font-semibold leading-[1.08] tracking-[-0.02em] text-white md:text-[1.8rem]">
                        {title}
                      </h3>

                      <p className="mt-3 line-clamp-2 max-w-[95%] text-sm leading-6 text-white/65">
                        {description}
                      </p>

                      <div className="my-5 h-px w-full bg-gradient-to-r from-white/15 via-white/5 to-transparent" />

                      <div className="flex items-center justify-between">
                        <span className="text-sm font-semibold text-white">
                          Explore opportunity
                        </span>

                        <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white backdrop-blur-lg transition-all duration-300 group-hover:rotate-45 group-hover:border-accent-cyan/50 group-hover:bg-accent-cyan/15 group-hover:text-accent-cyan">
                          <ArrowUpRight className="h-4 w-4" />
                        </div>
                      </div>
                    </div>

                    {/* Glow */}

                    <div className="pointer-events-none absolute -bottom-24 left-1/2 h-52 w-52 -translate-x-1/2 rounded-full bg-accent-violet/10 blur-[80px] transition-all duration-500 group-hover:h-64 group-hover:w-64 group-hover:bg-accent-cyan/15" />
                  </article>
                </Link>
              </StaggerItem>
            ),
          )}
        </Stagger>

        {/* =====================================================
            MOBILE LIVE PAGINATION
        ====================================================== */}

        <div className="mt-3 flex items-center justify-center gap-2 md:hidden">
          {opportunities.map((_, index) => (
            <button
              key={index}
              type="button"
              aria-label={`Show opportunity ${index + 1}`}
              onClick={() => {
                pauseAutoScroll();

                scrollToCard(index);
              }}
              className={`
                  h-1.5
                  rounded-full
                  transition-all
                  duration-500

                  ${
                    activeIndex === index
                      ? "w-7 bg-accent-cyan shadow-[0_0_10px_var(--accent-cyan)]"
                      : "w-1.5 bg-border-strong"
                  }
                `}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
