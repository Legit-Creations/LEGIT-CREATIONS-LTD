'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { RevealContainer, RevealLine } from './motion/Reveal';

const navItems = [
{
  label: 'Service',
  href: '#service',
  icon: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 9.5c-1.6-2.2-4.6-.6-3.4 1.6.7 1.2 3.4 3 3.4 3s2.7-1.8 3.4-3c1.2-2.2-1.8-3.8-3.4-1.6Z" />
        <path d="M2.5 14.5h2.8l3.2 1.6h4.2c.9 0 1.4 1.1.6 1.7l-.7.5" />
        <path d="M5.3 14.5v6M8.5 18.5l6.8 1.7 6.2-3.2c.8-.5.5-1.7-.5-1.7h-3.9" />
      </svg>
  ),
},
{
  label: 'Resources & Insights',
  href: '#insights',
  icon: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="7.5" r="3.2" />
        <path d="M5.5 20.5v-1.2c0-3 2.9-5.3 6.5-5.3s6.5 2.3 6.5 5.3v1.2" />
        <path d="M9.5 16.5l2.5 2.2 2.5-2.2" />
      </svg>
  ),
},
{
  label: 'Projects',
  href: '#projects',
  icon: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="8.5" />
        <path d="M12 8v4l2.5 2" />
      </svg>
  ),
},
{
  label: 'About us',
  href: '#about',
  icon: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="8.5" />
        <path d="M12 8v4l2.5 2" />
      </svg>
  ),
}, ];

function SearchIcon() {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="16" cy="16" r="12" />
      <path d="m25 25 9 9" />
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
    <header className="sticky top-0 z-50 w-full bg-[#E9E9E9] pt-[env(safe-area-inset-top)]">
      {/* Main header */}
      <motion.div
        initial={shouldReduceMotion ? false : { opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: shouldReduceMotion ? 0 : 0.45,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="flex h-[75px] w-full items-center justify-between px-4 shadow-[inset_0_2px_4px_rgba(0,0,0,0.4)] md:px-[3%]"
      >
        <a
          href="/"
          aria-label="Legit Creations Ltd, home"
          className="flex flex-col items-end font-[var(--font-arimo)] leading-[16px] text-[#2A1006] no-underline"
        >
          <span className="text-[18px] font-bold tracking-[0.1px]">
            LEGIT CREATIONS
          </span>
          <span className="text-[12px] font-normal tracking-[0.5px]">
            ltd.
          </span>
        </a>

        <div className="flex items-center gap-[6px]">
          <a
            href="#contact"
            className="inline-flex items-center justify-center bg-[#D98A41] px-3 py-3 text-center font-[var(--font-lato)] text-[14px] leading-5 font-semibold whitespace-nowrap text-[#290F05] no-underline transition-colors duration-200 hover:bg-[#E49A54] active:translate-y-px focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#290F05]"
          >
            Send Enquiry
          </a>

          <span
            aria-hidden="true"
            className="grid size-11 place-items-center text-black"
          >
            <span className="size-[31px]">
              <SearchIcon />
            </span>
          </span>
        </div>
      </motion.div>

      <hr className="mt-[5px] h-0 border-0 border-t border-[#545454]" />

      {/* Primary navigation */}
      <nav aria-label="Primary">
        <div className="relative flex h-[33px] w-full justify-center bg-[#471F0E69]">
          <div className="absolute top-[-13px] flex h-10 w-[97%] items-center gap-2 bg-[#290F05] px-5">
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
                    className={`flex h-[27px] items-center gap-[6px] rounded px-[8px] font-[var(--font-arimo)] text-[14px] whitespace-nowrap no-underline transition-colors hover:bg-white/10 ${
                      activeLink === item.href
                        ? 'bg-[#D98A41] font-bold text-white'
                        : 'font-normal text-white/75'
                    }`}
                  >
                    <span className="size-[17px] shrink-0">
                      {item.icon}
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
              className={`grid size-6 shrink-0 place-items-center rounded-full bg-white text-[#290F05] ring-3 ring-[#FFFFFF9C] transition-transform duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D98A41] ${
                navAtEnd ? 'rotate-180' : ''
              }`}
            >
              <span className="size-5">
                <ScrollIcon />
              </span>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}