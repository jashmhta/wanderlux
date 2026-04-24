"use client";

import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { TextReveal } from "./TextReveal";

export function CTA() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-[var(--line)] bg-[var(--bg-elev)] py-32 md:py-48"
    >
      {/* Rotating light behind CTA */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[90vmin] w-[90vmin] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background:
            "conic-gradient(from 0deg, transparent 0 30%, rgb(var(--glow) / 0.35) 50%, transparent 70%)",
          filter: "blur(60px)",
          animation: "cta-spin 18s linear infinite",
          opacity: 0.8,
        }}
      />
      <style>{`
        @keyframes cta-spin {
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }
      `}</style>

      <div className="relative mx-auto flex max-w-[1400px] flex-col items-center gap-14 px-6 text-center md:px-10">
        <Reveal>
          <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[var(--ink-muted)]">
            07 — Begin
          </p>
        </Reveal>

        <TextReveal
          as="h2"
          text="Tell us where you've always wanted to go."
          className="max-w-5xl font-display text-[clamp(40px,7vw,120px)] font-[300] leading-[0.98] tracking-[-0.025em] text-[var(--ink)]"
          stagger={70}
        />

        <Reveal delay={400}>
          <p className="max-w-xl text-[16px] leading-[1.7] text-[var(--ink-muted)]">
            Send us a note. A route designer will reply within 24 hours with a
            rough sketch of what your journey could look like — no obligation,
            no pressure.
          </p>
        </Reveal>

        <Reveal delay={500}>
          <div className="flex flex-col items-center gap-4 sm:flex-row">
            <a
              href="mailto:hello@wanderlux.travel"
              className="group inline-flex items-center gap-3 rounded-full bg-[var(--ink)] px-8 py-4 text-[14px] font-medium text-[var(--bg)] transition-transform hover:-translate-y-0.5"
            >
              Start a conversation
              <ArrowUpRight
                size={16}
                className="transition-transform duration-500 group-hover:rotate-45"
              />
            </a>
            <a
              href="tel:+1-000-000-0000"
              className="link-underline text-[14px] text-[var(--ink-soft)]"
            >
              or call +1 (000) 000-0000
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
