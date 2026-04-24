"use client";

import Image from "next/image";
import { ArrowUpRight, Star } from "lucide-react";
import { packages } from "@/lib/data";
import { Reveal } from "./Reveal";
import { TextReveal } from "./TextReveal";

export function Packages() {
  return (
    <section
      id="packages"
      className="relative overflow-hidden border-t border-[var(--line)] bg-[var(--bg-elev)] py-32 md:py-48"
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="mb-16 flex flex-col gap-6 md:mb-24 md:flex-row md:items-end md:justify-between">
          <div>
            <Reveal>
              <p className="mb-6 font-mono text-[11px] uppercase tracking-[0.24em] text-[var(--ink-muted)]">
                03 — Signature journeys
              </p>
            </Reveal>
            <TextReveal
              as="h2"
              text="Six journeys we return to, season after season."
              className="max-w-4xl font-display text-[clamp(32px,5vw,76px)] font-[300] leading-[1.02] tracking-[-0.02em] text-[var(--ink)]"
            />
          </div>
          <Reveal delay={200}>
            <a
              href="#"
              className="link-underline inline-flex shrink-0 items-center gap-2 font-mono text-[11px] uppercase tracking-[0.24em] text-[var(--ink)]"
            >
              Full catalogue
              <ArrowUpRight size={14} />
            </a>
          </Reveal>
        </div>

        <div className="grid gap-6 md:grid-cols-2 md:gap-8 xl:grid-cols-3">
          {packages.map((p, i) => (
            <Reveal key={p.slug} delay={i * 80}>
              <PackageCard pkg={p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function PackageCard({ pkg }: { pkg: (typeof packages)[number] }) {
  return (
    <article className="beam-card group flex h-full flex-col overflow-hidden">
      <div className="relative m-[1px] flex h-full flex-col overflow-hidden rounded-[21px] bg-[var(--surface)]">
        <div className="relative aspect-[5/6] w-full overflow-hidden">
          <Image
            src={pkg.image}
            alt={pkg.title}
            fill
            sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
            className="object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.2,0.7,0.2,1)] group-hover:scale-[1.06]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 text-[11px] font-medium text-white backdrop-blur">
            <Star size={11} fill="currentColor" strokeWidth={0} />
            {pkg.rating.toFixed(2)}
          </div>
          <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between text-white">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/75">
                {pkg.duration}
              </p>
              <h3 className="mt-2 font-display text-[28px] font-[300] leading-[1.05] tracking-tight">
                {pkg.title}
              </h3>
            </div>
            <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur transition-transform duration-500 group-hover:rotate-45 group-hover:bg-white group-hover:text-black">
              <ArrowUpRight size={16} />
            </span>
          </div>
        </div>

        <div className="flex flex-1 flex-col justify-between gap-6 p-6">
          <div>
            <p className="text-[13px] text-[var(--ink-muted)]">{pkg.location}</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {pkg.highlights.map((h) => (
                <li
                  key={h}
                  className="rounded-full border border-[var(--line)] px-3 py-1 text-[11px] text-[var(--ink-soft)]"
                >
                  {h}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-baseline justify-between border-t border-[var(--line)] pt-5">
            <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--ink-muted)]">
              From
            </span>
            <span className="font-display text-[22px] font-[300] tracking-tight text-[var(--ink)]">
              {pkg.from}
              <span className="ml-1 font-mono text-[11px] tracking-[0.2em] text-[var(--ink-muted)]">
                / person
              </span>
            </span>
          </div>
        </div>
      </div>
    </article>
  );
}
