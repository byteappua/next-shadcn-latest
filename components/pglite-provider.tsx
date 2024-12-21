// app/context/ThemeContext.tsx (continued)
"use client";
import type { PGlite } from "@electric-sql/pglite";
import { PGlite as PgliteInstance } from "@electric-sql/pglite";
import React, { createContext, useMemo, useEffect, useState, Suspense } from "react";

export interface PgliteContextType {
  pglite: PGlite | null;
  setPglite: React.Dispatch<React.SetStateAction<PGlite | null>>;
}

export const PgliteContext = createContext<PgliteContextType | null>(null);

const getInitialPglite = (): PGlite => {
  return new PgliteInstance("idb://my-pgdata1");
};

export function PgliteProvider({ children }: Readonly<{ children: React.ReactNode }>) {
  const [pglite, setPglite] = useState<PGlite | null>(null);
  const [read, setRead] = useState<boolean>(false);

  const value = useMemo(() => ({ pglite, setPglite }), [pglite]);
  useEffect(() => {
    const param = getInitialPglite();
    setPglite(param);
    setRead(true);
    console.log("pg init");
  }, []);

  if (!read) {
    return <div>Loading...</div>;
  }
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PgliteContext.Provider value={value}>{children}</PgliteContext.Provider>
    </Suspense>
  );
}
