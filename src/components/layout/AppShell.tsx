import { type ReactNode } from "react";
import { AppBar } from "@/components/layout/AppBar";
import { BottomNav } from "@/components/layout/BottomNav";
import { PageTransition } from "@/components/motion/PageTransition";

export function AppShell({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-dvh flex-col">
      <AppBar />
      <div className="flex-1 pb-20 md:pb-0">
        <PageTransition>{children}</PageTransition>
      </div>
      <BottomNav />
    </div>
  );
}
