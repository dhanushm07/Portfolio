import React from "react";
import "./Skills.css";

const Skills = () => {
  return (
    <section id="skills" className="desk-skills">
      <h2 className="desk-title">My Technical Desk</h2>

      <div className="desk-rack">
        {/* Shelf 1 */}
        <div className="desk-shelf">
          <h3>Daily Workbench</h3>
          <div className="desk-items">
            <span>JavaScript</span>
            <span>PHP</span>
            <span>HTML</span>
            <span>CSS</span>
            <span>MySQL</span>
          </div>
        </div>

        {/* Shelf 2 */}
        <div className="desk-shelf">
          <h3>Hands-On & Expanding</h3>
          <div className="desk-items">
            <span>React</span>
            <span>Node.js</span>
            <span>Express</span>
            <span>REST APIs</span>
          </div>
        </div>

        {/* Shelf 3 */}
        <div className="desk-shelf">
          <h3>Systems & Cloud</h3>
          <div className="desk-items">
            <span>AWS</span>
            <span>Linux</span>
            <span>Shell Scripting</span>
            <span>Networking</span>
          </div>
        </div>

        {/* Pen Holder */}
        <div className="desk-holder">
          <h3>Tools & Logic</h3>
          <div className="desk-items">
            <span>Git</span>
            <span>GitHub</span>
            <span>Python</span>
            <span>Debugging</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
