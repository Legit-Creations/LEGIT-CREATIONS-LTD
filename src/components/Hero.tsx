const Hero = () => {
  return (
    <section
      id="hero"
      aria-labelledby="hero-title"
      className="relative isolate min-h-svh w-full overflow-hidden bg-[#F1EEE9] text-[#290F05]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute -right-40 -top-36 size-[34rem] rounded-full bg-[#D98A41]/15 blur-3xl" />
        <div className="absolute -bottom-56 -left-40 size-[32rem] rounded-full bg-[#1F1F6B]/10 blur-3xl" />
        <div className="absolute inset-0 opacity-[0.16] [background-image:linear-gradient(rgba(41,15,5,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(41,15,5,0.12)_1px,transparent_1px)] [background-size:64px_64px] [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" />
      </div>

      <div
        className="absolute inset-x-0 bottom-0 flex items-center justify-center"
        style={{ top: 'var(--lgc-header-height, 113px)' }}
      >
        <div className="h-[80%] w-full max-w-[1600px] px-6 sm:px-10 lg:px-[7.5%]">
          <div className="grid h-full grid-cols-1 items-center gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
            <div className="relative z-10 flex flex-col items-start justify-center py-5">
              <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-[#290F05]/15 bg-white/55 px-4 py-2 backdrop-blur-md">
                <span className="size-2 rounded-full bg-[#D98A41] shadow-[0_0_0_4px_rgba(217,138,65,0.14)]" />
                <span className="font-[var(--font-lato)] text-[10px] font-bold tracking-[0.2em] text-[#5B4034] sm:text-xs">
                  INDEPENDENT DIGITAL COMPANY
                </span>
              </div>

              <p className="mb-4 font-[var(--font-arimo)] text-xs font-bold tracking-[0.22em] text-[#8A5A37] sm:text-sm">
                IDEAS INTO DIGITAL REALITY
              </p>

              <h1
                id="hero-title"
                className="max-w-[850px] font-[var(--font-arimo)] text-[clamp(3.1rem,7.4vw,7.6rem)] leading-[0.91] font-bold tracking-[-0.075em] text-[#290F05]"
              >
                Build what
                <br />
                moves <span className="text-[#D98A41]">you</span>
                <span className="text-[#1F1F6B]">.</span>
              </h1>

              <p className="mt-7 max-w-[540px] font-[var(--font-lato)] text-base leading-7 text-[#5B514B] sm:text-lg sm:leading-8">
                We turn ambitious ideas into thoughtful digital products,
                experiences and infrastructure built to move businesses forward.
              </p>

              <div className="mt-9 flex flex-wrap items-center gap-3">
                <a
                  href="#contact"
                  className="inline-flex min-h-12 items-center justify-center gap-3 bg-[#290F05] px-6 py-3 font-[var(--font-lato)] text-sm font-semibold text-white no-underline transition-transform duration-200 hover:-translate-y-0.5 hover:bg-[#471F0E] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D98A41]"
                >
                  Start a conversation
                  <span aria-hidden="true">↗</span>
                </a>
                <a
                  href="#projects"
                  className="inline-flex min-h-12 items-center justify-center border border-[#290F05]/20 bg-white/35 px-6 py-3 font-[var(--font-lato)] text-sm font-semibold text-[#290F05] no-underline backdrop-blur-sm transition-colors hover:bg-white/75 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D98A41]"
                >
                  Explore our work
                </a>
              </div>

              <div className="mt-12 flex items-center gap-4 border-t border-[#290F05]/15 pt-5">
                <span className="font-[var(--font-arimo)] text-[10px] font-bold tracking-[0.2em] text-[#8A5A37]">
                  LGC
                </span>
                <span className="h-px w-10 bg-[#D98A41]" />
                <span className="font-[var(--font-lato)] text-xs tracking-wide text-[#74665D]">
                  Strategy · Design · Engineering
                </span>
              </div>
            </div>

            <div className="relative hidden h-full min-h-[360px] items-center justify-center lg:flex">
              <div className="absolute right-[8%] top-[10%] size-[min(29vw,390px)] rounded-full border border-[#290F05]/15" />
              <div className="absolute right-[15%] top-[17%] size-[min(21vw,285px)] rounded-full border border-[#D98A41]/45" />
              <div className="absolute right-[22%] top-[24%] size-[min(13vw,180px)] rounded-full bg-[#D98A41]/15 blur-2xl" />

              <div className="relative z-10 w-[min(100%,440px)] rotate-[-5deg]">
                <div className="overflow-hidden border border-white/80 bg-[#FAF8F5]/85 p-5 shadow-[0_35px_100px_rgba(41,15,5,0.16)] backdrop-blur-xl">
                  <div className="flex items-center justify-between border-b border-[#290F05]/10 pb-4">
                    <div className="flex items-center gap-2">
                      <span className="size-2 rounded-full bg-[#D98A41]" />
                      <span className="font-[var(--font-arimo)] text-[10px] font-bold tracking-[0.18em] text-[#6E5548]">
                        LEGIT CREATIONS
                      </span>
                    </div>
                    <span className="font-[var(--font-lato)] text-[10px] text-[#99877B]">01 / 04</span>
                  </div>

                  <div className="grid grid-cols-[1fr_0.72fr] gap-3 py-5">
                    <div className="flex min-h-[190px] flex-col justify-between bg-[#290F05] p-5 text-white">
                      <span className="font-[var(--font-lato)] text-[9px] tracking-[0.2em] text-white/55">DIGITAL SYSTEMS</span>
                      <div>
                        <p className="font-[var(--font-arimo)] text-4xl leading-[0.95] font-bold tracking-[-0.06em]">Make it<br />matter.</p>
                        <div className="mt-5 h-1 w-12 bg-[#D98A41]" />
                      </div>
                    </div>
                    <div className="flex flex-col gap-3">
                      <div className="flex flex-1 items-end justify-end bg-[#D98A41] p-4">
                        <span className="font-[var(--font-arimo)] text-5xl font-bold tracking-[-0.08em] text-[#290F05]">L.</span>
                      </div>
                      <div className="flex flex-1 items-center justify-center border border-[#290F05]/15 bg-[#E7E2DA]">
                        <div className="grid grid-cols-3 gap-2">
                          {Array.from({ length: 9 }).map((_, index) => (
                            <span key={index} className="size-3 rounded-full bg-[#1F1F6B]/75" />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between border-t border-[#290F05]/10 pt-4">
                    <span className="font-[var(--font-lato)] text-[10px] text-[#806F64]">Ideas, engineered.</span>
                    <span className="font-[var(--font-arimo)] text-xs font-bold text-[#290F05]">LGC ↗</span>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-[12%] left-[2%] flex items-center gap-3 border border-white/80 bg-white/75 px-4 py-3 shadow-[0_12px_40px_rgba(41,15,5,0.09)] backdrop-blur-xl">
                <span className="grid size-9 place-items-center rounded-full bg-[#1F1F6B] font-[var(--font-arimo)] text-sm font-bold text-white">+</span>
                <span>
                  <span className="block font-[var(--font-arimo)] text-xs font-bold text-[#290F05]">Built with intent</span>
                  <span className="block font-[var(--font-lato)] text-[10px] text-[#806F64]">Designed for what comes next</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
