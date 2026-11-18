'use client';

import Image from "next/image";

const Hero = () => {
  return (
    <section
      id="hero"
      aria-label="Hero"
      className="relative isolate flex min-h-screen min-h-svh w-full flex-col justify-between overflow-hidden bg-[#F1EEE9] pt-[calc(var(--lgc-header-height,113px)+24px)] text-[#290F05]"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-[1]">
        <div className="absolute -right-40 -top-36 size-[34rem] rounded-full bg-[#D98A41]/15 blur-[48px]" />
        <div className="absolute -bottom-56 -left-40 size-[32rem] rounded-full bg-[#1F1F6B]/10 blur-[48px]" />
        <div className="absolute inset-0 opacity-[0.16] [background-image:linear-gradient(rgba(41,15,5,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(41,15,5,0.12)_1px,transparent_1px)] [background-size:64px_64px] [-webkit-mask-image:linear-gradient(to_bottom,black,transparent_85%)] [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" />
      </div>

      <div className="mx-auto w-full max-w-[1080px] px-6 pb-7 md:px-10 md:pb-9">
        <div className="mb-[30px] flex items-center justify-center gap-[18px] md:mb-8 md:justify-start">
          <Image
            src="/logoNoBkg.svg"
            alt="Legit Creations emblem"
            width={55}
            height={55}
            sizes="55px"
            priority
            className="h-auto w-[55px] shrink-0 object-contain"
            draggable={false}
          />
          <span aria-hidden="true" className="h-10 w-[1.5px] bg-[#262B3E]" />
          <p className="m-0 font-bold uppercase leading-[1.45] text-[#262B3E] text-[11px]">
            Efficiency Is
            <br />
            The Product
          </p>
        </div>

        <h1 className="mb-[18px] max-w-[780px] font-[var(--font-questrial)] text-[clamp(1.45rem,5.2vw,2.25rem)] leading-[1.18] font-semibold tracking-[-0.015em] text-[#262B3E]">
          Are you a Solo founder, Registered Business or a growing Company?
        </h1>

        <div className="max-w-[680px] font-[var(--font-questrial)] text-[clamp(0.86rem,2vw,1.02rem)] leading-[1.55] font-semibold text-[#262B3E]">
          <p className="mb-[14px]">
            Legit Creations (LGC) is a West African technology startup focused on advancing digital experiences and improving business efficiency.
          </p>
          <p className="mb-0">
            We design and build custom software, digital commerce infrastructure and intelligent systems that connect businesses with their customers, simplify commercial activities and enable businesses to operate more effectively online.
          </p>
        </div>
      </div>

      <section
        aria-label="Legit Creations company details and work imagery"
        className="relative z-[1] mx-auto mb-[10px] w-[calc(100%-16px)] max-w-[1105px] flex-none overflow-hidden rounded-[7px] bg-[#290F05] shadow-[2px_2px_0_#7C5E52,4px_4px_0_#CFC4BE]"
      >
        <div className="flex items-center justify-between bg-[#290F05] px-5 py-3">
          <div
            aria-label="Company registration details"
            className="ml-4 grid font-[var(--font-questrial)] text-[11px] font-semibold leading-[1.35] tracking-[0.13em] text-[#E9DED5]"
          >
            <span>TIN: 2621057130396</span>
            <span>RC: 9721319</span>
          </div>

          <div aria-label="Social media" className="flex items-center gap-[14px] text-[#E9DED5]">
            <span className="grid size-[18px] place-items-center" aria-label="Instagram">
              <svg viewBox="0 0 2476 2476" fill="currentColor" aria-hidden="true" className="size-full">
                <path d="M825.4 1238c0-227.9 184.7-412.7 412.6-412.7 227.9 0 412.7 184.8 412.7 412.7 0 227.9-184.8 412.7-412.7 412.7-227.9 0-412.6-184.8-412.6-412.7m-223.1 0c0 351.1 284.6 635.7 635.7 635.7s635.7-284.6 635.7-635.7-284.6-635.7-635.7-635.7S602.3 886.9 602.3 1238m1148-660.9c0 82 66.5 148.6 148.6 148.6 82 0 148.6-66.6 148.6-148.6s-66.5-148.5-148.6-148.5-148.6 66.5-148.6 148.5M737.8 2245.7c-120.7-5.5-186.3-25.6-229.9-42.6-57.8-22.5-99-49.3-142.4-92.6-43.3-43.3-70.2-84.5-92.6-142.3-17-43.6-37.1-109.2-42.6-229.9-6-130.5-7.2-169.7-7.2-500.3s1.3-369.7 7.2-500.3c5.5-120.7 25.7-186.2 42.6-229.9 22.5-57.8 49.3-99 92.6-142.4 43.3-43.3 84.5-70.2 142.4-92.6 43.6-17 109.2-37.1 229.9-42.6 130.5-6 169.7-7.2 500.2-7.2 330.6 0 369.7 1.3 500.3 7.2 120.7 5.5 186.2 25.7 229.9 42.6 57.8 22.4 99 49.3 142.4 92.6 43.3 43.3 70.1 84.6 92.6 142.4 17 43.6 37.1 109.2 42.6 229.9 6 130.6 7.2 169.7 7.2 500.3 0 330.5-1.2 369.7-7.2 500.3-5.5 120.7-25.7 186.3-42.6 229.9-22.5 57.8-49.3 99-92.6 142.3-43.3 43.3-84.6 70.1-142.4 92.6-43.6 17-109.2 37.1-229.9 42.6-130.5 6-169.7 7.2-500.3 7.2-330.5 0-369.7-1.2-500.2-7.2M727.6 7.5c-131.8 6-221.8 26.9-300.5 57.5-81.4 31.6-150.4 74-219.3 142.8C139 276.6 96.6 345.6 65 427.1 34.4 505.8 13.5 595.8 7.5 727.6 1.4 859.6 0 901.8 0 1238s1.4 378.4 7.5 510.4c6 131.8 26.9 221.8 57.5 300.5 31.6 81.4 73.9 150.5 142.8 219.3 68.8 68.8 137.8 111.1 219.3 142.8 78.8 30.6 168.7 51.5 300.5 57.5 132.1 6 174.2 7.5 510.4 7.5 336.3 0 378.4-1.4 510.4-7.5 131.8-6 221.8-26.9 300.5-57.5 81.4-31.7 150.4-74 219.3-142.8 68.8-68.8 111.1-137.9 142.8-219.3 30.6-78.7 51.6-168.7 57.5-300.5 6-132.1 7.4-174.2 7.4-510.4s-1.4-378.4-7.4-510.4c-6-131.8-26.9-221.8-57.5-300.5-31.7-81.4-74-150.4-142.8-219.3C2199.4 139 2130.3 96.6 2049 65c-78.8-30.6-168.8-51.6-300.5-57.5-132-6-174.2-7.5-510.4-7.5-336.3 0-378.4 1.4-510.5 7.5" />
              </svg>
            </span>
            <span className="grid size-[18px] place-items-center" aria-label="X">
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="size-full">
                <path d="M14.234 10.162 22.977 0h-2.072l-7.591 8.824L7.251 0H.258l9.168 13.343L.258 24H2.33l8.016-9.318L16.749 24h6.993zm-2.837 3.299-.929-1.329L3.076 1.56h3.182l5.965 8.532.929 1.329 7.754 11.09h-3.182z" />
              </svg>
            </span>
            <span className="grid size-[18px] place-items-center" aria-label="Telegram">
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="size-full">
                <path d="m12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12c0-6.627-5.373-12-12-12zm5.894 8.221-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z" />
              </svg>
            </span>
          </div>
        </div>

        <div className="grid h-[clamp(175px,34vw,360px)] min-h-0 grid-cols-2 gap-1 overflow-hidden">
          <Image
            src="/webcoding.jpeg"
            alt="Web development and software engineering"
            width={1200}
            height={800}
            sizes="(max-width: 600px) 50vw, (max-width: 1105px) 50vw, 550px"
            loading="lazy"
            className="h-full w-full min-h-0 min-w-0 rounded-t-[5px] object-cover"
          />
          <div className="grid min-h-0 grid-rows-2 gap-1">
            <Image
              src="/ecommerce.jpeg"
              alt="E-commerce customer experience"
              width={1200}
              height={800}
              sizes="(max-width: 600px) 50vw, (max-width: 1105px) 50vw, 550px"
              loading="lazy"
              className="h-full w-full min-h-0 min-w-0 rounded-t-[5px] object-cover"
            />
            <Image
              src="/finance.jpeg"
              alt="Finance and business analytics"
              width={1200}
              height={800}
              sizes="(max-width: 600px) 50vw, (max-width: 1105px) 50vw, 550px"
              loading="lazy"
              className="h-full w-full min-h-0 min-w-0 rounded-t-[5px] object-cover"
            />
          </div>
        </div>
      </section>
    </section>
  );
};

export default Hero;
