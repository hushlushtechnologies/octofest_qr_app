import type { LucideIcon } from "lucide-react";
import { Building2, Car, Cpu } from "lucide-react";

export type OpportunityAccent = "property" | "cars" | "hushlush";

export interface Opportunity {
  id: string;
  slug: string;
  href: string;
  brand: string;
  label: string;
  shortLabel: string;
  title: string;
  description: string;
  icon: LucideIcon;
  accent: OpportunityAccent;
}

export const opportunities: Opportunity[] = [
  {
    id: "property",
    slug: "property",
    href: "/property",
    brand: "Afaq Al Manzil Properties",
    label: "Property Investment",
    shortLabel: "Property",
    title: "Invest in What's Next",
    description:
      "Explore a landmark investment opportunity in Al Jaddaf, Dubai.",
    icon: Building2,
    accent: "property",
  },
  {
    id: "cars",
    slug: "cars",
    href: "/cars",
    brand: "Optimus Megatron Cars",
    label: "Luxury Cars",
    shortLabel: "Cars",
    title: "Performance Without Compromise",
    description:
      "Discover premium and performance vehicles from Optimus Megatron.",
    icon: Car,
    accent: "cars",
  },
  {
    id: "hushlush",
    slug: "hushlush",
    href: "/hushlush",
    brand: "Hush Lush Technologies",
    label: "Event App Investment",
    shortLabel: "Tech",
    title: "Invest in the Event Ecosystem",
    description:
      "Explore a connected platform designed around the future of events.",
    icon: Cpu,
    accent: "hushlush",
  },
];

export function getOpportunityBySlug(slug: string | null | undefined) {
  if (!slug) return null;
  return opportunities.find((opp) => opp.slug === slug) ?? null;
}
