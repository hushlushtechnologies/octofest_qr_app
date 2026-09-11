"use client";

import { useEffect, useState } from "react";

// null = not checked yet, true/false once the check runs on mount.
// Checking has to happen client-side — there's no WebGL on the server.
export function useWebGLSupport() {
  const [supported, setSupported] = useState<boolean | null>(null);

  useEffect(() => {
    try {
      const canvas = document.createElement("canvas");
      const gl =
        canvas.getContext("webgl2") ||
        canvas.getContext("webgl") ||
        canvas.getContext("experimental-webgl");
      setSupported(!!gl);
    } catch {
      setSupported(false);
    }
  }, []);

  return supported;
}
