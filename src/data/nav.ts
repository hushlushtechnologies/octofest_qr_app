import type { LucideIcon } from "lucide-react";
import { Home, Building2, Car, Cpu } from "lucide-react";

export interface NavItem {
  label: string;
  href: string;
  icon: LucideIcon;
}

export const navItems: NavItem[] = [
  { label: "Home", href: "/", icon: Home },
  { label: "Property", href: "/property", icon: Building2 },
  { label: "Cars", href: "/cars", icon: Car },
  { label: "Tech", href: "/hushlush", icon: Cpu },
];
