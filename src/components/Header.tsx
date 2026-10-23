"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useId, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { BRAND } from "@/config/branding";
import styles from "./Header.module.css";

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
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link
          href="/"
          className={styles.brand}
          aria-label={`${BRAND.name} home`}
          onClick={closeMenu}
        >
          <Image
            src={BRAND.logo}
            alt=""
            width={58}
            height={58}
            priority
            className={styles.logo}
            sizes="58px"
          />
          <span className={styles.brandText}>
            <span className={styles.brandName}>LEGIT CREATIONS</span>
            <span className={styles.brandLegal}>LTD.</span>
          </span>
        </Link>

        <Link href="/contact" className={styles.cta}>
          <span>Get a Quote</span>
          <ArrowUpRight aria-hidden="true" className={styles.ctaIcon} size={19} />
        </Link>

        <button
          type="button"
          className={styles.menuButton}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls={menuId}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? (
            <X aria-hidden="true" size={32} strokeWidth={1.8} />
          ) : (
            <Menu aria-hidden="true" size={34} strokeWidth={1.8} />
          )}
        </button>
      </div>

      <nav
        id={menuId}
        className={`${styles.menuPanel} ${menuOpen ? styles.menuPanelOpen : ""}`}
        aria-label="Main navigation"
        aria-hidden={!menuOpen}
        inert={!menuOpen}
      >
        <div className={styles.menuPanelInner}>
          <p className={styles.menuEyebrow}>EXPLORE LGC</p>
          {navigation.map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              className={styles.menuLink}
              onClick={closeMenu}
            >
              <span className={styles.menuIndex}>{String(index + 1).padStart(2, "0")}</span>
              <span>{item.label}</span>
              <ArrowUpRight aria-hidden="true" size={20} />
            </Link>
          ))}
          <p className={styles.menuFooter}>{BRAND.tagline}</p>
        </div>
      </nav>
    </header>
  );
}
