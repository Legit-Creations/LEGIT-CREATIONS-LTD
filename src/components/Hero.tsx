import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";

const trustPoints = ["Custom software", "Headless e-commerce", "B2B SaaS platforms"];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(199,161,122,0.18),_transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(94,139,126,0.14),_transparent_30%)]" />

      <div className="relative mx-auto max-w-7xl px-4 pb-20 pt-16 sm:px-6 lg:px-8 lg:pb-24 lg:pt-20">
        <div className="grid items-center gap-12 lg:grid-cols-[1.18fr_0.82fr]">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-3 py-1.5 text-[0.68rem] font-medium uppercase tracking-[0.2em] text-gold">
              <Sparkles size={14} />
              Performance is the Product
            </div>

            <h1 className="max-w-xl font-display text-4xl leading-[0.95] text-bone sm:text-5xl lg:text-7xl">
              High-performance digital systems for Nigerian businesses.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-bone/72">
              We build custom software, high-performing web platforms, and scalable digital infrastructure that help businesses grow faster, convert better, and operate with confidence.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-6 py-3.5 text-sm font-semibold text-obsidian transition-transform duration-200 hover:-translate-y-0.5"
              >
                Send an Inquiry
                <ArrowRight size={16} />
              </a>

              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3.5 text-sm font-semibold text-bone transition-colors hover:border-gold/40 hover:text-gold"
              >
                Explore Services
              </a>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-bone/72">
              {trustPoints.map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="text-gold" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-4 shadow-[0_30px_80px_rgba(0,0,0,0.25)] backdrop-blur-md">
              <div className="rounded-[1.5rem] border border-gold/20 bg-[#10242a] p-5">
                <div className="mb-4 flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.24em] text-bone/50">Business Growth</p>
                    <p className="mt-2 text-2xl font-bold text-bone">Digital Infrastructure</p>
                  </div>

                  <div className="rounded-full border border-gold/30 bg-gold/10 px-2.5 py-1 text-[0.62rem] uppercase tracking-[0.22em] text-gold">
                    Live
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div className="mb-3 flex items-center justify-between text-sm text-bone/65">
                      <span>Platform performance</span>
                      <span className="font-semibold text-gold">96%</span>
                    </div>
                    <div className="h-2 rounded-full bg-white/10">
                      <div className="h-2 w-[96%] rounded-full bg-gold" />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <p className="text-xs uppercase tracking-[0.2em] text-bone/50">Projects</p>
                      <p className="mt-3 text-3xl font-bold text-bone">12+</p>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <p className="text-xs uppercase tracking-[0.2em] text-bone/50">Support</p>
                      <p className="mt-3 text-3xl font-bold text-bone">24/7</p>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-xs uppercase tracking-[0.2em] text-bone/50">Focus</p>

                    <div className="mt-3 space-y-2 text-sm text-bone/78">
                      <div className="flex items-center justify-between">
                        <span>Custom software</span>
                        <span className="text-gold">●</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Project systems</span>
                        <span className="text-gold">●</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>B2B SaaS</span>
                        <span className="text-gold">●</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
