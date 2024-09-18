import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, facode } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import "./career.css";

const Career = () => {
  return (
    <section className="career-section">
      {/* <h2>Professional Experience</h2> */}

      <div className="job-experience">
        <h3>
          Capsa Technologies Inc.
          <a href="https://www.getcapsa.com">(GetCapsa)</a>
        </h3>
        <span className="job-title">SDE</span>
        <span className="job-duration">July 2023 – Present</span>

        <p className="job-description">
          As a FLutter developer, I was responsible for developing and
          mantaining the User Interface (Android, IOS and Web) of our fintech
          platform and improving user experience by optimizing performance,
          leading to significant improvements in product functionality and user
          retention.
        </p>

        <ul className="job-responsibilities">
          <li>
            <strong>Platform Security:</strong> Implemented data encryption that
            enhanced security by 40%.
          </li>
          <li>
            <strong>Performance Optimization:</strong> Reduced login time by
            50%, improving overall system performance.
          </li>
          <li>
            <strong>Code Quality:</strong> Conducted 200+ code reviews, ensuring
            a 95% adherence to coding standards, which reduced bugs by 25%.
          </li>
          <li>
            <strong>Team Leadership:</strong> Mentored 5 junior developers,
            fostering a culture of learning and continuous improvement.
          </li>
          <li>
            <strong>Technologies Used:</strong> FLutter, Node.js
          </li>
        </ul>
      </div>

      <div className="job-experience">
        <h3>Capsa Technologies Inc.</h3>
        <span className="job-title">Web & Mobile App Development Intern</span>
        <span className="job-duration">June 2022 – June 2023</span>

        <ul className="job-responsibilities">
          <li>
            Developed a web platform that supported over 2000 daily active
            users, reducing invoice processing time by 40%.
          </li>
          <li>
            Collaborated closely with UI/UX designers to implement user-centered
            design principles, boosting engagement by 25%.
          </li>
          <li>
            Integrated APIs using Node.js and implemented real-time features
            with WebSocket.
          </li>
        </ul>
      </div>

      <div className="job-experience">
        <h3>Juno Terra</h3>
        <span className="job-title">Android/IOS app development intern</span>
        <span className="job-duration">June 2021 – February 2022</span>

        <ul className="job-responsibilities">
          <li>
            Designed and maintained a robust mobile application for real-time
            monitoring of IoT devices, resulting in 30% increase in user
            interaction and data reliability.
          </li>
          <li>
            Led client-facing feature development, consistently meeting 100% of
            client expectations through detailed requirement gathering and
            iterative feedback loops
          </li>
          <li>
            <strong>Technologies Used:</strong> FLutter
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Career;
