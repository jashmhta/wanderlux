"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { Reveal } from "./Reveal";
import { TextReveal } from "./TextReveal";

interface Experience {
  title: string;
  caption: string;
  aspect: string;
  image: string;
  span?: string;
}

const experiences: Experience[] = [
  {
    title: "Sunrise on the dunes",
    caption: "Erg Chebbi, Morocco",
    aspect: "aspect-[5/7]",
    image:
      "https://images.unsplash.com/photo-1473580044384-7ba9967e16a0?auto=format&fit=crop&w=1200&q=80",
    span: "md:col-span-4 md:row-span-2",
  },
  {
    title: "The old trail",
    caption: "Kumano Kodo, Japan",
    aspect: "aspect-[4/5]",
    image:
      "https://images.unsplash.com/photo-1480796927426-f609979314bd?auto=format&fit=crop&w=1200&q=80",
    span: "md:col-span-3",
  },
  {
    title: "A quieter coast",
    caption: "Praiano, Italy",
    aspect: "aspect-[5/4]",
    image:
      "https://images.unsplash.com/photo-1534312527009-56c7016453e6?auto=format&fit=crop&w=1200&q=80",
    span: "md:col-span-5",
  },
  {
    title: "Long road home",
    caption: "Salta, Argentina",
    aspect: "aspect-[4/5]",
    image:
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1200&q=80",
    span: "md:col-span-4",
  },
  {
    title: "The colour of altitude",
    caption: "Zanskar, Ladakh",
    aspect: "aspect-[5/6]",
    image:
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1200&q=80",
    span: "md:col-span-4",
  },
  {
    title: "Basecamp dinner",
    caption: "Torres del Paine",
    aspect: "aspect-[4/3]",
    image:
      "https://images.unsplash.com/photo-1504851149312-7a075b496cc7?auto=format&fit=crop&w=1200&q=80",
    span: "md:col-span-4",
  },
];

export function Experiences() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const items = Array.from(el.querySelectorAll<HTMLDivElement>("[data-parallax]"));
    const onScroll = () => {
      items.forEach((it) => {
        const rect = it.getBoundingClientRect();
        const speed = Number(it.dataset.speed ?? "0.12");
        const center = rect.top + rect.height / 2 - window.innerHeight / 2;
        const y = center * speed * -1;
        it.style.transform = `translate3d(0, ${y}px, 0)`;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      id="experiences"
      ref={sectionRef}
      className="relative border-t border-[var(--line)] bg-[var(--bg)] py-32 md:py-48"
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="mb-16 md:mb-24">
          <Reveal>
            <p className="mb-6 font-mono text-[11px] uppercase tracking-[0.24em] text-[var(--ink-muted)]">
              04 — Experiences
            </p>
          </Reveal>
          <TextReveal
            as="h2"
            text="Moments we keep returning to."
            className="font-display text-[clamp(32px,5vw,80px)] font-[300] leading-[1.02] tracking-[-0.02em] text-[var(--ink)]"
          />
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-12 md:gap-6">
          {experiences.map((e, i) => (
            <figure
              key={e.title}
              className={`group relative overflow-hidden rounded-2xl bg-[var(--bg-elev)] ${e.span ?? "md:col-span-4"}`}
            >
              <div
                className={`relative ${e.aspect} w-full overflow-hidden`}
              >
                <div
                  data-parallax
                  data-speed={0.08 + (i % 3) * 0.04}
                  className="absolute inset-[-10%] will-change-transform"
                >
                  <Image
                    src={e.image}
                    alt={e.title}
                    fill
                    sizes="(min-width: 768px) 40vw, 50vw"
                    className="object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.2,0.7,0.2,1)] group-hover:scale-[1.06]"
                  />
                </div>
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>
              <figcaption className="absolute bottom-5 left-5 right-5 flex items-end justify-between text-white">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/70">
                    {e.caption}
                  </p>
                  <p className="mt-1.5 font-display text-[20px] font-[300] leading-[1.15]">
                    {e.title}
                  </p>
                </div>
                <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/60">
                  0{i + 1}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
