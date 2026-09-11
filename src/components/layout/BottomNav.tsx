"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "@/data/nav";

export function BottomNav() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Primary"
      className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-surface/90 backdrop-blur-xl md:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <ul className="flex h-16 items-stretch justify-around">
        {navItems.map(({ label, href, icon: Icon }) => {
          const isActive = pathname === href;
          return (
            <li key={href} className="flex-1">
              <Link
                href={href}
                aria-current={isActive ? "page" : undefined}
                className="flex h-full flex-col items-center justify-center gap-1 transition-colors"
              >
                <Icon
                  className={`h-5 w-5 ${
                    isActive ? "text-accent" : "text-text-muted"
                  }`}
                />
                <span
                  className={`text-label ${
                    isActive ? "text-accent" : "text-text-muted"
                  }`}
                >
                  {label}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
