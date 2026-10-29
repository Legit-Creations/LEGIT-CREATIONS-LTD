import Link from "next/link";
import Header from "@/components/Header";

const services = [
  {
    number: "01",
    title: "Business websites",
    description:
      "Clear, credible websites built to explain your offer and turn the right visitors into enquiries.",
    href: "/services#business-websites",
  },
  {
    number: "02",
    title: "Custom software",
    description:
      "Purpose-built web applications that fit the way your team works, without unnecessary complexity.",
    href: "/services#custom-software",
  },
  {
    number: "03",
    title: "E-commerce",
    description:
      "Fast, thoughtful shopping experiences designed around your products and your customers.",
    href: "/services#ecommerce",
  },
  {
    number: "04",
    title: "Performance & integration",
    description:
      "Improve slow digital experiences and connect the tools your business depends on.",
    href: "/services#performance",
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-[#171717]">
      <Header />

      <section
        aria-labelledby="hero-title"
        className="relative overflow-hidden border-b border-[#ededed]"
      >
        <div className="mx-auto grid w-full max-w-[1440px] items-center gap-12 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 lg:px-16 lg:py-32">
          <div className="max-w-[760px]">
            <p className="mb-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-[#e94f2e] sm:text-sm">
              <span aria-hidden="true" className="h-2 w-2 rounded-full bg-[#f05a35]" />
              Legit Creations LTD · Digital services
            </p>

            <h1
              id="hero-title"
              className="max-w-[780px] text-[clamp(2.8rem,7.2vw,6.8rem)] font-bold leading-[0.98] tracking-[-0.075em]"
            >
              Build digital
              <br />
              that <span className="text-[#f05a35]">works.</span>
            </h1>

            <p className="mt-7 max-w-[570px] text-base leading-7 text-[#5d5d5d] sm:mt-8 sm:text-lg sm:leading-8">
              We help businesses move forward with high-performance websites,
              custom software, and e-commerce experiences built around real
              business needs.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="/contact"
                className="inline-flex min-h-14 items-center justify-center rounded-full border-2 border-[#f05a35] bg-[#f05a35] px-7 text-base font-bold text-white transition-colors hover:bg-white hover:text-[#f05a35] focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-[#171717]"
              >
                Tell us what you need <span aria-hidden="true" className="ml-3 text-lg">↗</span>
              </Link>
              <Link
                href="/services"
                className="inline-flex min-h-14 items-center justify-center rounded-full px-6 text-base font-semibold text-[#171717] transition-colors hover:text-[#f05a35] focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-[#171717]"
              >
                Explore our services
              </Link>
            </div>

            <p className="mt-8 text-xs font-medium tracking-wide text-[#777]">
              Practical delivery. Thoughtful design. Measurable performance.
            </p>
          </div>

          <div aria-hidden="true" className="relative mx-auto w-full max-w-[500px] lg:justify-self-end">
            <div className="absolute -right-4 -top-4 h-28 w-28 rounded-full bg-[#fff0eb] sm:-right-7 sm:-top-7 sm:h-40 sm:w-40" />
            <div className="relative overflow-hidden rounded-[2rem] border border-[#ededed] bg-[#f7f7f7] p-5 sm:rounded-[2.5rem] sm:p-8">
              <div className="flex items-center justify-between border-b border-[#e5e5e5] pb-5">
                <div className="flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#f05a35]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#d8d8d8]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#d8d8d8]" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#777]">Built for business</span>
              </div>

              <div className="py-9 sm:py-12">
                <div className="h-2 w-16 rounded-full bg-[#f05a35]" />
                <div className="mt-5 max-w-[300px] text-4xl font-bold leading-[1.03] tracking-[-0.07em] sm:text-5xl">
                  Make your next move count.
                </div>
                <div className="mt-5 h-2 w-full max-w-[260px] rounded-full bg-[#e2e2e2]" />
                <div className="mt-2 h-2 w-4/5 max-w-[210px] rounded-full bg-[#e2e2e2]" />
                <div className="mt-8 inline-flex rounded-full bg-[#171717] px-5 py-3 text-xs font-semibold text-white">
                  Ready for what’s next <span className="ml-3 text-[#ff9b7e]">↗</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-2xl bg-white p-4 sm:p-5">
                  <p className="text-xs text-[#777]">Our focus</p>
                  <p className="mt-2 text-sm font-bold sm:text-base">Useful by design</p>
                </div>
                <div className="rounded-2xl bg-[#f05a35] p-4 text-white sm:p-5">
                  <p className="text-xs text-white/80">Our standard</p>
                  <p className="mt-2 text-sm font-bold sm:text-base">Performance first</p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-5 -left-3 -z-0 h-20 w-20 rounded-full border-[12px] border-[#f05a35]/15 sm:-bottom-7 sm:-left-6 sm:h-28 sm:w-28" />
          </div>
        </div>
      </section>

      <section aria-labelledby="services-title" className="mx-auto w-full max-w-[1440px] px-5 py-20 sm:px-8 sm:py-24 lg:px-16 lg:py-28">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-[#e94f2e]">What we do</p>
            <h2 id="services-title" className="max-w-[650px] text-4xl font-bold leading-[1.05] tracking-[-0.06em] sm:text-5xl lg:text-6xl">
              Digital services with a clear purpose.
            </h2>
          </div>
          <Link href="/services" className="inline-flex w-fit items-center gap-2 text-sm font-bold hover:text-[#f05a35] focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-[#171717]">
            All services <span aria-hidden="true">↗</span>
          </Link>
        </div>

        <div className="mt-10 grid gap-4 sm:mt-14 sm:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => (
            <Link
              key={service.number}
              href={service.href}
              className="group flex min-h-[250px] flex-col rounded-[1.5rem] border border-[#e8e8e8] bg-white p-6 transition-colors hover:border-[#f05a35] sm:p-7"
            >
              <span className="text-xs font-bold tracking-[0.14em] text-[#f05a35]">{service.number}</span>
              <h3 className="mt-8 text-xl font-bold tracking-[-0.04em] sm:text-2xl">{service.title}</h3>
              <p className="mt-3 text-sm leading-6 text-[#666]">{service.description}</p>
              <span aria-hidden="true" className="mt-auto self-end pt-6 text-xl transition-transform group-hover:translate-x-1 group-hover:text-[#f05a35]">↗</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-[#f7f7f7]">
        <div className="mx-auto grid w-full max-w-[1440px] gap-8 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-16 lg:px-16 lg:py-24">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#e94f2e]">How we think</p>
          <div>
            <h2 className="max-w-[850px] text-3xl font-bold leading-tight tracking-[-0.06em] sm:text-4xl lg:text-5xl">
              Performance is the product—not an afterthought.
            </h2>
            <p className="mt-5 max-w-[700px] text-base leading-7 text-[#5d5d5d] sm:text-lg sm:leading-8">
              The best digital work is more than a polished screen. It should load
              quickly, feel straightforward to use, and help people complete the
              task they came to do.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1440px] px-5 py-20 sm:px-8 sm:py-24 lg:px-16 lg:py-28">
        <div className="overflow-hidden rounded-[2rem] bg-[#171717] px-6 py-12 text-white sm:rounded-[2.5rem] sm:px-12 sm:py-16 lg:flex lg:items-end lg:justify-between lg:gap-12 lg:px-16 lg:py-20">
          <div className="max-w-[720px]">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-[#ff9b7e]">Have a project in mind?</p>
            <h2 className="text-4xl font-bold leading-[1.03] tracking-[-0.06em] sm:text-5xl lg:text-6xl">
              Let’s make something work better.
            </h2>
            <p className="mt-5 max-w-[560px] text-base leading-7 text-white/70">
              Share what you’re building, what needs fixing, or where you want
              your business to go next.
            </p>
          </div>
          <Link
            href="/contact"
            className="mt-8 inline-flex min-h-14 shrink-0 items-center justify-center rounded-full border-2 border-[#f05a35] bg-[#f05a35] px-7 font-bold text-white transition-colors hover:bg-white hover:text-[#171717] focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-white lg:mt-0"
          >
            Get a Quote <span aria-hidden="true" className="ml-3 text-lg">↗</span>
          </Link>
        </div>
      </section>

      <footer className="border-t border-[#ededed]">
        <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-4 px-5 py-7 text-sm text-[#666] sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-16">
          <p>© {new Date().getFullYear()} Legit Creations LTD. All rights reserved.</p>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <Link href="/services" className="hover:text-[#f05a35]">Services</Link>
            <Link href="/about" className="hover:text-[#f05a35]">About</Link>
            <Link href="/contact" className="hover:text-[#f05a35]">Contact</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
