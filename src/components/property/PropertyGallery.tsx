"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GalleryLightbox } from "@/components/property/GalleryLightbox";
import { Parallax } from "@/components/motion/Parallax";
import { propertyGallery } from "@/data/property";

export function PropertyGallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const lastOpenedRef = useRef<HTMLButtonElement | null>(null);
  const thumbnailRefs = useRef<(HTMLButtonElement | null)[]>([]);

  function handleOpen(index: number) {
    lastOpenedRef.current = thumbnailRefs.current[index];
    setActiveIndex(index);
  }

  function handleClose() {
    setActiveIndex(null);
    // Return focus to whichever thumbnail opened the lightbox —
    // without this, focus is left stranded wherever it happened to be.
    lastOpenedRef.current?.focus();
  }

  return (
    <Container id="gallery" className="flex flex-col gap-6 py-10">
      <SectionHeading eyebrow="Visual Overview" title="Gallery" />

      <div className="-mx-4 flex snap-x snap-mandatory gap-3 overflow-x-auto px-4 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {propertyGallery.map((image, i) => (
          <Parallax
            key={image.src}
            intensity={i % 2 === 0 ? "subtle" : "medium"}
            className="shrink-0 snap-start"
          >
            <button
              ref={(el) => {
                thumbnailRefs.current[i] = el;
              }}
              type="button"
              onClick={() => handleOpen(i)}
              aria-label={`Open ${image.alt} in full screen`}
              className="relative block h-48 w-64 overflow-hidden rounded-2xl border border-border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="256px"
                className="object-cover transition-transform duration-300 hover:scale-105"
                loading="lazy"
              />
            </button>
          </Parallax>
        ))}
      </div>

      <GalleryLightbox
        images={propertyGallery}
        activeIndex={activeIndex}
        onClose={handleClose}
        onNavigate={setActiveIndex}
      />
    </Container>
  );
}
