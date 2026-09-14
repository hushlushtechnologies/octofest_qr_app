import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { InvestorInterestForm } from "@/components/property/InvestorIntrestForm";
import { getPropertyWhatsAppLink } from "@/lib/whatsapp";
import { MessageCircle } from "lucide-react";

export function PropertyCTA() {
  return (
    <Container id="interest" className="flex flex-col gap-6 py-10">
      <SectionHeading
        eyebrow="Get In Touch"
        title="Interested in Exploring the Opportunity?"
        description="Connect with the Afaq Al Manzil investment team for a private discussion."
      />

      <InvestorInterestForm />

      <a
        href={getPropertyWhatsAppLink()}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex w-fit items-center gap-2 text-button text-success underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      >
        <MessageCircle className="h-4 w-4" />
        Or message us on WhatsApp
      </a>
    </Container>
  );
}
