import type { QRContextData } from "@/types/qr";

const STORAGE_KEY = "octolink-qr-context";

export function getStoredQRContext(): QRContextData | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.sessionStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as QRContextData) : null;
  } catch {
    return null;
  }
}

export function storeQRContext(data: QRContextData) {
  if (typeof window === "undefined") return;
  try {
    window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch {
    // sessionStorage can fail in private browsing on some browsers —
    // fail silently, the app still works without persisted context
  }
}

// Maps a QR's `type` (+ optional `item`) to the actual destination
// route. A car-specific QR (`type=cars&item=sample-gt-coupe`) now
// resolves straight to that car's detail page instead of the
// collection — the more useful landing spot when a QR is physically
// posted beside one specific vehicle.
export function resolveDestination(
  type: string | null,
  item: string | null,
): string {
  switch (type) {
    case "property":
      return "/property";
    case "cars":
      return item ? `/cars/${item}` : "/cars";
    case "hushlush":
      return "/hushlush";
    default:
      return "/";
  }
}
