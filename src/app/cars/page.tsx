import { Container } from "@/components/layout/Container";
import { CarsHero } from "@/components/cars/CarsHero";
import { CarsDeck } from "@/components/cars/CarsDeck";
import { OpportunitiesSection } from "@/components/home/OpportunitiesSection";
import { JourneySection } from "@/components/home/JourneySection";
import { FinalCTASection } from "@/components/home/FinalCTASection";
import { Divider } from "@/components/ui/Divider";

export default function CarsPage() {
  return (
    <div className="flex flex-col">
      <CarsHero />
      <Container className="pb-12">
        <CarsDeck />
      </Container>
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
  );
}
