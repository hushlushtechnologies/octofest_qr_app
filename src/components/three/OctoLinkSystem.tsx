// "use client";

// import { useRef } from "react";
// import { useFrame } from "@react-three/fiber";
// import { MeshDistortMaterial } from "@react-three/drei";
// import { useReducedMotion } from "motion/react";
// import * as THREE from "three";

// interface NodeConfig {
//   color: string;
//   radius: number;
//   speed: number;
//   phase: number;
//   yAmplitude: number;
// }

// // Property (signal blue), Cars (neutral chrome), Hush Lush (violet) —
// // evenly spaced around the core (2π/3 apart) so they read as three
// // distinct, balanced connections, not clustered.
// const nodeConfigs: NodeConfig[] = [
//   { color: "#3D7FFF", radius: 2.1, speed: 0.35, phase: 0, yAmplitude: 0.25 },
//   {
//     color: "#C7CEDB",
//     radius: 2.1,
//     speed: 0.35,
//     phase: (Math.PI * 2) / 3,
//     yAmplitude: 0.25,
//   },
//   {
//     color: "#9D7BFF",
//     radius: 2.1,
//     speed: 0.35,
//     phase: (Math.PI * 4) / 3,
//     yAmplitude: 0.25,
//   },
// ];

// interface OctoLinkSystemProps {
//   coreColor: string;
// }

// export function OctoLinkSystem({ coreColor }: OctoLinkSystemProps) {
//   const coreRef = useRef<THREE.Mesh>(null);
//   const nodeRefs = useRef<(THREE.Mesh | null)[]>([]);
//   const lineRefs = useRef<(THREE.Line | null)[]>([]);
//   const prefersReducedMotion = useReducedMotion();

//   // Single shared loop drives the core, all 3 nodes, and all 3 lines —
//   // one useFrame subscription instead of six, which is cheaper for
//   // React Three Fiber to schedule every frame.
//   useFrame((state, delta) => {
//     const t = state.clock.elapsedTime;

//     if (coreRef.current && !prefersReducedMotion) {
//       coreRef.current.rotation.y += delta * 0.15;
//     }

//     nodeConfigs.forEach((config, i) => {
//       const node = nodeRefs.current[i];
//       const line = lineRefs.current[i];
//       if (!node) return;

//       const angle = prefersReducedMotion
//         ? config.phase
//         : t * config.speed + config.phase;
//       const x = Math.cos(angle) * config.radius;
//       const z = Math.sin(angle) * config.radius;
//       const y = prefersReducedMotion
//         ? 0
//         : Math.sin(t * 0.6 + config.phase) * config.yAmplitude;

//       node.position.set(x, y, z);

//       if (line) {
//         // Mutate the existing buffer in place rather than creating a
//         // new geometry every frame — avoids constant allocation/GC
//         // pressure, which matters a lot more on mobile GPUs.
//         const positions = line.geometry.attributes
//           .position as THREE.BufferAttribute;
//         positions.setXYZ(0, 0, 0, 0);
//         positions.setXYZ(1, x, y, z);
//         positions.needsUpdate = true;
//       }
//     });
//   });

//   return (
//     <group>
//       <mesh ref={coreRef}>
//         <icosahedronGeometry args={[0.9, 1]} />
//         <MeshDistortMaterial
//           color={coreColor}
//           speed={prefersReducedMotion ? 0 : 1.2}
//           distort={0.3}
//           roughness={0.2}
//           metalness={0.4}
//         />
//       </mesh>

//       {nodeConfigs.map((config, i) => (
//         <group key={config.color}>
//           <mesh
//             ref={(el) => {
//               nodeRefs.current[i] = el;
//             }}
//           >
//             <icosahedronGeometry args={[0.22, 0]} />
//             <meshStandardMaterial
//               color={config.color}
//               roughness={0.3}
//               metalness={0.5}
//             />
//           </mesh>
//           <line
//             ref={(el) => {
//               lineRefs.current[i] = el;
//             }}
//           >
//             <bufferGeometry>
//               <bufferAttribute
//                 attach="attributes-position"
//                 count={2}
//                 array={new Float32Array(6)}
//                 itemSize={3}
//               />
//             </bufferGeometry>
//             <lineBasicMaterial
//               color={config.color}
//               transparent
//               opacity={0.35}
//             />
//           </line>
//         </group>
//       ))}
//     </group>
//   );
// }
