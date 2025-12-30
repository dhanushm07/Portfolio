import React, { useState } from "react";
import "./Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="identity-header">
      {/* Tech Grid Background */}
      <div className="tech-grid"></div>

      {/* Architecture Lines */}
      <div className="architecture-lines"></div>

      <div className="identity-container">
        {/* LEFT: Identity */}
        <div className="identity-card">
          <div className="photo-frame">
            <img
              src="/images/dhanush.jpg"
              alt="Dhanush M"
              className="profile-photo"
            />
          </div>

          <div className="identity-text">
            <h1>Dhanush M</h1>
            <h2>Full Stack Developer</h2>
            <p className="tagline">
              Building scalable web systems with clean architecture,
              performance focus, and real-world impact.
            </p>
          </div>

          <div className="identity-actions">
            <a href="#projects" className="primary-btn">View Work</a>
            <a href="#contact" className="secondary-btn">Contact</a>
          </div>
        </div>

        {/* RIGHT: Tech Representation */}
        <div className="stack-visual">
          <div className="stack-layer frontend">
            <span>Frontend</span>
            <p>React · JavaScript · HTML · CSS</p>
          </div>
          <div className="stack-layer backend">
            <span>Backend</span>
            <p>Node · PHP · REST APIs · MySQL</p>
          </div>
          <div className="stack-layer cloud">
            <span>Cloud & DevOps</span>
            <p>AWS · Linux · CI/CD · System Design</p>
          </div>
        </div>
      </div>

      {/* Menu Button */}
      <button
        className={`menu-toggle ${isMenuOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <span></span><span></span><span></span>
      </button>

      {/* Overlay Navigation */}
      <nav className={`overlay-menu ${isMenuOpen ? "show" : ""}`}>
        <ul>
          <li><a href="#about" onClick={toggleMenu}>About</a></li>
          <li><a href="#experience" onClick={toggleMenu}>Experience</a></li>
          <li><a href="#skills" onClick={toggleMenu}>Skills</a></li>
          <li><a href="#projects" onClick={toggleMenu}>Projects</a></li>
          <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
