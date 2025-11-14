import React from "react";
import "./Skills.css";

const skills = [
  { name: "JavaScript", level: "Advanced" },
  { name: "React", level: "Intermediate" },
  { name: "CSS", level: "Advanced" },
  { name: "HTML", level: "Advanced" },
  { name: "Node.js", level: "Intermediate" },
  { name: "PHP", level: "Advanced" },
  { name: "MySQL", level: "Advanced" },
  { name: "Git & GitHub", level: "Proficient" },
  { name: "Python (Basics)", level: "Beginner" },
];

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="section-container">
        <h2 className="section-title">Technical Skills</h2>
        <p className="section-subtitle">
          A showcase of my technical expertise and tools I’ve mastered over time.
        </p>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              <div className="skill-glow"></div>
              <h3 className="skill-name">{skill.name}</h3>
              <p className="skill-level">{skill.level}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
