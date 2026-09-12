"use client";

import dynamic from "next/dynamic";
import Image from "next/image";

import { Suspense } from "react";

import { useWebGLSupport } from "@/hooks/useWebGLSupport";
import { useTheme } from "@/hooks/useTheme";

const Scene = dynamic(
  () => import("@/components/three/Scene").then((mod) => mod.Scene),
  {
    ssr: false,

    loading: () => <SceneFallback />,
  },
);

function SceneFallback() {
  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden">
      <div className="pointer-events-none absolute h-[45%] w-[45%] rounded-full bg-accent-cyan/10 blur-[100px]" />

      <div className="pointer-events-none absolute h-[40%] w-[40%] translate-x-20 translate-y-10 rounded-full bg-accent-pink/10 blur-[100px]" />

      <div className="relative h-[70%] w-[70%] max-h-200 max-w-200">
        <Image
          src="/Octo-Logo.png"
          alt="Octofest"
          fill
          priority
          sizes="(max-width: 768px) 75vw, 500px"
          className="object-cover"
        />
      </div>
    </div>
  );
}

export function ThreeShowcase() {
  const supported = useWebGLSupport();

  const { theme } = useTheme();

  if (supported === null) {
    return <SceneFallback />;
  }

  if (supported === false) {
    return <SceneFallback />;
  }

  const color = theme === "light" ? "#3D7FFF" : "#5B93FF";

  return (
    <Suspense fallback={<SceneFallback />}>
      <Scene color={color} />
    </Suspense>
  );
}
