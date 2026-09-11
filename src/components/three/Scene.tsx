"use client";

import { Float, useTexture } from "@react-three/drei";

import { Canvas, useFrame, useThree } from "@react-three/fiber";

import { Suspense, useMemo, useRef } from "react";

import { useReducedMotion } from "motion/react";

import * as THREE from "three";

/* =========================================================
   TYPES
========================================================= */

interface LogoProps {
  color?: string;
}

/* =========================================================
   OCTOFEST LOGO
========================================================= */

function OctofestLogo({ color = "#00E5FF" }: LogoProps) {
  const groupRef = useRef<THREE.Group>(null);

  const mainMaterialRef = useRef<THREE.MeshBasicMaterial>(null);

  const cyanGlowRef = useRef<THREE.MeshBasicMaterial>(null);

  const pinkGlowRef = useRef<THREE.MeshBasicMaterial>(null);

  const shineRef = useRef<THREE.ShaderMaterial>(null);

  const texture = useTexture("/Octofest-Logo.png");

  const { viewport, pointer } = useThree();

  const reduceMotion = useReducedMotion();

  texture.colorSpace = THREE.SRGBColorSpace;

  texture.anisotropy = 8;

  /* =======================================================
     RESPONSIVE LOGO SCALE
  ======================================================= */

  const baseScale = useMemo(() => {
    const planeSize = 1.8;

    const widthScale = (viewport.width / planeSize) * 0.55;

    const heightScale = (viewport.height / planeSize) * 0.55;

    return THREE.MathUtils.clamp(Math.min(widthScale, heightScale), 0.9, 2.15);
  }, [viewport.width, viewport.height]);

  /* =======================================================
     3D DEPTH
  ======================================================= */

  const depthLayers = useMemo(
    () =>
      Array.from(
        {
          length: 10,
        },
        (_, index) => index,
      ),
    [],
  );

  /* =======================================================
     SHINE
  ======================================================= */

  const shineUniforms = useMemo(
    () => ({
      uTexture: {
        value: texture,
      },

      uTime: {
        value: 0,
      },

      uStrength: {
        value: 0.85,
      },
    }),
    [texture],
  );

  /* =======================================================
     ANIMATION
  ======================================================= */

  useFrame((state, delta) => {
    if (!groupRef.current) {
      return;
    }

    /* -----------------------------------------------
         ENTIRE HOMEPAGE SCROLL PROGRESS
      ------------------------------------------------ */

    let progress = 0;

    if (typeof window !== "undefined") {
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;

      if (maxScroll > 0) {
        progress = THREE.MathUtils.clamp(window.scrollY / maxScroll, 0, 1);
      }
    }

    /* -----------------------------------------------
         POINTER PARALLAX
      ------------------------------------------------ */

    const pointerX = reduceMotion ? 0 : pointer.x * 0.055;

    const pointerY = reduceMotion ? 0 : -pointer.y * 0.035;

    /* -----------------------------------------------
         SCROLL ROTATION
      ------------------------------------------------ */

    const scrollRotateY = progress * 0.4;

    const scrollRotateX = progress * 0.09;

    const scrollRotateZ = Math.sin(progress * Math.PI * 2.5) * 0.04;

    const idleRotation = reduceMotion
      ? 0
      : Math.sin(state.clock.elapsedTime * 0.32) * 0.005;

    groupRef.current.rotation.y = THREE.MathUtils.damp(
      groupRef.current.rotation.y,
      pointerX + scrollRotateY,
      3.5,
      delta,
    );

    groupRef.current.rotation.x = THREE.MathUtils.damp(
      groupRef.current.rotation.x,
      pointerY + scrollRotateX,
      3.5,
      delta,
    );

    groupRef.current.rotation.z = THREE.MathUtils.damp(
      groupRef.current.rotation.z,
      scrollRotateZ + idleRotation,
      3.5,
      delta,
    );

    /* -----------------------------------------------
         MOVE DOWN WHILE SCROLLING

         Three.js:
         positive Y = up
         negative Y = down
      ------------------------------------------------ */

    const verticalMovement = progress * 0.85;

    const verticalWave = Math.sin(progress * Math.PI * 3) * 0.05;

    const targetY = 0.32 - verticalMovement + verticalWave;

    groupRef.current.position.y = THREE.MathUtils.damp(
      groupRef.current.position.y,
      targetY,
      3,
      delta,
    );

    /* -----------------------------------------------
         SIDEWAYS PARALLAX PATH
      ------------------------------------------------ */

    const targetX = Math.sin(progress * Math.PI * 2.4) * 0.2;

    groupRef.current.position.x = THREE.MathUtils.damp(
      groupRef.current.position.x,
      targetX,
      3,
      delta,
    );

    /* -----------------------------------------------
         SCALE

         Hero:
         100%

         Bottom:
         ~72%
      ------------------------------------------------ */

    const targetScale = baseScale * THREE.MathUtils.lerp(1, 0.72, progress);

    const scale = THREE.MathUtils.damp(
      groupRef.current.scale.x,
      targetScale,
      3,
      delta,
    );

    groupRef.current.scale.setScalar(scale);

    /* -----------------------------------------------
         MAIN LOGO OPACITY

         Full in hero, subtle behind later sections.
      ------------------------------------------------ */

    if (mainMaterialRef.current) {
      const targetOpacity = THREE.MathUtils.lerp(1, 0.2, progress);

      mainMaterialRef.current.opacity = THREE.MathUtils.damp(
        mainMaterialRef.current.opacity,
        targetOpacity,
        3,
        delta,
      );
    }

    /* -----------------------------------------------
         BREATHING NEON GLOW
      ------------------------------------------------ */

    const pulse = reduceMotion ? 0 : Math.sin(state.clock.elapsedTime * 1.4);

    if (cyanGlowRef.current) {
      cyanGlowRef.current.opacity = 0.075 + pulse * 0.017;
    }

    if (pinkGlowRef.current) {
      pinkGlowRef.current.opacity = 0.05 + pulse * 0.012;
    }

    /* -----------------------------------------------
         SHINE SWEEP
      ------------------------------------------------ */

    if (shineRef.current) {
      shineRef.current.uniforms.uTime.value = state.clock.elapsedTime;

      shineRef.current.uniforms.uStrength.value = THREE.MathUtils.lerp(
        0.9,
        0.28,
        progress,
      );
    }
  });

  return (
    <Float
      speed={reduceMotion ? 0 : 0.85}
      rotationIntensity={reduceMotion ? 0 : 0.015}
      floatIntensity={reduceMotion ? 0 : 0.08}
      floatingRange={[-0.018, 0.018]}
    >
      <group
        ref={groupRef}
        position={[0, 0.32, 0]}
        scale={[baseScale, baseScale, baseScale]}
      >
        {/* =================================================
            CYAN AURA
        ================================================= */}

        <mesh position={[0, 0, -0.26]} scale={1.09}>
          <planeGeometry args={[1.8, 1.8]} />

          <meshBasicMaterial
            ref={cyanGlowRef}
            map={texture}
            transparent
            opacity={0.075}
            color={color}
            depthWrite={false}
            toneMapped={false}
            blending={THREE.AdditiveBlending}
          />
        </mesh>

        {/* =================================================
            PINK / PURPLE AURA
        ================================================= */}

        <mesh position={[0, 0, -0.19]} scale={1.05}>
          <planeGeometry args={[1.8, 1.8]} />

          <meshBasicMaterial
            ref={pinkGlowRef}
            map={texture}
            transparent
            opacity={0.05}
            color="#F42BC7"
            depthWrite={false}
            toneMapped={false}
            blending={THREE.AdditiveBlending}
          />
        </mesh>

        {/* =================================================
            3D DEPTH
        ================================================= */}

        {depthLayers.map((layer) => {
          const z = -0.013 * (layer + 1);

          return (
            <mesh key={layer} position={[0, 0, z]}>
              <planeGeometry args={[1.8, 1.8]} />

              <meshBasicMaterial
                map={texture}
                transparent
                opacity={0.045}
                color={layer % 2 === 0 ? "#00E5FF" : "#B537FF"}
                depthWrite={false}
                toneMapped={false}
              />
            </mesh>
          );
        })}

        {/* =================================================
            REAL LOGO
        ================================================= */}

        <mesh position={[0, 0, 0.025]}>
          <planeGeometry args={[1.8, 1.8]} />

          <meshBasicMaterial
            ref={mainMaterialRef}
            map={texture}
            transparent
            opacity={1}
            alphaTest={0.015}
            depthWrite
            toneMapped={false}
            side={THREE.DoubleSide}
          />
        </mesh>

        {/* =================================================
            MOVING SHINE

            A diagonal white/cyan streak periodically
            travels across the actual logo shape.
        ================================================= */}

        {!reduceMotion && (
          <mesh position={[0, 0, 0.035]}>
            <planeGeometry args={[1.8, 1.8]} />

            <shaderMaterial
              ref={shineRef}
              uniforms={shineUniforms}
              transparent
              depthWrite={false}
              toneMapped={false}
              blending={THREE.AdditiveBlending}
              vertexShader={`
                varying vec2 vUv;

                void main() {
                  vUv = uv;

                  gl_Position =
                    projectionMatrix *
                    modelViewMatrix *
                    vec4(
                      position,
                      1.0
                    );
                }
              `}
              fragmentShader={`
                uniform sampler2D uTexture;
                uniform float uTime;
                uniform float uStrength;

                varying vec2 vUv;

                void main() {
                  vec4 logo =
                    texture2D(
                      uTexture,
                      vUv
                    );

                  /*
                   * Moves the shine from
                   * lower-left to upper-right.
                   */

                  float travel =
                    mod(
                      uTime * 0.24,
                      2.5
                    ) - 0.8;

                  float diagonal =
                    vUv.x +
                    vUv.y * 0.42;

                  float distanceFromShine =
                    abs(
                      diagonal -
                      travel
                    );

                  float shine =
                    1.0 -
                    smoothstep(
                      0.0,
                      0.09,
                      distanceFromShine
                    );

                  /*
                   * Sharper center.
                   */

                  shine =
                    pow(
                      shine,
                      2.2
                    );

                  /*
                   * Only show shine where
                   * the PNG is visible.
                   */

                  float alpha =
                    logo.a *
                    shine *
                    uStrength;

                  /*
                   * Slight cyan tint rather
                   * than pure white.
                   */

                  vec3 white =
                    vec3(
                      1.0,
                      1.0,
                      1.0
                    );

                  vec3 cyan =
                    vec3(
                      0.35,
                      0.92,
                      1.0
                    );

                  vec3 shineColor =
                    mix(
                      white,
                      cyan,
                      0.22
                    );

                  gl_FragColor =
                    vec4(
                      shineColor,
                      alpha
                    );
                }
              `}
            />
          </mesh>
        )}
      </group>
    </Float>
  );
}

/* =========================================================
   CANVAS
========================================================= */

export function Scene({ color = "#00E5FF" }: { color?: string }) {
  return (
    <Canvas
      camera={{
        position: [0, 0, 6.6],

        fov: 42,

        near: 0.1,

        far: 100,
      }}
      dpr={[1, 1.5]}
      gl={{
        antialias: true,

        alpha: true,

        powerPreference: "high-performance",
      }}
      style={{
        width: "100%",

        height: "100%",

        background: "transparent",
      }}
    >
      <Suspense fallback={null}>
        <OctofestLogo color={color} />
      </Suspense>
    </Canvas>
  );
}
