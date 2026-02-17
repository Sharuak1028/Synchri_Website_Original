import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom"; // Added for routing
import "../Styles/Navbar.css";

// Simple Inline Icon to avoid external dependency errors
const CartIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle>
    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
  </svg>
);

export default function Navbar({ cartCount }) {
  const LogoUrl = "/images/Synchri_Sample_logo1.png"; 
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const scrollToSection = (id) => {
    // If we are not on the home page, navigate home first
    if (window.location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(id);
        if(element) element.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      const element = document.getElementById(id);
      if(element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
        setMenuOpen(false);
      }
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="brand-block" onClick={() => navigate("/")} style={{cursor: 'pointer'}}>
          <img className="logo" src={LogoUrl} alt="Logo" />
          <div className="brand-text">
            <h1 className="company-name">Synchrii Technology</h1>
            <p className="tagline">synchronizing intelligence with innovation</p>
          </div>
        </div>

        <button className="navbar-toggler" onClick={() => setMenuOpen(!menuOpen)}>
          &#9776;
        </button>

        <ul className={`navbar-nav ${menuOpen ? "active" : ""}`}>
          <li className="nav-item" onClick={() => scrollToSection("hero")}>
            <span className="nav-link">Home</span>
          </li>
          <li className="nav-item" onClick={() => scrollToSection("ourteam")}>
            <span className="nav-link">About Us</span>
          </li>
          <li className="nav-item" onClick={() => scrollToSection("services")}>
            <span className="nav-link">Services</span>
          </li>
          
          {/* CART ICON WITH BADGE */}
          <li className="nav-item">
            <Link to="/cart" className="nav-cart-link">
              <CartIcon />
              {cartCount > 0 && <span className="cart-badge-nav">{cartCount}</span>}
            </Link>
          </li>

          <li className="nav-item" onClick={() => scrollToSection("contact")}>
            <span className="nav-link-btn">Get In Touch</span>
          </li>
        </ul>
      </div>
    </nav>
  );
}


