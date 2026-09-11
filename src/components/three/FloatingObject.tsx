"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { MeshDistortMaterial } from "@react-three/drei";
import { useReducedMotion } from "motion/react";
import type { Mesh } from "three";

interface FloatingObjectProps {
  color: string;
}

export function FloatingObject({ color }: FloatingObjectProps) {
  const meshRef = useRef<Mesh>(null);
  const prefersReducedMotion = useReducedMotion();

  useFrame((state, delta) => {
    if (!meshRef.current) return;

    // Ambient idle rotation — skipped entirely under reduced motion.
    if (!prefersReducedMotion) {
      meshRef.current.rotation.y += delta * 0.2;
    }

    // Subtle pointer-follow tilt. This responds to user input rather
    // than running ambiently, so it stays active even with reduced
    // motion on — it's a small, deliberate exception, not a bypass.
    const targetX = state.pointer.y * 0.25;
    const targetZ = state.pointer.x * 0.2;
    meshRef.current.rotation.x += (targetX - meshRef.current.rotation.x) * 0.05;
    meshRef.current.rotation.z += (targetZ - meshRef.current.rotation.z) * 0.05;
  });

  return (
    <mesh ref={meshRef}>
      {/* args: [radius, detail] — detail 1 keeps the vertex count low.
          This is the "low geometry count" rule from the brief in practice. */}
      <icosahedronGeometry args={[1.4, 1]} />
      <MeshDistortMaterial
        color={color}
        speed={prefersReducedMotion ? 0 : 1.4}
        distort={0.35}
        roughness={0.25}
        metalness={0.3}
      />
    </mesh>
  );
}
