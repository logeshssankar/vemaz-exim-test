import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">
          VEMAZ<span> EXIM</span>
        </Link>
      </div>

      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        <li>
          <Link to="/" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
        </li>

        <li>
          <Link to="/about" onClick={() => setMenuOpen(false)}>
            About Us
          </Link>
        </li>

        <li>
          <Link to="/companies" onClick={() => setMenuOpen(false)}>
            Our Companies
          </Link>
        </li>

        <li>
          <Link to="/brands" onClick={() => setMenuOpen(false)}>
            Our Brands
          </Link>
        </li>

        <li>
          <Link to="/global-presence" onClick={() => setMenuOpen(false)}>
            Global Presence
          </Link>
        </li>

        <li>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>
            Contact Us
          </Link>
        </li>
      </ul>

      <button
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation menu"
        aria-expanded={menuOpen}
      >
        {menuOpen ? "X" : "☰"}
      </button>
    </nav>
  );
}
export default Navbar;
