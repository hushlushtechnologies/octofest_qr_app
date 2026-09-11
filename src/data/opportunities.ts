import type { LucideIcon } from "lucide-react";
import { Building2, Car, Cpu } from "lucide-react";

export interface Opportunity {
  label: string;
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
}

export const opportunities: Opportunity[] = [
  {
    label: "Property",
    title: "Afaq Al Manzil",
    description: "A landmark investment opportunity in Al Jaddaf, Dubai.",
    href: "/property",
    icon: Building2,
  },
  {
    label: "Cars",
    title: "Optimus Megatron",
    description: "A curated luxury car collection, available now.",
    href: "/cars",
    icon: Car,
  },
  {
    label: "Hush Lush",
    title: "The Event App",
    description: "A new ecosystem for events — open for partners.",
    href: "/hushlush",
    icon: Cpu,
  },
];
