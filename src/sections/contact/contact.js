import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, facode } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import "./contact.css";

const Contact = () => {
  return (
    <section className="contact-section">
      <h2>Contact Me</h2>
      <div className="contact-info">
        <p>
          <FontAwesomeIcon icon={faEnvelope} /> Email:{" "}
          <a href="mailto:ayushchoudhury1990@gmail.com">
            ayushchoudhury1990@gmail.com
          </a>
        </p>
        <p>
          <FontAwesomeIcon icon={faPhone} /> Phone: +91 9002476413
        </p>
        <div className="social-icons">
          <a
            href="https://www.linkedin.com/in/ayush-choudhury-611a43193/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} className="icon" />
          </a>
          <a
            href="https://github.com/ayush-150101"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} className="icon" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
