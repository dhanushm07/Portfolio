import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="creative-hero">
      {/* Animated Background */}
      <div className="animated-bg">
        <span className="code-symbol">{`{ }`}</span>
        <span className="code-symbol">{`</>`}</span>
        <span className="code-symbol">{`=>`}</span>
        <span className="code-symbol">{`[]`}</span>
        <span className="code-symbol">{`&&`}</span>
      </div>

      {/* Content */}
      <div className="hero-content">
        <div className="hero-text">
          <h1>
            Hi, I’m <span>Dhanush</span>
          </h1>

          <h2>
            I build <span className="typing">modern web systems</span>
          </h2>

          <p>
           Software Developer | Full Stack Web Applications | PHP, JavaScript, MySQL | MERN Stack | AWS | Real-World Product Systems
          </p>

          <div className="hero-actions">
            <a href="#projects" className="btn-primary">
              View Projects
            </a>

            <a
              href="https://drive.google.com/your-public-resume-link"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-resume"
            >
              View Resume
            </a>
          </div>
        </div>

        {/* Profile Image */}
        <div className="hero-image">
          <div className="image-glow"></div>
          <img src="/images/dhanush.jpg" alt="Dhanush M" />
        </div>
      </div>
    </header>
  );
};

export default Header;
