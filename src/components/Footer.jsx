import { Link } from "react-router-dom";
import "./Footer.css";
import logo from "../assets/images/logo.jpg";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-overlay"></div>

      <div className="footer-container">
        <div className="footer-section about">
          <div className="footer-brand">
            <img src={logo} alt="VEMAZ EXIM" className="footer-logo" />
          </div>

          <p>
            VEMAZ EXIM is a leading international trading company, specializing
            in the import and export of a wide range of products. We connect
            businesses across continents, ensuring quality, reliability, and
            excellence in every transaction.
          </p>

          <div className="footer-socials">
            <h4>Follow Us</h4>

            <div className="social-links">
              <a
                href="https://www.facebook.com/YOUR_PAGE"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <i className="fab fa-facebook-f"></i>
              </a>

              <a
                href="https://www.instagram.com/YOUR_PAGE"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <i className="fab fa-instagram"></i>
              </a>

              <a
                href="https://www.linkedin.com/company/YOUR_PAGE"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>

              <a
                href="https://www.youtube.com/@YOUR_CHANNEL"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
              >
                <i className="fab fa-youtube"></i>
              </a>

              <a
                href="https://wa.me/919600975400"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
              >
                <i className="fab fa-whatsapp"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="footer-section address">
          <h3>Our Address</h3>

          <div className="footer-info">
            <i className="fas fa-location-dot"></i>
            <p>
              3, Balaji Street, M.G.M Nagar, Avaniyapuram, Bye Pass Road,
              Madurai – 625012
            </p>
          </div>

          <div className="footer-info">
            <i className="fas fa-envelope"></i>
            <a href="mailto:info@vemazexim.com">info@vemazexim.com</a>
          </div>

          <div className="footer-info">
            <i className="fas fa-phone"></i>
            <a href="tel:+919600975400">+91 9600975400</a>
          </div>
        </div>

        <div className="footer-section quick-links">
          <h3>Quick Links</h3>

          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            {/* <li><Link to="/companies">Our Companies</Link></li> */}
            <li>
              <Link to="/brands">Our Brands</Link>
            </li>
            <li>
              <Link to="/global-presence">Global Presence</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>

        <div className="footer-section footer-services">
          <h3>Our Services</h3>

          <ul>
            <li>
              <Link to="/services">Import Services</Link>
            </li>
            <li>
              <Link to="/services">Export Services</Link>
            </li>
            <li>
              <Link to="/services">Logistics Support</Link>
            </li>
            <li>
              <Link to="/services">Global Trade Solutions</Link>
            </li>
          </ul>

          <div className="footer-highlight">
            <i className="fas fa-globe"></i>
            <p>Connecting Businesses Across The World</p>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      {/* <div className="footer-bottom">

        <p>
          © {new Date().getFullYear()} <span>VEMAZ EXIM</span>.
          All Rights Reserved.
        </p>

        <p className="footer-bottom-tagline">
          Excellence in Every Exchange
        </p>

      </div> */}
    </footer>
  );
}

export default Footer;
