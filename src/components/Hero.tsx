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

        <h1 className="mb-5 max-w-[780px] font-[var(--font-questrial)] text-[clamp(1rem,6vw,2rem)] leading-[1.12] font-normal tracking-[-0.015em] text-[#262B3E]">
          We Build Custom Software's for Your Online and Commercial Businesses
        </h1>

        <div className="max-w-[680px] font-[var(--font-questrial)] text-[clamp(0.75rem,2.2vw,1rem)] leading-[1.6] font-normal text-[#262B3E]">
          <p className="mb-0">
LEGIT CREATIONS LTD. is a West-African  technology startup in the INFORMATION & COMMUNICATION sector, focused on Computer / Software programming, Consultancy and related activities.
          </p>
          <p className="mb-0">
We build custom software, online shops, and smart systems that help solo founders, registered businesses, and growing companies serve their customers better and work more efficiently online. 
          </p>
        </div>
      </div>

      <section
        aria-label="Legit Creations company operation sectors"
        className="relative z-[1] mx-auto mb-4 grid h-auto w-[calc(100%-16px)] flex-none grid-rows-[72px_auto] gap-[7px] overflow-visible bg-[#290F05] shadow-[7px_7px_0_rgba(41,15,5,0.16)] sm:mb-[18px] sm:w-[calc(100%-32px)] sm:grid-rows-[88px_min(40.45vw,447px)] sm:gap-[9px] md:h-[560px] md:max-w-[1105px] md:grid-rows-[104px_447px]"
      >
        <div className="flex items-center justify-between bg-[#290F05] px-5 py-3">
          <div
            aria-label="Company registration details"
            className="grid gap-[2px] whitespace-nowrap font-[var(--font-questrial)] text-[10px] leading-[1.25] tracking-[0.13em] text-[#E9DED5] sm:text-[clamp(12px,1.8vw,19px)] sm:tracking-[0.16em]"
          >
            <span>RC: 9721319</span>
          </div>

          <div aria-label="Social media" className="flex items-center gap-[14px] text-[#E9DED5]">
            <a href="https://whatsapp.com/channel/0029Va5ijkz2ER6oUVAaLv0e" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp channel" className="grid size-[18px] place-items-center transition-opacity hover:opacity-75 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D98A41]">
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="size-full">
                <path d="M20.52 3.48A11.82 11.82 0 0 0 12.08 0C5.5 0 .15 5.35.15 11.93c0 2.1.55 4.15 1.6 5.96L.05 24l6.27-1.64a11.9 11.9 0 0 0 5.75 1.46h.01c6.57 0 11.92-5.35 11.92-11.93 0-3.19-1.24-6.19-3.48-8.41ZM12.08 21.8h-.01a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.72.97.99-3.63-.24-.37a9.87 9.87 0 0 1-1.52-5.25c0-5.47 4.45-9.92 9.92-9.92a9.85 9.85 0 0 1 7.02 2.91 9.86 9.86 0 0 1 2.9 7.02c0 5.47-4.45 9.92-9.94 9.92Zm5.45-7.43c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.47-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.21 5.08 4.5.71.31 1.27.5 1.7.64.71.23 1.36.2 1.87.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.29.17-1.42-.07-.13-.27-.2-.57-.35Z"/>
              </svg>
            </a>
            <a href="https://x.com/legitcreations_?s=11" target="_blank" rel="noopener noreferrer" aria-label="X" className="grid size-[18px] place-items-center transition-opacity hover:opacity-75 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D98A41]">
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="size-full">
                <path d="M14.234 10.162 22.977 0h-2.072l-7.591 8.824L7.251 0H.258l9.168 13.343L.258 24H2.33l8.016-9.318L16.749 24h6.993zm-2.837 3.299-.929-1.329L3.076 1.56h3.182l5.965 8.532.929 1.329 7.754 11.09h-3.182z" />
              </svg>
            </a>
            <a href="https://t.me/legitcreationsltd" target="_blank" rel="noopener noreferrer" aria-label="Telegram" className="grid size-[18px] place-items-center transition-opacity hover:opacity-75 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D98A41]">
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="size-full">
                <path d="m12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12c0-6.627-5.373-12-12-12zm5.894 8.221-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z" />
              </svg>
            </a>
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
