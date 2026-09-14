import type { LucideIcon } from "lucide-react";

import {
  Building2,
  Compass,
  Landmark,
  MapPin,
  Network,
  ShieldCheck,
  Store,
  TrendingUp,
  Users,
} from "lucide-react";

/* =========================================================
   PROPERTY HERO
========================================================= */

export const propertyContent = {
  brand: "Afaq Al Manzil Properties",

  eyebrow: "Exclusive Investment Property",

  headline: "High-Occupancy Property Investment in Al Jaddaf",

  location: "Al Jaddaf, Dubai",

  valueLabel: "Asking Price",

  valueAmount: "AED 11.3M",

  valueFull: "AED 11.3 Million",

  supporting: "95% Occupied · 119 Units · 120,000+ Sq.ft Saleable Area",

  description:
    "A high-occupancy mixed-use property opportunity in Al Jaddaf, Dubai, combining residential and retail units within a strategically positioned investment asset.",
};

/* =========================================================
   INVESTMENT SNAPSHOT
========================================================= */

export interface SnapshotField {
  label: string;
  value: string;
}

export const investmentSnapshot: SnapshotField[] = [
  {
    label: "Location",
    value: "Al Jaddaf, Dubai",
  },

  {
    label: "Asking Price",
    value: "AED 11.3 Million",
  },

  {
    label: "Current Occupancy",
    value: "95%",
  },

  {
    label: "Total Units",
    value: "119 Units",
  },

  {
    label: "Saleable Area",
    value: "120,000+ Sq.ft",
  },

  {
    label: "Asset Type",
    value: "Residential + Retail",
  },
];

/* =========================================================
   UNIT MIX
========================================================= */

/* =========================================================
   LOCATION HIGHLIGHTS
========================================================= */

export interface LocationHighlight {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const locationHighlights: LocationHighlight[] = [
  {
    icon: MapPin,

    title: "Al Jaddaf, Dubai",

    description:
      "A strategically positioned Dubai district with access to established residential, commercial and hospitality destinations.",
  },

  {
    icon: Compass,

    title: "Connected Location",

    description:
      "Positioned for practical connectivity to key areas across Dubai.",
  },

  {
    icon: Landmark,

    title: "Dubai Creek Proximity",

    description:
      "Located within the wider Al Jaddaf and Dubai Creek urban landscape.",
  },
];

/* =========================================================
   WHY THIS OPPORTUNITY
========================================================= */

export interface OpportunityPoint {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const opportunityStory: OpportunityPoint[] = [
  {
    icon: TrendingUp,

    title: "95% Occupancy",

    description:
      "The property currently carries a strong occupancy level of approximately 95%.",
  },

  {
    icon: Building2,

    title: "119-Unit Asset",

    description:
      "A diversified mixed-use property comprising residential apartments and retail units.",
  },

  {
    icon: Network,

    title: "Diversified Unit Mix",

    description:
      "The asset combines retail, studio, one-bedroom, two-bedroom and three-bedroom units.",
  },

  {
    icon: Store,

    title: "Residential + Retail",

    description:
      "Six retail units complement the residential inventory, creating a broader asset mix.",
  },
];

/* =========================================================
   INVESTOR TYPES
========================================================= */

export interface InvestorType {
  id: string;
  label: string;
  description: string;
}

export const investorTypes: InvestorType[] = [
  {
    id: "individual",

    label: "Private Investors",

    description:
      "Individuals evaluating a significant Dubai property investment.",
  },

  {
    id: "hnw",

    label: "High-Net-Worth Investors",

    description:
      "Investors seeking established income-generating property opportunities.",
  },

  {
    id: "institutional",

    label: "Institutional Investors",

    description:
      "Organizations evaluating property assets within the UAE market.",
  },

  {
    id: "strategic",

    label: "Strategic Partners",

    description: "Partners interested in strategic investment discussions.",
  },

  {
    id: "business",

    label: "Business Groups",

    description:
      "Corporate and investment groups exploring Dubai real-estate opportunities.",
  },
];

/* =========================================================
   INVESTMENT JOURNEY
========================================================= */

export interface JourneyStep {
  title: string;
  description: string;
}

export const investmentJourney: JourneyStep[] = [
  {
    title: "Discover",

    description: "Review the property investment overview.",
  },

  {
    title: "Explore the Asset",

    description: "Review the property scale, occupancy and unit mix.",
  },

  {
    title: "Express Interest",

    description: "Share your investment interest with our team.",
  },

  {
    title: "Private Discussion",

    description: "Connect directly with the Afaq Al Manzil Properties team.",
  },

  {
    title: "Next Steps",

    description:
      "Continue the investment discussion based on your requirements.",
  },
];

/* =========================================================
   FORM OPTIONS
========================================================= */

export const investorTypeOptions = [
  "Individual Investor",
  "High-Net-Worth Investor",
  "Institutional Investor",
  "Strategic Investor",
  "Business Group",
  "Other",
] as const;

export const investmentRangeOptions = [
  "AED 1M–5M",
  "AED 5M–10M",
  "AED 10M+",
  "Prefer to Discuss Privately",
] as const;

export const interestTypeOptions = [
  "Property Investment",
  "Request Property Details",
  "Schedule Investment Discussion",
  "Strategic Partnership",
  "Request More Information",
] as const;

/* =========================================================
   PROPERTY GALLERY
========================================================= */

export interface GalleryImage {
  src: string;
  alt: string;
}

export const propertyGallery: GalleryImage[] = [
  {
    src: "/investment/property.png",

    alt: "Al Jaddaf investment property exterior",
  },

  {
    src: "/investment/inv2.png",

    alt: "Al Jaddaf investment property view",
  },

  {
    src: "/investment/inv3.png",

    alt: "Al Jaddaf property investment visual",
  },

  {
    src: "/investment/inv4.png",

    alt: "Afaq Al Manzil Properties investment opportunity",
  },
];

/* =========================================================
   PROPERTY INVESTMENT SPECS
========================================================= */

export const propertyInvestmentSpecs = {
  askingPrice: "AED 11.3M",

  occupancy: 95,

  totalUnits: 119,

  saleableArea: "120,000+ Sq.ft",

  buildingConfiguration: "G + 2P + 12",

  location: "Al Jaddaf, Dubai",
};

export interface PropertyUnitMix {
  id: string;
  label: string;
  shortLabel: string;
  count: number;
  percentage: number;
}

export const propertyUnitMix: PropertyUnitMix[] = [
  {
    id: "retail",
    label: "Retail Units",
    shortLabel: "Retail",
    count: 6,
    percentage: 5.04,
  },

  {
    id: "studio",
    label: "Studio Apartments",
    shortLabel: "Studio",
    count: 18,
    percentage: 15.13,
  },

  {
    id: "1bhk",
    label: "1 Bedroom Apartments",
    shortLabel: "1 BHK",
    count: 26,
    percentage: 21.85,
  },

  {
    id: "2bhk",
    label: "2 Bedroom Apartments",
    shortLabel: "2 BHK",
    count: 56,
    percentage: 47.06,
  },

  {
    id: "3bhk",
    label: "3 Bedroom Apartments",
    shortLabel: "3 BHK",
    count: 13,
    percentage: 10.92,
  },
];
