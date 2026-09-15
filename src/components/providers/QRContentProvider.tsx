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

const defaultContext: QRContextData = {
  event: null,
  type: null,
  source: null,
  item: null,
};

const QRContext = createContext<QRContextData>(defaultContext);

export function QRContextProvider({ children }: { children: ReactNode }) {
  const [context, setContext] = useState<QRContextData>(defaultContext);

  useEffect(() => {
    const stored = getStoredQRContext();
    if (stored) setContext(stored);
  }, []);

  return <QRContext.Provider value={context}>{children}</QRContext.Provider>;
}

export function useQRContext() {
  return useContext(QRContext);
}
