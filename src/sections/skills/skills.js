import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, facode } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import "./skills.css";

const Skills = () => {
  return (
    <section className="skill-card">
      <ul>
        <li>Languages: C/C++, Java, Python, Dart, SQL</li>
        <li>Frameworks: Flutter, Node.js, React</li>
        <li>Cloud: AWS</li>
        <li>Libraries: MongoDB, Firebase, Numpy</li>
      </ul>
    </section>
  );
};

export default Skills;
