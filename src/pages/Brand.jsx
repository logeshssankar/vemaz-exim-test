import React, { useEffect } from "react";
import "./Brand.css";
import brand1 from '../assets/images/brands/brand1.png';
import brand2 from '../assets/images/brands/brand2.png';
import brand3 from '../assets/images/brands/brand3.png';
import brand4 from '../assets/images/brands/brand4.png';
import brand5 from '../assets/images/brands/brand5.png';
import brand6 from '../assets/images/brands/brand6.png';
import brand7 from '../assets/images/brands/brand7.png';
import brand8 from '../assets/images/brands/brand8.png';
import brand9 from '../assets/images/brands/brand9.png';
import brand10 from '../assets/images/brands/brand10.jpg';


const brand = [
  {
    name: "Brand One",
    logo: brand1,
  },
  {
    name: "Brand Two",
    logo: brand2,
  },    
  {
    name: "Brand Three",
    logo: brand3,
  },
  {
    name: "Brand Four",
    logo: brand4,
  },
  {
    name: "Brand Five",
    logo: brand5,
  },
  {
    name: "Brand Six",
    logo: brand6,
  },
  {
    name: "Brand Seven",
    logo: brand7,
  },
  {
    name: "Brand Eight",
    logo: brand8,
  },
  {
    name: "Brand Nine",
    logo: brand9,
  },
  {
    name: "Brand Ten",
    logo: brand10,
  }

];

const brands = [
  {
    number: "01",
    name: "Ashwin Stationery",
    category: "PRODUCTS & COMMERCE",
    description:
      "Ashwin Stationery is your one-stop stationery store, featuring a wide range of pens, notebooks, pencils, markers, and much more at competitive prices.",
    image:
      brand1,
    featured: true,
  },
  {
    number: "02",
    name: "Indian Agri Products",
    category: "LIFESTYLE & PRODUCTS",
    description:
      "As exporters, we, Raj Exim, are constantly raising the bar and pushing our boundaries to offer our clients, products and services that are as diverse and unique as they are of the highest standards imaginable.",
    image:
      brand6,
    featured: false,
  },
  {
    number: "03",
    name: "Coffee India",
    category: "INNOVATION & QUALITY",
    description:
      "We, at Raj Exim, value our clients and endeavor to not only foresee their demands but also provide world-class services along with products. We are one of the leading exporters marching ahead with premium quality products of international standards.",
    image:
      brand3,
    featured: false,
  },
  {
    number: "04",
    name: "Comfort Furniture",
    category: "EVERYDAY ESSENTIALS",
    description:
      "SURYA HOMEWARE is a trusted Indian manufacturer and exporter of high-quality plastic furniture, offering a wide range of durable chairs, tables, and stools for home, commercial, and outdoor use. ",
    image:
      brand4,
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

        <div className="brand-hero-content brand-reveal">
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
            Explore Our Brands
          </a>
        </div>

        <div className="brand-hero-footer">
          <span>OUR BRAND PORTFOLIO</span>
          <span>BUILT ON QUALITY · DRIVEN BY TRUST</span>
        </div>
      </section>

      <section className="brand-intro">
        <div className="brand-intro-top brand-reveal">
          <span>THE VEMAZ COLLECTION</span>
          <span>BRAND IDENTITY</span>
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
               DISCOVER OUR PORTFOLIO
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
          <span className="brand-section-label">WHAT DEFINES US</span>

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
              <span><i class="fa-solid fa-medal"></i></span>
              <h4>Quality</h4>
              <p>A commitment to high standards.</p>
            </div>

            <div>
              <span><i class="fa-solid fa-user-tag"></i></span>
              <h4>Identity</h4>
              <p>Distinctive brands with purpose.</p>
            </div>

            <div>
              <span><i class="fa-solid fa-handshake"></i></span>
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

      <section className="brand-cta brand-reveal">
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
