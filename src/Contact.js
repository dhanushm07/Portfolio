import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <h2 className="contact-title">Let’s Connect</h2>
      <p className="contact-intro">
        I’m an enthusiastic full-stack developer actively seeking new opportunities
        to contribute and collaborate on impactful projects. Whether it’s for
        full-time roles, freelance work, or technical collaborations — I’d love
        to connect!
      </p>

      <div className="contact-container">
        <div className="contact-card">
          <img src="/images/linkedin.png" alt="LinkedIn" className="contact-icon" />
          <h3>LinkedIn</h3>
          <a
            href="https://www.linkedin.com/in/dhanush-murugan-385203200/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-btn"
          >
            Connect
          </a>
        </div>

        <div className="contact-card">
          <img src="/images/github.png" alt="GitHub" className="contact-icon" />
          <h3>GitHub</h3>
          <a
            href="https://github.com/dhanushm07"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-btn"
          >
            View Work
          </a>
        </div>

        <div className="contact-card">
          <img src="/images/gmail.png" alt="Email" className="contact-icon" />
          <h3>Email</h3>
          <a href="mailto:dhanushmuruganm7@gmail.com" className="contact-btn">
            Send Mail
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
