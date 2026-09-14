import { PropertyHero } from "@/components/property/PropertyHero";
import { PropertyLocalNav } from "@/components/property/PropertyLocalNav";
import { InvestmentSnapshot } from "@/components/property/InvestmentSnapshot";
import { LocationExperience } from "@/components/property/LocationExperience";
import { OpportunitiesSection } from "@/components/home/OpportunitiesSection";
import { StickyPropertyCTA } from "@/components/property/StickyPropertyCTA";
import { PropertyInterestProvider } from "@/components/providers/PropertyInterestProvider";
import { Divider } from "@/components/ui/Divider";
import { Container } from "@/components/layout/Container";
import { JourneySection } from "@/components/home/JourneySection";

import { FinalCTASection } from "@/components/home/FinalCTASection";

export default function PropertyPage() {
  return (
    <PropertyInterestProvider>
      <div className="flex flex-col">
        <PropertyHero />
        <PropertyLocalNav />
        <Container>
          <Divider />
        </Container>
        <InvestmentSnapshot />
        <Container>
          <Divider />
        </Container>
        <LocationExperience />
        <Container>
          <Divider />
        </Container>
        <OpportunitiesSection />

        <Container>
          <Divider />
        </Container>
        <JourneySection />
        <Container>
          <Divider />
        </Container>
        <FinalCTASection />
      </div>
      <StickyPropertyCTA />
    </PropertyInterestProvider>
  );
}
