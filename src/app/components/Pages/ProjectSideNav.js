"use client";
import React from "react";

import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
} from "react-scroll";

const ProjectSideNav = () => {
  // Function to handle the activation of a link.
  const handleSetActive = (activeElem) => {
    let prevActiveElement = document.querySelector("div.active");
    const currActiveElement = document.getElementById(activeElem);
    prevActiveElement.classList.remove("active");
    currActiveElement.classList.add("active");
  };

  return (
    <div className="i-col30 flexi-header">
      <div className="header">
        <div className="header-title-about">
          {" "}
          <span className="header-number-one">03. </span>{" "}
          <span className="header-title-one"> Projects I've Built </span>{" "}
        </div>
        <div className="side-nav projects-nav">
          <Link
            to="featured-projects"
            containerId="projectsElement"
            spy={true}
            smooth={true}
            offset={5}
            duration={500}
            onClick={() => handleSetActive("nav-featured-projects")}
          >
            <div id="nav-featured-projects" className="active">
              <span className="line transition-all"></span>
              <span className="text"> Featured Works </span>
            </div>
          </Link>
          <Link
            to="other-projects"
            containerId="projectsElement"
            spy={true}
            smooth={true}
            offset={5}
            duration={500}
            onClick={() => handleSetActive("nav-other-projects")}
          >
            <div id="nav-other-projects">
              <span className="line transition-all"></span>
              <span className="text"> Others </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectSideNav;
