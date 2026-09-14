"use client";

import dynamic from "next/dynamic";
import Image from "next/image";

import { Suspense } from "react";

import { useWebGLSupport } from "@/hooks/useWebGLSupport";

import { useTheme } from "@/hooks/useTheme";

import { getAccentColor } from "@/lib/accents";

const PropertyScene = dynamic(
  () =>
    import("@/components/three/PropertyScene").then((mod) => mod.PropertyScene),
  {
    ssr: false,

    loading: () => <PropertyFallback />,
  },
);

function PropertyFallback() {
  return (
    <div
      className="
        relative
        flex
        h-full
        w-full
        items-center
        justify-center
        overflow-hidden
      "
    >
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[75%] w-[75%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-cyan/10 blur-[100px]" />

      <div className="relative h-[90%] w-[90%]">
        <Image
          src="/investment/property.png"
          alt="Al Jaddaf investment property"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 60vw"
          className="object-contain"
        />
      </div>
    </div>
  );
}

export function PropertyThreeShowcase() {
  const supported = useWebGLSupport();

  const { theme } = useTheme();

  if (supported === null || supported === false) {
    return <PropertyFallback />;
  }

  const color = getAccentColor("property", theme);

  return (
    <Suspense fallback={<PropertyFallback />}>
      <PropertyScene color={color} />
    </Suspense>
  );
}
