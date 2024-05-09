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

const AboutHeader = () => {
  // Function to handle the activation of a link.
  const handleSetActive = (activeElem) => {
    const prevActiveElement = document.querySelector(".active");
    const currActiveElement = document.getElementById(activeElem);
    prevActiveElement.classList.remove("active");
    currActiveElement.classList.add("active");
  };

  return (
    <div className="i-col50 flexi-header">
      <div className="header">
        <div className="header-title"> BACKGROUND </div>
        <div className="side-nav">
          <Link
            to="how-it-all-started"
            containerId="parentElement"
            spy={true}
            smooth={true}
            offset={5}
            duration={500}
            onClick={() => handleSetActive("nav-how-it-all-started")}
          >
            <div id="nav-how-it-all-started" className="active">
              <span className="line transition-all"></span>
              <span className="text"> How it all started? </span>
            </div>
          </Link>
          <Link
            to="goals"
            containerId="parentElement"
            spy={true}
            smooth={true}
            offset={5}
            duration={500}
            onClick={() => handleSetActive("nav-goals")}
          >
            <div id="nav-goals">
              <span className="line transition-all"></span>
              <span className="text"> Goals </span>
            </div>
          </Link>
          <Link
            to="experience"
            containerId="parentElement"
            spy={true}
            smooth={true}
            offset={5}
            duration={500}
            onClick={() => handleSetActive("nav-experience")}
          >
            <div id="nav-experience">
              <span className="line transition-all"></span>
              <span className="text"> Experience </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutHeader;
