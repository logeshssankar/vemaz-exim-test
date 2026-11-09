import React, { useEffect } from "react";
import "./Companies.css";

const companies = [
  {
    number: "01",
    category: "INTERNATIONAL TRADE",
    name: "Company Name One",
    description:
      "Add the company's business profile, products, services and contribution to the VEMAZ EXIM business network.",
    image:
      "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?auto=format&fit=crop&w=1100&q=85",
    className: "company-large",
  },
  {
    number: "02",
    category: "BUSINESS & DISTRIBUTION",
    name: "Company Name Two",
    description:
      "Introduce the company's operations, market expertise and the value it brings to its customers.",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1100&q=85",
    className: "company-small",
  },
  {
    number: "03",
    category: "GLOBAL SOLUTIONS",
    name: "Company Name Three",
    description:
      "Showcase the company's capabilities, business activities and role in creating new opportunities.",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1100&q=85",
    className: "company-small",
  },
];

const OurCompanies = () => {
  useEffect(() => {
    const elements = document.querySelectorAll(".oc-reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("oc-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="our-companies">
      <section className="oc-hero">
        <div className="oc-hero-background"></div>
        <div className="oc-hero-shade"></div>

        <div className="oc-hero-content">
          <span className="oc-eyebrow">VEMAZ EXIM / OUR BUSINESS NETWORK</span>

          <h1>
            One Vision.
            <br />
            <em>Many Possibilities.</em>
          </h1>

          <p>
            A network of businesses, driven by shared values, diverse expertise
            and a commitment to growth.
          </p>

          <a href="#company-list" className="oc-hero-link">
            EXPLORE OUR COMPANIES <span>↘</span>
          </a>
        </div>

        <div className="oc-hero-index">
          <span>03 — BUSINESS NETWORK</span>
          <span>VEMAZ EXIM</span>
        </div>
      </section>

      <section className="oc-intro">
        <div className="oc-intro-label oc-reveal">
          <span>OUR BUSINESS ECOSYSTEM</span>
          <span>01 / 03</span>
        </div>

        <div className="oc-intro-content oc-reveal">
          <h2>
            Different strengths.
            <br />
            <em>One direction.</em>
          </h2>

          <div className="oc-intro-description">
            <p>
              Every successful business network is built on complementary
              strengths. Our companies represent different capabilities,
              perspectives and opportunities.
            </p>

            <p>
              Together, they reflect our commitment to building meaningful
              business relationships and creating long-term value.
            </p>
          </div>
        </div>
      </section>

      <section className="oc-portfolio" id="company-list">
        <div className="oc-portfolio-heading oc-reveal">
          <div>
            <span className="oc-section-tag">02 / OUR PORTFOLIO</span>

            <h2>
              Meet the
              <br />
              <em>companies.</em>
            </h2>
          </div>

          <p>
            Explore the businesses that form our network and discover what makes
            each one distinctive.
          </p>
        </div>

        <div className="oc-company-grid">
          {companies.map((company) => (
            <article
              className={`oc-company-card ${company.className} oc-reveal`}
              key={company.number}
            >
              <div className="oc-card-image">
                <img src={company.image} alt={company.name} loading="lazy" />

                <div className="oc-card-overlay"></div>

                <span className="oc-card-number">{company.number}</span>

                <span className="oc-card-category">{company.category}</span>
              </div>

              <div className="oc-card-content">
                <div className="oc-card-title">
                  <h3>{company.name}</h3>
                  <span>↗</span>
                </div>

                <p>{company.description}</p>

                <a href="/contact">
                  DISCUSS A PARTNERSHIP
                  <span>→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="oc-philosophy">
        <div className="oc-philosophy-image"></div>

        <div className="oc-philosophy-content oc-reveal">
          <span className="oc-section-tag">03 / OUR APPROACH</span>

          <h2>
            Stronger
            <br />
            <em>together.</em>
          </h2>

          <p>
            We believe that collaboration creates opportunities that go beyond
            individual capabilities. By bringing expertise and ideas together,
            we aim to create stronger business relationships and sustainable
            growth.
          </p>

          <div className="oc-values">
            <div>
              <span>01</span>
              <p>Shared vision</p>
            </div>

            <div>
              <span>02</span>
              <p>Collective growth</p>
            </div>

            <div>
              <span>03</span>
              <p>Lasting relationships</p>
            </div>
          </div>
        </div>
      </section>

      <section className="oc-closing">
        <span className="oc-section-tag">LET'S BUILD SOMETHING TOGETHER</span>

        <h2>
          Your next opportunity
          <br />
          starts with a <em>connection.</em>
        </h2>

        <p>Interested in working with us? Let's start a conversation.</p>

        <a href="/contact">
          GET IN TOUCH <span>↗</span>
        </a>
      </section>
    </main>
  );
};

export default OurCompanies;
