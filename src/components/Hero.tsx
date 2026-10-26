import Link from "next/link";
import { ArrowDown, ArrowUpRight, Check } from "lucide-react";

const proofPoints = [
  "Performance-led engineering",
  "Built around real business needs",
  "Designed to scale with you",
];

export default function Hero() {
  return (
    <section className="lgc-hero" aria-labelledby="lgc-hero-title">
      <div className="lgc-hero__grain" aria-hidden="true" />
      <div className="lgc-hero__layout">
        <div className="lgc-hero__copy">
          <p className="lgc-hero__eyebrow">
            <span className="lgc-hero__eyebrow-dot" aria-hidden="true" />
            DIGITAL ENGINEERING · NIGERIA & BEYOND
          </p>

          <h1 id="lgc-hero-title">
            Build for the work.
            <br />
            <span>Engineer for what’s next.</span>
          </h1>

          <p className="lgc-hero__description">
            We turn ambitious business ideas into dependable digital products —
            from custom software and web platforms to commerce infrastructure
            built for speed, clarity, and growth.
          </p>

          <div className="lgc-hero__actions">
            <Link className="lgc-hero__primary" href="/contact">
              Discuss a project
              <ArrowUpRight size={18} aria-hidden="true" />
            </Link>
            <a className="lgc-hero__secondary" href="#services">
              Explore capabilities
              <ArrowDown size={16} aria-hidden="true" />
            </a>
          </div>

          <ul className="lgc-hero__proof" aria-label="Our approach">
            {proofPoints.map((point) => (
              <li key={point}>
                <span className="lgc-hero__proof-icon">
                  <Check size={13} strokeWidth={2.5} aria-hidden="true" />
                </span>
                {point}
              </li>
            ))}
          </ul>
        </div>

        <div className="lgc-hero__visual" aria-label="Our principle: performance is the product">
          <div className="lgc-hero__visual-top">
            <span>THE LGC PRINCIPLE</span>
            <span className="lgc-hero__visual-mark" aria-hidden="true">↗</span>
          </div>
          <div className="lgc-hero__statement">
            <span className="lgc-hero__statement-small">Good technology should</span>
            <span>make work</span>
            <span className="lgc-hero__statement-accent">work better.</span>
          </div>
          <div className="lgc-hero__visual-bottom">
            <span className="lgc-hero__visual-line" aria-hidden="true" />
            <span>PERFORMANCE IS THE PRODUCT</span>
          </div>
          <span className="lgc-hero__visual-index" aria-hidden="true">LGC / 01</span>
        </div>
      </div>

      <div className="lgc-hero__bottomline">
        <span>STRATEGY</span>
        <span aria-hidden="true">/</span>
        <span>ENGINEERING</span>
        <span aria-hidden="true">/</span>
        <span>DELIVERY</span>
      </div>
    </section>
  );
}
