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
    <div className="i-col80 i-fr i-pd-top-10">
      <div id="projectsElement" className="content-page">
        <div id="featured-projects">
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
                project, I've learned how to used Typescript for the first time
                and other tech.
              </p>

              <div className="featured-projects-stack">
                <div className="other-projects-item"> Git@Github</div>
                <div className="other-projects-item"> React </div>
                <div className="other-projects-item"> Node </div>
                <div className="other-projects-item"> TypeScript </div>
              </div>
            </div>
          </div>
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
            <div className="other-projects-header"> React Chat App </div>
            <div className="other-projects-description">
              I wanted to learn how to integrate real-time communication in my
              apps. I used Socket.io to create a simple chat app in React. It
              was a little bit stressful learning this technology without having
              prior background or without any knowledge on where/how to get
              started but I made it work so it's a little achievement for me :){" "}
            </div>
            <div className="other-projects-stack">
              <div className="other-projects-item"> Git@Github</div>
              <div className="other-projects-item"> HTML </div>
              <div className="other-projects-item"> CSS </div>
              <div className="other-projects-item"> Sass </div>
              <div className="other-projects-item"> Javascript</div>
              <div className="other-projects-item"> Vercel</div>
            </div>
          </div>
          <div className="other-projects-container">
            <div className="other-projects-header"> React Chat App </div>
            <div className="other-projects-description">
              I wanted to learn how to integrate real-time communication in my
              apps. I used Socket.io to create a simple chat app in React. It
              was a little bit stressful learning this technology without having
              prior background or without any knowledge on where/how to get
              started but I made it work so it's a little achievement for me :){" "}
            </div>
            <div className="other-projects-stack">
              <div className="other-projects-item"> Git@Github</div>
              <div className="other-projects-item"> HTML </div>
              <div className="other-projects-item"> CSS </div>
              <div className="other-projects-item"> Sass </div>
              <div className="other-projects-item"> Javascript</div>
              <div className="other-projects-item"> Vercel</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectContent;
