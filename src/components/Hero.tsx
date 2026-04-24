"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowDown, Play } from "lucide-react";
import { heroVideos } from "@/lib/data";
import { TextReveal } from "./TextReveal";

const posterLight =
  "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=2400&q=80";
const posterDark =
  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=2400&q=80";

export function Hero() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const onCanPlay = () => setVideoLoaded(true);
    v.addEventListener("loadeddata", onCanPlay);
    v.play().catch(() => {
      /* autoplay blocked, poster will show */
    });
    return () => v.removeEventListener("loadeddata", onCanPlay);
  }, []);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const content = el.querySelector<HTMLDivElement>("[data-hero-content]");
    const video = el.querySelector<HTMLDivElement>("[data-hero-video]");
    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      const y = -rect.top;
      const progress = Math.min(Math.max(y / window.innerHeight, 0), 1);
      if (content) {
        content.style.transform = `translate3d(0, ${progress * 80}px, 0)`;
        content.style.opacity = String(1 - progress * 0.9);
      }
      if (video) {
        video.style.transform = `translate3d(0, ${progress * 40}px, 0) scale(${1 + progress * 0.06})`;
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-[100svh] min-h-[640px] w-full overflow-hidden"
    >
      {/* Background video + poster */}
      <div data-hero-video className="absolute inset-0 will-change-transform">
        <picture className="absolute inset-0 block">
          <source media="(prefers-color-scheme: dark)" srcSet={posterDark} />
          <img
            src={posterLight}
            alt=""
            className="h-full w-full object-cover"
          />
        </picture>
        <video
          ref={videoRef}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-[1500ms] ${
            videoLoaded ? "opacity-100" : "opacity-0"
          }`}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster={posterDark}
        >
          {heroVideos.map((src) => (
            <source key={src} src={src} type="video/mp4" />
          ))}
        </video>

        {/* Cinematic gradient over video */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/10 via-black/25 to-[var(--bg)]/95" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,rgba(0,0,0,0.55)_100%)]" />

        {/* Rotating light orb */}
        <div
          className="glow-orb"
          style={{
            top: "20%",
            left: "15%",
            width: "40vmin",
            height: "40vmin",
            background: "rgb(var(--glow) / 0.5)",
          }}
        />
        <div
          className="glow-orb"
          style={{
            bottom: "15%",
            right: "12%",
            width: "35vmin",
            height: "35vmin",
            background: "rgb(var(--glow) / 0.35)",
          }}
        />
      </div>

      {/* Foreground content */}
      <div
        data-hero-content
        className="relative z-10 mx-auto flex h-full max-w-[1400px] flex-col justify-end px-6 pb-20 md:px-10 md:pb-24"
      >
        <div className="mb-8 flex items-center gap-3 text-[11px] font-mono uppercase tracking-[0.24em] text-white/75">
          <span className="h-px w-8 bg-white/60" />
          <span>Private travel · 42 countries · Since 2014</span>
        </div>

        <TextReveal
          as="h1"
          text="Travel, composed like a film."
          className="font-display text-[clamp(48px,8.6vw,148px)] font-[300] leading-[0.92] tracking-[-0.02em] text-white"
          stagger={90}
        />

        <div className="mt-10 flex flex-col items-start gap-8 md:flex-row md:items-end md:justify-between">
          <p className="max-w-md text-[15px] leading-[1.6] text-white/75 md:text-[16px]">
            Wanderlux is a small studio of route-makers, chefs, drivers and
            photographers. We design private journeys through the world&rsquo;s
            rarest corners — one guest at a time.
          </p>

          <div className="flex items-center gap-4">
            <a
              href="#packages"
              className="group inline-flex items-center gap-3 rounded-full bg-white px-6 py-3.5 text-[13px] font-medium text-black transition-transform hover:-translate-y-0.5"
            >
              Explore journeys
              <ArrowDown
                size={14}
                className="transition-transform duration-500 group-hover:translate-y-0.5"
              />
            </a>
            <button
              type="button"
              className="group inline-flex items-center gap-3 rounded-full border border-white/30 px-5 py-3 text-[13px] font-medium text-white transition-colors hover:border-white/70"
            >
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10 transition-colors group-hover:bg-white/25">
                <Play size={11} strokeWidth={2} fill="currentColor" />
              </span>
              Watch the film
              <span className="font-mono text-[10px] text-white/50">02:14</span>
            </button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-[10px] font-mono uppercase tracking-[0.3em] text-white/60">
          <span>Scroll</span>
          <span className="relative block h-8 w-px overflow-hidden bg-white/20">
            <span className="absolute inset-x-0 top-0 h-3 animate-[scrollIndicator_2s_ease-in-out_infinite] bg-white/80" />
          </span>
        </div>
      </div>

      <style>{`
        @keyframes scrollIndicator {
          0% { transform: translateY(-100%); }
          60% { transform: translateY(100%); }
          100% { transform: translateY(100%); }
        }
      `}</style>
    </section>
  );
}
