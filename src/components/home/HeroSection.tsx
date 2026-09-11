import Link from "next/link";

import { ArrowRight, ArrowUpRight } from "lucide-react";

import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/motion/Reveal";

export function HeroSection() {
  return (
    <section className="relative flex min-h-[100svh] w-full items-end overflow-hidden">
      {/* Subtle vignette */}
      <div className="octo-hero-vignette pointer-events-none absolute inset-0 z-0" />

      {/* Grid atmosphere */}
      <div className="octo-grid-overlay pointer-events-none absolute inset-0 z-0 opacity-25" />

      {/* Neon atmosphere */}
      <div className="pointer-events-none absolute -left-64 top-[15%] h-[520px] w-[520px] rounded-full bg-accent-pink/10 blur-[150px]" />

      <div className="pointer-events-none absolute -right-64 top-[24%] h-[520px] w-[520px] rounded-full bg-accent-cyan/10 blur-[150px]" />

      {/* Bottom fade */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[260px] bg-gradient-to-t from-background via-background/60 to-transparent" />

      {/* Buttons */}
      <Container className="relative z-20 flex w-full justify-center pb-32">
        <Reveal delay={0.15}>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="#opportunities"
              className="
                octo-button
                octo-button-primary
                group
                inline-flex
                h-[54px]
                min-w-[215px]
                items-center
                justify-center
                gap-2
                px-7
                text-button
                font-semibold
              "
            >
              Explore opportunities
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            <Link
              href="#connect"
              className="
                octo-button
                octo-button-secondary
                group
                inline-flex
                h-[54px]
                min-w-[190px]
                items-center
                justify-center
                gap-2
                px-7
                text-button
                font-semibold
              "
            >
              Connect with us
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </Reveal>
      </Container>

      {/* Scroll indicator */}
      <div className="pointer-events-none absolute bottom-4 left-1/2 z-20 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex">
        <span className="text-[10px] uppercase tracking-[0.22em] text-text-muted">
          Scroll
        </span>

        <div className="relative h-10 w-px overflow-hidden bg-border">
          <div className="absolute left-0 top-0 h-4 w-px animate-pulse bg-accent-cyan" />
        </div>
      </div>
    </section>
  );
}
