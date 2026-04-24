"use client";

import { Star } from "lucide-react";

const words = [
  "Private journeys",
  "Crafted routes",
  "Zero logistics",
  "42 countries",
  "Cinematic trips",
  "Small groups",
  "Local hosts",
  "Effortless luxury",
];

export function Marquee() {
  return (
    <section
      aria-hidden
      className="relative border-y border-[var(--line)] bg-[var(--bg-elev)] py-5"
    >
      <div className="flex overflow-hidden">
        <div className="marquee-track flex shrink-0 items-center gap-14 pr-14">
          {[...words, ...words, ...words].map((w, i) => (
            <span key={i} className="flex items-center gap-14 whitespace-nowrap">
              <span className="font-display text-[28px] font-[300] tracking-tight text-[var(--ink)] md:text-[36px]">
                {w}
              </span>
              <Star
                size={14}
                strokeWidth={1.25}
                className="text-[var(--accent)]"
              />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
