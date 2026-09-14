"use client";

import { Canvas } from "@react-three/fiber";

import { ContactShadows, Environment } from "@react-three/drei";

import * as THREE from "three";

import { PropertyBuilding } from "@/components/three/PropertyMassing";

interface PropertySceneProps {
  color: string;
}

export function PropertyScene({ color }: PropertySceneProps) {
  return (
    <Canvas
      shadows
      dpr={[1, 1.5]}
      camera={{
        position: [6.5, 4.2, 8.5],

        fov: 36,

        near: 0.1,

        far: 100,
      }}
      gl={{
        antialias: true,
        alpha: true,

        powerPreference: "high-performance",

        toneMapping: THREE.ACESFilmicToneMapping,

        toneMappingExposure: 1.05,
      }}
    >
      {/* ===============================================
          REALISTIC ENVIRONMENT REFLECTION
      ================================================ */}

      <Environment
        preset="city"
        background={false}
        environmentIntensity={0.85}
      />

      {/* ===============================================
          GENERAL LIGHT
      ================================================ */}

      <ambientLight intensity={0.4} />

      <hemisphereLight args={["#D8ECFF", "#10131B", 1.15]} />

      {/* ===============================================
          SUN
      ================================================ */}

      <directionalLight
        position={[-5, 9, 5]}
        intensity={2.5}
        color="#FFF4E1"
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />

      {/* ===============================================
          COOL FRONT LIGHT
      ================================================ */}

      <spotLight
        position={[-5, 5, 7]}
        intensity={25}
        distance={20}
        angle={0.55}
        penumbra={1}
        color={color}
      />

      {/* ===============================================
          WARM SIDE LIGHT
      ================================================ */}

      <spotLight
        position={[6, 4, 4]}
        intensity={20}
        distance={18}
        angle={0.6}
        penumbra={1}
        color="#F5B45F"
      />

      {/* ===============================================
          MODEL
      ================================================ */}

      <PropertyBuilding />

      {/* ===============================================
          FLOOR
      ================================================ */}

      <mesh
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -1.46, 0]}
        receiveShadow
      >
        <circleGeometry args={[7, 96]} />

        <meshStandardMaterial
          color="#11151D"
          roughness={0.55}
          metalness={0.08}
          transparent
          opacity={0.75}
        />
      </mesh>

      <ContactShadows
        position={[0, -1.43, 0]}
        opacity={0.55}
        scale={8}
        blur={2.5}
        far={5}
        resolution={512}
        color="#000000"
      />
    </Canvas>
  );
}
