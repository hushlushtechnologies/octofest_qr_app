import { ThreeShowcase } from "@/components/three/ThreeShowcase";

export function HomeVisualLayer() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-10">
      <ThreeShowcase />
    </div>
  );
}
