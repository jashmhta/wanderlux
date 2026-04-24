"use client";

import { Camera, Send, Globe, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative border-t border-[var(--line)] bg-[var(--bg)] pt-20 pb-10">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        {/* Giant brand wordmark */}
        <div className="relative mb-16 overflow-hidden">
          <p className="select-none font-display text-[clamp(80px,20vw,280px)] font-[300] leading-[0.85] tracking-[-0.04em] text-[var(--ink)]">
            Wanderlux
          </p>
          <span className="absolute bottom-4 right-0 font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--ink-muted)]">
            © 2025
          </span>
        </div>

        <div className="grid grid-cols-2 gap-10 border-t border-[var(--line)] pt-12 md:grid-cols-4">
          <div className="col-span-2">
            <p className="max-w-sm text-[14px] leading-[1.7] text-[var(--ink-muted)]">
              A small studio of route-makers, hosts and photographers — designing
              private journeys across 42 countries since 2014.
            </p>
            <div className="mt-8 flex items-center gap-3">
              {[
                { icon: Camera, href: "#" },
                { icon: Send, href: "#" },
                { icon: Globe, href: "#" },
                { icon: Mail, href: "mailto:hello@wanderlux.travel" },
              ].map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--line)] text-[var(--ink-soft)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
                  aria-label="Social link"
                >
                  <Icon size={15} strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>

          <FooterCol
            title="Studio"
            links={[
              ["About", "#"],
              ["Journal", "#"],
              ["Press", "#"],
              ["Careers", "#"],
            ]}
          />
          <FooterCol
            title="Journeys"
            links={[
              ["Private", "#"],
              ["Small group", "#"],
              ["Family", "#"],
              ["Seasonal", "#"],
            ]}
          />
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-[var(--line)] pt-8 font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--ink-muted)] md:flex-row md:items-center">
          <p>hello@wanderlux.travel · New York · Lisbon · Tokyo</p>
          <p>Made slowly, on purpose.</p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: Array<[string, string]>;
}) {
  return (
    <div>
      <p className="mb-5 font-mono text-[10px] uppercase tracking-[0.24em] text-[var(--ink-muted)]">
        {title}
      </p>
      <ul className="space-y-3">
        {links.map(([label, href]) => (
          <li key={label}>
            <a
              href={href}
              className="link-underline text-[14px] text-[var(--ink-soft)]"
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
