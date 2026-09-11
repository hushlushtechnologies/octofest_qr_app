import { type ReactNode } from "react";
import { AppBar } from "@/components/layout/AppBar";
import { BottomNav } from "@/components/layout/BottomNav";

export function AppShell({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-dvh flex-col">
      <AppBar />
      <div className="flex-1 pb-20 md:pb-0">{children}</div>
      <BottomNav />
    </div>
  );
}
