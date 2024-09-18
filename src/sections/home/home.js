import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, facode } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import "./home.css";
import Skill from "./skills/skill";

const Home = () => {
  return (
    <section className="home-section">
      <img
        src="/images/DisplayPicture.jpg"
        alt="Profile"
        className="home-image"
      />
      <h1>Hello Geek 101</h1>
      <h3>Software Developer And Programming Enthusiast</h3>
      <p className="intro">
        Hello! I’m Ayush Choudhury, a professional software developer
        specializing in full-stack development. I have experience building
        large-scale applications using modern technologies such as React,
        Flutter, Node.js, and more. I’m passionate about writing clean and
        efficient code and constantly learning to improve my skills.
      </p>
      <div className="contact-details">
        <Skill />
        <div className="resume-button">
          <a
            href="/documents/AYUSH_RESUME.pdf"
            download="Ayush_Choudhury_Resume.pdf"
          >
            <button className="download-btn">Download Resume</button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
