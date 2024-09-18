import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faNodeJs,
  faPython,
  faGithub,
} from "@fortawesome/free-brands-svg-icons"; // Import icons
import "./skill.css";

const Skill = () => {
  return (
    <section className="skills-section">
      <div className="skills-grid">
        <div className="skill-item">
          <i className="devicon-react-original colored"></i>{" "}
          {/* Using Devicon */}
          <p>React</p>
        </div>
        <div className="skill-item">
          <i className="devicon-nodejs-plain colored"></i> {/* Using Devicon */}
          <p>Node.js</p>
        </div>
        <div className="skill-item" data-skill="python">
          <i className="devicon-python-plain colored"></i> {/* Using Devicon */}
          <p className="hidden-content">Python</p>
        </div>
        <div className="skill-item">
          <FontAwesomeIcon icon={faGithub} className="home-skill-icon" />
          <p>GitHub</p>
        </div>
        <div className="skill-item">
          <i className="devicon-flutter-plain colored"></i>{" "}
          {/* Using Devicon */}
          <p>Flutter</p>
        </div>
        <div className="skill-item">
          <i className="devicon-mongodb-plain colored"></i>{" "}
          {/* Using Devicon */}
          <p>MongoDB</p>
        </div>
      </div>
    </section>
  );
};

export default Skill;
