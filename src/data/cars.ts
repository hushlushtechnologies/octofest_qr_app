import type { Car } from "@/types/car";

// ⚠️ TEMPORARY DEVELOPMENT DATA — these are placeholder vehicles for
// building the UI only. They are NOT the real Optimus Megatron
// inventory. Replace every entry below with real cars/images before
// launch — the shape (slug, brand, model, etc.) is what matters.
export const cars: Car[] = [
  {
    id: "car-1",
    slug: "sample-gt-coupe",
    brand: "Sample Brand",
    model: "GT Coupe",
    variant: "Performance",
    year: 2024,
    availability: "available",
    image: "/images/cars/car-1.svg",
  },
  {
    id: "car-2",
    slug: "sample-sedan",
    brand: "Sample Brand",
    model: "Executive Sedan",
    variant: "Signature",
    year: 2024,
    availability: "available",
    image: "/images/cars/car-2.svg",
  },
  {
    id: "car-3",
    slug: "sample-suv",
    brand: "Sample Brand",
    model: "Luxury SUV",
    variant: "Autobiography",
    year: 2023,
    availability: "reserved",
    image: "/images/cars/car-3.svg",
  },
  {
    id: "car-4",
    slug: "sample-roadster",
    brand: "Sample Brand",
    model: "Roadster",
    variant: "Track Edition",
    year: 2024,
    availability: "coming-soon",
    image: "/images/cars/car-4.svg",
  },
  {
    id: "car-5",
    slug: "sample-super-suv",
    brand: "Sample Brand",
    model: "Super SUV",
    variant: "Performante",
    year: 2023,
    availability: "available",
    image: "/images/cars/car-5.svg",
  },
];

export function getCarBySlug(slug: string): Car | undefined {
  return cars.find((car) => car.slug === slug);
}
