import Link from "next/link";
import { ArrowDown, ArrowUpRight, Check } from "lucide-react";

const proofPoints = [
  "Performance-led engineering",
  "Built around real business needs",
  "Designed to scale with you",
];

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden bg-[#f5f5f2] px-5 pt-12 text-[#151515] sm:px-8 sm:pt-16 lg:px-[6.2vw] lg:pt-28"
      aria-labelledby="lgc-hero-title"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 w-[42%] opacity-[0.035] [background-image:radial-gradient(#151515_0.55px,transparent_0.55px)] [background-size:9px_9px]"
      />

      <div className="relative mx-auto grid w-full max-w-[1440px] grid-cols-1 items-center gap-10 pb-14 md:gap-12 lg:grid-cols-[minmax(0,1.12fr)_minmax(280px,0.88fr)] lg:gap-[7vw] lg:pb-28">
        <div className="min-w-0">
          <p className="mb-6 flex items-center gap-2.5 text-[10px] font-bold leading-relaxed tracking-[0.15em] text-[#555] sm:text-[11px]">
            <span aria-hidden="true" className="size-2 shrink-0 rounded-full bg-[#f05a35]" />
            DIGITAL ENGINEERING · NIGERIA &amp; BEYOND
          </p>

          <h1
            id="lgc-hero-title"
            className="m-0 max-w-[820px] font-display text-[clamp(2.65rem,6.1vw,5.5rem)] font-bold leading-[0.99] tracking-[-0.075em]"
          >
            Build for the work.
            <br />
            <span className="text-[#f05a35]">Engineer for what’s next.</span>
          </h1>

          <p className="mt-6 max-w-[610px] text-[16px] leading-[1.75] text-[#505050] sm:mt-7 sm:text-[19px]">
            We turn ambitious business ideas into dependable digital products —
            from custom software and web platforms to commerce infrastructure
            built for speed, clarity, and growth.
          </p>

          <div className="mt-7 flex flex-col items-start gap-5 sm:mt-9 sm:flex-row sm:flex-wrap sm:items-center sm:gap-6">
            <Link
              className="inline-flex min-h-[54px] items-center justify-center gap-[18px] bg-[#f05a35] px-[22px] text-sm font-bold text-white no-underline transition-colors hover:bg-[#d94725] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-700 motion-reduce:transition-none"
              href="/contact"
            >
              Discuss a project
              <ArrowUpRight size={18} aria-hidden="true" />
            </Link>
            <a
              className="inline-flex items-center gap-2.5 text-sm font-bold text-[#222] no-underline hover:text-[#f05a35] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-700"
              href="#services"
            >
              Explore capabilities
              <ArrowDown size={16} aria-hidden="true" />
            </a>
          </div>

          <ul className="mt-8 flex list-none flex-col gap-2.5 p-0 sm:mt-11 sm:flex-row sm:flex-wrap sm:gap-x-[22px] sm:gap-y-3" aria-label="Our approach">
            {proofPoints.map((point) => (
              <li key={point} className="inline-flex items-center gap-2 text-xs leading-relaxed text-[#555]">
                <span className="inline-flex size-[19px] shrink-0 items-center justify-center rounded-full border border-[#d7d7d2] text-[#f05a35]">
                  <Check size={13} strokeWidth={2.5} aria-hidden="true" />
                </span>
                {point}
              </li>
            ))}
          </ul>
        </div>

        <div
          className="relative flex min-h-[330px] flex-col justify-between overflow-hidden bg-[#202b2b] p-[22px] text-[#f5f5f2] sm:min-h-[360px] sm:p-8 lg:min-h-[clamp(340px,39vw,530px)] lg:p-[clamp(24px,3vw,42px)]"
          role="img"
          aria-label="The LGC principle: good technology should make work work better. Performance is the product."
        >
          <div aria-hidden="true" className="absolute -right-[20%] -bottom-[28%] aspect-square w-[85%] rounded-full border border-white/15" />
          <div aria-hidden="true" className="absolute -right-[6%] -bottom-[14%] aspect-square w-[57%] rounded-full border border-white/15" />

          <div className="relative z-10 flex items-center justify-between gap-4 text-[10px] font-bold tracking-[0.15em] text-[#c9ceca]">
            <span>THE LGC PRINCIPLE</span>
            <span aria-hidden="true" className="inline-flex size-9 items-center justify-center rounded-full border border-white/30 text-xl text-[#f05a35]">↗</span>
          </div>

          <div className="relative z-10 flex flex-col items-start py-9 font-display text-[clamp(2.5rem,4.8vw,4.25rem)] font-bold leading-[0.99] tracking-[-0.07em]">
            <span className="mb-[18px] font-body text-xs font-normal leading-relaxed tracking-normal text-[#c9ceca]">
              Good technology should
            </span>
            <span>make work</span>
            <span className="text-[#f05a35]">work better.</span>
          </div>

          <div className="relative z-10 flex items-center justify-start gap-3 text-[10px] font-bold tracking-[0.15em] text-[#c9ceca]">
            <span aria-hidden="true" className="h-0.5 w-7 bg-[#f05a35]" />
            <span>PERFORMANCE IS THE PRODUCT</span>
          </div>
          <span aria-hidden="true" className="absolute right-[22px] bottom-[21px] text-[9px] tracking-[0.12em] text-white/40">LGC / 01</span>
        </div>
      </div>

      <div className="relative mx-auto flex w-full max-w-[1440px] items-center gap-2.5 border-t border-[#d9d9d4] py-[18px] pb-5 text-[8px] font-bold tracking-[0.12em] text-[#777] sm:gap-3.5 sm:text-[10px] sm:tracking-[0.16em]">
        <span>STRATEGY</span>
        <span aria-hidden="true" className="text-[#f05a35]">/</span>
        <span>ENGINEERING</span>
        <span aria-hidden="true" className="text-[#f05a35]">/</span>
        <span>DELIVERY</span>
      </div>
    </section>
  );
}
