"use client";

import { ArrowRight, Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why-us" },
  { label: "Pricing", href: "#pricing" },
  { label: "Resources", href: "#resources" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-white/10 bg-obsidian/80 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            <a href="#top" className="flex items-center gap-3" aria-label="Legit Creations home">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-gold/40 bg-gold/10 font-display text-lg font-bold tracking-[0.18em] text-gold">
                L
              </div>

              <div>
                <div className="font-display text-[0.68rem] tracking-[0.28em] text-bone/80">
                  LEGIT
                </div>
                <div className="text-[0.62rem] tracking-[0.22em] text-bone/60">
                  CREATIONS LTD
                </div>
              </div>
            </a>

            <nav className="hidden items-center gap-8 md:flex">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-sm font-medium text-bone/75 transition-colors duration-200 hover:text-gold"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="hidden items-center gap-3 md:flex">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm font-medium text-bone/80 transition-colors hover:border-gold/40 hover:text-gold"
              >
                Book a Call
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-obsidian transition-transform duration-200 hover:-translate-y-0.5"
              >
                Send an Inquiry
                <ArrowRight size={16} />
              </a>
            </div>

            <button
              type="button"
              aria-label={open ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={open}
              onClick={() => setOpen((prev) => !prev)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-bone/80 transition-colors hover:border-gold/40 hover:text-gold md:hidden"
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </header>

      {open && (
        <div className="border-b border-white/10 bg-obsidian md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-6 sm:px-6">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-xl border border-white/10 px-4 py-3 text-sm font-medium text-bone/80 transition-colors hover:border-gold/40 hover:text-gold"
              >
                {item.label}
              </a>
            ))}

            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-gold px-5 py-3 text-sm font-semibold text-obsidian"
            >
              Send an Inquiry
              <ArrowRight size={16} />
            </a>
          </nav>
        </div>
      )}
    </>
  );
}
