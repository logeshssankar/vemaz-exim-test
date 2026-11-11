import React, { useState } from "react";
import "./Contact.css";

const initialForm = {
  name: "",
  company: "",
  email: "",
  phone: "",
  enquiryType: "",
  message: "",
};

const Contact = () => {
  const [formData, setFormData] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setSubmitted(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const subject = encodeURIComponent(
      `Website Enquiry - ${formData.enquiryType}`,
    );

    const body = encodeURIComponent(
      `New enquiry from VEMAZ EXIM website\n\n` +
        `Name: ${formData.name}\n` +
        `Company: ${formData.company || "Not provided"}\n` +
        `Email: ${formData.email}\n` +
        `Phone: ${formData.phone || "Not provided"}\n` +
        `Enquiry Type: ${formData.enquiryType}\n\n` +
        `Message:\n${formData.message}`,
    );

    window.location.href = `mailto:info@vemazexim.com?subject=${subject}&body=${body}`;

    setSubmitted(true);
    setFormData(initialForm);
  };

  return (
    <main className="contact-page">
      <section className="contact-hero">
        <div className="contact-hero-image"></div>
        <div className="contact-hero-overlay"></div>

        <div className="contact-hero-content">
          <span className="contact-eyebrow">LET'S BUILD SOMETHING GLOBAL</span>

          <h1>
            Every great
            <br />
            partnership starts
            <br />
            with a <em>conversation.</em>
          </h1>

          <p>
            Whether you are looking for a trusted trading partner, exploring new
            markets, or discussing a business opportunity, we are ready to hear
            from you.
          </p>

          <a href="#contact-form" className="contact-hero-link">
            Start a Conversation 
          </a>
        </div>

        <div className="contact-hero-bottom">
          <span>VEMAZ EXIM</span>
          <span>GLOBAL TRADE · TRUSTED PARTNERSHIP</span>
        </div>
      </section>

      <section className="contact-intro">
        <div className="contact-intro-label">
          <span>GET IN TOUCH</span>
        </div>

        <div className="contact-intro-content">
          <h2>
            Let's connect.
            <br />
            <span>Opportunities travel further together.</span>
          </h2>

          <p>
            Good business begins with clear communication. Share your
            requirements with us, and our team will get in touch to understand
            how we can work together.
          </p>
        </div>
      </section>

      <section className="contact-main" id="contact-form">
        <div className="contact-details">
          <span className="contact-section-label">CONTACT INFORMATION</span>

          <h2>
            We would love
            <br />
            to hear from you.
          </h2>

          <p className="contact-details-description">
            Have a product enquiry, partnership proposal, or a question about
            our services? Reach out through any of the channels below.
          </p>

          <div className="contact-detail-item">
            <div className="feature-icon">
              <i className="fas fa-envelope"></i>
            </div>
            <div>
              <small>EMAIL US</small>
              <a href="mailto:info@vemazexim.com">info@vemazexim.com</a>
            </div>
          </div>

          <div className="contact-detail-item">
            <div className="feature-icon">
              <i className="fas fa-phone"></i>
            </div>
            <div>
              <small>CALL US</small>
              <span className="contact-placeholder">+91 6543120808</span>
            </div>
          </div>

          <div className="contact-detail-item">
            <div className="feature-icon">
              <i className="fas fa-location-dot"></i>
            </div>
            <div>
              <small>VISIT OUR OFFICE</small>
              <span className="contact-placeholder">
                3, Balaji Street, M.G.M Nagar, Avaniyapuram, Bye Pass Road,
                Madurai, Tamil Nadu
              </span>
            </div>
          </div>

          <div className="contact-social">
            <span>CONNECT WITH US</span>
            <div className="socila-icon">
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-linkedin"></i>
                <span>LinkedIn</span>
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
              >
               <i className="fab fa-instagram"></i>
                <span>Instagram</span> 
              </a>
            </div>
          </div>
        </div>

        <div className="contact-form-panel">
          <div className="contact-form-heading">
            <span className="contact-section-label">SEND AN ENQUIRY</span>
            <h2>Tell us what you have in mind.</h2>
            <p>
              Fill in the details below. Our team will be happy to connect with
              you.
            </p>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="contact-form-row">
              <div className="contact-field">
                <label htmlFor="contact-name">Full name *</label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  placeholder="Your full name"
                  value={formData.name}
                  onChange={handleChange}
                  minLength={2}
                  required
                />
              </div>

              <div className="contact-field">
                <label htmlFor="contact-company">Company name</label>
                <input
                  id="contact-company"
                  type="text"
                  name="company"
                  placeholder="Your company"
                  value={formData.company}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="contact-form-row">
              <div className="contact-field">
                <label htmlFor="contact-email">Email address *</label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  placeholder="name@company.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="contact-field">
                <label htmlFor="contact-phone">Phone number</label>
                <input
                  id="contact-phone"
                  type="tel"
                  name="phone"
                  placeholder="Your phone number"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="contact-field">
              <label htmlFor="contact-enquiry">
                What would you like to discuss? *
              </label>
              <select
                id="contact-enquiry"
                name="enquiryType"
                value={formData.enquiryType}
                onChange={handleChange}
                required
              >
                <option value="">Select enquiry type</option>
                <option value="Product Enquiry">Product Enquiry</option>
                <option value="Import Requirements">Import Requirements</option>
                <option value="Export Opportunities">
                  Export Opportunities
                </option>
                <option value="Business Partnership">
                  Business Partnership
                </option>
                <option value="General Enquiry">General Enquiry</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="contact-field">
              <label htmlFor="contact-message">Your message *</label>
              <textarea
                id="contact-message"
                name="message"
                rows="5"
                placeholder="Tell us a little about your requirements..."
                value={formData.message}
                onChange={handleChange}
                minLength={10}
                required
              ></textarea>
            </div>

            <button type="submit" className="contact-submit-btn">
              SEND YOUR ENQUIRY <span>↗</span>
            </button>

            {submitted && (
              <p className="contact-success-message" role="status">
                Your email application should open with your enquiry details.
                Please send the email to complete your enquiry.
              </p>
            )}

            <p className="contact-privacy-note">
              Your information will only be used to respond to your enquiry.
            </p>
          </form>
        </div>
      </section>

      <section className="contact-location">
        <div className="contact-location-content">
          <span className="contact-section-label">OUR LOCATION</span>
          <h2>
            A local foundation.
            <br />
            <em>A global outlook.</em>
          </h2>
          <p>
            Find us at our office in Madurai, Tamil Nadu. Add the verified
            office address and map location here before publishing.
          </p>

          <a
            href="https://www.google.com/maps/search/?api=1&query=Madurai%2C+Tamil+Nadu%2C+India"
            target="_blank"
            rel="noreferrer"
            className="contact-map-link"
          >
            VIEW LOCATION ON MAP ↗
          </a>
        </div>

        <div className="contact-location-visual">
          <div className="contact-map-card">
            <span className="map-coordinate-label">OUR OFFICE LOCATION</span>
            <div className="map-pin">
              <span>V</span>
            </div>
            <div className="map-location-caption">
              <strong>VEMAZ EXIM</strong>
              <span>Madurai, Tamil Nadu, India</span>
              <small></small>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-final-cta">
        <span>THE NEXT STEP STARTS HERE</span>
        <h2>
          Let's make
          <br />
          business happen.
        </h2>
        <a href="#contact-form">
          TALK TO OUR TEAM <span>↗</span>
        </a>
      </section>
    </main>
  );
};

export default Contact;
