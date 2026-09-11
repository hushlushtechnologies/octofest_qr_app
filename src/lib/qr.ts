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

// Maps a QR's `type` param to the actual destination route.
export function resolveDestination(type: string | null): string {
  switch (type) {
    case "property":
      return "/property";
    case "cars":
      return "/cars";
    case "hushlush":
      return "/hushlush";
    default:
      return "/";
  }
}
