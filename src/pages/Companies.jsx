import React, { useEffect } from "react";
import "./Companies.css";
import brand1 from '../assets/images/brands/brand1.png';
import brand2 from '../assets/images/brands/brand2.png';
import brand3 from '../assets/images/brands/brand3.png';
import brand4 from '../assets/images/brands/brand4.png';
import brand5 from '../assets/images/brands/brand5.png';
import brand6 from '../assets/images/brands/brand6.png';
import brand7 from '../assets/images/brands/brand7.png';
import brand8 from '../assets/images/brands/brand8.png';
import brand9 from '../assets/images/brands/brand9.png';
import brand10 from'../assets/images/brands/brand10.jpg';


const brands = [
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



const companies = [
  {
    number: "01",
    category: "INTERNATIONAL TRADE",
    name: "Asian Consumables",
    description:
      "We are an ISO 9001 – 2015 certified Company are one of the Leading and rapidly growing Companies in the Export Business. We act as a One-Stop Destination for our customers to choose the right product. We are an Exporter of 100% Cotton Yarn, 100% Polyester yarn, 100% Viscose Yarn, Blended Yarn, Textile Fabrics, Shirting & Pants.",
    image:brand2,
    className: "company-large",
  },
  {
    number: "02",
    category: "BUSINESS & DISTRIBUTION",
    name: "Glovel Matches LLP",
    description:
      "Glovel Matches LLP is a huge exporter of safety matches. We supply a variety of matches which include House Hold, Kitchen Matches, Wax Matches, Barbeque Matches, Promotional Matches, etc. based on our customer’s needs. As a result of our commitment to quality and dedicated services, we have gained a prominent image in international markets and regular customers as well.",
    image:
      brand5,
    className: "company-small",
  },
  {
    number: "03",
    category: "GLOBAL SOLUTIONS",
    name: "Agrimine",
    description:
      "We Agrimine Products LLP – Exporter of Mixed groceries, Whole Spices, Lentils, ready to eat, Masala powders, instant mixes, curry paste for authentic Indian cuisine that covers the entire customer basket with highest quality. We ensure that customer expectations are met by offering a diverse range at the best prices with customized packing in buyers brand.",
    image:brand10,
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

        <div className="oc-hero-content oc-reveal">
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
            Explore Our Companies
          </a>
        </div>

        <div className="oc-hero-index">
          <span>BUSINESS NETWORK</span>
          <span>VEMAZ EXIM</span>
        </div>
      </section>

      <section className="oc-intro">
        <div className="oc-intro-label oc-reveal">
          <span>OUR BUSINESS ECOSYSTEM</span>
          {/* <span>01 / 03</span> */}
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
            <span className="oc-section-tag">OUR PORTFOLIO</span>

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
          <span className="oc-section-tag">OUR APPROACH</span>

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
              <i className="fa-regular fa-eye"></i>
              <p>Shared vision</p>
            </div>

            <div>
              <i className="fa-solid fa-arrow-trend-up"></i>
              <p>Collective growth</p>
            </div>

            <div>
              <i className="fa-solid fa-user-plus"></i>
              <p>Lasting relationships</p>
            </div>
          </div>
        </div>
      </section>

      <section className="oc-closing oc-reveal">
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
