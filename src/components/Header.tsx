"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useId, useState } from "react";
import { Menu, X } from "lucide-react";
import { BRAND } from "@/config/branding";

const navigation = [
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
];

const styles = {
  header: "relative z-50 w-full bg-white text-[#111111]",
  container: [
    "grid w-full grid-cols-[minmax(0,1fr)_auto_auto] items-center",
    "min-h-[92px] gap-[10px] px-4 py-[14px]",
    "min-[521px]:min-h-[112px] min-[521px]:gap-[clamp(14px,3vw,42px)]",
    "min-[521px]:px-[clamp(18px,4vw,64px)] min-[521px]:py-[18px]",
    "min-[900px]:min-h-[124px] min-[900px]:gap-[clamp(24px,4vw,64px)]",
  ].join(" "),
  brand: "inline-flex min-w-0 items-center justify-self-start gap-2 text-inherit no-underline min-[521px]:gap-3",
  focus: "focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-[#1c4ed8]",
  logo: [
    "block h-[38px] w-[38px] shrink-0 object-contain",
    "min-[521px]:h-[clamp(42px,4.2vw,58px)] min-[521px]:w-[clamp(42px,4.2vw,58px)]",
  ].join(" "),
  brandName: [
    "whitespace-nowrap text-[clamp(12px,3.4vw,16px)] font-bold tracking-[-0.06em]",
    "min-[521px]:text-[clamp(15px,1.65vw,25px)] min-[521px]:tracking-[-0.055em]",
  ].join(" "),
  brandLtd: "mt-1 text-right text-[9px] font-semibold tracking-[0.16em] min-[521px]:mt-[5px] min-[521px]:text-[11px]",
  quote: [
    "inline-flex min-h-12 items-center justify-center whitespace-nowrap rounded-full",
    "border-2 border-[#f05a35] bg-[#f05a35] px-[15px]",
    "text-[clamp(12px,3.4vw,16px)] font-bold leading-none text-white no-underline",
    "transition-[background-color,color,transform] duration-[160ms]",
    "hover:-translate-y-px hover:bg-white hover:text-[#f05a35]",
    "motion-reduce:transition-none",
    "min-[521px]:min-h-[62px] min-[521px]:px-[clamp(22px,3.5vw,48px)]",
    "min-[521px]:text-[clamp(16px,2vw,24px)]",
    "min-[900px]:min-h-[68px] min-[900px]:px-[42px] min-[900px]:text-[23px]",
  ].join(" "),
  menuButton: [
    "inline-flex h-11 w-9 cursor-pointer items-center justify-center rounded-lg",
    "border-0 bg-transparent p-0 text-[#111111]",
    "min-[521px]:h-[52px] min-[521px]:w-[52px]",
    "min-[900px]:h-[58px] min-[900px]:w-[58px]",
  ].join(" "),
  menuIcon: "h-[29px] w-[29px] min-[521px]:h-[34px] min-[521px]:w-[34px]",
  panel: [
    "absolute right-3 top-full w-[calc(100vw-24px)] border border-[#e8e8e8]",
    "bg-white shadow-[0_18px_48px_rgb(0_0_0_/_12%)]",
    "transition-[opacity,transform] duration-[160ms] motion-reduce:transition-none",
    "min-[521px]:right-[clamp(18px,4vw,64px)]",
    "min-[521px]:w-[min(420px,calc(100vw-36px))]",
  ].join(" "),
  panelOpen: "pointer-events-auto translate-y-0 opacity-100",
  panelClosed: "pointer-events-none -translate-y-2 opacity-0",
  panelInner: "p-5 min-[521px]:p-6",
  eyebrow: "mb-3 text-[11px] font-bold tracking-[0.14em] text-[#686868]",
  navLink: [
    "grid grid-cols-[28px_minmax(0,1fr)_20px] items-center gap-3",
    "border-b border-[#ededed] py-[17px] text-[18px] font-semibold",
    "text-[#171717] no-underline hover:text-[#f05a35]",
  ].join(" "),
  navIndex: "text-[11px] font-semibold text-[#898989]",
  navArrow: "text-[20px]",
  tagline: "mt-[22px] text-xs text-[#777777]",
};

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuId = useId();

  useEffect(() => {
    if (!menuOpen) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link
          href="/"
          className={`${styles.brand} ${styles.focus}`}
          aria-label={`${BRAND.name} home`}
          onClick={closeMenu}
        >
          <Image
            src={BRAND.svg}
            alt=""
            width={58}
            height={58}
            priority
            sizes="(max-width: 520px) 38px, 58px"
            className={styles.logo}
          />
          <span className="flex min-w-0 flex-col leading-none">
            <span className={styles.brandName}>LEGIT CREATIONS</span>
            <span className={styles.brandLtd}>LTD.</span>
          </span>
        </Link>

        <Link
          href="/contact"
          className={`${styles.quote} ${styles.focus}`}
        >
          Get a Quote
        </Link>

        <button
          type="button"
          className={`${styles.menuButton} ${styles.focus}`}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls={menuId}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? (
            <X aria-hidden="true" size={32} strokeWidth={1.8} />
          ) : (
            <Menu
              aria-hidden="true"
              size={34}
              strokeWidth={1.8}
              className={styles.menuIcon}
            />
          )}
        </button>
      </div>

      <nav
        id={menuId}
        className={`${styles.panel} ${menuOpen ? styles.panelOpen : styles.panelClosed}`}
        aria-label="Main navigation"
        aria-hidden={!menuOpen}
        inert={!menuOpen}
      >
        <div className={styles.panelInner}>
          <p className={styles.eyebrow}>EXPLORE LGC</p>
          {navigation.map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              className={`${styles.navLink} ${styles.focus}`}
              onClick={closeMenu}
            >
              <span className={styles.navIndex}>
                {String(index + 1).padStart(2, "0")}
              </span>
              <span>{item.label}</span>
              <span aria-hidden="true" className={styles.navArrow}>
                ↗
              </span>
            </Link>
          ))}
          <p className={styles.tagline}>{BRAND.tagline}</p>
        </div>
      </nav>
    </header>
  );
}
