import React from "react";
import "./Projects.css";

const Projects = () => {
  const projects = [
    {
      name: "Paying Guest Management System",
      desc: "A full-stack hostel management system enabling seamless user registration, room allocation, and rent tracking. Built with PHP, MySQL, JavaScript, and AJAX during my company training period.",
      github: "https://github.com/dhanushm07/pg-management",
      link: "https://4wpgmanagement.kesug.com/",
      stack: "PHP, MySQL, JavaScript, AJAX",
    },
    {
      name: "Event Management",
      desc: "An end-to-end event registration and booking platform with real-time email notifications and an admin dashboard integrated with Chart.js for insights.",
      github: "https://github.com/dhanushm07/Event-Management",
      link: "https://eventmanage.kesug.com/",
      stack: "PHP, MySQL, JavaScript, AJAX, Chart.js",
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="section-container">
        <h2 className="section-title">Projects</h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <h3 className="project-title">{project.name}</h3>
              <p className="project-desc">{project.desc}</p>

              <div className="project-links">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-link"
                >
                  View Code
                </a>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-link live"
                >
                  Live Demo
                </a>
              </div>

              <p className="project-stack">
                <strong>Tech Stack:</strong> {project.stack}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
