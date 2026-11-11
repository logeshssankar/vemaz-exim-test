import React, { useEffect, useState } from "react";
import "./GlobalPresence.css";
import global from "../assets/images/global1.jpg";

const regions = [
  {
    id: "asia",
    number: "01",
    name: "Asia Pacific",
    description:
      "A dynamic region with diverse markets, manufacturing capabilities and international trade opportunities.",
    markets: "Add verified countries",
  },
  {
    id: "europe",
    number: "02",
    name: "Europe",
    description:
      "A diverse business landscape offering opportunities for international partnerships and cross-border commerce.",
    markets: "Add verified countries",
  },
  {
    id: "middle-east",
    number: "03",
    name: "Middle East",
    description:
      "A strategic region connecting international markets, trade networks and growing business opportunities.",
    markets: "Add verified countries",
  },
  {
    id: "americas",
    number: "04",
    name: "Americas",
    description:
      "A broad marketplace with opportunities for business connections, sourcing and international collaboration.",
    markets: "Add verified countries",
  },
];

const GlobalPresence = () => {
  const [activeRegion, setActiveRegion] = useState("asia");

  useEffect(() => {
    const elements = document.querySelectorAll(".gp-reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("gp-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  const selectedRegion = regions.find((region) => region.id === activeRegion);

  return (
    <main className="global-presence">
      <section className="gp-hero">
        <div className="gp-hero-image"></div>
        <div className="gp-hero-overlay"></div>

        <div className="gp-hero-content gp-reveal">
          <span className="gp-eyebrow">VEMAZ EXIM / GLOBAL PRESENCE</span>

          <h1>
            The world
            <br />
            is our <em>horizon.</em>
          </h1>

          <p>
            Connecting opportunities across borders. Building meaningful
            relationships through international trade.
          </p>

          <a href="#gp-network" className="gp-hero-link">
            Explore Our Global Network
          </a>
        </div>

        <div className="gp-hero-bottom">
          <span>GLOBAL CONNECTIONS</span>
          <span>ONE WORLD · MANY OPPORTUNITIES</span>
        </div>

        <div className="gp-hero-coordinate">
          GLOBAL TRADE / INTERNATIONAL CONNECTIONS
        </div>
      </section>

      <section className="gp-intro">
        <div className="gp-intro-top gp-reveal">
          <span>BEYOND GEOGRAPHICAL BOUNDARIES</span>
          <span>OUR REACH</span>
        </div>

        <div className="gp-intro-content gp-reveal">
          <h2>
            Local understanding.
            <br />
            <em>Global perspective.</em>
          </h2>

          <div>
            <p>
              International trade creates opportunities to connect businesses,
              markets and people. At VEMAZ EXIM, we believe that strong global
              relationships begin with understanding different markets and their
              needs.
            </p>

            <p>
              Our approach is centred on building reliable partnerships,
              identifying opportunities and creating value through cross-border
              commerce.
            </p>
          </div>
        </div>
      </section>

      <section className="gp-network" id="gp-network">
        <div className="gp-network-heading gp-reveal">
          <div>
            <span className="gp-section-label">THE WORLD CONNECTED</span>

            <h2>
              One network.
              <br />
              <em>Endless possibilities.</em>
            </h2>
          </div>

          <p>
            Explore different regions and discover the opportunities within the
            global business landscape.
          </p>
        </div>

        {/* WORLD MAP */}

        <div className="gp-map-container gp-reveal">
          <div className="gp-map-top">
            <span>GLOBAL TRADE NETWORK</span>
            <span>ILLUSTRATIVE WORLD VIEW</span>
          </div>

          <div className="gp-map">
            <svg
              className="gp-world-svg"
              viewBox="0 0 1000 500"
              role="img"
              aria-label="Stylized world map illustration with regional connection points"
            >
              <defs>
                <pattern
                  id="gp-grid"
                  width="45"
                  height="45"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M 45 0 L 0 0 0 45"
                    fill="none"
                    stroke="#6d796f"
                    strokeWidth="0.6"
                    opacity="0.25"
                  />
                </pattern>
              </defs>

              <rect width="1000" height="500" fill="url(#gp-grid)" />

              {/* NORTH AMERICA */}
              <path
                className="gp-continent"
                d="M80 105 L125 75 L180 65 L218 90
                L240 125 L220 155 L195 170 L180 205
                L150 220 L130 260 L105 235 L95 190
                L65 155 Z"
              />

              <path
                className="gp-continent"
                d="M220 260 L250 280 L265 315
                L250 355 L235 395 L215 420
                L195 380 L205 335 Z"
              />

              {/* SOUTH AMERICA */}
              <path
                className="gp-continent"
                d="M265 300 L305 305 L325 340
                L315 390 L295 435 L280 465
                L260 420 L250 370 Z"
              />

              {/* EUROPE */}
              <path
                className="gp-continent"
                d="M425 105 L465 85 L505 100
                L520 130 L490 150 L460 145
                L440 165 L415 145 Z"
              />

              {/* AFRICA */}
              <path
                className="gp-continent"
                d="M440 180 L495 160 L535 190
                L525 245 L505 295 L480 335
                L455 305 L435 255 L420 215 Z"
              />

              {/* ASIA */}
              <path
                className="gp-continent"
                d="M515 95 L570 65 L645 70
                L710 90 L770 110 L820 145
                L865 165 L850 205 L805 210
                L780 240 L735 225 L700 245
                L655 220 L620 235 L585 200
                L545 180 L510 145 Z"
              />

              {/* SOUTH EAST ASIA */}
              <path
                className="gp-continent"
                d="M650 245 L690 250 L715 280
                L700 310 L675 295 L655 275 Z"
              />

              {/* AUSTRALIA */}
              <path
                className="gp-continent"
                d="M745 330 L795 310 L835 330
                L850 365 L825 390 L775 395
                L745 375 Z"
              />

              {/* ROUTE LINES */}
              <g className="gp-route-lines">
                <path d="M475 125 Q550 35 700 155" />
                <path d="M475 125 Q370 50 160 155" />
                <path d="M475 125 Q535 240 790 350" />
                <path d="M475 125 Q500 260 475 245" />
              </g>

              {/* REGIONAL MARKERS */}
              <g className="gp-map-marker gp-marker-americas">
                <circle cx="160" cy="155" r="5" />
                <circle cx="160" cy="155" r="13" />
              </g>

              <g className="gp-map-marker gp-marker-europe">
                <circle cx="475" cy="125" r="5" />
                <circle cx="475" cy="125" r="13" />
              </g>

              <g className="gp-map-marker gp-marker-middle-east">
                <circle cx="475" cy="245" r="5" />
                <circle cx="475" cy="245" r="13" />
              </g>

              <g className="gp-map-marker gp-marker-asia">
                <circle cx="700" cy="155" r="5" />
                <circle cx="700" cy="155" r="13" />
              </g>

              <text x="105" y="135" className="gp-map-label">
                AMERICAS
              </text>

              <text x="440" y="95" className="gp-map-label">
                EUROPE
              </text>

              <text x="545" y="210" className="gp-map-label">
                MIDDLE EAST
              </text>

              <text x="720" y="140" className="gp-map-label">
                ASIA PACIFIC
              </text>
            </svg>

            <div className="gp-map-caption">
              <span>VEMAZ EXIM</span>
              <span>CONNECTING MARKETS THROUGH TRADE</span>
            </div>
          </div>

          <div className="gp-map-legend">
            <span>
              <i></i> REGIONAL REFERENCE POINTS
            </span>

            <span>SCHEMATIC MAP · NOT LIVE LOCATIONS</span>
          </div>
        </div>

        {/* REGION SELECTOR */}

        <div className="gp-region-section gp-reveal">
          <div className="gp-region-tabs">
            {regions.map((region) => (
              <button
                key={region.id}
                type="button"
                className={
                  activeRegion === region.id
                    ? "gp-region-tab active"
                    : "gp-region-tab"
                }
                onClick={() => setActiveRegion(region.id)}
              >
                <span>{region.number}</span>
                {region.name}
                <span className="gp-tab-arrow">↗</span>
              </button>
            ))}
          </div>

          <div className="gp-region-detail">
            <div className="gp-region-number">{selectedRegion.number}</div>

            <div className="gp-region-info">
              <span>EXPLORE THE REGION</span>

              <h3>{selectedRegion.name}</h3>

              <p>{selectedRegion.description}</p>

              <div className="gp-market-info">
                <span>COUNTRIES / MARKETS</span>
                <strong>{selectedRegion.markets}</strong>
              </div>
            </div>

            <div className="gp-region-decoration">
              <span>VEMAZ</span>
              <span>GLOBAL CONNECTIONS</span>
            </div>
          </div>
        </div>
      </section>

      {/* GLOBAL APPROACH */}

      <section className="gp-approach">
        <div className="gp-approach-image gp-reveal">
          <img
            src={global}
            alt="International cargo transportation"
            loading="lazy"
          />

          <div className="gp-image-label">INTERNATIONAL TRADE / VEMAZ EXIM</div>
        </div>

        <div className="gp-approach-content gp-reveal">
          <span className="gp-section-label">HOW WE CONNECT</span>

          <h2>
            Beyond borders.
            <br />
            <em>Built on relationships.</em>
          </h2>

          <p>
            Our international business approach is guided by understanding,
            communication and a shared commitment to creating value.
          </p>

          <div className="gp-approach-list">
            <div>
          <i class="fa-solid fa-chart-pie"></i>
              <div>
                <h4>Market Understanding</h4>
                <p>
                  Understanding regional requirements and identifying relevant
                  opportunities.
                </p>
              </div>
            </div>

            <div>
              <i class="fa-solid fa-handshake"></i>
              <div>
                <h4>Business Partnerships</h4>
                <p>
                  Building reliable relationships with suppliers, customers and
                  partners.
                </p>
              </div>
            </div>

            <div>
              <i class="fa-solid fa-globe"></i>
              <div>
                <h4>Trade Excellence</h4>
                <p>
                  Working towards quality, transparency and dependable business
                  practices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="gp-closing ">
        <span className="gp-section-label">YOUR NEXT GLOBAL CONNECTION</span>

        <h2>
          The world is full
          <br />
          of <em>possibilities.</em>
        </h2>

        <p>
          Let's explore new markets and create meaningful business opportunities
          together.
        </p>

        <a href="/contact">
          CONNECT WITH US <span>↗</span>
        </a>
      </section>
    </main>
  );
};

export default GlobalPresence;
