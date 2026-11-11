import { Link } from "react-router-dom";
import "./Home.css";
import React, { useEffect, useRef, useState } from "react";

import hero1 from "../assets/images/hero6.jpg";
import hero2 from "../assets/images/hero7.jpg";
import hero3 from "../assets/images/hero2.jpg";

import brand1 from "../assets/images/brands/brand1.png";
import brand2 from "../assets/images/brands/brand2.png";
import brand3 from "../assets/images/brands/brand3.png";
import brand4 from "../assets/images/brands/brand4.png";
import brand5 from "../assets/images/brands/brand5.png";
import brand6 from "../assets/images/brands/brand6.png";
import brand7 from "../assets/images/brands/brand7.png";
import brand8 from "../assets/images/brands/brand8.png";
import brand9 from "../assets/images/brands/brand9.png";

const countries = [
  { name: "Germany", code: "de" },
  { name: "Japan", code: "jp" },
  { name: "Denmark", code: "dk" },
  { name: "South Korea", code: "kr" },
  { name: "Thailand", code: "th" },
  { name: "Iran", code: "ir" },
  { name: "South Africa", code: "za" },
  { name: "Russia", code: "ru" },
  { name: "Qatar", code: "qa" },
  { name: "Norway", code: "no" },
  { name: "Morocco", code: "ma" },
];

const brands = [
  { name: "Brand One", logo: brand1 },
  { name: "Brand Two", logo: brand2 },
  { name: "Brand Three", logo: brand3 },
  { name: "Brand Four", logo: brand4 },
  { name: "Brand Five", logo: brand5 },
  { name: "Brand Six", logo: brand6 },
  { name: "Brand Seven", logo: brand7 },
  { name: "Brand Eight", logo: brand8 },
  { name: "Brand Nine", logo: brand9 },
];

const heroSlides = [
  {
    image: hero1,
    tagline: "GLOBAL COMMERCE • ENDURING PARTNERSHIPS",
    heading: "Bringing Global Markets",
    highlight: "Closer to Your Business",
    description:
      "From trusted sourcing to seamless international trade, VEMAZ EXIM connects businesses with quality products, dependable partners, and opportunities across global markets.",
    primaryText: "Discover VEMAZ EXIM",
    secondaryText: "Explore Our Companies",
  },
  {
    image: hero2,
    tagline: "QUALITY PRODUCTS • GLOBAL OPPORTUNITIES",
    heading: "Expanding Possibilities",
    highlight: "Beyond Borders",
    description:
      "Discover new opportunities through our international business network. We connect markets, deliver quality-driven solutions, and create lasting value for businesses worldwide.",
    primaryText: "Explore Our Journey",
    secondaryText: "View Our Companies",
  },
  {
    image: hero3,
    tagline: "TRUST • QUALITY • EXCELLENCE",
    heading: "Building Partnerships",
    highlight: "That Drive Success",
    description:
      "Strong relationships create successful businesses. At VEMAZ EXIM, we believe in reliable partnerships, quality products, and creating opportunities for sustainable growth.",
    primaryText: "About Our Company",
    secondaryText: "Connect With Us",
  },
];

const CountUp = ({ end, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const [start, setStart] = useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStart(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 },
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!start) return;

    let startTime = null;
    let animationFrame;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;

      const progress = Math.min((timestamp - startTime) / duration, 1);

      const easedProgress = 1 - Math.pow(1 - progress, 3);

      setCount(Math.floor(easedProgress * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [start, end, duration]);

  return <span ref={counterRef}>{count}</span>;
};

function Home() {
  const scrollingCountries = [...countries, ...countries];
  const scrollingBrands = [...brands, ...brands];

  const [activeSlide, setActiveSlide] = useState(0);

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

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const currentSlide = heroSlides[activeSlide];

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setActiveSlide(
      (prev) => (prev - 1 + heroSlides.length) % heroSlides.length,
    );
  };

  return (
    <main className="hero-page">
      <section className="hero">
        <img
          key={currentSlide.image}
          src={currentSlide.image}
          alt=""
          className="hero-slide-image"
        />

        <div className="hero-overlay"></div>

        <div className="hero-content" key={activeSlide}>
          <p className="hero-tagline">{currentSlide.tagline}</p>

          <h1>
            {currentSlide.heading}
            <br />
            <span>{currentSlide.highlight}</span>
          </h1>

          <p className="hero-description">{currentSlide.description}</p>

          <div className="hero-buttons">
            <Link to="/about" className="btn-primary">
              {currentSlide.primaryText}
            </Link>

            <Link
              to={activeSlide === 2 ? "/contact" : "/companies"}
              className="btn-secondary"
            >
              {currentSlide.secondaryText}
            </Link>
          </div>
        </div>

        <button
          className="hero-arrow hero-prev"
          onClick={prevSlide}
          aria-label="Previous slide"
          type="button"
        >
          <i className="fas fa-chevron-left"></i>
        </button>

        <button
          className="hero-arrow hero-next"
          onClick={nextSlide}
          aria-label="Next slide"
          type="button"
        >
          <i className="fas fa-chevron-right"></i>
        </button>

        <div className="hero-indicators">
          {heroSlides.map((slide, index) => (
            <button
              key={index}
              className={`hero-dot ${activeSlide === index ? "active" : ""}`}
              onClick={() => setActiveSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={activeSlide === index ? "true" : undefined}
              type="button"
            />
          ))}
        </div>

        <div className="hero-bottom">
          <span>Quality</span>
          <span>Trust</span>
          <span>Global Excellence</span>
        </div>
      </section>

      <section className="contries">
        <div className="contries-overlay"></div>

        <div className="contries-content reveal">
          <p className="contries-tagline">
            CONNECTING MARKETS • CREATING OPPORTUNITIES
          </p>

          <h2>Our Global Footprint</h2>

          <p className="contries-description">
            Beyond borders, we build meaningful business connections. Our
            international presence brings markets, suppliers, and customers
            closer through reliable global trade partnerships and opportunities.
          </p>
        </div>

        <div className="flags-container reveal">
          <div className="flags-track">
            {scrollingCountries.map((country, index) => (
              <div className="flag-card" key={`${country.code}-${index}`}>
                <img
                  src={`https://flagcdn.com/w640/${country.code}.png`}
                  alt={`${country.name} flag`}
                  className="country-flag"
                  loading="lazy"
                />

                <h3>{country.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="services">
        <div className="services-container">
          <div className="services-left reveal">
            <span className="services-tagline">
              <i className="fas fa-shield-alt"></i>
              THE VEMAZ EXIM ADVANTAGE
            </span>

            <h2>
              More Than Trade.
              <span> A Partnership Built on Trust.</span>
            </h2>

            <p className="services-intro">
              At VEMAZ EXIM, we believe successful international trade begins
              with strong relationships. We bring together quality-driven
              sourcing, market understanding, and dependable business
              connections to help our partners move forward with confidence.
            </p>

            <div className="service-features reveal">
              <div className="service-feature reveal">
                <div className="feature-icon">
                  <i className="fas fa-handshake"></i>
                </div>

                <div className="feature-text">
                  <h3>Partnerships That Inspire Confidence</h3>

                  <p>
                    Building lasting business relationships through
                    transparency, mutual trust, and a commitment to delivering
                    value.
                  </p>
                </div>
              </div>

              <div className="service-feature reveal">
                <div className="feature-icon">
                  <i className="fas fa-ship"></i>
                </div>

                <div className="feature-text">
                  <h3>Seamless Global Trade Solutions</h3>

                  <p>
                    Connecting international markets through efficient sourcing,
                    import-export coordination, and dependable trade operations.
                  </p>
                </div>
              </div>

              <div className="service-feature reveal">
                <div className="feature-icon">
                  <i className="fas fa-heart"></i>
                </div>

                <div className="feature-text">
                  <h3>Quality at Every Step</h3>

                  <p>
                    From product selection to customer relationships, we focus
                    on quality, consistency, and creating meaningful business
                    experiences.
                  </p>
                </div>
              </div>
            </div>

            <Link to="/contact" className="services-button">
              Let's Build a Partnership
              <i className="fas fa-arrow-right"></i>
            </Link>
          </div>

          <div className="services-right">
            <div className="stats-panel reveal">
              <div className="stats-header">
                <h3>Our Journey in Global Trade</h3>

                <i className="fas fa-chart-line"></i>
              </div>

              <div className="statistics-grid">
                <div className="statistics-card">
                  <div className="statistics-icon">
                    <i className="fas fa-calendar-check"></i>
                  </div>

                  <h3>
                    <CountUp end={23} /> <span>+</span>
                  </h3>

                  <p>Years of Experience</p>
                </div>

                <div className="statistics-card">
                  <div className="statistics-icon">
                    <i className="fas fa-tags"></i>
                  </div>

                  <h3>
                    <CountUp end={30} /> <span>+</span>
                  </h3>

                  <p>Global Brand Partnerships</p>
                </div>

                <div className="statistics-card">
                  <div className="statistics-icon">
                    <i className="fas fa-users"></i>
                  </div>

                  <h3>
                    <CountUp end={120} /> <span>+</span>
                  </h3>

                  <p>International Markets</p>
                </div>

                <div className="statistics-card">
                  <div className="statistics-icon">
                    <i className="fas fa-globe"></i>
                  </div>

                  <h3>
                    <CountUp end={200} /> <span>+</span>
                  </h3>

                  <p>Valuable Business Relationships</p>
                </div>
              </div>

              <div className="stats-highlight">
                <div className="highlight-icon">
                  <i className="fas fa-shield-alt"></i>
                </div>

                <div className="highlight-text">
                  <h4>Building Connections. Creating Value.</h4>

                  <p>
                    Every partnership represents our commitment to quality,
                    reliability, and long-term business growth.
                  </p>
                </div>

                <div className="highlight-check">
                  <i className="fas fa-check"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="brands">
        <div className="brands-overlay"></div>

        <div className="brands-content reveal">
          <p className="brands-tagline">PARTNERSHIPS THAT DRIVE PROGRESS</p>

          <h2>Brands We Proudly Work With</h2>

          <p className="brands-description">
            Strong partnerships. Trusted names. Shared success. We work with
            established brands to bring quality-driven products and reliable
            solutions to our customers.
          </p>
        </div>

        <div className="brands-container reveal">
          <div className="brands-track">
            {scrollingBrands.map((brand, index) => (
              <div className="brands-card" key={`${brand.name}-${index}`}>
                <img
                  src={brand.logo}
                  alt={`${brand.name} logo`}
                  className="brand-logo"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-cta">
        <div className="contact-cta-overlay"></div>

        <div className="contact-cta-content reveal">
          <p className="contact-cta-tagline">
            YOUR NEXT OPPORTUNITY STARTS HERE
          </p>

          <h2>
            Let's Create
            <span> Opportunities Together.</span>
          </h2>

          <p>
            Whether you're looking to explore new markets, discover quality
            products, or establish reliable trade partnerships, VEMAZ EXIM is
            ready to move forward with you.
          </p>

          <Link to="/contact" className="contact-cta-button">
            Get in Touch
            <i className="fas fa-arrow-right"></i>
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Home;
