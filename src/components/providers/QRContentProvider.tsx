"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { getStoredQRContext } from "@/lib/qr";
import type { QRContextData } from "@/types/qr";

const defaultContext: QRContextData = { event: null, type: null, source: null };

const QRContext = createContext<QRContextData>(defaultContext);

export function QRContextProvider({ children }: { children: ReactNode }) {
  const [context, setContext] = useState<QRContextData>(defaultContext);

  // Reads sessionStorage on mount only — this is why it starts as
  // `defaultContext` (matches server render) and updates after,
  // avoiding a hydration mismatch.
  useEffect(() => {
    const stored = getStoredQRContext();
    if (stored) setContext(stored);
  }, []);

  return <QRContext.Provider value={context}>{children}</QRContext.Provider>;
}

export function useQRContext() {
  return useContext(QRContext);
}
