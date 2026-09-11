import Link from "next/link";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { DesktopNav } from "@/components/layout/DesktopNav";

export function AppBar() {
  return (
    <header
      className="sticky top-0 z-40 flex items-center justify-between gap-4 border-b border-border bg-background/80 px-4 py-3 backdrop-blur-xl md:px-8"
      style={{ paddingTop: "max(0.75rem, env(safe-area-inset-top))" }}
    >
      <Link href="/" className="text-section text-foreground">
        OctoLink
      </Link>

      <DesktopNav />

      <ThemeToggle />
    </header>
  );
}
