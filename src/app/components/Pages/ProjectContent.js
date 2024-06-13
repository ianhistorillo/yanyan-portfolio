"use client";

import React from "react";
import Image from "next/image";
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
    <div className="i-col70 i-fr">
      <div id="projectsElement" className="content-page project-page">
        <div id="featured-projects">
          <a href="https://earthmeter.io/" target="_blank">
            <div className="featured-projects-container">
              <div className="featured-projects-image">
                <Image
                  src="/img/earthmeter-revised-project.png"
                  width={1000}
                  height={1000}
                  alt="Picture of the author"
                />
              </div>
              <div className="featured-projects-description">
                <span className="title"> Earthmeter.io </span>
                <p>
                  {" "}
                  At first look, this is only a simple responsive landing page,
                  but this is the first good landing page I've created. On this
                  project, I've learned how to used Typescript for the first
                  time and other tech.
                </p>

                <div className="featured-projects-stack">
                  <div className="other-projects-item"> Git@Github</div>
                  <div className="other-projects-item"> React </div>
                  <div className="other-projects-item"> Node </div>
                  <div className="other-projects-item"> TypeScript </div>
                </div>
              </div>
            </div>
          </a>
          <a href="https://tejnat.com" target="_blank">
            <div className="featured-projects-container">
              <div className="featured-projects-image">
                <Image
                  src="/img/ezpayzee-revised-project.png"
                  width={1000}
                  height={1000}
                  alt="Picture of the author"
                />
              </div>
              <div className="featured-projects-description">
                <span className="title"> EzPayPlus</span>
                <p>
                  {" "}
                  This project is a web based payroll system. This is the first
                  big project I've created during my junior years.
                </p>
                <p>
                  {" "}
                  This is featured because this is one of our main product and
                  many clients availed it.
                </p>
                <div className="featured-projects-stack">
                  <div className="other-projects-item"> Git@Github</div>
                  <div className="other-projects-item"> HTML </div>
                  <div className="other-projects-item"> PHP </div>
                  <div className="other-projects-item"> Javascript </div>
                </div>
              </div>
            </div>
          </a>

          <div className="featured-projects-container">
            <div className="featured-projects-image">
              <Image
                src="/img/expense-revised-project.png"
                width={1000}
                height={1000}
                alt="Picture of the author"
              />
            </div>
            <div className="featured-projects-description">
              <span className="title"> Expense Tracker </span>
              <p>
                This mobile app is my first running project when I enter to the
                world of mobile development. In here, I showcase my experience
                on React and React Native, Expo and state management.
              </p>
              <div className="featured-projects-stack">
                <div className="other-projects-item"> Git@Github</div>
                <div className="other-projects-item"> React Native </div>
                <div className="other-projects-item"> Expo </div>
                <div className="other-projects-item"> Javascript </div>
                <div className="other-projects-item"> Redux </div>
              </div>
            </div>
          </div>
        </div>
        <div id="other-projects">
          <div className="other-projects-container">
            <div className="other-projects-header">
              {" "}
              Interactive Property Plans{" "}
            </div>
            <div className="other-projects-description">
              This is my current or latest projects I'm involved with - I am
              developing interactive property plans for villages, apartments,
              townhouses and etc. The app showcase the property details,
              downloadable brochures and even the real time map where the
              property currently located.
            </div>
            <div className="other-projects-stack">
              <div className="other-projects-item"> Git@Github </div>
              <div className="other-projects-item"> React </div>
              <div className="other-projects-item"> Javascript</div>
              <div className="other-projects-item"> Symfony </div>
              <div className="other-projects-item"> Google Cloud Platform </div>
            </div>
          </div>
          <div className="other-projects-container">
            <div className="other-projects-header">
              {" "}
              Website - FFC Foundation{" "}
            </div>
            <div className="other-projects-description">
              Building websites for corporate business is not new to me. But
              building the website for my mother church and foundation is always
              a privelege and pleasure to me. I used WordPress and Elementor to
              build this website quickly. The write-ups, stories and articles
              are the core feature of this website so I mostly highlighted the
              blog page.
            </div>
            <div className="other-projects-stack">
              <div className="other-projects-item"> WordPress </div>
              <div className="other-projects-item"> HTML </div>
              <div className="other-projects-item"> CSS </div>
              <div className="other-projects-item"> PHP </div>
              <div className="other-projects-item"> Elementor </div>
              <div className="other-projects-item"> Marketing Plugin </div>
            </div>
          </div>
          <div className="other-projects-container">
            <div className="other-projects-header">Tasks Tracker</div>
            <div className="other-projects-description">
              I developed this app to helped me organize myself when it comes to
              tracking my tasks/time everyday. I used this app more often but
              when I learn how to used notion app, I started to loved it and
              quickly transition to that.
            </div>
            <div className="other-projects-stack">
              <div className="other-projects-item"> React Native </div>
              <div className="other-projects-item"> Expo </div>
              <div className="other-projects-item"> Javascript </div>
              <div className="other-projects-item"> Git@Github </div>
            </div>
          </div>
          <div className="other-projects-container">
            <div className="other-projects-header"> More Websites </div>
            <div className="other-projects-description">
              I do have a lot of websites that I built before but this is the
              only websites I am allowed to showed you:
              <ul>
                <li>FFC Foundation - https://ffcfoundationph.com/</li>
                <li>Bizcap AU - https://www.bizcap.com.au/ </li>
                <li>Bizcap NZ - https://www.bizcap.nz/ </li>
              </ul>
            </div>
            <div className="other-projects-stack">
              <div className="other-projects-item"> WordPress </div>
              <div className="other-projects-item"> Web Builder </div>
              <div className="other-projects-item"> Elementor </div>
              <div className="other-projects-item"> Divi </div>
              <div className="other-projects-item"> HTML </div>
              <div className="other-projects-item"> CSS </div>
              <div className="other-projects-item"> Javascript </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectContent;
