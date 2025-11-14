import React from "react";
import "./About.css";

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="section-container">
        <h2 className="section-title">About Me</h2>

        <div className="about-content">
          <div className="about-card">
                     <p className="about-text">
                       I’m <strong>Dhanush M</strong>, a passionate <strong>Full Stack Web Developer</strong> at <strong>4W Technology</strong>, 
                       working on the company’s flagship project — <strong>4W Property Management</strong>.
                     </p>
         
                     <p className="about-text">
                       My work involves developing and maintaining scalable web applications using 
                       <strong> PHP</strong>, <strong> MySQL</strong>, and <strong> JavaScript</strong>, along with handling 
                       <strong> Linux-based server configurations</strong>, deployment pipelines, and database management. 
                       I take complete responsibility for ensuring smooth operations and seamless live performance.
                     </p>
         
                     <p className="about-text">
                       I’m currently enhancing my expertise in the <strong>MERN Stack</strong> — learning 
                       <strong> React.js</strong> and <strong> Node.js</strong> — while also keeping up with 
                       <strong> Python coding</strong> for better problem-solving and backend logic building. 
                       My long-term goal is to grow into a <strong>cloud-enabled full-stack engineer</strong> capable of delivering 
                       innovative, reliable, and user-focused web solutions.
                     </p>
                   </div>

          <div className="about-stats">
            <div className="stat-card">
              <h3>1+</h3>
              <p>Years Experience</p>
            </div>
            <div className="stat-card">
              <h3>4+</h3>
              <p>Technologies Used</p>
            </div>
            <div className="stat-card">
              <h3>100%</h3>
              <p>System Reliability</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
