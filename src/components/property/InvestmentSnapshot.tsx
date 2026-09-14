"use client";

import {
  Building2,
  Layers3,
  MapPin,
  Maximize2,
  Store,
  BedDouble,
  TrendingUp,
} from "lucide-react";

import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";

import { Stagger, StaggerItem } from "@/components/motion/Stagger";

import { propertyInvestmentSpecs, propertyUnitMix } from "@/data/property";

export function InvestmentSnapshot() {
  return (
    <section
      id="overview"
      className="relative scroll-mt-24 overflow-hidden py-16 md:py-24"
    >
      {/* =====================================================
          BACKGROUND ATMOSPHERE
      ====================================================== */}

      <div className="pointer-events-none absolute -left-56 top-1/3 h-[460px] w-[460px] rounded-full bg-accent-cyan/6 blur-[150px]" />

      <div className="pointer-events-none absolute -right-52 bottom-0 h-[460px] w-[460px] rounded-full bg-accent-purple/6 blur-[150px]" />

      <Container className="relative z-10">
        {/* =====================================================
            SECTION HEADING
        ====================================================== */}

        <Reveal>
          <SectionHeading
            eyebrow="Investment Snapshot"
            title="The property. At a glance."
            description="A complete overview of the key figures, property scale and unit distribution behind this Al Jaddaf investment opportunity."
          />
        </Reveal>

        {/* =====================================================
            TOP INVESTMENT DASHBOARD
        ====================================================== */}

        <div className="mt-10 grid gap-4 lg:grid-cols-[1.45fr_0.55fr]">
          {/* =================================================
              ASKING PRICE
          ================================================== */}

          <Reveal>
            <div
              className="
                octo-border
                relative
                min-h-[260px]
                overflow-hidden
                rounded-[30px]
              "
            >
              <div
                className="
                  octo-card
                  relative
                  flex
                  h-full
                  flex-col
                  justify-between
                  overflow-hidden
                  rounded-[30px]
                  p-6

                  sm:p-8
                  md:p-10
                "
              >
                {/* Decorative glow */}

                <div className="pointer-events-none absolute -right-24 -top-24 h-[300px] w-[300px] rounded-full bg-accent-cyan/12 blur-[100px]" />

                <div className="pointer-events-none absolute -bottom-32 left-1/4 h-[280px] w-[280px] rounded-full bg-accent-purple/10 blur-[100px]" />

                {/* Big background number */}

                <div
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute
                    -bottom-8
                    right-4

                    hidden

                    text-[9rem]
                    font-bold
                    leading-none
                    tracking-[-0.08em]

                    text-white/[0.018]

                    md:block
                  "
                >
                  11.3
                </div>

                <div className="relative z-10">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="h-4 w-4 text-accent-cyan" />

                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-text-muted md:text-xs">
                      Asking Price
                    </p>
                  </div>

                  <p
                    className="
                      octo-gradient-text

                      mt-4

                      text-[3.4rem]
                      font-bold
                      leading-none
                      tracking-[-0.055em]

                      sm:text-[4.4rem]
                      lg:text-[5rem]
                    "
                  >
                    {propertyInvestmentSpecs.askingPrice}
                  </p>

                  <p className="mt-5 max-w-md text-sm leading-6 text-text-secondary md:text-base">
                    Exclusive mixed-use investment property positioned in Al
                    Jaddaf, Dubai.
                  </p>
                </div>

                {/* Bottom info */}

                <div className="relative z-10 mt-8 flex flex-wrap items-center gap-3">
                  <div className="octo-glass flex items-center gap-2 rounded-full px-3.5 py-2">
                    <MapPin className="h-3.5 w-3.5 text-accent-cyan" />

                    <span className="text-xs text-text-secondary">
                      {propertyInvestmentSpecs.location}
                    </span>
                  </div>

                  <div className="octo-glass flex items-center gap-2 rounded-full px-3.5 py-2">
                    <Building2 className="h-3.5 w-3.5 text-accent-violet" />

                    <span className="text-xs text-text-secondary">
                      Residential + Retail
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* =================================================
              OCCUPANCY
          ================================================== */}

          <Reveal delay={0.08}>
            <div
              className="
                octo-border
                h-full
                min-h-[260px]
                overflow-hidden
                rounded-[30px]
              "
            >
              <div
                className="
                  octo-card
                  relative
                  flex
                  h-full
                  flex-col
                  items-center
                  justify-center
                  overflow-hidden
                  rounded-[30px]
                  p-6
                  text-center
                "
              >
                <div className="pointer-events-none absolute left-1/2 top-1/2 h-52 w-52 -translate-x-1/2 -translate-y-1/2 rounded-full bg-success/8 blur-[80px]" />

                <p className="relative z-10 text-[10px] font-semibold uppercase tracking-[0.2em] text-text-muted">
                  Current Occupancy
                </p>

                {/* Occupancy circle */}

                <div className="relative z-10 mt-6 flex h-[150px] w-[150px] items-center justify-center">
                  <div
                    className="
                      absolute
                      inset-0
                      rounded-full
                    "
                    style={{
                      background:
                        "conic-gradient(var(--success) 0deg 342deg, var(--border) 342deg 360deg)",
                    }}
                  />

                  <div className="absolute inset-[8px] rounded-full bg-surface" />

                  <div className="relative">
                    <p className="text-4xl font-bold tracking-[-0.04em] text-foreground">
                      {propertyInvestmentSpecs.occupancy}%
                    </p>

                    <p className="mt-1 text-[10px] uppercase tracking-[0.15em] text-success">
                      Occupied
                    </p>
                  </div>
                </div>

                <div className="relative z-10 mt-5 rounded-full border border-success/20 bg-success/8 px-3 py-1.5 text-[10px] font-semibold text-success">
                  Strong Occupancy
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* =====================================================
            PROPERTY SCALE
        ====================================================== */}

        <Stagger className="mt-4 grid grid-cols-2 gap-3 lg:grid-cols-4">
          <StaggerItem>
            <SpecCard icon={Building2} value="119" label="Total Units" />
          </StaggerItem>

          <StaggerItem>
            <SpecCard icon={Maximize2} value="120K+" label="Sq.ft Saleable" />
          </StaggerItem>

          <StaggerItem>
            <SpecCard
              icon={Layers3}
              value={propertyInvestmentSpecs.buildingConfiguration}
              label="Building Configuration"
            />
          </StaggerItem>

          <StaggerItem>
            <SpecCard icon={MapPin} value="Al Jaddaf" label="Dubai" />
          </StaggerItem>
        </Stagger>

        {/* =====================================================
            UNIT MIX
        ====================================================== */}

        <Reveal delay={0.1}>
          <div
            className="
              octo-border
              relative
              mt-4
              overflow-hidden
              rounded-[30px]
            "
          >
            <div className="octo-card relative overflow-hidden rounded-[30px] p-6 md:p-8">
              {/* Glow */}

              <div className="pointer-events-none absolute -right-40 top-1/2 h-[320px] w-[320px] -translate-y-1/2 rounded-full bg-accent-violet/8 blur-[110px]" />

              {/* Header */}

              <div className="relative z-10 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-accent-cyan">
                    Property Mix
                  </p>

                  <h3 className="mt-2 text-[1.6rem] font-semibold tracking-[-0.025em] text-foreground md:text-[2rem]">
                    119 units across five categories.
                  </h3>
                </div>

                <p className="text-xs text-text-muted">Residential + Retail</p>
              </div>

              {/* =================================================
                  DISTRIBUTION BAR
              ================================================== */}

              <div className="relative z-10 mt-8">
                <div className="flex h-3 w-full overflow-hidden rounded-full bg-border">
                  <div
                    className="h-full bg-accent-gold"
                    style={{
                      width: `${propertyUnitMix[0].percentage}%`,
                    }}
                  />

                  <div
                    className="h-full bg-accent-cyan"
                    style={{
                      width: `${propertyUnitMix[1].percentage}%`,
                    }}
                  />

                  <div
                    className="h-full bg-accent-blue"
                    style={{
                      width: `${propertyUnitMix[2].percentage}%`,
                    }}
                  />

                  <div
                    className="h-full bg-accent-violet"
                    style={{
                      width: `${propertyUnitMix[3].percentage}%`,
                    }}
                  />

                  <div
                    className="h-full bg-accent-pink"
                    style={{
                      width: `${propertyUnitMix[4].percentage}%`,
                    }}
                  />
                </div>
              </div>

              {/* =================================================
                  UNIT CARDS
              ================================================== */}

              <Stagger className="relative z-10 mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
                {propertyUnitMix.map((unit, index) => (
                  <StaggerItem key={unit.id}>
                    <UnitCard
                      index={index}
                      count={unit.count}
                      label={unit.shortLabel}
                    />
                  </StaggerItem>
                ))}
              </Stagger>

              {/* =================================================
                  FOOTNOTE
              ================================================== */}

              <div className="relative z-10 mt-6 flex items-start gap-2 border-t border-border pt-5">
                <Store className="mt-0.5 h-4 w-4 shrink-0 text-accent-gold" />

                <p className="text-xs leading-5 text-text-muted">
                  The asset combines 6 retail units with 113 residential
                  apartments across studio, 1 BHK, 2 BHK and 3 BHK
                  configurations.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

/* =========================================================
   PROPERTY SPEC CARD
========================================================= */

function SpecCard({
  icon: Icon,
  value,
  label,
}: {
  icon: typeof Building2;
  value: string;
  label: string;
}) {
  return (
    <div
      className="
        octo-card
        group

        flex
        min-h-[130px]
        flex-col
        justify-between

        rounded-[22px]
        p-5

        transition-all
        duration-300

        hover:-translate-y-1
        hover:border-accent-cyan/25
      "
    >
      <div
        className="
          flex
          h-9
          w-9
          items-center
          justify-center

          rounded-xl

          bg-accent-cyan/8
          text-accent-cyan

          transition-transform
          duration-300

          group-hover:scale-110
        "
      >
        <Icon className="h-4 w-4" />
      </div>

      <div className="mt-5">
        <p className="text-xl font-bold tracking-[-0.025em] text-foreground md:text-2xl">
          {value}
        </p>

        <p className="mt-1 text-[10px] leading-4 text-text-muted md:text-xs">
          {label}
        </p>
      </div>
    </div>
  );
}

/* =========================================================
   UNIT CARD
========================================================= */

function UnitCard({
  index,
  count,
  label,
}: {
  index: number;
  count: number;
  label: string;
}) {
  const accentClasses = [
    {
      icon: "bg-accent-gold/10 text-accent-gold",
      hover: "hover:border-accent-gold/30",
    },

    {
      icon: "bg-accent-cyan/10 text-accent-cyan",
      hover: "hover:border-accent-cyan/30",
    },

    {
      icon: "bg-accent-blue/10 text-accent-blue",
      hover: "hover:border-accent-blue/30",
    },

    {
      icon: "bg-accent-violet/10 text-accent-violet",
      hover: "hover:border-accent-violet/30",
    },

    {
      icon: "bg-accent-pink/10 text-accent-pink",
      hover: "hover:border-accent-pink/30",
    },
  ];

  const accent = accentClasses[index];

  return (
    <div
      className={`
        group

        min-h-[145px]

        rounded-[20px]

        border
        border-border

        bg-background/25

        p-4

        backdrop-blur-lg

        transition-all
        duration-300

        hover:-translate-y-1

        ${accent.hover}
      `}
    >
      <div
        className={`
          flex
          h-9
          w-9
          items-center
          justify-center
          rounded-xl

          ${accent.icon}
        `}
      >
        {index === 0 ? (
          <Store className="h-4 w-4" />
        ) : (
          <BedDouble className="h-4 w-4" />
        )}
      </div>

      <p className="mt-5 text-2xl font-bold tracking-[-0.035em] text-foreground">
        {count}
      </p>

      <p className="mt-1 text-xs text-text-muted">{label}</p>
    </div>
  );
}
