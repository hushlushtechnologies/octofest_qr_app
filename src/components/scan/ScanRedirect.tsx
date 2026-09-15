"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { storeQRContext, resolveDestination } from "@/lib/qr";

interface ScanRedirectProps {
  event: string | null;
  type: string | null;
  source: string | null;
  item: string | null;
}

export function ScanRedirect({ event, type, source, item }: ScanRedirectProps) {
  const router = useRouter();

  useEffect(() => {
    storeQRContext({ event, type, source, item });
    router.replace(resolveDestination(type, item));
  }, [event, type, source, item, router]);

  return (
    <div className="flex min-h-dvh items-center justify-center">
      <div className="h-10 w-10 animate-pulse rounded-full bg-accent/30 blur-md" />
    </div>
  );
}
