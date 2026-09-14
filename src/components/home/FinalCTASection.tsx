import Image from "next/image";
import Link from "next/link";

import { ArrowUpRight, MessageCircle, Sparkles } from "lucide-react";

import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/motion/Reveal";

export function FinalCTASection() {
  return (
    <section
      id="interest"
      className="relative scroll-mt-20 overflow-hidden pb-20 pt-10 md:pb-28 md:pt-16"
    >
      {/* =====================================================
          BACKGROUND ATMOSPHERE
      ====================================================== */}

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-purple/8 blur-[160px]" />

      <Container>
        <div className="octo-border relative overflow-hidden rounded-[32px] md:rounded-[40px]">
          <div className="octo-card relative overflow-hidden rounded-[32px] md:rounded-[40px]">
            {/* =================================================
                DECORATIVE OCTOFEST LOGO
            ================================================== */}

            <div className="pointer-events-none absolute -right-20 -top-20 h-[320px] w-[320px] opacity-[0.06] md:h-[460px] md:w-[460px]">
              <Image
                src="/Octo-Logo.png"
                alt=""
                fill
                className="object-contain"
              />
            </div>

            {/* =================================================
                NEON BLOOMS
            ================================================== */}

            <div className="pointer-events-none absolute -left-24 bottom-[-120px] h-[320px] w-[320px] rounded-full bg-accent-pink/14 blur-[110px]" />

            <div className="pointer-events-none absolute -right-20 top-0 h-[320px] w-[320px] rounded-full bg-accent-cyan/12 blur-[110px]" />

            {/* =================================================
                GRID
            ================================================== */}

            <div
              className="
                pointer-events-none
                absolute
                inset-0
                opacity-[0.07]

                [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)]
                [background-size:42px_42px]
              "
            />

            {/* =================================================
                CONTENT
            ================================================== */}

            <div className="relative z-10 grid items-center gap-10 px-6 py-12 md:px-10 md:py-16 lg:grid-cols-[1.15fr_0.85fr] lg:px-14 lg:py-20">
              {/* =============================================
                  LEFT
              ============================================== */}

              <Reveal>
                <div>
                  {/* Eyebrow */}

                  <div className="mb-5 flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full border border-accent-cyan/20 bg-accent-cyan/8 text-accent-cyan">
                      <Sparkles className="h-4 w-4" />
                    </div>

                    <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-accent-cyan md:text-xs">
                      Ready when you are
                    </span>
                  </div>

                  {/* Main title */}

                  <h2
                    className="
                      max-w-[700px]
                      text-[2.4rem]
                      font-semibold
                      leading-[0.98]
                      tracking-[-0.045em]
                      text-foreground

                      sm:text-[3.2rem]
                      md:text-[4rem]
                      lg:text-[4.5rem]
                    "
                  >
                    Turn your interest
                    <br />
                    into a{" "}
                    <span className="octo-gradient-text">conversation.</span>
                  </h2>

                  {/* Copy */}

                  <p className="mt-6 max-w-lg text-sm leading-6 text-text-secondary md:text-base md:leading-7">
                    Interested in property, automotive or technology? Connect
                    with our team and explore the opportunity that fits you.
                  </p>

                  {/* CTA */}

                  <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                    <Link
                      href="/contact"
                      className="
                        octo-button
                        octo-button-primary
                        group
                        inline-flex
                        h-[54px]
                        items-center
                        justify-center
                        gap-2
                        px-7
                        text-button
                        font-semibold
                      "
                    >
                      Start a conversation
                      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </Link>

                    <Link
                      href="#"
                      className="
                        octo-button
                        octo-button-secondary
                        group
                        inline-flex
                        h-[54px]
                        items-center
                        justify-center
                        gap-2
                        px-7
                        text-button
                        font-semibold
                      "
                    >
                      <MessageCircle className="h-4 w-4" />
                      WhatsApp
                    </Link>
                  </div>
                </div>
              </Reveal>

              {/* =============================================
                  RIGHT — INTERACTIVE CONTACT PANEL
              ============================================== */}

              <Reveal delay={0.12}>
                <div className="relative mx-auto w-full max-w-[380px] lg:ml-auto">
                  {/* Outer glow */}

                  <div className="pointer-events-none absolute inset-6 rounded-[40px] bg-gradient-to-br from-accent-pink/25 via-accent-violet/20 to-accent-cyan/25 blur-[60px]" />

                  {/* Main floating card */}

                  <div
                    className="
                      octo-glass
                      relative
                      overflow-hidden
                      rounded-[30px]
                      border
                      border-white/10
                      p-5

                      transition-all
                      duration-500

                      hover:-translate-y-2
                      hover:rotate-[1deg]
                    "
                  >
                    {/* Shine */}

                    <div
                      className="
                        pointer-events-none
                        absolute
                        -left-24
                        -top-20
                        h-[220px]
                        w-[120px]
                        rotate-[20deg]
                        bg-gradient-to-r
                        from-transparent
                        via-white/10
                        to-transparent
                        blur-xl
                      "
                    />

                    {/* Top */}

                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-[9px] uppercase tracking-[0.2em] text-text-muted">
                          Octofest Connect
                        </p>

                        <p className="mt-1 text-sm font-semibold text-foreground">
                          Investment Enquiry
                        </p>
                      </div>

                      <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-background/30">
                        <ArrowUpRight className="h-4 w-4 text-accent-cyan" />
                      </div>
                    </div>

                    {/* Large center graphic */}

                    <div className="relative my-8 flex h-[180px] items-center justify-center">
                      {/* Rings */}

                      <div className="absolute h-[150px] w-[150px] rounded-full border border-accent-cyan/15" />

                      <div className="absolute h-[110px] w-[110px] rounded-full border border-accent-purple/20" />

                      <div className="absolute h-[72px] w-[72px] rounded-full bg-gradient-to-br from-accent-pink via-accent-violet to-accent-cyan opacity-20 blur-xl" />

                      {/* Logo */}

                      <div className="relative h-[120px] w-[120px]">
                        <Image
                          src="/Octofest-Logo.png"
                          alt="Octofest"
                          fill
                          className="object-contain drop-shadow-[0_14px_30px_rgba(0,0,0,0.35)]"
                        />
                      </div>
                    </div>

                    {/* Bottom */}

                    <div className="rounded-[20px] border border-white/8 bg-background/25 p-4">
                      <p className="text-[10px] uppercase tracking-[0.16em] text-text-muted">
                        Available opportunities
                      </p>

                      <div className="mt-3 flex flex-wrap gap-2">
                        <span className="rounded-full border border-accent-cyan/20 bg-accent-cyan/8 px-3 py-1.5 text-[10px] font-medium text-accent-cyan">
                          Property
                        </span>

                        <span className="rounded-full border border-accent-violet/20 bg-accent-violet/8 px-3 py-1.5 text-[10px] font-medium text-accent-violet">
                          Automotive
                        </span>

                        <span className="rounded-full border border-accent-pink/20 bg-accent-pink/8 px-3 py-1.5 text-[10px] font-medium text-accent-pink">
                          Technology
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Floating status */}

                  <div className="octo-glass absolute -bottom-4 -left-3 flex items-center gap-2 rounded-full px-3 py-2 md:-left-8">
                    <span className="octo-live-dot h-2 w-2 rounded-full bg-success" />

                    <span className="text-[10px] font-medium text-text-secondary">
                      Team available
                    </span>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* =================================================
                HUGE BACKGROUND WORD
            ================================================== */}

            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                -bottom-6
                left-1/2

                hidden
                -translate-x-1/2

                whitespace-nowrap

                text-[9rem]
                font-bold
                leading-none
                tracking-[-0.07em]

                text-white/[0.015]

                xl:block
              "
            >
              CONNECT
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
