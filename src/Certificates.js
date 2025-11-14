import React from "react";
import "./Certificates.css";

const certificates = [
  {
    name: "Certificate in Full Stack Python Programming",
    role: "Guvi (November 2023)",
    feedback:
      "Completed advanced Full Stack Python course focusing on Django, Flask, REST API, and deployment workflows.",
    image: "/images/python.png",
    link: "https://drive.google.com/file/d/1Jic2r_DTQdTRfq2uz68o5eHFCcGpmyeE/view",
  },
  {
    name: "Certificate in Networking",
    role: "CISCO (May 2023)",
    feedback:
      "Learned networking fundamentals including IP addressing, subnetting, and routing concepts.",
    image: "/images/networking.png",
    link: "https://drive.google.com/file/d/1lB210SUpmCXJvKQ5f6otRxIXnWUBIxKL/view",
  },

];

const Certificates = () => {
  return (
    <section className="certificates-section">
      <h2 className="section-title">Certificates</h2>
      <div className="certificates-grid">
        {certificates.map((cert, index) => (
          <div className="certificate-card" key={index}>
            <div className="certificate-image-container">
              <img src={cert.image} alt={cert.name} className="certificate-image" />
              <div className="certificate-overlay">
                <a href={cert.link} target="_blank" rel="noopener noreferrer">
                  <button className="view-btn">View Certificate</button>
                </a>
              </div>
            </div>
            <div className="certificate-content">
              <h3>{cert.name}</h3>
              <p className="certificate-role">{cert.role}</p>
              <p className="certificate-desc">{cert.feedback}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certificates;
