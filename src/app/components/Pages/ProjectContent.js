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

import Visit from "../Icons/Visit";

const ProjectContent = () => {
  return (
    <div className="i-col50 i-fr i-pd-top-10">
      <div id="projectsElement" className="content-page">
        <Element id="featured-projects" name="featured-projects">
          <p>
            When I was a kid, maybe around grade school, I was fascinated by
            computer machines. I saw one for the very first time in the computer
            shop in my neighborhood. I was curious about how this technology
            worked, and because of that, I dreamed of having one.
          </p>
          <p>
            But because it was expensive at that time, I couldn't afford to have
            one. However, this did not stop me from trying it out, discovering
            it, and eventually, it carved a path to my passion for technology.
          </p>
          <p>
            At first, I only enjoyed how the computer entertained me through
            gaming, but when I first discovered Friendster - my very first
            social media platform - my curiosity was piqued again, eventually
            leading to the development of my passion for web development and
            software engineering.
          </p>
        </Element>
        <Element id="other-projects" name="other-projects">
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
          <p>
            When I'm not on my computer, I'm usually on the gym or riding my
            motorbike somewhere on the countryside. I'm into music as well so
            mostly I'm playing musical instruments with my band.
          </p>
        </Element>
      </div>
    </div>
  );
};

export default ProjectContent;
