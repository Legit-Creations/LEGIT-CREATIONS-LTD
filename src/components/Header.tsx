"use client"; // remove this line if you're not using the Next.js App Router

import { useEffect, useRef, useState } from "react";

/* ------------------------------------------------------------------ */
/* Nav data: edit labels/hrefs here. Icons are inline SVG (no deps).   */
/* ------------------------------------------------------------------ */

type NavItem = { id: string; label: string; href: string; icon: JSX.Element };

const iconProps = {
  width: 18,
  height: 18,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

// Hand offering a heart: "service"
const ServiceIcon = (
  <svg {...iconProps}>
    <path d="M12 9.5c-1.6-2.2-4.6-.6-3.4 1.6.7 1.2 3.4 3 3.4 3s2.7-1.8 3.4-3c1.2-2.2-1.8-3.8-3.4-1.6Z" />
    <path d="M2.5 14.5h2.8l3.2 1.6h4.2c.9 0 1.4 1.1.6 1.7l-.7.5" />
    <path d="M5.3 14.5v6M8.5 18.5l6.8 1.7 6.2-3.2c.8-.5.5-1.7-.5-1.7h-3.9" />
  </svg>
);

// Person with a badge: "resources & insights"
const InsightsIcon = (
  <svg {...iconProps}>
    <circle cx="12" cy="7.5" r="3.2" />
    <path d="M5.5 20.5v-1.2c0-3 2.9-5.3 6.5-5.3s6.5 2.3 6.5 5.3v1.2" />
    <path d="M9.5 16.5l2.5 2.2 2.5-2.2" />
  </svg>
);

const GenericIcon = (
  <svg {...iconProps}>
    <circle cx="12" cy="12" r="8.5" />
    <path d="M12 8v4l2.5 2" />
  </svg>
);

const NAV_ITEMS: NavItem[] = [
  { id: "service", label: "Service", href: "#service", icon: ServiceIcon },
  { id: "insights", label: "Resources & Insights", href: "#insights", icon: InsightsIcon },
  // Placeholders: these sit off-screen so the arrow button has something to reveal
  { id: "projects", label: "Projects", href: "#projects", icon: GenericIcon },
  { id: "about", label: "About us", href: "#about", icon: GenericIcon },
];

/* ------------------------------------------------------------------ */
/* Component                                                           */
/* ------------------------------------------------------------------ */

export default function Header() {
  const [active, setActive] = useState<string>("service");
  const [searchOpen, setSearchOpen] = useState(false);
  const [atEnd, setAtEnd] = useState(false);

  const scrollerRef = useRef<HTMLUListElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const searchBtnRef = useRef<HTMLButtonElement>(null);

  // Track whether the nav is scrolled to its end, so the arrow can flip direction
  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const update = () =>
      setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 4);
    update();
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  // Focus the search field when it opens; Esc closes it and returns focus
  useEffect(() => {
    if (searchOpen) searchInputRef.current?.focus();
  }, [searchOpen]);

  useEffect(() => {
    if (!searchOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSearchOpen(false);
        searchBtnRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [searchOpen]);

  const scrollNav = () => {
    const el = scrollerRef.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollTo({
      left: atEnd ? 0 : el.scrollLeft + el.clientWidth * 0.7,
      behavior: reduce ? "auto" : "smooth",
    });
  };

  const focusRing =
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f08a24] focus-visible:ring-offset-2 focus-visible:ring-offset-[#2b0f09]";

  return (
    <header
      className="sticky top-0 z-50 w-full bg-gradient-to-b from-[#e4e4e4] to-white shadow-[0_6px_16px_-6px_rgba(0,0,0,0.25)]"
      style={{ paddingTop: "env(safe-area-inset-top, 0px)" }}
    >
      {/* ---------- Row 1: logo, CTA, search ---------- */}
      <div className="mx-auto flex max-w-screen-xl items-center justify-between gap-3 px-2 py-3">
        <a
          href="/"
          aria-label="Legit Creations Ltd, home"
          className="flex flex-col items-end leading-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1f1f6b] focus-visible:ring-offset-2"
        >
          <span className="text-[20px] font-extrabold tracking-tight text-[#3a1409]">
            LEGIT CREATIONS
          </span>
          {/* Darker than the original gray so it passes WCAG AA on the gradient */}
          <span className="mt-0.5 text-[13px] font-medium text-[#5c5c5c]">ltd</span>
        </a>

        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="rounded-lg bg-[#1f1f6b] px-4 py-2.5 text-[13px] font-bold text-white transition-colors hover:bg-[#2a2a8a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1f1f6b] focus-visible:ring-offset-2"
          >
            Send Enquiry
          </a>

          <button
            ref={searchBtnRef}
            type="button"
            aria-label={searchOpen ? "Close search" : "Open search"}
            aria-expanded={searchOpen}
            aria-controls="site-search"
            onClick={() => setSearchOpen((v) => !v)}
            className="grid h-11 w-11 place-items-center rounded-full text-black transition-colors hover:bg-black/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1f1f6b]"
          >
            {searchOpen ? (
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden>
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            ) : (
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden>
                <circle cx="10.5" cy="10.5" r="6.5" />
                <path d="M15.5 15.5L21 21" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* ---------- Search panel (opens under row 1) ---------- */}
      <div
        id="site-search"
        hidden={!searchOpen}
        className="mx-2 mb-3"
      >
        <form role="search" action="/search" method="get" className="flex gap-2">
          <label htmlFor="site-search-input" className="sr-only">
            Search the site
          </label>
          <input
            ref={searchInputRef}
            id="site-search-input"
            name="q"
            type="search"
            placeholder="Search services and insights"
            className="h-11 min-w-0 flex-1 rounded-lg border border-[#b8a5a0] bg-white px-3 text-[15px] text-[#3a1409] placeholder:text-[#6b6b6b] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1f1f6b]"
          />
          <button
            type="submit"
            className="h-11 rounded-lg bg-[#2b0f09] px-4 text-[14px] font-bold text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f08a24] focus-visible:ring-offset-2"
          >
            Search
          </button>
        </form>
      </div>

      {/* ---------- Row 2: scrollable nav strip ---------- */}
      <nav aria-label="Primary" className="px-[5px] pb-2">
        <div className="flex items-center gap-2 rounded-md bg-[#2b0f09] px-2 py-1.5 ring-2 ring-[#b8a5a0]/70">
          <ul
            ref={scrollerRef}
            className="flex min-w-0 flex-1 items-center gap-2 overflow-x-auto scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden [mask-image:linear-gradient(to_right,black_88%,transparent)]"
          >
            {NAV_ITEMS.map((item) => {
              const isActive = item.id === active;
              return (
                <li key={item.id} className="shrink-0">
                  <a
                    href={item.href}
                    aria-current={isActive ? "page" : undefined}
                    onClick={() => setActive(item.id)}
                    className={[
                      "flex items-center gap-1.5 rounded px-2.5 py-1.5 text-[14px] font-bold whitespace-nowrap transition-colors",
                      focusRing,
                      isActive
                        ? "bg-[#f08a24] italic text-[#14144f]" // darker navy for stronger contrast on orange
                        : "text-white hover:bg-white/10",
                    ].join(" ")}
                  >
                    {item.icon}
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>

          <button
            type="button"
            onClick={scrollNav}
            aria-label={atEnd ? "Scroll menu back to start" : "Scroll menu for more links"}
            className={`grid h-8 w-8 shrink-0 place-items-center rounded-full border border-black bg-white text-black transition-transform hover:bg-[#f3f3f3] ${focusRing} ${
              atEnd ? "rotate-180" : ""
            }`}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <path d="M3 12h17M14 6l6 6-6 6" />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
}
