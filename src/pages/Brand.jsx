import React, { useEffect } from "react";
import "./Brand.css";

const brands = [
  {
    number: "01",
    name: "Brand One",
    category: "PRODUCTS & COMMERCE",
    description:
      "Introduce your brand, its identity, its products and the value it brings to customers.",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&q=85",
    featured: true,
  },
  {
    number: "02",
    name: "Brand Two",
    category: "LIFESTYLE & PRODUCTS",
    description:
      "Showcase the brand's unique offering, product range and market positioning.",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1000&q=85",
    featured: false,
  },
  {
    number: "03",
    name: "Brand Three",
    category: "INNOVATION & QUALITY",
    description:
      "Highlight what makes this brand distinctive and how it serves its customers.",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1000&q=85",
    featured: false,
  },
  {
    number: "04",
    name: "Brand Four",
    category: "EVERYDAY ESSENTIALS",
    description:
      "Present the brand's products, identity and commitment to quality.",
    image:
      "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=1000&q=85",
    featured: false,
  },
];

const OurBrands = () => {
  useEffect(() => {
    const elements = document.querySelectorAll(".brand-reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("brand-visible");
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
    <main className="our-brands">
      <section className="brand-hero">
        <div className="brand-hero-image"></div>
        <div className="brand-hero-overlay"></div>

        <div className="brand-hero-content">
          <span className="brand-eyebrow">VEMAZ EXIM / OUR BRANDS</span>

          <h1>
            Identity.
            <br />
            <em>Quality.</em>
            <br />
            Distinction.
          </h1>

          <p>
            Every brand tells a story. Discover the identities, ideas and
            products that shape our brand portfolio.
          </p>

          <a href="#brand-collection" className="brand-hero-link">
            EXPLORE OUR BRANDS <span>↘</span>
          </a>
        </div>

        <div className="brand-hero-footer">
          <span>04 — OUR BRAND PORTFOLIO</span>
          <span>BUILT ON QUALITY · DRIVEN BY TRUST</span>
        </div>
      </section>

      <section className="brand-intro">
        <div className="brand-intro-top brand-reveal">
          <span>THE VEMAZ COLLECTION</span>
          <span>01 / BRAND IDENTITY</span>
        </div>

        <div className="brand-intro-grid brand-reveal">
          <h2>
            More than a name.
            <br />
            <em>A mark of identity.</em>
          </h2>

          <div>
            <p>
              A brand represents more than the products it carries. It reflects
              an identity, a promise and the experience it creates for its
              customers.
            </p>

            <p>
              At VEMAZ EXIM, our brand portfolio reflects our commitment to
              quality, meaningful offerings and opportunities across different
              markets.
            </p>
          </div>
        </div>
      </section>

      <section className="brand-collection" id="brand-collection">
        <div className="brand-collection-heading brand-reveal">
          <div>
            <span className="brand-section-label">
              02 / DISCOVER OUR PORTFOLIO
            </span>

            <h2>
              A collection of
              <br />
              <em>distinct identities.</em>
            </h2>
          </div>

          <p>
            Explore our featured brands and discover the stories behind their
            identities.
          </p>
        </div>

        <div className="brand-grid">
          {brands.map((brand) => (
            <article
              key={brand.number}
              className={`brand-card ${
                brand.featured ? "brand-featured" : ""
              } brand-reveal`}
            >
              <div className="brand-card-image">
                <img src={brand.image} alt={brand.name} loading="lazy" />

                <div className="brand-card-shade"></div>

                <span className="brand-card-number">{brand.number}</span>

                <span className="brand-card-category">{brand.category}</span>
              </div>

              <div className="brand-card-info">
                <div className="brand-card-title">
                  <h3>{brand.name}</h3>
                  <span>↗</span>
                </div>

                <p>{brand.description}</p>

                <a href="/contact">
                  ENQUIRE ABOUT THIS BRAND
                  <span>→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="brand-philosophy">
        <div className="brand-philosophy-content brand-reveal">
          <span className="brand-section-label">03 / WHAT DEFINES US</span>

          <h2>
            A promise
            <br />
            in every <em>detail.</em>
          </h2>

          <p>
            We believe that a strong brand is built through consistency,
            customer confidence and a genuine commitment to quality. These
            principles guide the way we develop and represent our brands.
          </p>

          <div className="brand-principles">
            <div>
              <span>01</span>
              <h4>Quality</h4>
              <p>A commitment to high standards.</p>
            </div>

            <div>
              <span>02</span>
              <h4>Identity</h4>
              <p>Distinctive brands with purpose.</p>
            </div>

            <div>
              <span>03</span>
              <h4>Trust</h4>
              <p>Relationships built to last.</p>
            </div>
          </div>
        </div>

        <div className="brand-philosophy-image">
          <img
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=85"
            alt="Product and retail brand experience"
            loading="lazy"
          />

          <span>OUR PHILOSOPHY / VEMAZ EXIM</span>
        </div>
      </section>

      <section className="brand-cta">
        <span className="brand-section-label">
          THE NEXT CHAPTER STARTS HERE
        </span>

        <h2>
          Have a brand
          <br />
          <em>in mind?</em>
        </h2>

        <p>
          Let's explore new opportunities and build meaningful brand
          partnerships together.
        </p>

        <a href="/contact">
          START A CONVERSATION <span>↗</span>
        </a>
      </section>
    </main>
  );
};

export default OurBrands;
