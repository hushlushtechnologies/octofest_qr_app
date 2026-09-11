import type { OpportunityAccent } from "@/data/opportunities";
import type { ThemeMode } from "@/lib/theme";

interface AccentPalette {
  dark: string;
  light: string;
}

// Cars' silver in particular needed a darker light-mode variant —
// #C7CEDB on a white card had poor contrast. Property/Hush Lush get
// slightly deepened light variants too, for consistency and to stay
// comfortably above AA contrast on white surfaces.
export const accentPalette: Record<OpportunityAccent, AccentPalette> = {
  property: { dark: "#3D7FFF", light: "#2F5FDB" },
  cars: { dark: "#C7CEDB", light: "#5B6478" },
  hushlush: { dark: "#9D7BFF", light: "#7C5CE0" },
};

export function getAccentColor(accent: OpportunityAccent, theme: ThemeMode) {
  return accentPalette[accent][theme];
}
