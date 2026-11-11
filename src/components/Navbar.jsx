
import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const closeMenu = () => setMenuOpen(false);

    return (
        <nav className="navbar">

            <div className="logo">
                <NavLink to="/" onClick={closeMenu}>
                    VEMAZ<span> EXIM</span>
                </NavLink>
            </div>

            <ul className={`nav-links ${menuOpen ? "active" : ""}`}>

                <li>
                    <NavLink to="/" end className={({ isActive }) =>
                        isActive ? "nav-link active" : "nav-link"
                    } onClick={closeMenu}>
                        Home
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/about" className={({ isActive }) =>
                        isActive ? "nav-link active" : "nav-link"
                    } onClick={closeMenu}>
                        About Us
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/companies" className={({ isActive }) =>
                        isActive ? "nav-link active" : "nav-link"
                    } onClick={closeMenu}>
                        Our Companies
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/brands" className={({ isActive }) =>
                        isActive ? "nav-link active" : "nav-link"
                    } onClick={closeMenu}>
                        Our Brands
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/global-presence" className={({ isActive }) =>
                        isActive ? "nav-link active" : "nav-link"
                    } onClick={closeMenu}>
                        Global Presence
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/contact" className={({ isActive }) =>
                        isActive ? "nav-link active" : "nav-link"
                    } onClick={closeMenu}>
                        Contact Us
                    </NavLink>
                </li>

            </ul>

            <button
                className="menu-toggle"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle navigation menu"
                aria-expanded={menuOpen}
                type="button"
            >
                {menuOpen ? "✕" : "☰"}
            </button>

        </nav>
    );
}

export default Navbar;
