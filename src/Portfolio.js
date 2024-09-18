import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, facode } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import Career from "./sections/career/career";
import "./Portfolio.css";
import Skills from "./sections/skills/skills";
import Projects from "./sections/Projects/projects";
import Home from "./sections/home/home";
import Contact from "./sections/contact/contact";

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("Career");

  // Function to render the content based on active tab
  const renderContent = () => {
    switch (activeTab) {
      case "Home":
        return <Home />;
      case "Career":
        return <Career />;
      case "Skills":
        return <Skills />;
      case "Projects":
        return <Projects />;
      case "Contact":
        return <Contact />;
      default:
        return null;
    }
  };

  return (
    <div className="portfolio">
      <header className="navbar">
        <nav>
          <ul>
            <li
              onClick={() => setActiveTab("Home")}
              className={activeTab === "Home" ? "active" : ""}
            >
              Home
            </li>
            <li
              onClick={() => setActiveTab("Career")}
              className={activeTab === "Career" ? "active" : ""}
            >
              Career
            </li>
            <li
              onClick={() => setActiveTab("Projects")}
              className={activeTab === "Projects" ? "active" : ""}
            >
              Projects
            </li>
            <li
              onClick={() => setActiveTab("Contact")}
              className={activeTab === "Contact" ? "active" : ""}
            >
              Contact
            </li>
          </ul>
        </nav>
      </header>

      <main className="content">{renderContent()}</main>
    </div>
  );

  //   return (
  //     <div className="portfolio">
  //       <aside className="sidebar">
  //         <div className="profile">
  //           <img
  //             src="/images/DisplayPicture.jpg"
  //             alt="Profile"
  //             className="profile-img"
  //           />
  //           <h2>Ayush Choudhury</h2>
  //           <p>
  //             <FontAwesomeIcon icon={faEnvelope} /> ayushchoudhury1990@gmail.com
  //           </p>
  //           <div className="social-icons">
  //             <p>
  //               <a
  //                 href="https://www.linkedin.com/in/ayush-choudhury-611a43193/"
  //                 target="_blank"
  //                 rel="noopener noreferrer"
  //               >
  //                 <FontAwesomeIcon icon={faLinkedin} />{" "}
  //               </a>
  //             </p>
  //             <p>
  //               <a
  //                 href="https://github.com/ayush-150101"
  //                 target="_blank"
  //                 rel="noopener noreferrer"
  //               >
  //                 <FontAwesomeIcon icon={faGithub} />{" "}
  //               </a>
  //             </p>
  //           </div>
  //         </div>
  //         <nav className="nav-links">
  //           <button
  //             onClick={() => setActiveTab("Career")}
  //             className={activeTab === "Career" ? "active" : ""}
  //           >
  //             Career
  //           </button>
  //           <button
  //             onClick={() => setActiveTab("Skills")}
  //             className={activeTab === "Skills" ? "active" : ""}
  //           >
  //             Skills
  //           </button>
  //           <button
  //             onClick={() => setActiveTab("Projects")}
  //             className={activeTab === "Projects" ? "active" : ""}
  //           >
  //             Projects
  //           </button>
  //           <button
  //             onClick={() => setActiveTab("Education")}
  //             className={activeTab === "Education" ? "active" : ""}
  //           >
  //             Education
  //           </button>
  //         </nav>
  //       </aside>
  //       <main className="content">{renderContent()}</main>
  //     </div>
  //   );
};

export default Portfolio;
