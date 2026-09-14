"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

interface PropertyInterestContextValue {
  selectedInvestorType: string | null;
  setSelectedInvestorType: (id: string | null) => void;
}

const PropertyInterestContext =
  createContext<PropertyInterestContextValue | null>(null);

export function PropertyInterestProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [selectedInvestorType, setSelectedInvestorType] = useState<
    string | null
  >(null);

  return (
    <PropertyInterestContext.Provider
      value={{ selectedInvestorType, setSelectedInvestorType }}
    >
      {children}
    </PropertyInterestContext.Provider>
  );
}

export function usePropertyInterest() {
  const context = useContext(PropertyInterestContext);
  if (!context) {
    throw new Error(
      "usePropertyInterest must be used within a PropertyInterestProvider",
    );
  }
  return context;
}
