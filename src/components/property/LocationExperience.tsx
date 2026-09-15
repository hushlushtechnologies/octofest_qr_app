"use client";

import Image from "next/image";

import { Container } from "@/components/layout/Container";

import { Stagger, StaggerItem } from "@/components/motion/Stagger";

import { propertyGallery } from "@/data/property";

export function LocationExperience() {
  return (
    <section id="location" className="relative overflow-hidden py-12 md:py-20">
      {/* =====================================================
          BACKGROUND ATMOSPHERE
      ====================================================== */}

      <div className="pointer-events-none absolute -left-52 top-1/2 h-[420px] w-[420px] -translate-y-1/2 rounded-full bg-accent-cyan/5 blur-[150px]" />

      <div className="pointer-events-none absolute -right-52 bottom-0 h-[420px] w-[420px] rounded-full bg-accent-purple/5 blur-[150px]" />

      <Container className="relative z-10">
        {/* =====================================================
            MOBILE GALLERY
        ====================================================== */}

        <Stagger
          className="
            no-scrollbar
            -mx-4
            flex
            snap-x
            snap-mandatory
            gap-4
            overflow-x-auto
            px-4
            pb-4

            md:hidden
          "
        >
          {propertyGallery.map((image) => (
            <StaggerItem
              key={image.src}
              className="
                  w-[88vw]
                  shrink-0
                  snap-center

                  sm:w-[72vw]
                "
            >
              <GalleryImage
                src={image.src}
                alt={image.alt}
                className="h-[420px]"
              />
            </StaggerItem>
          ))}
        </Stagger>

        {/* =====================================================
            MOBILE INDICATOR
        ====================================================== */}

        <div className="mt-2 flex items-center justify-center gap-1.5 md:hidden">
          {propertyGallery.map((_, index) => (
            <span
              key={index}
              className={`
                  h-1.5
                  rounded-full

                  ${
                    index === 0
                      ? "w-7 bg-accent-cyan"
                      : "w-1.5 bg-border-strong"
                  }
                `}
            />
          ))}
        </div>

        {/* =====================================================
            DESKTOP GALLERY
        ====================================================== */}

        <Stagger
          className="
            hidden
            grid-cols-12
            gap-4

            md:grid
          "
        >
          {/* IMAGE 01 */}

          {propertyGallery[0] && (
            <StaggerItem className="col-span-7">
              <GalleryImage
                src={propertyGallery[0].src}
                alt={propertyGallery[0].alt}
                className="h-[430px] lg:h-[520px]"
              />
            </StaggerItem>
          )}

          {/* IMAGE 02 */}

          {propertyGallery[1] && (
            <StaggerItem className="col-span-5">
              <GalleryImage
                src={propertyGallery[1].src}
                alt={propertyGallery[1].alt}
                className="h-[430px] lg:h-[520px]"
              />
            </StaggerItem>
          )}

          {/* IMAGE 03 */}

          {propertyGallery[2] && (
            <StaggerItem className="col-span-5">
              <GalleryImage
                src={propertyGallery[2].src}
                alt={propertyGallery[2].alt}
                className="h-[300px] lg:h-[360px]"
              />
            </StaggerItem>
          )}

          {/* IMAGE 04 */}

          {propertyGallery[3] && (
            <StaggerItem className="col-span-7">
              <GalleryImage
                src={propertyGallery[3].src}
                alt={propertyGallery[3].alt}
                className="h-[300px] lg:h-[360px]"
              />
            </StaggerItem>
          )}
        </Stagger>
      </Container>
    </section>
  );
}

/* =========================================================
   GALLERY IMAGE
========================================================= */

function GalleryImage({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <div
      className={`
        group
        relative
        overflow-hidden

        rounded-[26px]

        border
        border-white/10

        bg-surface

        shadow-[0_24px_70px_rgba(0,0,0,0.18)]

        ${className}
      `}
    >
      <Image
        src={src}
        alt={alt}
        fill
        loading="lazy"
        sizes="(max-width: 768px) 88vw, (max-width: 1200px) 60vw, 700px"
        className="
          object-cover

          transition-transform
          duration-[1200ms]
          ease-out

          group-hover:scale-[1.05]
        "
      />

      {/* Cinematic vignette */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0

          bg-linear-to-t
          from-black/25
          via-transparent
          to-black/5

          transition-opacity
          duration-500

          group-hover:opacity-60
        "
      />

      {/* Color reflection */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0

          bg-linear-to-br
          from-accent-purple/0
          via-transparent
          to-accent-cyan/0

          transition-all
          duration-700

          group-hover:from-accent-purple/8
          group-hover:to-accent-cyan/8
        "
      />

      {/* Shine */}

      <div
        className="
          pointer-events-none
          absolute
          -left-[40%]
          -top-[50%]

          h-[200%]
          w-[18%]

          rotate-[18deg]

          bg-linear-to-r
          from-transparent
          via-white/10
          to-transparent

          opacity-0
          blur-lg

          transition-all
          duration-1000

          group-hover:left-[125%]
          group-hover:opacity-100
        "
      />
    </div>
  );
}
