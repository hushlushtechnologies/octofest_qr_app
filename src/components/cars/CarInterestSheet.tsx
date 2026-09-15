"use client";

import { Drawer } from "@/components/ui/Drawer";
import { CarInterestForm } from "@/components/cars/CarInterestForm";
import type { Car } from "@/types/car";

interface CarInterestSheetProps {
  car: Car;
  open: boolean;
  onClose: () => void;
}

export function CarInterestSheet({
  car,
  open,
  onClose,
}: CarInterestSheetProps) {
  return (
    <Drawer open={open} onClose={onClose} title="Enquire About This Car">
      <CarInterestForm car={car} />
    </Drawer>
  );
}
