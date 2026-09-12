import Image from "next/image";
import Link from "next/link";

import { ArrowRight, ArrowUpRight, MapPin, Sparkles } from "lucide-react";

import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/motion/Reveal";

export function PropertyMomentSection() {
  return (
    <section className="relative overflow-hidden py-14 md:py-24">
      {/* =====================================================
          BACKGROUND ATMOSPHERE
      ====================================================== */}

      <div className="pointer-events-none absolute -left-52 top-1/4 h-105 w-105 rounded-full bg-accent-cyan/7 blur-[140px]" />

      <div className="pointer-events-none absolute -right-52 bottom-0 h-105 w-105 rounded-full bg-accent-purple/7 blur-[140px]" />

      <Container>
        <div className="octo-border relative overflow-hidden rounded-[30px] md:rounded-[34px]">
          <div className="octo-card overflow-hidden rounded-[30px] md:rounded-[34px]">
            <div className="grid lg:grid-cols-[1.08fr_0.92fr]">
              {/* =================================================
                  PROPERTY IMAGE
              ================================================== */}

              <div className="group relative h-75 overflow-hidden sm:h-90 lg:h-135">
                <Image
                  src="/investment/property.png"
                  alt="Exclusive investment property in Dubai"
                  fill
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  className="object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.04]"
                />

                {/* Image overlays */}
                <div className="absolute inset-0 bg-linear-to-t from-void-navy/95 via-void-navy/20 to-black/10" />

                <div className="absolute inset-0 bg-linear-to-r from-transparent via-transparent to-background/10 lg:to-background/45" />

                {/* Subtle neon tint */}
                <div className="absolute inset-0 bg-linear-to-br from-accent-purple/20 via-transparent to-accent-cyan/10" />

                {/* ---------------------------------------------
                    TOP BADGE
                ---------------------------------------------- */}

                <div className="absolute left-5 top-5 md:left-7 md:top-7">
                  <div className="octo-glass flex items-center gap-2 rounded-full px-3.5 py-2">
                    <Sparkles className="h-3.5 w-3.5 text-accent-cyan" />

                    <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-white md:text-[11px]">
                      Exclusive Investment Property
                    </span>
                  </div>
                </div>

                {/* ---------------------------------------------
                    LOCATION
                ---------------------------------------------- */}

                <div className="absolute bottom-5 left-5 md:bottom-7 md:left-7">
                  <div className="flex items-center gap-2 text-white/80">
                    <MapPin className="h-4 w-4 text-accent-cyan" />

                    <span className="text-sm">Al Jaddaf, Dubai</span>
                  </div>
                </div>

                {/* Bottom glow */}
                <div className="pointer-events-none absolute -bottom-28 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-accent-cyan/15 blur-[90px]" />
              </div>

              {/* =================================================
                  PROPERTY INFORMATION
              ================================================== */}

              <div className="relative flex flex-col justify-center p-6 sm:p-8 lg:p-10 xl:p-12">
                {/* Decorative glow */}
                <div className="pointer-events-none absolute -right-32 -top-32 h-72 w-72 rounded-full bg-accent-purple/10 blur-[100px]" />

                <div className="relative z-10">
                  {/* ---------------------------------------------
                      PRICE
                  ---------------------------------------------- */}

                  <Reveal>
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-text-muted md:text-xs">
                        Asking Price
                      </p>

                      <p className="octo-gradient-text mt-2 text-[2.7rem] font-bold leading-none tracking-[-0.045em] sm:text-[3.3rem] lg:text-[3.8rem]">
                        AED 11.3M
                      </p>
                    </div>
                  </Reveal>

                  {/* ---------------------------------------------
                      SHORT DESCRIPTION
                  ---------------------------------------------- */}

                  <Reveal delay={0.06}>
                    <p className="mt-5 max-w-md text-sm leading-6 text-text-secondary md:text-body">
                      A high-occupancy investment property in Dubai with strong
                      income potential and a diversified residential and retail
                      mix.
                    </p>
                  </Reveal>

                  {/* ---------------------------------------------
                      KEY STATS
                      Compact row on mobile
                  ---------------------------------------------- */}

                  <Reveal delay={0.1}>
                    <div className="octo-glass mt-7 grid grid-cols-3 overflow-hidden rounded-[22px]">
                      <PropertyStat value="95%" label="Occupied" highlight />

                      <PropertyStat value="119" label="Units" bordered />

                      <PropertyStat
                        value="120K+"
                        label="Sq.ft Saleable"
                        bordered
                      />
                    </div>
                  </Reveal>

                  {/* ---------------------------------------------
                      OCCUPANCY INDICATOR
                  ---------------------------------------------- */}

                  <Reveal delay={0.14}>
                    <div className="mt-5">
                      <div className="mb-2 flex items-center justify-between gap-4">
                        <span className="text-[10px] uppercase tracking-[0.16em] text-text-muted">
                          Occupancy
                        </span>

                        <span className="text-[11px] font-semibold text-success">
                          Strong Performance
                        </span>
                      </div>

                      <div className="h-1.5 overflow-hidden rounded-full bg-border">
                        <div className="h-full w-[95%] rounded-full bg-gradient-to-r from-accent-cyan via-accent-violet to-accent-pink shadow-[0_0_18px_rgba(0,229,255,0.3)]" />
                      </div>
                    </div>
                  </Reveal>

                  {/* ---------------------------------------------
                      CTA BUTTONS
                  ---------------------------------------------- */}

                  <Reveal delay={0.18}>
                    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                      <Link
                        href="/property"
                        className="
                          octo-button
                          octo-button-primary
                          group
                          inline-flex
                          h-13
                          w-full
                          items-center
                          justify-center
                          gap-2
                          px-6
                          text-button
                          font-semibold

                          sm:w-auto
                        "
                      >
                        Discover More
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </Link>

                      <Link
                        href="#connect"
                        className="
                          octo-button
                          octo-button-secondary
                          group
                          inline-flex
                          h-13
                          w-full
                          items-center
                          justify-center
                          gap-2
                          px-6
                          text-button
                          font-semibold

                          sm:w-auto
                        "
                      >
                        Contact Us
                        <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                      </Link>
                    </div>
                  </Reveal>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* =========================================================
   PROPERTY STAT
========================================================= */

function PropertyStat({
  value,
  label,
  bordered = false,
  highlight = false,
}: {
  value: string;
  label: string;
  bordered?: boolean;
  highlight?: boolean;
}) {
  return (
    <div
      className={`
        flex
        min-h-22.5
        flex-col
        justify-center
        px-3
        py-4

        sm:min-h-25
        sm:px-5

        ${bordered ? "border-l border-border" : ""}
      `}
    >
      <p
        className={`
          text-xl
          font-bold
          leading-none
          tracking-[-0.02em]

          sm:text-2xl

          ${highlight ? "text-accent-cyan" : "text-foreground"}
        `}
      >
        {value}
      </p>

      <p className="mt-2 text-[10px] leading-4 text-text-muted sm:text-xs">
        {label}
      </p>
    </div>
  );
}
