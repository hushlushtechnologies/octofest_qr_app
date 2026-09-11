import { ArrowUpRight, MapPin } from "lucide-react";

import { Container } from "@/components/layout/Container";

import { Button } from "@/components/ui/Button";

import { Reveal } from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { Parallax } from "@/components/motion/Parallax";

export function PropertyMomentSection() {
  return (
    <section className="relative py-16 md:py-24">
      <Container>
        <div className="octo-card octo-border relative overflow-hidden rounded-[32px]">
          {/* Decorative glows */}

          <Parallax
            intensity="medium"
            className="pointer-events-none absolute -left-36 -top-36 h-[440px] w-[440px] rounded-full bg-accent-cyan/10 blur-[130px]"
          />

          <Parallax
            intensity="subtle"
            className="pointer-events-none absolute -bottom-40 right-10 h-[440px] w-[440px] rounded-full bg-accent-pink/10 blur-[130px]"
          />

          <div className="relative z-20 grid min-h-[440px] items-center gap-10 p-7 md:grid-cols-[1.15fr_0.85fr] md:p-14">
            {/* Left */}
            <Reveal>
              <div>
                <div className="mb-5 flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-accent-cyan" />

                  <span className="text-caption text-text-muted">
                    Al Jaddaf, Dubai
                  </span>
                </div>

                <p className="octo-gradient-text text-stat">AED 135B</p>

                <p className="mt-5 max-w-md text-body text-text-secondary">
                  in property opportunity — discover investment possibilities
                  directly through the Octofest experience.
                </p>

                <div className="mt-8">
                  <Button variant="secondary">
                    Discover property
                    <ArrowUpRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Reveal>

            {/* Stats */}
            <Stagger className="grid grid-cols-2 gap-3">
              <StaggerItem>
                <StatCard value="3" label="Experiences" />
              </StaggerItem>

              <StaggerItem>
                <StatCard value="1" label="QR Journey" />
              </StaggerItem>

              <StaggerItem>
                <StatCard value="24/7" label="Digital Access" />
              </StaggerItem>

              <StaggerItem>
                <StatCard value="DXB" label="Dubai Experience" />
              </StaggerItem>
            </Stagger>
          </div>
        </div>
      </Container>
    </section>
  );
}

function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="octo-glass group rounded-2xl p-5 transition-transform duration-300 hover:-translate-y-1">
      <p className="text-2xl font-bold text-foreground md:text-3xl">{value}</p>

      <p className="mt-1 text-xs text-text-muted">{label}</p>
    </div>
  );
}
