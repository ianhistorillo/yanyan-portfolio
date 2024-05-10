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

const AboutContent = () => {
  return (
    <div className="i-col50 i-fr i-pd-top-10">
      <div id="parentElement" className="content-page">
        <Element id="how-it-all-started" name="how-it-all-started">
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
        <Element id="goals" name="goals">
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
        <Element id="experience" name="experience">
          <div className="experience-item">
            <div className="experience-year">
              <span>2020</span>
              <span className="dash"></span>
              <span>PRESENT</span>
            </div>
            <div className="experience-company">
              <h3>
                Full-stack Developer · Flexisource IT
                <span className="visit">
                  <Visit />
                </span>
              </h3>
              <span className="experience-summary">
                Build and maintain currrent in-house projects for flexisource
                and build websites for new clients. Work closely with marketing
                team including designers, content writer and SEO. Later on I've
                been transferred to one of our client and become a Full-stack
                developer to helped them build their new applications and
                maintain the existing one.
              </span>

              <div className="experience-techstack">
                <span className="techstack-item"> PHP </span>
                <span className="techstack-item"> Javascript </span>
                <span className="techstack-item"> React </span>
                <span className="techstack-item"> Wordpress </span>
              </div>
            </div>
          </div>
          <div className="experience-item">
            <div className="experience-year">
              <span>2019</span>
              <span className="dash"></span>
              <span>2020</span>
            </div>
            <div className="experience-company">
              <h3>
                Software Engineer · Bayview Technologies
                <span className="visit">
                  <Visit />
                </span>
              </h3>
              <span className="experience-summary">
                Build, style and maintain the current website feature and design
                for our existing and new international clients. Collaborated
                with multiple teams such as other developers, QA, DevOps, DB
                management, scrum teams, third party software partners and BOC.
              </span>

              <div className="experience-techstack">
                <span className="techstack-item"> PHP </span>
                <span className="techstack-item"> Javascript </span>
                <span className="techstack-item"> React </span>
                <span className="techstack-item"> HTML & CSS </span>
                <span className="techstack-item"> Drupal </span>
              </div>
            </div>
          </div>

          <div className="experience-item">
            <div className="experience-year">
              <span>2017</span>
              <span className="dash"></span>
              <span>2019</span>
            </div>
            <div className="experience-company">
              <h3>
                Application Developer · Alpax Software Solutions
                <span className="visit">
                  <Visit />
                </span>
              </h3>
              <span className="experience-summary">
                Developed applications for new clients and mostly involved with
                our major product - Payroll application. Worked with the QA team
                and business analyst to enhanced the application more and meet
                with the clients for the deployment and training.
              </span>

              <div className="experience-techstack">
                <span className="techstack-item"> HTML </span>
                <span className="techstack-item"> CSS </span>
                <span className="techstack-item"> Javascript </span>
                <span className="techstack-item"> PHP </span>
                <span className="techstack-item"> jQuery </span>
              </div>
            </div>
          </div>
        </Element>
      </div>
    </div>
  );
};

export default AboutContent;
