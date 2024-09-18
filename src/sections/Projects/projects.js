import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, facode } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import "./projects.css";

const Projects = () => {
  return (
    <section className="project-top">
      <div className="project-card">
        <h3>
          <a href="https://github.com/BlueBlaze6335/Illicit-Illustrations">
            Illicit Illustration
          </a>
        </h3>
        <span className="project-tech-stack">Flutter, Tensorflow, GAN</span>
        <ul>
          <li>
            App that recreates the image captured into a Painting with dimension
            of 512x512 pixels.
          </li>
          <li>
            Implemented GAN models (with 3 million parameters) for image to
            image style translation
          </li>
          <li>Image-to-Image Tensorflow datasets are used.</li>
          <li>
            Integrated the tflite model with mobile app (Flutter) to provide
            real time painting creation of any picture.
          </li>
        </ul>
      </div>
      <div className="project-card">
        <h3>
          <a href="https://github.com/ayush-150101/jai_kisan">Jai Kisan</a>
        </h3>
        <span className="project-tech-stack">Flutter</span>
        <ul>
          <li>
            An app to bring all the farmers and vendors under the same roof.
          </li>
          <li>
            This model aims to facilitate the use of technology to replace
            middlemen from the agricultural sector and prevent exploitation of
            farmers
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Projects;
