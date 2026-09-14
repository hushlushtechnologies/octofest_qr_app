"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { IconButton } from "@/components/ui/IconButton";
import type { GalleryImage } from "@/data/property";

interface GalleryLightboxProps {
  images: GalleryImage[];
  activeIndex: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export function GalleryLightbox({
  images,
  activeIndex,
  onClose,
  onNavigate,
}: GalleryLightboxProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const isOpen = activeIndex !== null;

  // Move focus into the dialog when it opens, and handle keyboard
  // navigation/escape — required for the modal to be genuinely
  // operable by keyboard, not just visually dismissible.
  useEffect(() => {
    if (!isOpen) return;
    closeButtonRef.current?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight" && activeIndex !== null) {
        onNavigate((activeIndex + 1) % images.length);
      }
      if (e.key === "ArrowLeft" && activeIndex !== null) {
        onNavigate((activeIndex - 1 + images.length) % images.length);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, activeIndex, images.length, onClose, onNavigate]);

  return (
    <AnimatePresence>
      {isOpen && activeIndex !== null && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label="Property gallery viewer"
          className="fixed inset-0 z-50 flex flex-col bg-overlay backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
        >
          <div
            className="flex items-center justify-between p-4"
            style={{ paddingTop: "max(1rem, env(safe-area-inset-top))" }}
            onClick={(e) => e.stopPropagation()}
          >
            <p className="text-caption text-foreground">
              {activeIndex + 1} / {images.length}
            </p>
            <IconButton
              ref={closeButtonRef}
              aria-label="Close gallery"
              onClick={onClose}
            >
              <X className="h-4 w-4" />
            </IconButton>
          </div>

          <div
            className="relative flex flex-1 items-center justify-center px-4 pb-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-full w-full max-w-3xl">
              <Image
                src={images[activeIndex].src}
                alt={images[activeIndex].alt}
                fill
                sizes="(max-width: 768px) 100vw, 768px"
                className="object-contain"
                priority
              />
            </div>

            <button
              type="button"
              aria-label="Previous image"
              onClick={() =>
                onNavigate((activeIndex - 1 + images.length) % images.length)
              }
              className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-surface/80 p-2 text-foreground backdrop-blur-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              aria-label="Next image"
              onClick={() => onNavigate((activeIndex + 1) % images.length)}
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-surface/80 p-2 text-foreground backdrop-blur-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
