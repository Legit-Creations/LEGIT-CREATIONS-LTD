import Header from "@/components/Header";
import Hero from "@/components/Hero";

const services = [
  {
    number: "01",
    title: "Custom software",
    description:
      "Purpose-built applications and internal tools that simplify complex workflows and give your team more control.",
    detail: "Web apps · Business systems · Automation",
  },
  {
    number: "02",
    title: "Web & commerce platforms",
    description:
      "Fast, accessible digital experiences and commerce systems designed around your customers and business goals.",
    detail: "Business websites · E-commerce · Integrations",
  },
  {
    number: "03",
    title: "Digital product engineering",
    description:
      "From technical direction to production delivery, we help turn early concepts into dependable digital products.",
    detail: "Product development · APIs · Technical strategy",
  },
];

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />

        <section
          className="bg-white px-5 py-16 text-[#171717] sm:px-8 sm:py-20 lg:px-[6.2vw] lg:py-[clamp(70px,9vw,128px)]"
          id="services"
          aria-labelledby="lgc-services-title"
        >
          <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 items-end gap-5 lg:grid-cols-[minmax(0,1.05fr)_minmax(260px,0.65fr)] lg:gap-x-[8vw]">
            <p className="mb-0 text-[11px] font-bold tracking-[0.15em] text-[#f05a35] lg:col-span-2">
              WHAT WE BUILD
            </p>
            <h2 id="lgc-services-title" className="m-0 font-display text-[clamp(2.25rem,4.6vw,3.875rem)] font-bold leading-[1.02] tracking-[-0.07em]">
              Practical technology.
              <br />
              <span className="text-[#888]">Measurable progress.</span>
            </h2>
            <p className="m-0 max-w-[440px] text-[15px] leading-[1.8] text-[#5b5b5b]">
              We bring strategy and engineering together to solve real problems,
              improve how work gets done, and create a stronger digital foundation.
            </p>
          </div>

          <div className="mx-auto mt-10 grid w-full max-w-[1440px] grid-cols-1 border-y border-[#deded9] sm:mt-14 lg:mt-[clamp(40px,6vw,76px)] lg:grid-cols-3">
            {services.map((service, index) => (
              <article
                className={`flex min-h-0 flex-col items-start py-6 lg:min-h-[275px] lg:py-7 lg:pr-[clamp(18px,2.6vw,38px)] ${index > 0 ? "border-t border-[#deded9] lg:border-l lg:border-t-0 lg:pl-[clamp(18px,2.6vw,38px)]" : ""}`}
                key={service.number}
              >
                <span className="text-[11px] font-bold tracking-[0.12em] text-[#f05a35]">{service.number}</span>
                <h3 className="mb-3 mt-[18px] font-display text-[clamp(1.25rem,2vw,1.6875rem)] font-bold tracking-[-0.045em] lg:mt-[30px]">
                  {service.title}
                </h3>
                <p className="m-0 text-sm leading-[1.75] text-[#5b5b5b]">{service.description}</p>
                <span className="mt-4 pt-0 text-[11px] leading-relaxed text-[#777] lg:mt-auto lg:pt-6">{service.detail}</span>
              </article>
            ))}
          </div>

          <div className="mx-auto flex w-full max-w-[1440px] flex-wrap items-center justify-between gap-4 pt-6">
            <span className="text-xs font-bold">Performance is the Product.</span>
            <a className="text-[13px] font-semibold text-[#222] no-underline hover:text-[#f05a35] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-700" href="/contact">
              Have a project in mind? <span className="ml-2 text-[#f05a35]" aria-hidden="true">↗</span>
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
