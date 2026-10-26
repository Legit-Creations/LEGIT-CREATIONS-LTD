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

        <section className="lgc-services" id="services" aria-labelledby="lgc-services-title">
          <div className="lgc-services__heading">
            <p className="lgc-section-eyebrow">WHAT WE BUILD</p>
            <h2 id="lgc-services-title">
              Practical technology.
              <br />
              <span>Measurable progress.</span>
            </h2>
            <p className="lgc-services__intro">
              We bring strategy and engineering together to solve real problems,
              improve how work gets done, and create a stronger digital foundation.
            </p>
          </div>

          <div className="lgc-services__grid">
            {services.map((service) => (
              <article className="lgc-service-card" key={service.number}>
                <span className="lgc-service-card__number">{service.number}</span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <span className="lgc-service-card__detail">{service.detail}</span>
              </article>
            ))}
          </div>

          <div className="lgc-services__footer">
            <span>Performance is the Product.</span>
            <a href="/contact">
              Have a project in mind? <span aria-hidden="true">↗</span>
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
