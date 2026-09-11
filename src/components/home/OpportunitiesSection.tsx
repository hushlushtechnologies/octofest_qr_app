import Image from "next/image";
import Link from "next/link";

import { ArrowUpRight } from "lucide-react";

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

export function OpportunitiesSection() {
  return (
    <section
      id="opportunities"
      className="relative scroll-mt-20 py-16 md:py-24"
    >
      {/* Atmosphere */}
      <div className="pointer-events-none absolute -left-52 top-1/3 h-125 w-125 rounded-full bg-accent-purple/5 blur-[140px]" />

      <div className="pointer-events-none absolute -right-52 bottom-0 h-125 w-125 rounded-full bg-accent-cyan/5 blur-[140px]" />

      <Container className="relative z-20 flex flex-col gap-10">
        <Reveal>
          <SectionHeading
            eyebrow="Three opportunities"
            title="Where do you want to start?"
            description="Move from one experience into three different opportunities at Octofest."
          />
        </Reveal>

        <Stagger className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {opportunities.map(
            ({ label, title, description, href, icon: Icon }, index) => (
              <StaggerItem key={href}>
                <Link
                  href={href}
                  className="group octo-border block h-full rounded-[28px]"
                >
                  <article className="octo-card h-full rounded-[28px]">
                    {/* Image */}
                    <div className="relative h-56 overflow-hidden">
                      <Image
                        src={opportunityImages[index]}
                        alt={title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="octo-image object-cover"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/35 to-black/5" />

                      <div className="absolute inset-0 bg-gradient-to-br from-accent-purple/0 via-transparent to-accent-cyan/0 transition-colors duration-500 group-hover:from-accent-purple/10 group-hover:to-accent-cyan/10" />

                      {/* Icon */}
                      <div className="octo-glass absolute left-5 top-5 flex h-11 w-11 items-center justify-center rounded-2xl">
                        <Icon className="h-5 w-5 text-white" />
                      </div>

                      {/* Number */}
                      <span className="absolute right-5 top-5 text-xs font-semibold tracking-[0.22em] text-white/60">
                        0{index + 1}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="flex min-h-[235px] flex-col p-6">
                      <p className="text-caption text-accent-cyan">{label}</p>

                      <h3 className="mt-2 text-section text-foreground">
                        {title}
                      </h3>

                      <p className="mt-3 text-body text-text-secondary">
                        {description}
                      </p>

                      <div className="mt-auto flex items-center justify-between pt-7">
                        <span className="text-button text-foreground">
                          Explore
                        </span>

                        <div className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background/40 transition-all duration-300 group-hover:rotate-45 group-hover:border-accent-cyan/40 group-hover:bg-accent-cyan/10">
                          <ArrowUpRight className="h-4 w-4" />
                        </div>
                      </div>
                    </div>

                    {/* Hover glow */}
                    <div className="pointer-events-none absolute -bottom-28 left-1/2 h-52 w-52 -translate-x-1/2 rounded-full bg-accent-violet/0 blur-[80px] transition-colors duration-500 group-hover:bg-accent-violet/15" />
                  </article>
                </Link>
              </StaggerItem>
            ),
          )}
        </Stagger>
      </Container>
    </section>
  );
}
