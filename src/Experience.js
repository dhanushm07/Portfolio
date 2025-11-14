import React from 'react';
import './Experience.css';

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <div className="section-container">
        <h2 className="section-title">Experience</h2>

        <div className="timeline">
          {/* Experience Item 1 */}
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3 className="role">Full Stack Web Developer</h3>
              <h4 className="company">4W Technology — Chennai, India</h4>
              <span className="period">July 2024 – Present</span>
              <p className="description">
                Currently working on the company’s flagship platform, 
                <strong> 4W Property Management</strong> — a comprehensive web application for property operations.
                My role involves:
              </p>
              <ul className="responsibilities">
                <li>Developing and enhancing in-house product features using <strong>PHP</strong>, <strong>MySQL</strong>, and <strong>JavaScript</strong>.</li>
                <li>Managing <strong>Linux server configurations</strong>, deployment, and version control for stable releases.</li>
                <li>Debugging, optimizing, and ensuring smooth performance in live production environments.</li>
                <li>Performing <strong>database backups</strong>, <strong>code testing</strong>, and coordinating with the internal QA process.</li>
                <li>Collaborating with team members to maintain the complete application lifecycle.</li>
              </ul>
            </div>
          </div>

          {/* Learning / Skill Growth Item */}
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3 className="role">MERN Stack & Cloud Skill Development</h3>
              <h4 className="company">Self-Learning & Practice Projects</h4>
              <span className="period">2024 – Ongoing</span>
              <p className="description">
                Expanding my skill set beyond PHP-based development into modern technologies:
              </p>
              <ul className="responsibilities">
                <li>Learning <strong>React.js</strong> and <strong>Node.js</strong> for full-stack JavaScript development.</li>
                <li>Practicing <strong>Python</strong> for data structures, backend logic, and automation.</li>
                <li>Exploring <strong>AWS Cloud</strong> fundamentals for scalable application hosting.</li>
                <li>Building personal portfolio projects to apply concepts and enhance real-world coding skills.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
