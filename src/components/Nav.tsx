"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ThemeToggle } from "./ThemeToggle";

const links = [
  { href: "#destinations", label: "Destinations" },
  { href: "#packages", label: "Journeys" },
  { href: "#experiences", label: "Experiences" },
  { href: "#journal", label: "Journal" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-6"
      }`}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 md:px-10">
        <Link
          href="/"
          className="flex items-baseline gap-2"
          aria-label="Wanderlux home"
        >
          <span className="font-display text-[22px] leading-none tracking-tight">
            Wanderlux
          </span>
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--ink-muted)]">
            est. 2014
          </span>
        </Link>

        <nav
          className={`hidden items-center gap-1 rounded-full border border-[var(--line)] bg-[var(--surface)]/60 px-2 py-1.5 backdrop-blur-xl transition-colors md:flex ${
            scrolled ? "shadow-[0_4px_24px_rgba(0,0,0,0.06)]" : ""
          }`}
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full px-4 py-1.5 text-[13px] text-[var(--ink-soft)] transition-colors hover:bg-[var(--bg-elev)] hover:text-[var(--ink)]"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <a
            href="#contact"
            className="hidden h-10 items-center rounded-full bg-[var(--ink)] px-5 text-[13px] font-medium text-[var(--bg)] transition-opacity hover:opacity-90 md:inline-flex"
          >
            Plan a journey
          </a>
        </div>
      </div>
    </header>
  );
}
