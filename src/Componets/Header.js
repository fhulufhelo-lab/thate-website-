import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';
import About from '../Pages/About';  // Import the About component
import logo from './logo1.jpg';
import logo1 from './ThateLogo.png';
import './Header.css';

function Header() {
  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css';
    link.crossOrigin = 'anonymous';
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close the mobile menu after a link is clicked
  const closeMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav className="navbar">
      {/* Left side: Hamburger Icon */}
      <div className="navbar-left">
        <button className="hamburger" onClick={toggleMenu}>
          &#9776; {/* Hamburger icon */}
        </button>
      </div>

      {/* Center: Logo - Always visible */}
      <div className="navbar-center">
        <img src={logo1} alt="Logo" className="logo" />
      </div>

      {/* Mobile Menu */}
      <div className={`navbar-center ${isMobileMenuOpen ? 'open' : ''}`}>
        <ul>
          <li><Link to='/Home' onClick={closeMenu}> Home</Link></li>
          <li><Link to="/about" onClick={closeMenu}>About Us</Link></li>
          <li><Link to="/Services" onClick={closeMenu}>Services</Link></li>
          {/* <li><Link to="/Request" onClick={closeMenu}>Request a Quote</Link></li> */}
          <li><Link to='/contactUs' onClick={closeMenu}> Contact Us</Link></li>
        </ul>
      </div>

      {/* Right side: WhatsApp Button (Visible on Desktop) */}
      <div className="navbar-right desktop-only">
        <button className="whatsapp-button">
          <a href="https://wa.me/+27824425771" target="_blank" className="whatsapp-link">
            <i className="fab fa-whatsapp"></i>
            Chat on WhatsApp
          </a>
        </button>
      </div>
    </nav>
  );
}

export default Header;
