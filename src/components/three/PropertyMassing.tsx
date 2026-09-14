"use client";

import { useMemo, useRef } from "react";

import { Float, useGLTF } from "@react-three/drei";

import { useFrame } from "@react-three/fiber";

import { useReducedMotion } from "motion/react";

import * as THREE from "three";

export function PropertyBuilding() {
  const outerRef = useRef<THREE.Group>(null);

  const modelRef = useRef<THREE.Group>(null);

  const reduceMotion = useReducedMotion();

  const { scene } = useGLTF("/villa-optimized.glb");

  /*
   * Clone the GLB so we can safely
   * calculate/prepare it for this scene.
   */
  const model = useMemo(() => scene.clone(true), [scene]);

  /* =====================================================
     AUTO NORMALIZE GLB

     Your villa GLB is hundreds of units wide,
     so we calculate its real bounds and scale it
     automatically into our 3D stage.
  ====================================================== */

  const modelData = useMemo(() => {
    model.updateMatrixWorld(true);

    const box = new THREE.Box3().setFromObject(model);

    const size = new THREE.Vector3();

    const center = new THREE.Vector3();

    box.getSize(size);
    box.getCenter(center);

    /*
     * Fit based on the largest dimension.
     *
     * Uploaded model:
     * approximately 258 x 71 x 301.
     *
     * We bring the max dimension down
     * to approximately 5.8 scene units.
     */
    const largestDimension = Math.max(size.x, size.y, size.z);

    const targetSize = 5.8;

    const scale = targetSize / largestDimension;

    return {
      scale,

      /*
       * Center X/Z.
       * Put the lowest point on Y=0.
       */
      position: new THREE.Vector3(-center.x, -box.min.y, -center.z),

      size,
    };
  }, [model]);

  /* =====================================================
     MATERIAL PREPARATION
  ====================================================== */

  useMemo(() => {
    model.traverse((object) => {
      if (!(object instanceof THREE.Mesh)) {
        return;
      }

      object.castShadow = true;

      object.receiveShadow = true;

      const materials = Array.isArray(object.material)
        ? object.material
        : [object.material];

      materials.forEach((material) => {
        if (
          material instanceof THREE.MeshStandardMaterial ||
          material instanceof THREE.MeshPhysicalMaterial
        ) {
          material.envMapIntensity = 1.2;

          material.needsUpdate = true;
        }
      });
    });
  }, [model]);

  /* =====================================================
     MOTION
  ====================================================== */

  useFrame((state, delta) => {
    const outer = outerRef.current;

    const inner = modelRef.current;

    if (!outer || !inner) {
      return;
    }

    const time = state.clock.elapsedTime;

    const targetY = reduceMotion ? -0.28 : -0.28 + state.pointer.x * 0.12;

    const targetX = reduceMotion ? 0 : state.pointer.y * 0.025;

    outer.rotation.y = THREE.MathUtils.damp(
      outer.rotation.y,
      targetY,
      3,
      delta,
    );

    outer.rotation.x = THREE.MathUtils.damp(
      outer.rotation.x,
      targetX,
      3,
      delta,
    );

    if (!reduceMotion) {
      /*
       * Very slow showroom
       * movement.
       */
      inner.rotation.y = Math.sin(time * 0.12) * 0.035;
    }
  });

  return (
    <group ref={outerRef} position={[0, -1.45, 0]} rotation={[0, -0.28, 0]}>
      <Float
        speed={reduceMotion ? 0 : 0.45}
        rotationIntensity={0}
        floatIntensity={reduceMotion ? 0 : 0.05}
      >
        <group ref={modelRef} scale={modelData.scale}>
          <primitive object={model} position={modelData.position} />
        </group>
      </Float>
    </group>
  );
}

useGLTF.preload("/villa-optimized.glb");
