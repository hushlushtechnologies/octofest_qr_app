"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, MessageCircle } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/motion/Reveal";
import { useState } from "react";
import { AvailabilityBadge } from "@/components/cars/AvailabilityBadge";
import { ScanContextNote } from "@/components/scan/ScanContextNote";
import { CarInterestSheet } from "@/components/cars/CarInterestSheet";
import { useQRContext } from "@/components/providers/QRContentProvider";
import { getAccentColor } from "@/lib/accents";
import { useTheme } from "@/hooks/useTheme";
import type { Car } from "@/types/car";

export function CarDetailView({
  car,
  fromShowcase,
}: {
  car: Car;
  fromShowcase?: boolean;
}) {
  const { theme } = useTheme();
  const color = getAccentColor("cars", theme);
  const { item } = useQRContext();
  const isDirectShowcaseEntry = fromShowcase && item === car.slug;
  const [sheetOpen, setSheetOpen] = useState(false);

  return (
    <div className="flex flex-col">
      <Container className="flex flex-col gap-4 pt-6 pb-4">
        <Link
          href="/cars"
          className="inline-flex w-fit items-center gap-1.5 text-button text-text-secondary transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          <ArrowLeft className="h-4 w-4" />
          Cars
        </Link>
        <ScanContextNote />
        {isDirectShowcaseEntry && (
          <p className="text-caption text-text-muted">
            You&apos;re viewing the car from the Octofest showcase.
          </p>
        )}
      </Container>

      <Container className="pb-6">
        <Reveal>
          <div className="relative h-64 w-full overflow-hidden rounded-2xl border border-border md:h-96">
            <Image
              src={car.image}
              alt={`${car.brand} ${car.model}`}
              fill
              sizes="(max-width: 768px) 100vw, 700px"
              className="object-cover"
              priority
            />
          </div>
        </Reveal>
      </Container>

      <Container className="flex flex-col gap-4 pb-10">
        <Reveal delay={0.05}>
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-caption" style={{ color }}>
                {car.brand}
              </p>
              <h1 className="text-title text-foreground">{car.model}</h1>
              {car.variant && (
                <p className="text-body text-text-secondary">{car.variant}</p>
              )}
            </div>
            <AvailabilityBadge status={car.availability} />
          </div>
        </Reveal>

        {car.description && (
          <Reveal delay={0.1}>
            <p className="max-w-md text-body text-text-secondary">
              {car.description}
            </p>
          </Reveal>
        )}

        <Reveal delay={0.15}>
          <div className="flex flex-wrap gap-3 pt-2">
            <button
              type="button"
              onClick={() => setSheetOpen(true)}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-accent-gold px-5 py-2.5 text-button font-semibold text-ink transition-all duration-200 hover:brightness-105 active:brightness-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              Request Price
            </button>
            <button
              type="button"
              onClick={() => setSheetOpen(true)}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border-strong px-5 py-2.5 text-button text-foreground transition-colors hover:bg-surface-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <MessageCircle className="h-4 w-4" />
              Enquire
            </button>
          </div>
        </Reveal>
      </Container>

      <CarInterestSheet
        car={car}
        open={sheetOpen}
        onClose={() => setSheetOpen(false)}
      />
    </div>
  );
}
