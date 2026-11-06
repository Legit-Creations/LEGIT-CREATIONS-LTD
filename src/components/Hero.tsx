const Hero = () => {
  return (
    <section
      id="hero"
      aria-label="Hero"
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
    </section>
  );
};

export default Hero;
