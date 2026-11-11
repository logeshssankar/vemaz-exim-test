import React, { useEffect } from "react";
import "./About.css";
import container from "../assets/images/container1.jpg"

const About = () => {
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 },
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="about-page">
      <section className="about-hero">
        <div className="about-hero-image"></div>

        <div className="about-hero-overlay"></div>

        <div className="about-hero-content reveal">
          <span className="eyebrow">VEMAZ EXIM / WHO WE ARE</span>

          <h1>
            Beyond
            <br />
            <span>Boundaries.</span>
            <br />
            Beyond Business.
          </h1>

          <p>
            Connecting opportunities, building relationships, and creating
            possibilities across the world.
          </p>

          <a href="#company-story" className="about-explore">
            Discover Our Story
          </a>
        </div>

        <div className="hero-side-text">GLOBAL TRADE · TRUSTED PARTNERSHIP</div>

        <div className="hero-bottom">
          <span>OUR IDENTITY</span>
          <span>SCROLL TO EXPLORE ↓</span>
        </div>
      </section>

      <section className="company-section" id="company-story">
        <div className="company-top reveal">
          <div className="section-label">
            {/* <span></span> */}
            <span>THE COMPANY</span>
          </div>

          <h2>
            Trade is what we do.
            <br />
            <span>Trust is what we build.</span>
          </h2>
        </div>

        <div className="company-grid">
          <div className="company-image-wrap reveal">
            <img
              src={container}
              alt="International shipping and logistics"
            />

            <div className="image-caption">
              <span>VEMAZ EXIM</span>
              <span>GLOBAL TRADE</span>
            </div>
          </div>

          <div className="company-description reveal">
            <span className="small-heading">OUR STORY</span>

            <h3>
              Bringing the world
              <br />
              closer through
              <br />
              <em>trade.</em>
            </h3>

            <p>
              VEMAZ EXIM is an international trading company focused on
              connecting businesses and creating meaningful opportunities
              through import and export.
            </p>

            <p>
              We believe successful trade goes beyond products and transactions.
              It is built on transparency, reliability, strong relationships and
              a commitment to delivering value to every business partner.
            </p>

            <p>
              Our approach is centred on understanding market needs, maintaining
              quality and building partnerships that stand the test of time.
            </p>

            <div className="company-signature">
              <span>VEMAZ EXIM</span>
              <span>GLOBAL TRADE · TRUSTED PARTNERSHIP</span>
            </div>
          </div>
        </div>
      </section>

      <section className="vision-section">
        <div className="vision-heading reveal">
          <span className="small-heading">WHAT DRIVES US</span>
          <h2>
            Purpose behind
            <br />
            <em>every partnership.</em>
          </h2>
        </div>

        <div className="vision-grid">
          <div className="vision-card reveal">
            <span className="vision-number">VISION</span>
            <div className="vision-symbol">◎</div>
            <h3>Our Vision</h3>
            <p>
              To build lasting global business relationships and become a
              trusted name in international trade through integrity, quality and
              innovation.
            </p>
            <span className="card-line"></span>
          </div>

          <div className="vision-card mission-card reveal">
            <span className="vision-number">MISSION</span>
            <div className="vision-symbol">↗</div>
            <h3>Our Mission</h3>
            <p>
              To connect businesses with reliable trade opportunities, deliver
              value-driven solutions and create meaningful partnerships across
              markets.
            </p>
            <span className="card-line"></span>
          </div>

          <div className="vision-card reveal">
            <span className="vision-number">VALUES</span>
            <div className="vision-symbol">✳</div>
            <h3>Our Values</h3>
            <p>
              Integrity, transparency, customer commitment and quality form the
              foundation of every relationship we build.
            </p>
            <span className="card-line"></span>
          </div>
        </div>
      </section>

      <section className="chairman-section">
        <div className="chairman-heading reveal">
          <div className="section-label">
            {/* <span>02</span> */}
            <span>LEADERSHIP & VISION</span>
          </div>

          <h2>
            The person behind
            <br />
            <em>the vision.</em>
          </h2>
        </div>

        <div className="chairman-grid">
          <div className="chairman-image reveal">
            <img
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=1000&q=85"
              alt="Chairman portrait placeholder"
            />

            <div className="chairman-image-caption">
              <span>LEADERSHIP</span>
              <span>VEMAZ EXIM</span>
            </div>
          </div>

          <div className="chairman-content reveal">
            <span className="small-heading">A MESSAGE FROM OUR CHAIRMAN</span>

            <div className="quote-mark">“</div>

            <h3>
              Great businesses are built on trust, strengthened by relationships
              and driven by vision.
            </h3>

            <p>
              At VEMAZ EXIM, we believe that every successful business
              relationship begins with trust. Our philosophy is to create
              opportunities that bring lasting value to our customers, partners
              and the communities we work with.
            </p>

            <p>
              We remain committed to conducting business with integrity,
              maintaining high standards and continuously exploring
              opportunities in the evolving global marketplace.
            </p>

            <p>
              I sincerely thank our customers, business partners and team for
              being part of our journey. Together, we look forward to building
              stronger connections and a promising future.
            </p>

            <div className="chairman-signature">
              <span className="signature-name">Chairman's Name</span>

              <div className="signature-line"></div>

              <span className="chairman-designation">
                CHAIRMAN — VEMAZ EXIM
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="about-closing">
        <div className="closing-image"></div>

        <div className="closing-overlay"></div>

        <div className="closing-content reveal">
          <span>OUR COMMITMENT</span>

          <h2>
            Every connection
            <br />
            creates an <em>opportunity.</em>
          </h2>

          <p>
            Let's build meaningful business relationships that move the world
            forward.
          </p>

          <a href="/contact" className="closing-link">
            LET'S CONNECT <span>↗</span>
          </a>
        </div>
      </section>
    </main>
  );
};

export default About;
