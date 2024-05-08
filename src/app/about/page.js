"use client";

import React, { useEffect } from "react";
import "../styles/_main.scss";
import "../styles/components/_navigation.scss";
import "../styles/components/_pages.scss";
import Navigation from "../components/Navigation/Navigation";

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

  // Function to handle the activation of a link.
  const handleSetActive = (activeElem) => {
    const prevActiveElement = document.querySelector(".active");
    console.log(activeElem);
    if (prevActiveElement) {
      const currActiveElement = document.getElementById(activeElem);
      prevActiveElement.classList.remove("active");
      currActiveElement.classList.add("active");
    }
  };

  return (
    <div className="main">
      <div className="i-col100 i-container-aboutpage">
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
                onClick={handleSetActive("nav-how-it-all-started")}
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
                offset={100}
                duration={500}
                onClick={handleSetActive("nav-goals")}
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
                offset={50}
                duration={500}
                onClick={handleSetActive("nav-experience")}
              >
                <div id="nav-experience">
                  <span className="line transition-all"></span>
                  <span className="text"> Experience </span>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="i-col50 i-fr">
          <div id="parentElement" className="content-page">
            <Element id="how-it-all-started" name="how-it-all-started">
              <p>
                {" "}
                When I was a kid, maybe around grade school, I was fascinated by
                computer machines. I saw one for the very first time in the
                computer shop in my neighborhood. I was curious about how this
                technology worked, and because of that, I dreamed of having one.
              </p>
              <p>
                But because it was expensive at that time, I couldn't afford to
                have one. However, this did not stop me from trying it out,
                discovering it, and eventually, it carved a path to my passion
                for technology.
              </p>
              <p>
                At first, I only enjoyed how the computer entertained me through
                gaming, but when I first discovered Friendster - my very first
                social media platform - my curiosity was piqued again,
                eventually leading to the development of my passion for web
                development and software engineering.
              </p>
              <p>
                {" "}
                From a kid who dreamed of building his own social media platform
                to becoming a web and software developer as a career, the dream
                became a reality, and it continues to grow. I'm still hungry for
                new knowledge and experiences, and I still have a constant
                desire to push my boundaries and create something new every day.
              </p>
            </Element>
            <Element id="goals" name="goals">
              <p>
                {" "}
                I'm currently training and studying Mobile Development using
                React Native and Expo. My goal is to build more application both
                web and mobile. I'm using Udemy to get certified as a React
                Native developer and used this to get many side gigs or on my
                side projects.
              </p>
            </Element>
          </div>
        </div>
        <Navigation activePage="About" />
      </div>
    </div>
  );
};

export default About;
