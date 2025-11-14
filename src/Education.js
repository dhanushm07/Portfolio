import React from "react";
import "./Education.css";

const Education = () => {
  return (
    <section id="education" className="education-section">
      <div className="section-container">
        <h2 className="section-title">Education</h2>

        <div className="education-card">
          <div className="edu-header">
            <div className="edu-logo-wrapper">
              <img
                src="/images/anna_university.png"
                alt="Anna University"
                className="edu-logo"
              />
            </div>
            <div className="edu-info">
              <h3 className="degree">
                Bachelor of Engineering (B.E) – Computer Science and Engineering
              </h3>
              <h4 className="college">
                University College of Engineering, Panruti
              </h4>
              <h5 className="university">Affiliated to Anna University</h5>
            </div>
          </div>

          <div className="edu-meta">
            <p className="year">📅 2020 – 2024</p>
            <p className="grade">
              🎯 <strong>CGPA:</strong> 8.64 / 10
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
