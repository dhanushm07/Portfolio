import React, { useState } from "react";
import "./Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="hero-header">
      {/* Floating gradient orbs */}
      <div className="orb orb1"></div>
      <div className="orb orb2"></div>

      {/* Glass content area */}
      <div className="header-content">
        <div className="glass-card">
          {/* Profile */}
          <div className="profile-pic-container">
            <img
              src="/images/dhanush.jpg"
              alt="Dhanush M"
              className="profile-pic"
            />
          </div>

          {/* Name + Role */}
          <div className="intro-text">
            <h1 className="name">Dhanush M</h1>
            <p className="role">Full Stack Web Developer</p>
          </div>

          {/* CTA Buttons */}
          <div className="cta-buttons">
            <a href="#projects" className="btn-glow">View Projects</a>
            <a href="#contact" className="btn-outline">Contact Me</a>
          </div>

          {/* Menu Button */}
          <button
            className={`menu-btn ${isMenuOpen ? "open" : ""}`}
            onClick={toggleMenu}
          >
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>

      {/* Overlay Navigation */}
      <nav className={`overlay-menu ${isMenuOpen ? "show" : ""}`}>
        <ul>
          <li><a href="#about" onClick={toggleMenu}>About</a></li>
          <li><a href="#experience" onClick={toggleMenu}>Experience</a></li>
          <li><a href="#education" onClick={toggleMenu}>Education</a></li>
          <li><a href="#skills" onClick={toggleMenu}>Skills</a></li>
          <li><a href="#projects" onClick={toggleMenu}>Projects</a></li>
          <li><a href="#certificates" onClick={toggleMenu}>Certificates</a></li>
          <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
