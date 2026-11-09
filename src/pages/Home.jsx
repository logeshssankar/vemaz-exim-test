import { Link } from "react-router-dom";
import './Home.css';
import brand1 from '../assets/images/brands/brand1.png';
import brand2 from '../assets/images/brands/brand2.png';
import brand3 from '../assets/images/brands/brand3.png';
import brand4 from '../assets/images/brands/brand4.png';
import brand5 from '../assets/images/brands/brand5.png';
import brand6 from '../assets/images/brands/brand6.png';
import brand7 from '../assets/images/brands/brand7.png';
import brand8 from '../assets/images/brands/brand8.png';
import brand9 from '../assets/images/brands/brand9.png';

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
  }

];



function Home() {
  const scrollingCountries = [...countries, ...countries];

  const scrollingBrands = [...brands, ...brands];


  return (
    <main className="hero-page">

      <section className="hero">

        <div className="hero-overlay"></div>

        <div className="hero-content">

          <p className="hero-tagline">
            GLOBAL TRADE • TRUSTED PARTNERSHIP
          </p>

          <h1>
            Connecting Businesses
            <br />
            <span>Across The World</span>
          </h1>

          <p className="hero-description">
            Building global relationships through quality products,
            reliable partnerships and excellence in international trade.
          </p>

          <div className="hero-buttons">

            <Link to="/about" className="btn-primary">
              Discover Our Story
            </Link>

            <Link to="/companies" className="btn-secondary">
              Explore Our Companies
            </Link>

          </div>

        </div>

        <div className="hero-bottom">
          <span>Quality</span>
          <span>Trust</span>
          <span>Global Excellence</span>
        </div>

      </section>

      <section className="contries">

        <div className="contries-overlay"></div>

        <div className="contries-content">

          {/* <p className="contries-tagline">
            OUR INTERNATIONAL REACH
          </p> */}

          <h2>Our Global Presence</h2>

          <p className="contries-description">
            Explore the countries where we operate and the
            markets we serve.
          </p>

        </div>

        <div className="flags-container">

          <div className="flags-track">

            {scrollingCountries.map((country, index) => (

              <div
                className="flag-card"
                key={`${country.code}-${index}`}
              >

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

        <div className="services-left">

          <span className="services-tagline">
            <i className="fas fa-shield-alt"></i>
            WHY CHOOSE VEMAZ EXIM
          </span>

          <h2>
            Global trade you can
            <span> trust.</span>
          </h2>

          <p className="services-intro">
            Your business deserves more than a trading partner.
            At VEMAZ EXIM, we combine global market expertise,
            reliable sourcing, and seamless logistics to create
            better international trade experiences.
          </p>

          <div className="service-features">

            <div className="service-feature">
              <div className="feature-icon">
                <i className="fas fa-handshake"></i>
              </div>

              <div className="feature-text">
                <h3>Reliable Trade Partnerships</h3>
                <p>
                  Building strong global relationships through
                  trust, transparency, and quality.
                </p>
              </div>
            </div>

            <div className="service-feature">
              <div className="feature-icon">
                <i className="fas fa-ship"></i>
              </div>

              <div className="feature-text">
                <h3>Global Logistics Network</h3>
                <p>
                  Efficient import, export, and logistics
                  solutions for smooth business operations.
                </p>
              </div>
            </div>

            <div className="service-feature">
              <div className="feature-icon">
                <i className="fas fa-heart"></i>
              </div>

              <div className="feature-text">
                <h3>Customer-First Approach</h3>
                <p>
                  Every partnership is built around your
                  business needs and long-term success.
                </p>
              </div>
            </div>

          </div>

          <a href="/contact" className="services-button">
            Explore Our Services
            <i className="fas fa-arrow-right"></i>
          </a>

        </div>

        <div className="services-right">

          <div className="stats-panel">

            <div className="stats-header">
              <h3>Trusted Global Trade</h3>
              <i className="fas fa-chart-line"></i>
            </div>

            <div className="statistics-grid">

              <div className="statistics-card">
                <div className="statistics-icon">
                  <i className="fas fa-calendar-check"></i>
                </div>
                <h3>23 <span>+</span></h3>
                <p>Years Experience</p>
              </div>

              <div className="statistics-card">
                <div className="statistics-icon">
                  <i className="fas fa-tags"></i>
                </div>
                <h3>30 <span>+</span></h3>
                <p>Trusted Brands</p>
              </div>

              <div className="statistics-card">
                <div className="statistics-icon">
                  <i className="fas fa-users"></i>
                </div>
                <h3>120 <span>+</span></h3>
                <p>Countries Exported</p>
              </div>

              <div className="statistics-card">
                <div className="statistics-icon">
                  <i className="fas fa-globe"></i>
                </div>
                <h3>200 <span>+</span></h3>
                <p>Valuable Clients</p>
              </div>

            </div>

            <div className="stats-highlight">

              <div className="highlight-icon">
                <i className="fas fa-shield-alt"></i>
              </div>

              <div className="highlight-text">
                <h4>Your global trade is our priority</h4>
                <p>
                  Reliable partnerships and quality service
                  for your business worldwide.
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

      <div className="brands-content">
        <p className="brands-tagline">OUR PARTNERS</p>

        <h2>Our Trusted Brands</h2>

        <p className="brands-description">
          Offering Best Quality Products to the Customers
        </p>
      </div>

      <div className="brands-container">
        <div className="brands-track">

          {scrollingBrands.map((brands, index) => (
            <div
              className="brands-card"
              key={`${brands.name}-${index}`}
            >
              <img
                src={brands.logo}
                alt={`${brands.name} logo`}
                className="brand-logo"
                loading="lazy"
              />

              {/* <h3>{brands.name}</h3> */}
            </div>
          ))}

        </div>
      </div>

    </section>

    </main>
  );
}

export default Home;
