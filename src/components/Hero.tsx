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
          <img
            className="h-auto w-[55px] shrink-0 bg-transparent object-contain"
            src="/public/logo-nobkg.png"
            alt="Legit Creations emblem"
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

        <h1 className="mb-5 max-w-[780px] font-['Roboto',sans-serif] text-[clamp(1rem,6vw,2rem)] leading-[1.1] font-bold tracking-[-0.02em] text-[#262B3E]">
          Are you a Solo founder, Registered Business or a growing Company?
        </h1>

        <div className="max-w-[680px] font-['Canva_Sans',sans-serif] text-[clamp(0.75rem,2.2vw,1rem)] leading-[1.5] font-[550] text-[#262B3E]">
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
    </section>
  );
};

export default Hero;
