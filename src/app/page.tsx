import Link from "next/link";

import { BRAND } from "@/config/branding";

const principles = [
  "Build for speed, security, and scale from day one.",
  "Make every customer interaction clear, useful, and measurable.",
  "Use technology as practical infrastructure for growth.",
];

const services = [
  {
    number: "01",
    title: "Digital platforms",
    description:
      "High-performance websites, product platforms, and custom applications built around your business goals.",
  },
  {
    number: "02",
    title: "Commerce systems",
    description:
      "Fast, conversion-focused commerce experiences with the integrations your operations need to keep moving.",
  },
  {
    number: "03",
    title: "Technology strategy",
    description:
      "Clear technical direction, dependable architecture, and delivery plans that turn ambitious ideas into working systems.",
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-obsidian text-bone">
      <header className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-6 lg:px-8">
        <Link
          href="/"
          className="font-display text-lg font-bold tracking-[0.18em] text-bone sm:text-xl"
        >
          LGC<span className="text-gold">.</span>
        </Link>

        <nav aria-label="Primary navigation" className="hidden items-center gap-8 md:flex">
          <a className="text-sm text-bone/70 transition hover:text-gold" href="#services">
            Services
          </a>
          <a className="text-sm text-bone/70 transition hover:text-gold" href="#approach">
            Approach
          </a>
          <Link className="text-sm text-bone/70 transition hover:text-gold" href="/contact">
            Contact
          </Link>
        </nav>

        <Link
          href="/contact"
          className="rounded-full border border-gold/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-gold transition hover:bg-gold hover:text-obsidian sm:px-5"
        >
          Start a project
        </Link>
      </header>

      <section className="relative mx-auto grid w-full max-w-7xl gap-12 px-6 pb-24 pt-16 lg:grid-cols-[1.2fr_0.8fr] lg:px-8 lg:pb-32 lg:pt-28">
        <div className="relative z-10">
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.24em] text-teal">
            Legit Creations LTD
          </p>
          <h1 className="max-w-4xl font-display text-5xl font-bold leading-[0.98] tracking-tight text-bone sm:text-6xl lg:text-8xl">
            Digital systems built to <span className="text-gold">perform.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-base leading-8 text-bone/75 sm:text-lg">
            We design and engineer reliable digital infrastructure for businesses ready to grow with clarity, speed, and confidence.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="rounded-full bg-gold px-6 py-3 text-sm font-bold text-obsidian transition hover:bg-bone"
            >
              Discuss your project
            </Link>
            <a
              href="#services"
              className="rounded-full border border-bone/25 px-6 py-3 text-sm font-semibold text-bone transition hover:border-teal hover:text-teal"
            >
              Explore our work
            </a>
          </div>
        </div>

        <div className="relative min-h-72 border border-teal/30 bg-[#29434a] p-6 sm:p-8 lg:min-h-full">
          <div className="absolute inset-0 bg-[linear-gradient(135deg,transparent_0%,transparent_49.8%,rgba(199,161,122,0.25)_50%,transparent_50.2%)]" />
          <div className="relative flex h-full flex-col justify-between">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-teal">Our standard</span>
            <p className="max-w-sm font-display text-3xl leading-tight text-bone sm:text-4xl">
              {BRAND.tagline}
            </p>
            <span className="text-sm text-bone/60">Technology · Commerce · Strategy</span>
          </div>
        </div>
      </section>

      <section id="services" className="border-y border-bone/10 bg-bone px-6 py-20 text-obsidian lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-teal">What we do</p>
              <h2 className="mt-4 max-w-xl font-display text-4xl font-bold leading-tight sm:text-5xl">
                Strong foundations for ambitious businesses.
              </h2>
            </div>
            <p className="max-w-md leading-7 text-obsidian/70">
              From the first brief to a dependable launch, we focus on the systems that make your business easier to find, use, and grow.
            </p>
          </div>

          <div className="grid gap-px bg-obsidian/15 md:grid-cols-3">
            {services.map((service) => (
              <article key={service.number} className="bg-bone p-7 sm:p-8">
                <p className="text-sm font-bold text-gold">{service.number}</p>
                <h3 className="mt-12 font-display text-2xl font-bold">{service.title}</h3>
                <p className="mt-4 leading-7 text-obsidian/70">{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="approach" className="mx-auto grid w-full max-w-7xl gap-12 px-6 py-20 lg:grid-cols-2 lg:px-8 lg:py-28">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-teal">Our approach</p>
          <h2 className="mt-4 font-display text-4xl font-bold leading-tight sm:text-5xl">
            Purpose before polish.
          </h2>
        </div>
        <div className="space-y-6">
          {principles.map((principle, index) => (
            <div key={principle} className="flex gap-5 border-b border-bone/15 pb-6">
              <span className="pt-1 text-sm font-bold text-gold">0{index + 1}</span>
              <p className="text-lg leading-8 text-bone/80">{principle}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 pb-20 lg:px-8 lg:pb-28">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 bg-gold p-8 text-obsidian sm:p-12 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-obsidian/65">Build with Legit Creations</p>
            <h2 className="mt-4 max-w-2xl font-display text-4xl font-bold leading-tight sm:text-5xl">
              Let&apos;s create a digital foundation that moves your business forward.
            </h2>
          </div>
          <Link
            href="/contact"
            className="shrink-0 rounded-full bg-obsidian px-6 py-3 text-center text-sm font-bold text-bone transition hover:bg-[#29434a]"
          >
            Contact us
          </Link>
        </div>
      </section>

      <footer className="border-t border-bone/10 px-6 py-8 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-3 text-sm text-bone/55 sm:flex-row">
          <p>© {new Date().getFullYear()} {BRAND.legalName}.</p>
          <a className="transition hover:text-gold" href={`mailto:${BRAND.email}`}>
            {BRAND.email}
          </a>
        </div>
      </footer>
    </main>
  );
}
