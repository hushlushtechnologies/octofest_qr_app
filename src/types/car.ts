export type CarAvailability = "available" | "reserved" | "sold" | "coming-soon";

export interface Car {
  id: string;
  slug: string;
  brand: string;
  model: string;
  variant?: string;
  year?: number;
  availability?: CarAvailability;
  image: string;
  description?: string;
}
