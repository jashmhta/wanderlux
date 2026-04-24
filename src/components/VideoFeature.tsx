"use client";

import { useEffect, useRef, useState } from "react";
import { Play } from "lucide-react";
import { TextReveal } from "./TextReveal";
import { Reveal } from "./Reveal";

const videoSrc =
  "https://videos.pexels.com/video-files/4763824/4763824-uhd_3840_2160_24fps.mp4";
const poster =
  "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=2000&q=80";

export function VideoFeature() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);
  const [playing, setPlaying] = useState(true);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const frame = el.querySelector<HTMLDivElement>("[data-video-frame]");
    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const total = rect.height + vh;
      const progress = Math.min(Math.max((vh - rect.top) / total, 0), 1);
      if (frame) {
        // Expand width from 70% to 100% as we scroll through
        const width = 70 + progress * 30;
        const radius = 32 - progress * 22;
        frame.style.width = `${width}%`;
        frame.style.borderRadius = `${radius}px`;
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggle = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play();
      setPlaying(true);
    } else {
      v.pause();
      setPlaying(false);
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden border-t border-[var(--line)] bg-[var(--bg-elev)] py-28 md:py-40"
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="mb-14 flex flex-col gap-8 md:mb-20 md:flex-row md:items-end md:justify-between">
          <div>
            <Reveal>
              <p className="mb-6 font-mono text-[11px] uppercase tracking-[0.24em] text-[var(--ink-muted)]">
                05 — The film
              </p>
            </Reveal>
            <TextReveal
              as="h2"
              text="A year on the road, captured in one reel."
              className="max-w-3xl font-display text-[clamp(32px,4.8vw,70px)] font-[300] leading-[1.02] tracking-[-0.02em] text-[var(--ink)]"
            />
          </div>
          <Reveal delay={200}>
            <p className="max-w-sm text-[15px] leading-[1.7] text-[var(--ink-muted)]">
              Shot across eleven countries by our in-house director of
              photography. No models, no actors — just our guests, our hosts,
              and our routes.
            </p>
          </Reveal>
        </div>
      </div>

      <div className="flex justify-center">
        <div
          data-video-frame
          className="relative aspect-video w-[70%] overflow-hidden rounded-[32px] bg-black shadow-2xl transition-[width,border-radius] duration-200 will-change-[width]"
        >
          <video
            ref={videoRef}
            className="h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster={poster}
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
          <button
            type="button"
            onClick={toggle}
            aria-label={playing ? "Pause" : "Play"}
            className="absolute inset-0 flex items-center justify-center"
          >
            <span className="pointer-events-none inline-flex h-20 w-20 items-center justify-center rounded-full border border-white/40 bg-black/20 text-white backdrop-blur-md transition-transform duration-500 hover:scale-110 md:h-24 md:w-24">
              <Play size={22} strokeWidth={1.5} fill="currentColor" />
            </span>
          </button>
          <div className="pointer-events-none absolute bottom-5 left-6 right-6 flex items-end justify-between text-white">
            <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-white/70">
              Wanderlux · 2025
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-white/70">
              02:14
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
