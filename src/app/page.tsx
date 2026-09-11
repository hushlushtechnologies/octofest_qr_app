import { HomeVisualLayer } from "@/components/home/HomeVisualLayer";

import { HeroSection } from "@/components/home/HeroSection";
import { OpportunitiesSection } from "@/components/home/OpportunitiesSection";
import { PropertyMomentSection } from "@/components/home/PropertyMomentSection";
import { JourneySection } from "@/components/home/JourneySection";
// import { OpportunityDeck } from "@/components/home/opportunity/OpportunityDeck";
import { FinalCTASection } from "@/components/home/FinalCTASection";

export default function Home() {
  return (
    <main className="relative isolate overflow-x-clip">
      {/* -------------------------------------------------
          ONE 3D LOGO BEHIND THE ENTIRE HOMEPAGE
      -------------------------------------------------- */}

      <HomeVisualLayer />

      {/* -------------------------------------------------
          ALL PAGE CONTENT
      -------------------------------------------------- */}

      <div className="relative z-10">
        <HeroSection />

        <OpportunitiesSection />

        <PropertyMomentSection />

        <JourneySection />
        {/* <OpportunityDeck /> */}

        <FinalCTASection />
      </div>
    </main>
  );
}
