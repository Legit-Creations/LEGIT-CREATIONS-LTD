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
    <header className="lgc-header">
      <div className="lgc-header__inner">
        <Link href="/" className="lgc-header__brand" aria-label={`${BRAND.name} home`} onClick={closeMenu}>
          <Image
            src={BRAND.logo}
            alt=""
            width={58}
            height={58}
            priority
            sizes="(max-width: 520px) 38px, 58px"
            className="lgc-header__logo"
          />
          <span className="lgc-header__brand-text">
            <span className="lgc-header__brand-name">LEGIT CREATIONS</span>
            <span className="lgc-header__brand-legal">LTD.</span>
          </span>
        </Link>

        <Link href="/contact" className="lgc-header__cta">Get a Quote</Link>

        <button
          type="button"
          className="lgc-header__menu-button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls={menuId}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X aria-hidden="true" size={32} strokeWidth={1.8} /> : <Menu aria-hidden="true" size={34} strokeWidth={1.8} />}
        </button>
      </div>

      <nav
        id={menuId}
        className={`lgc-header__menu-panel${menuOpen ? " lgc-header__menu-panel--open" : ""}`}
        aria-label="Main navigation"
        aria-hidden={!menuOpen}
        inert={!menuOpen}
      >
        <div className="lgc-header__menu-content">
          <p className="lgc-header__menu-eyebrow">EXPLORE LGC</p>
          {navigation.map((item, index) => (
            <Link key={item.href} href={item.href} className="lgc-header__menu-link" onClick={closeMenu}>
              <span className="lgc-header__menu-index">{String(index + 1).padStart(2, "0")}</span>
              <span>{item.label}</span>
              <span aria-hidden="true" className="lgc-header__menu-arrow">↗</span>
            </Link>
          ))}
          <p className="lgc-header__menu-footer">{BRAND.tagline}</p>
        </div>
      </nav>
    </header>
  );
}
