"use client";

import React, { useEffect } from "react";
import "../styles/_main.scss";
import "../styles/components/_navigation.scss";
import "../styles/components/_pages.scss";

// Main Page Navigation
import Navigation from "../components/Navigation/Navigation";

// About Page Client Side Components
import AboutHeader from "../components/Pages/AboutHeader";
import AboutContent from "../components/Pages/AboutContent";

import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
} from "react-scroll";

const About = () => {
  // useEffect is used to perform side effects in functional components.
  // Here, it's used to register scroll events and update scrollSpy when the component mounts.
  useEffect(() => {
    // Registering the 'begin' event and logging it to the console when triggered.
    Events.scrollEvent.register("begin");

    // Registering the 'end' event and logging it to the console when triggered.
    Events.scrollEvent.register("end");

    // Updating scrollSpy when the component mounts.
    scrollSpy.update();

    // Returning a cleanup function to remove the registered events when the component unmounts.
    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  }, []);
  return (
    <div className="main">
      <div className="i-col100 i-container-aboutpage">
        <AboutHeader />
        <AboutContent />
        <Navigation activePage="About" />
      </div>
    </div>
  );
};

export default About;
