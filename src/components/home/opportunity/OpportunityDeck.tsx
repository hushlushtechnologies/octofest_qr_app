"use client";

import { useEffect, useRef, useState } from "react";
import { opportunities } from "@/data/opportunities";
import { OpportunityCard } from "@/components/home/opportunity/OpportunityCard";

export function OpportunityDeck() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const handleScroll = () => {
      const cardWidth = el.firstElementChild?.clientWidth ?? 1;
      const index = Math.round(el.scrollLeft / (cardWidth + 16)); // 16 = gap-4
      setActiveIndex(Math.min(Math.max(index, 0), opportunities.length - 1));
    };

    el.addEventListener("scroll", handleScroll, { passive: true });
    return () => el.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex flex-col gap-4">
      <div
        ref={scrollRef}
        className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:mx-0 md:grid md:grid-cols-3 md:overflow-visible md:px-0 md:snap-none"
      >
        {opportunities.map((opportunity) => (
          <OpportunityCard key={opportunity.id} opportunity={opportunity} />
        ))}
      </div>

      <div
        role="tablist"
        aria-label="Opportunity cards"
        className="flex justify-center gap-1.5 md:hidden"
      >
        {opportunities.map((opportunity, i) => (
          <span
            key={opportunity.id}
            aria-hidden="true"
            className={`h-1.5 rounded-full transition-all duration-200 ${
              i === activeIndex
                ? "w-5 bg-accent-gold"
                : "w-1.5 bg-border-strong"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
