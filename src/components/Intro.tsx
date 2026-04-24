"use client";

import { TextReveal } from "./TextReveal";
import { Reveal } from "./Reveal";

export function Intro() {
  return (
    <section className="relative mx-auto max-w-[1400px] px-6 py-32 md:px-10 md:py-48">
      <div className="grid gap-16 md:grid-cols-[1.2fr_1fr] md:gap-24">
        <div>
          <Reveal>
            <p className="mb-8 font-mono text-[11px] uppercase tracking-[0.24em] text-[var(--ink-muted)]">
              01 — The studio
            </p>
          </Reveal>
          <TextReveal
            as="h2"
            text="We don't sell trips. We compose them — slowly, privately, with obsessive attention to texture."
            className="font-display text-[clamp(32px,4.6vw,64px)] font-[300] leading-[1.02] tracking-[-0.015em] text-[var(--ink)]"
            stagger={40}
          />
        </div>

        <div className="flex flex-col justify-end gap-10">
          <Reveal delay={150}>
            <p className="max-w-md text-[16px] leading-[1.7] text-[var(--ink-muted)]">
              Every Wanderlux journey begins with a conversation, not a
              catalogue. We pair each guest with a route designer who knows
              their region intimately — down to the chef&rsquo;s best Tuesday, the
              shepherd with the quietest land, the road that opens only at
              dawn.
            </p>
          </Reveal>

          <Reveal delay={250}>
            <div className="grid grid-cols-3 gap-6 border-t border-[var(--line)] pt-8">
              <Stat label="Countries" value="42" />
              <Stat label="Journeys / yr" value="210" />
              <Stat label="Guest rating" value="4.96" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col">
      <span className="font-display text-[40px] font-[300] leading-none tracking-tight text-[var(--ink)] md:text-[48px]">
        {value}
      </span>
      <span className="mt-2 font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--ink-muted)]">
        {label}
      </span>
    </div>
  );
}
