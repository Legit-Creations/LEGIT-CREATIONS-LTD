'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { RevealContainer, RevealLine } from './motion/Reveal';

const navItems = [
  { label: 'Services', href: '#services', icon: (<svg viewBox="0 0 296 296" fill="currentColor" aria-hidden="true"><path d="M90.6 34.5 60.8 61.6c-3 2.9-3.2 7.6-.5 10.7 1.3 1.6 3.4 2.6 5.8 2.6h35.8c4.2 0 7.5-3.2 7.5-7.4 0-4.3-3.3-7.6-7.5-7.6H85.6l15.2-13.9c5.5-5 8.6-12.1 8.6-19.5 0-6.7-2.4-13-6.8-17.6C97.7 3.4 90.6.2 83.2.2c-6.7 0-12.9 2.4-17.6 6.8l-3.1 2.8c-3.1 2.8-3.3 7.5-.5 10.7 1.5 1.6 3.5 2.5 5.6 2.5 1.9 0 3.7-.7 5.1-2l3.1-2.8c2.1-1.8 4.7-2.8 7.5-2.8 3.2 0 6.1 1.3 8.2 3.6 1.9 2.1 2.8 4.7 2.8 7.5 0 3.2-1.2 6-3.7 8.1ZM115 60c1.3 1.1 2.8 1.8 4.7 1.8h29.2v5.3c0 4.2 3.3 7.5 7.5 7.5s7.5-3.3 7.5-7.5v-5.7c4-.5 6.7-3.6 6.7-7.5s-2.7-7-6.7-7.5V7.4c0-2.7-.9-4.3-1.6-5-.7-.7-2-1.9-4.2-2.3-2.7-.4-4.6.2-6.7 2.3-.7.8-37.7 46.9-37.7 46.9-1.3 1.6-1.9 3.7-1.6 5.7.2 1.9 1.3 3.8 2.9 5ZM148.9 29.2v17.7h-13.3l13.3-17.7ZM189.4 74.7c4.3 0 7.6-3.3 7.6-7.5V44.8h22v22.3c0 4.2 3.2 7.5 7.4 7.5 4.3 0 7.6-3.3 7.6-7.5V7.7c0-4.3-3.3-7.6-7.6-7.6-4.2 0-7.4 3.3-7.4 7.6v22.2h-22V7.7c0-4.3-3.3-7.6-7.6-7.6-4.2 0-7.4 3.3-7.4 7.6v59.5c0 4.2 3.2 7.5 7.4 7.5ZM235 88.8H61.5c-25 0-45.6 20.1-45.6 45.1v.5c0 25 20.6 45.4 45.6 45.4H62l-16.6 68.5c-.2.8-.5 1.5-.5 2.3v37c0 4.4 3.9 8.2 8.3 8.2h190c4.4 0 7.7-3.8 7.7-8.2v-37c0-1 0-1.8-.3-2.6l-16.5-68.2h.9c25 0 44.9-20.5 44.9-45.4v-.5c0-25-20-45.1-44.9-45.1ZM63.4 242.8l25.2-105h118.9l25.6 105H63.4Z"/><g><circle cx="119.6" cy="156.2" r="9.1"/><circle cx="148" cy="156.2" r="9.1"/><circle cx="176.4" cy="156.2" r="9.1"/><circle cx="119.6" cy="184.6" r="9.1"/><circle cx="148" cy="184.6" r="9.1"/><circle cx="176.4" cy="184.6" r="9.1"/><circle cx="119.6" cy="213" r="9.1"/><circle cx="148" cy="213" r="9.1"/><circle cx="176.4" cy="213" r="9.1"/></g></svg>) },
  { label: 'Solutions', href: '#solutions', icon: (<svg viewBox="0 0 100 100" fill="currentColor" aria-hidden="true"><path d="M47.6 20.1c-9.8 1.1-17.7 8.8-18.5 18.4-.6 7 2.5 13.4 7.5 17.5 1.5 1.2 2.4 3 2.4 4.9v.1c0 2.8 2.3 5.1 5.2 5.1h11.6c2.9 0 5.2-2.3 5.2-5.1v-.1c0-1.9.9-3.7 2.4-4.9C68 52.2 71 46.6 71 40.3c0-12-10.7-21.5-23.4-20.2ZM59 72H41c-1.1 0-2 .9-2 2 0 3.3 2.7 6 6 6h10c3.3 0 6-2.7 6-6 0-1.1-.9-2-2-2Z"/></svg>) },
  { label: 'Projects', href: '#projects', icon: (<svg viewBox="0 0 400 400" fill="currentColor" aria-hidden="true"><path d="M237.4 49.5v40h-186v49.7L0 139.2v211.3h400v-301H237.4Zm25 25H375v251h-50v-185.4h-.2v-.9H76.4v-24.7h186Z"/></svg>) },
  { label: 'Resources & Insights', href: '#insights', icon: (<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M10.75 1.5A2.25 2.25 0 0 1 13 3.75v9.03h1.5V3.75A3.75 3.75 0 0 0 10.75 0H.75a.75.75 0 0 0 0 1.5C1.67 1.5 2 1.83 2 2.75v11a3.75 3.75 0 0 0 3.75 3.75h8V16h-8a2.25 2.25 0 0 1-2.25-2.25v-11a3.39 3.39 0 0 0-.22-1.25Z" transform="translate(4.25 3.25)"/><path d="M7.77 17.5A3.29 3.29 0 0 0 10.74 16H7.75C9.31 16 10 15 10 12.75a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 .75.75v1a3.76 3.76 0 0 1-3.75 3.75ZM10.74 16h5.01A2.25 2.25 0 0 0 18 13.75v-.25h-6.53a5.4 5.4 0 0 1-.73 2.5ZM7 16.75a.72.72 0 0 1 .75-.75v1.5A.72.72 0 0 1 7 16.75ZM.75 5.5A.75.75 0 0 1 0 4.75v-2a2.75 2.75 0 1 1 5.5 0v2a.75.75 0 0 1-.75.75ZM1.5 2.75V4H4V2.75a1.25 1.25 0 1 0-2.5 0Z" transform="translate(2.25 3.25)"/></svg>) },
  { label: 'LGC', href: '#lgc', icon: (<svg viewBox="0 0 1024 1024" fill="currentColor" aria-hidden="true"><path d="M640 455.1c0-33.8-13.4-64.4-34.9-87.3 11.6-16.9 30.9-27.9 52.9-27.9 35.4 0 64.1 28.7 64.1 64.1s-28.7 64.1-64.1 64.1c-6.7 0-13-1.3-19-3.2.3-3.2 1-6.4 1-9.8ZM512 544.7c49.5 0 89.6-40.1 89.6-89.6s-40.1-89.6-89.6-89.6-89.6 40.1-89.6 89.6 40.1 89.6 89.6 89.6Zm-128 142.5c0-66.3 43.9-87.8 153.6-87.8s153.6 21.5 153.6 87.8v87.9H384Zm-116-91c16.7-57.8 70.4-76.7 120.5-83-21.8-13.2-39.2-32.5-49.9-55.7-9.2-.6-19-1-30-1-78.5 0-110 15.7-110 62.8v76.9Zm-30-40.2c6.7 0 13-1.3 19-3.2-.3-3.3-1-6.5-1-9.9 0-33.8 13.4-64.4 34.9-87.3-11.6-16.8-30.9-27.9-52.9-27.9-35.4 0-64.1 28.7-64.1 64.1s28.6 64.2 64.1 64.2Zm292 39.1c50.1 6.2 103.8 25.2 120.5 83H768v-76.9c0-47.5-31.4-62.9-110-62.9-11 0-20.8.4-30 1.1-10.7 23.2-28.2 42.5-49.9 55.7Z"/></svg>) },
];
function SearchIcon() {
  return (
    <svg
      viewBox="0 0 512 512"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M0 0 C1.24 -0.01 1.24 -0.01 2.51 -0.03 C21.39 -0.21 39.54 0.14 58.07 4.24 C59.36 4.52 59.36 4.52 60.68 4.81 C87.6 10.85 113.55 22.31 136.07 38.24 C136.63 38.64 137.2 39.04 137.79 39.45 C144.09 43.93 149.97 48.76 155.65 54.01 C157.23 55.47 158.83 56.9 160.45 58.31 C197.14 90.27 220.54 136.45 228.07 184.24 C228.18 184.93 228.3 185.63 228.42 186.34 C237.08 240.13 223.36 298.6 191.85 342.94 C189.33 346.43 186.71 349.84 184.07 353.24 C182.88 354.82 181.69 356.4 180.5 357.99 C179.69 359.07 178.88 360.16 178.07 361.24 C183.51 367.87 189.56 373.85 195.64 379.89 C196.81 381.06 197.98 382.23 199.15 383.39 C201.66 385.9 204.17 388.4 206.68 390.89 C210.65 394.85 214.61 398.8 218.58 402.76 C229.85 414 241.12 425.24 252.4 436.48 C258.64 442.69 264.88 448.91 271.11 455.13 C275.05 459.07 278.99 463 282.94 466.92 C285.39 469.36 287.84 471.81 290.29 474.25 C291.42 475.39 292.56 476.52 293.7 477.65 C295.25 479.19 296.8 480.74 298.35 482.29 C299.22 483.15 300.08 484.02 300.98 484.91 C305.2 489.62 305.5 493.37 305.39 499.54 C304.94 503.29 303.52 505.43 301.07 508.24 C300.55 508.84 300.04 509.43 299.5 510.05 C296.58 512.47 293.39 512.46 289.75 512.55 C288.83 512.59 287.91 512.63 286.95 512.66 C280.97 511.78 276.8 507.22 272.68 503.09 C272.17 502.58 271.66 502.08 271.14 501.56 C269.45 499.87 267.77 498.18 266.09 496.49 C264.88 495.28 263.67 494.07 262.46 492.86 C259.17 489.57 255.9 486.29 252.62 483 C249.19 479.56 245.76 476.12 242.33 472.69 C235.83 466.18 229.34 459.68 222.85 453.17 C215.46 445.76 208.07 438.35 200.67 430.95 C185.46 415.72 170.26 400.48 155.07 385.24 C151.2 387.51 147.76 390 144.25 392.8 C127.12 406.18 107.49 416.86 87.07 424.24 C86.08 424.61 86.08 424.61 85.08 424.99 C30.82 445.29 -30.41 440.53 -82.63 416.78 C-104.08 406.72 -122.88 392.77 -140.18 376.68 C-140.85 376.06 -141.51 375.45 -142.19 374.82 C-146.74 370.53 -150.88 365.99 -154.93 361.24 C-155.73 360.35 -156.53 359.45 -157.35 358.54 C-196.82 313.07 -210.6 253.63 -206.7 194.74 C-206.15 188.82 -205.19 183.05 -203.93 177.24 C-203.76 176.39 -203.59 175.55 -203.41 174.68 C-193.03 124.28 -164.85 77.74 -123.93 46.24 C-123.04 45.53 -122.14 44.81 -121.22 44.08 C-87.29 17.69 -43.2 0.43 0 0 Z M-119.54 84.9 C-120.73 86.04 -121.93 87.17 -123.14 88.29 C-129.47 94.32 -134.68 101.28 -139.93 108.24 C-140.89 109.51 -140.89 109.51 -141.88 110.8 C-170.33 149.88 -180.75 199.76 -173.93 247.24 C-169.19 275.93 -158.67 302.45 -141.93 326.24 C-141.53 326.81 -141.13 327.39 -140.71 327.98 C-112.21 367.99 -68.81 393.99 -20.93 403.24 C-19.85 403.45 -18.77 403.67 -17.65 403.89 C28.93 412.12 78.29 399.76 117.07 373.24 C125.41 367.21 133.19 360.71 140.63 353.6 C142.01 352.29 143.41 350.99 144.8 349.7 C176.29 319.58 196.97 273.64 198.36 229.98 C198.43 226.25 198.45 222.53 198.44 218.8 C198.44 218.01 198.44 217.23 198.44 216.42 C198.4 203.02 197.32 190.27 194.07 177.24 C193.84 176.33 193.62 175.42 193.38 174.49 C187.5 151.39 178.13 129.59 164.07 110.24 C163.32 109.21 162.57 108.18 161.8 107.11 C157.34 101.07 152.54 95.39 147.44 89.86 C146.93 89.3 146.41 88.75 145.88 88.17 C111.43 51.51 64.09 33.75 14.63 31.05 C-35.89 30 -83.38 50.31 -119.54 84.9 Z" transform="translate(206.93359375,-0.23828125)" />
    </svg>
  );
}

function ScrollIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="m8 5 7 7-7 7" />
    </svg>
  );
}

export default function Header() {
  const [activeLink, setActiveLink] = useState('#service');
  const [navAtEnd, setNavAtEnd] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  
  const navListRef = useRef<HTMLUListElement | null>(null);
  const headerRef = useRef<HTMLElement | null>(null);
  
  function isAtEnd() {
    const navList = navListRef.current;
    if (!navList) return false;
    
    return navList.scrollLeft + navList.clientWidth >= navList.scrollWidth - 4;
  }
  
  function scrollNavigation() {
    const navList = navListRef.current;
    if (!navList) return;
    
    const reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;
    
    navList.scrollTo({
      left: isAtEnd() ?
        0 :
        navList.scrollLeft + navList.clientWidth * 0.7,
      behavior: reduceMotion ? 'auto' : 'smooth',
    });
  }
  
  const [isScrolled, setIsScrolled] = useState(false);
  const [showTopBar, setShowTopBar] = useState(true);

  // Keep the hero layout synchronized with the header's real rendered height.
  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;

    const root = document.documentElement;
    const updateHeaderHeight = () => {
      root.style.setProperty('--lgc-header-height', `${header.getBoundingClientRect().height}px`);
    };

    updateHeaderHeight();
    const observer = new ResizeObserver(updateHeaderHeight);
    observer.observe(header);

    return () => {
      observer.disconnect();
      root.style.removeProperty('--lgc-header-height');
    };
  }, []);

  useEffect(() => {
    let scrollFrame = 0;
    let lastScrollY = window.scrollY;
    let direction = 0;
    let distanceInDirection = 0;

    const updateScrollState = () => {
      if (scrollFrame) return;

      scrollFrame = window.requestAnimationFrame(() => {
        scrollFrame = 0;

        const currentScrollY = Math.max(0, window.scrollY);
        const nextScrolledValue = currentScrollY > 12;

        setIsScrolled((currentValue) =>
          currentValue === nextScrolledValue ? currentValue : nextScrolledValue,
        );

        if (currentScrollY === 0) {
          direction = 0;
          distanceInDirection = 0;
          lastScrollY = 0;
          setShowTopBar(true);
          return;
        }

        const delta = currentScrollY - lastScrollY;
        lastScrollY = currentScrollY;

        if (Math.abs(delta) < 1) return;

        const nextDirection = delta > 0 ? 1 : -1;

        if (nextDirection !== direction) {
          direction = nextDirection;
          distanceInDirection = 0;
        }

        distanceInDirection += Math.abs(delta);

        if (distanceInDirection >= 50) {
          if (direction === 1 && currentScrollY > 50) {
            setShowTopBar(false);
          } else if (direction === -1) {
            setShowTopBar(true);
          }

          distanceInDirection = 0;
        }
      });
    };

    updateScrollState();
    window.addEventListener('scroll', updateScrollState, { passive: true });

    return () => {
      window.removeEventListener('scroll', updateScrollState);
      if (scrollFrame) window.cancelAnimationFrame(scrollFrame);
    };
  }, []);

  useEffect(() => {
    const navList = navListRef.current;
    if (!navList) return;

    const getIsAtEnd = () =>
      navList.scrollLeft + navList.clientWidth >= navList.scrollWidth - 4;

    setNavAtEnd(getIsAtEnd());

    let frameId = 0;
    const scheduleNavStateUpdate = () => {
      if (frameId) return;

      frameId = window.requestAnimationFrame(() => {
        frameId = 0;
        const nextValue = getIsAtEnd();
        setNavAtEnd((currentValue) =>
          currentValue === nextValue ? currentValue : nextValue,
        );
      });
    };

    navList.addEventListener('scroll', scheduleNavStateUpdate, {
      passive: true,
    });
    window.addEventListener('resize', scheduleNavStateUpdate);

    return () => {
      navList.removeEventListener('scroll', scheduleNavStateUpdate);
      window.removeEventListener('resize', scheduleNavStateUpdate);
      if (frameId) window.cancelAnimationFrame(frameId);
    };
  }, []);
  
  return (
    <header
      ref={headerRef}
      style={{ marginBottom: 'calc(-1 * var(--lgc-header-height, 113px))' }}
      className="sticky top-0 z-50 w-full bg-[#E9E9E9]/72 pt-[env(safe-area-inset-top)] backdrop-blur-xl [-webkit-backdrop-filter:blur(20px)_saturate(155%)] supports-[backdrop-filter]:bg-[#E9E9E9]/72"
      data-scrolled={isScrolled ? 'true' : 'false'}
    >
      <a href="#hero" className="absolute left-4 top-2 z-[100] -translate-y-[160%] rounded-sm bg-[#290F05] px-4 py-2 text-sm font-semibold text-white shadow-lg transition-transform duration-200 ease-out focus:translate-y-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D98A41] motion-reduce:transition-none">Skip to main content</a>
      {/* Main header */}
      <motion.div
        initial={shouldReduceMotion ? false : { opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: shouldReduceMotion ? 0 : 0.45,
          ease: [0.16, 1, 0.3, 1],
        }}
        className={`relative flex h-[75px] w-full items-center justify-between border-b px-4 backdrop-saturate-150 transition-[transform,margin-bottom,background-color,backdrop-filter,box-shadow,border-color] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none md:px-[3%] [border-image:linear-gradient(to_right,transparent,rgba(255,255,255,0.72),transparent)_1] [-webkit-backdrop-filter:blur(20px)_saturate(155%)] backdrop-blur-xl ${
          showTopBar ? 'translate-y-0 mb-0' : '-translate-y-full -mb-[75px]'
        } ${
          isScrolled
            ? 'border-white/70 bg-[#F4F0EB]/88 shadow-[0_8px_28px_rgba(41,15,5,0.13),inset_0_1px_0_rgba(255,255,255,0.9)]'
            : 'border-white/55 bg-[#E9E9E9]/68 shadow-[inset_0_1px_0_rgba(255,255,255,0.85),inset_0_-1px_0_rgba(41,15,5,0.08)]'
        }`}
      >
        <Link
          href="/"
          aria-label="Legit Creations Ltd, home"
          className="flex flex-col items-end rounded-sm font-[var(--font-arimo)] leading-[16px] text-[#2A1006] no-underline transition-colors duration-200 ease-out hover:text-[#A85D25] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D98A41] motion-reduce:transition-none"
        >
          <span className="text-[19px] font-[600] tracking-[0.1px]">
            LEGIT CREATIONS
          </span>
        </Link>

        <div className="flex items-center gap-[6px]">
          <a
            href="#quote"
            className="inline-flex items-center justify-center bg-[#290F05] px-3 py-2 text-center font-[var(--font-lato)] text-[12px] leading-5 font-semibold whitespace-nowrap text-white no-underline transition-[transform,background-color,box-shadow] duration-200 ease-out hover:-translate-y-0.5 hover:bg-[#E49A54] hover:shadow-[0_5px_14px_rgba(41,15,5,0.2)] active:translate-y-px focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#290F05]"
          >
            Get a Quote
          </a>

          <span
            aria-hidden="true"
            className="grid size-9 place-items-center text-[#290F05]"
          >
            <span className="size-[22px]">
              <SearchIcon />
            </span>
          </span>
        </div>
      </motion.div>

      <hr className="mt-[5px] h-0 border-0 border-t border-[#545454]" />

      {/* Primary navigation */}
      <nav aria-label="Primary">
        <div className="relative flex h-[33px] w-full justify-center bg-[#471F0E69]">
          <div
            className={`absolute ${showTopBar ? 'top-[-13px]' : 'top-[calc(env(safe-area-inset-top)+15px)]'} flex h-10 w-[97%] items-center gap-2 bg-[#290F05] px-5 transition-[top] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none`}
          >
            <RevealContainer
              className="min-w-0 flex-1"
              staggerDelay={0.055}
            >
              <ul
                ref={navListRef}
                className="flex min-w-0 items-center gap-4 overflow-x-auto [mask-image:linear-gradient(to_right,black_88%,transparent)] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
              >
              {navItems.map((item) => (
                <li key={item.href} className="shrink-0">
                  <a
                    href={item.href}
                    onClick={() => setActiveLink(item.href)}
                    aria-current={
                      activeLink === item.href ? 'page' : undefined
                    }
                    className={`flex h-[27px] items-center gap-[6px] px-[8px] font-[var(--font-arimo)] text-[14px] whitespace-nowrap no-underline transition-[transform,background-color,color] duration-200 ease-out hover:-translate-y-px hover:bg-white/12 focus-visible:relative focus-visible:z-10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D98A41] motion-reduce:transition-none ${
                      activeLink === item.href
                        ? 'rounded-none bg-[#D98A41] font-bold text-black'
                        : 'font-normal text-white'
                    }`}
                  >
                    <span className="grid size-[17px] shrink-0 place-items-center overflow-hidden">
                      <span className={`h-full w-full transition-transform duration-200 ${activeLink === item.href ? 'text-black' : 'text-white'} ${item.href === '#solutions' || item.href === '#lgc' ? 'scale-[1.45]' : ''}`}>
                        {item.icon}
                      </span>
                    </span>
                    <RevealLine>{item.label}</RevealLine>
                  </a>
                </li>
              ))}
              </ul>
            </RevealContainer>

            <button
              type="button"
              onClick={scrollNavigation}
              aria-label={
                navAtEnd
                  ? 'Scroll menu back to start'
                  : 'Scroll menu for more links'
              }
              className={`grid size-6 shrink-0 place-items-center rounded-full bg-[#FFFFFFDB] text-[#290F05] ring-3 ring-[#FFFFFF9C] transition-transform duration-200 ease-out hover:scale-105 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D98A41] ${
                navAtEnd ? 'rotate-180' : ''
              }`}
            >
              <span className="size-3">
                <ScrollIcon />
              </span>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}