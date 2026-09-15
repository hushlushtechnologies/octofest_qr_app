"use client";

import { CarFront } from "lucide-react";

import { cars } from "@/data/cars";

import { CarCard } from "@/components/cars/CarCard";

import { Stagger, StaggerItem } from "@/components/motion/Stagger";

export function CarsDeck() {
  return (
    <section id="collection" className="relative scroll-mt-24">
      {/* =====================================================
          SMALL COLLECTION INFO
      ====================================================== */}

      <div className="mb-6 flex items-end justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <CarFront className="h-4 w-4 text-accent-cyan" />

            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-accent-cyan">
              Megatron Collection
            </p>
          </div>

          <h2 className="mt-2 text-[1.7rem] font-semibold tracking-[-0.03em] text-foreground md:text-[2rem]">
            Explore the collection.
          </h2>
        </div>

        <p className="hidden text-xs text-text-muted sm:block">
          {cars.length} vehicles
        </p>
      </div>

      {/* =====================================================
          NORMAL RESPONSIVE GRID
      ====================================================== */}

      <Stagger
        className="
          grid
          grid-cols-1
          gap-4

          sm:grid-cols-2

          lg:grid-cols-3

          xl:grid-cols-4
        "
      >
        {cars.map((car, index) => (
          <StaggerItem key={car.id}>
            <CarCard car={car} index={index} />
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}
