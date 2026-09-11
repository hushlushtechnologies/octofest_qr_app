import type { ReactNode } from "react";

import { ArrowUpRight, ScanLine, Sparkles } from "lucide-react";

import { Container } from "@/components/layout/Container";

import { Reveal } from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";

export function JourneySection() {
  return (
    <section className="relative py-16 md:py-24">
      <Container>
        <Reveal>
          <div className="mb-10">
            <p className="text-caption uppercase tracking-[0.2em] text-accent-cyan">
              How it works
            </p>

            <h2 className="mt-3 max-w-xl text-title text-foreground">
              One simple journey through Octofest.
            </h2>
          </div>
        </Reveal>

        <Stagger className="grid gap-4 md:grid-cols-3">
          <StaggerItem>
            <JourneyStep
              number="01"
              icon={<ScanLine className="h-5 w-5" />}
              title="Scan"
              description="Scan the Octofest QR code and enter the digital experience."
            />
          </StaggerItem>

          <StaggerItem>
            <JourneyStep
              number="02"
              icon={<Sparkles className="h-5 w-5" />}
              title="Explore"
              description="Discover property, luxury cars and Octofest opportunities."
            />
          </StaggerItem>

          <StaggerItem>
            <JourneyStep
              number="03"
              icon={<ArrowUpRight className="h-5 w-5" />}
              title="Connect"
              description="Share your interest and connect directly with our team."
            />
          </StaggerItem>
        </Stagger>
      </Container>
    </section>
  );
}

function JourneyStep({
  number,
  icon,
  title,
  description,
}: {
  number: string;
  icon: ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="octo-card group h-full rounded-[26px] p-6 md:p-7">
      <div className="flex items-start justify-between">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-accent-cyan/10 text-accent-cyan transition-all duration-300 group-hover:scale-110 group-hover:bg-accent-cyan/15">
          {icon}
        </div>

        <span className="text-xs font-semibold tracking-[0.2em] text-text-muted">
          {number}
        </span>
      </div>

      <h3 className="mt-7 text-section text-foreground">{title}</h3>

      <p className="mt-2 text-body text-text-secondary">{description}</p>
    </div>
  );
}
