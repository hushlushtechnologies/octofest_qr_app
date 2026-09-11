import { ArrowRight, MessageCircle } from "lucide-react";

import { Container } from "@/components/layout/Container";

import { Button } from "@/components/ui/Button";

import { Reveal } from "@/components/motion/Reveal";

export function FinalCTASection() {
  return (
    <section id="connect" className="relative scroll-mt-20 pb-20 pt-8">
      <Container>
        <div className="octo-border relative overflow-hidden rounded-[34px]">
          <div className="octo-card rounded-[34px] px-6 py-16 text-center md:px-12 md:py-20">
            {/* Purple glow */}
            <div className="pointer-events-none absolute left-1/2 top-[-120px] h-[320px] w-[70%] -translate-x-1/2 rounded-full bg-accent-purple/15 blur-[120px]" />

            {/* Cyan glow */}
            <div className="pointer-events-none absolute -bottom-40 right-0 h-[320px] w-[320px] rounded-full bg-accent-cyan/10 blur-[120px]" />

            <Reveal>
              <div className="relative z-20">
                <p className="mb-4 text-caption uppercase tracking-[0.22em] text-accent-cyan">
                  Connect with us
                </p>

                <h2 className="mx-auto max-w-3xl text-title text-foreground md:text-[3rem]">
                  Found something that{" "}
                  <span className="octo-gradient-text">interests you?</span>
                </h2>

                <p className="mx-auto mt-5 max-w-xl text-body text-text-secondary">
                  Share your details and our team will connect with you about
                  the opportunity you are interested in.
                </p>

                <div className="mt-9 flex flex-wrap justify-center gap-3">
                  <Button variant="primary" size="lg">
                    Connect with us
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>

                  <Button variant="secondary" size="lg">
                    <MessageCircle className="h-4 w-4" />
                    WhatsApp
                  </Button>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
