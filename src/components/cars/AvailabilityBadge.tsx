import { Badge } from "@/components/ui/Badge";
import type { CarAvailability } from "@/types/car";

const labels: Record<CarAvailability, string> = {
  available: "Available",
  reserved: "Reserved",
  sold: "Sold",
  "coming-soon": "Coming Soon",
};

const variants: Record<
  CarAvailability,
  "success" | "warning" | "error" | "default"
> = {
  available: "success",
  reserved: "warning",
  sold: "error",
  "coming-soon": "default",
};

export function AvailabilityBadge({ status }: { status?: CarAvailability }) {
  if (!status) return null;
  return <Badge variant={variants[status]}>{labels[status]}</Badge>;
}
