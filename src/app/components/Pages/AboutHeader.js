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

  return (
    <div className="i-col60 flexi-header">
      <div className="header">
        <div className="header-title-about">
          {" "}
          <span className="header-number-one">01. </span>{" "}
          <span className="header-title-one"> My Background </span>{" "}
        </div>
        <div id="parentElement" className="content-page">
          {/* // <p>
            //   When I was a kid, maybe around grade school, I was fascinated by
            //   computer machines. I saw one for the very first time in the
            //   computer shop in my neighborhood. I was curious about how this
            //   technology worked, and because of that, I dreamed of having one.
            // </p>
            // <p>
            //   But because it was expensive at that time, I couldn't afford to
            //   have one. However, this did not stop me from trying it out,
            //   discovering it, and eventually, it carved a path to my passion for
            //   technology.
            // </p> */}
          <p>
            Hi! I'm Christian Historillo from the Philippines. I love technology
            in every form and learning new things everyday. My interest in web
            development starts when I first discovered Friendster - my very
            first social media platform. Because of friendster, I learn basic
            HTML and CSS that leads me later on to become a Web developer.
          </p>
          <p>
            I'm currently training and studying Mobile Development using React
            Native and Expo. My goal is to build more application both web and
            mobile. I'm using Udemy to get certified as a React Native developer
            and used this to get many side gigs or on my own projects.
          </p>
          <p>
            As a software engineer, my learning doesn't stop here. My goal is to
            keep myself updated in the latest tech and trend so I can build more
            efficient and scalable applications.
          </p>
          <p>Here are some of few technology I've used with:</p>
          <div className="about-techstack i-col50 i-fl">
            <ul>
              <li> JavaScript (ES6+) </li>
              <li> React JS / React Native </li>
              <li> Node JS </li>
            </ul>
          </div>
          <div className="about-techstack i-col50 i-fr">
            <ul>
              <li> PHP </li>
              <li> WordPress </li>
              <li> Typescript </li>
            </ul>
          </div>
        </div>
        {/* <div className="side-nav">
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
        </div> */}
      </div>
    </div>
  );
};

export default AboutHeader;
