"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "@/data/nav";

export function DesktopNav() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Primary"
      className="hidden items-center gap-1 rounded-full border border-border bg-glass px-1.5 py-1.5 backdrop-blur-xl md:flex"
    >
      {navItems.map(({ label, href, icon: Icon }) => {
        const isActive = pathname === href;
        return (
          <Link
            key={href}
            href={href}
            aria-current={isActive ? "page" : undefined}
            className={`flex items-center gap-2 rounded-full px-4 py-2 text-xs transition-colors ${
              isActive
                ? " octo-button octo-button-primary text-ink"
                : "text-text-secondary hover:text-foreground"
            }`}
          >
            <Icon className="h-4 w-4" />
            {label}
          </Link>
        );
      })}
    </nav>
  );
}
