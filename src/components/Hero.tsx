'use client';

import Image from "next/image";

const Hero = () => {
  return (
    <section
      id="hero"
      aria-label="Hero"
      className="relative isolate flex min-h-screen min-h-svh w-full flex-col justify-between overflow-hidden bg-[#F1EEE9] pt-[calc(var(--lgc-header-height,113px)+28px)] text-[#290F05]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-[1]"
      >
        <div className="absolute -right-40 -top-36 size-[34rem] rounded-full bg-[#D98A41]/15 blur-[48px]" />
        <div className="absolute -bottom-56 -left-40 size-[32rem] rounded-full bg-[#1F1F6B]/10 blur-[48px]" />
        <div className="absolute inset-0 opacity-[0.16] [background-image:linear-gradient(rgba(41,15,5,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(41,15,5,0.12)_1px,transparent_1px)] [background-size:64px_64px] [-webkit-mask-image:linear-gradient(to_bottom,black,transparent_85%)] [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" />
      </div>

      <div className="mx-auto w-full max-w-[1080px] px-6 pb-9 md:px-10 md:pt-9 md:pb-14">
        <div className="mb-[35px] flex items-center justify-center gap-[18px] md:mb-8 md:justify-start">
          <Image
            src="/logo-nobkg.png"
            alt="Legit Creations emblem"
            width={55}
            height={55}
            sizes="55px"
            priority
            className="h-auto w-[55px] shrink-0 bg-transparent object-contain"
            draggable={false}
          />
          <span
            aria-hidden="true"
            className="h-10 w-[1.5px] bg-[#262B3E]"
          />
          <p className="m-0 font-bold uppercase leading-[1.45] text-[#262B3E] text-[11px]">
            Efficiency Is
            <br />
            The Product
          </p>
        </div>

        <h1 className="mb-5 max-w-[780px] font-[var(--font-questrial)] text-[clamp(1rem,6vw,2rem)] leading-[1.12] font-normal tracking-[-0.015em] text-[#262B3E]">
          Are you a Solo founder, Registered Business or a growing Company?
        </h1>

        <div className="max-w-[680px] font-[var(--font-questrial)] text-[clamp(0.75rem,2.2vw,1rem)] leading-[1.6] font-normal text-[#262B3E]">
          <p className="mb-0">
            Legit Creations (LGC) is a West African technology startup focused
            on advancing digital experiences and improving business efficiency.
          </p>
          <p className="mb-0">
            We design and build custom software, digital commerce infrastructure
            and intelligent systems that connect businesses with their customers,
            simplify commercial activities and enable businesses to operate more
            effectively online.
          </p>
        </div>
      </div>

      <section
        aria-label="Legit Creations company details and work imagery"
        className="relative z-[1] mx-auto mb-4 grid h-auto w-[calc(100%-16px)] flex-none grid-rows-[72px_auto] gap-[7px] overflow-visible bg-[#290F05] shadow-[7px_7px_0_rgba(41,15,5,0.16)] sm:mb-[18px] sm:w-[calc(100%-32px)] sm:grid-rows-[88px_min(40.45vw,447px)] sm:gap-[9px] md:h-[560px] md:max-w-[1105px] md:grid-rows-[104px_447px]"
      >
        <div className="flex min-w-0 items-center justify-between gap-2 rounded-t-[17px] px-4 py-3 text-[#E9DED5] sm:gap-6 sm:px-[clamp(22px,7.5%,82px)] sm:py-5">
          <div
            aria-label="Company registration details"
            className="grid gap-[2px] whitespace-nowrap font-[var(--font-questrial)] text-[10px] leading-[1.25] tracking-[0.13em] text-[#E9DED5] sm:text-[clamp(12px,1.8vw,19px)] sm:tracking-[0.16em]"
          >
            <span>TIN: 2621057130396</span>
            <span>RC: 9721319</span>
          </div>

          <div
            aria-label="Social media"
            className="flex items-center gap-[9px] text-[#E9DED5] sm:gap-[clamp(12px,2vw,22px)]"
          >
            <span className="grid size-[21px] shrink-0 place-items-center sm:size-[27px]" aria-label="Instagram">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="size-full">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
              </svg>
            </span>
            <span className="grid size-[21px] shrink-0 place-items-center sm:size-[27px]" aria-label="X">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true" className="size-full">
                <path d="M4 3 20 21M20 3 4 21" />
              </svg>
            </span>
            <span className="grid size-[21px] shrink-0 place-items-center sm:size-[27px]" aria-label="Telegram">
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="size-full">
                <path d="M21.7 3.4 18.5 20c-.24 1.17-.88 1.46-1.78.91l-4.92-3.63-2.37 2.28c-.26.26-.48.48-.98.48l.35-5.01 9.12-8.24c.4-.35-.09-.55-.62-.2L6.03 13.66l-4.84-1.51c-1.05-.33-1.07-1.05.22-1.56L20.33 3.1c.87-.32 1.63.21 1.37.3Z" />
              </svg>
            </span>
          </div>
        </div>

        <div className="grid h-[clamp(210px,54vw,330px)] min-h-0 min-w-0 grid-cols-2 gap-[7px] overflow-hidden rounded-b-[17px] sm:h-auto sm:gap-[9px]">
          <div className="relative min-h-0 min-w-0 overflow-hidden rounded-[10px] sm:rounded-[17px]">
            <Image
              src="https://6a8vioqz79gk6zhf.public.blob.vercel-storage.com/coding.jpeg"
              alt="Web development and software engineering"
              fill
              sizes="(max-width: 600px) 50vw, (max-width: 1105px) 50vw, 550px"
              priority
              className="object-cover"
            />
          </div>

          <div className="grid min-h-0 min-w-0 grid-rows-2 gap-[7px] sm:gap-[9px]">
            <div className="relative min-h-0 min-w-0 overflow-hidden rounded-[10px] sm:rounded-[17px]">
              <Image
                src="https://6a8vioqz79gk6zhf.public.blob.vercel-storage.com/ecommerce.jpeg"
                alt="E-commerce customer experience"
                fill
                sizes="(max-width: 600px) 50vw, (max-width: 1105px) 50vw, 550px"
                className="object-cover"
              />
            </div>
            <div className="relative min-h-0 min-w-0 overflow-hidden rounded-[10px] sm:rounded-[17px]">
              <Image
                src="https://6a8vioqz79gk6zhf.public.blob.vercel-storage.com/finance.jpeg"
                alt="Finance and business analytics"
                fill
                sizes="(max-width: 600px) 50vw, (max-width: 1105px) 50vw, 550px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Hero;
