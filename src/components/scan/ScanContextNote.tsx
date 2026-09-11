"use client";

import { useQRContext } from "@/components/providers/QRContentProvider";
import { getEventBySlug } from "@/data/events";
import { Reveal } from "@/components/motion/Reveal";
import { Badge } from "@/components/ui/Badge";

export function ScanContextNote() {
  const { event, source } = useQRContext();
  const matchedEvent = getEventBySlug(event);

  // Nothing to show for a direct/organic visit — showing an empty or
  // generic note here would just be clutter on a page that has no
  // real content yet anyway.
  if (!matchedEvent) return null;

  return (
    <Reveal>
      <Badge variant="accent" className="w-fit">
        You're exploring from {matchedEvent.name}
        {source ? ` · ${source}` : ""}
      </Badge>
    </Reveal>
  );
}
