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
import Visit from "../components/Icons/Visit";
import SocialNavigation from "../components/Navigation/SocialNavigation";

const About = () => {
  return (
    <div className="main">
      <div className="i-col100 i-container-aboutpage">
        <div className="experience-container">
          <div className="header-title-experience">
            {" "}
            <span className="header-number-one">02. </span>{" "}
            <span className="header-title-one"> Where I've Worked </span>{" "}
          </div>
          <div className="experience-tab content-experience">
            <div className="experience-tab-side">
              <div className="experience-tab-side-item active">
                {" "}
                Flexisource{" "}
              </div>
              <div className="experience-tab-side-item">
                {" "}
                Bayview Technologies{" "}
              </div>
              <div className="experience-tab-side-item">
                {" "}
                Alpax Software Solutions{" "}
              </div>
            </div>
            <div id="experience" className="experience-tab-content">
              <div className="experience-item active">
                <div className="experience-company">
                  <h3>
                    Full-stack Developer · Flexisource IT
                    <span className="visit">
                      <Visit />
                    </span>
                  </h3>
                  <div className="experience-year">
                    <span>2020</span>
                    <span className="dash"></span>
                    <span>PRESENT</span>
                  </div>
                  <span className="experience-summary">
                    Build and maintain currrent in-house projects for
                    flexisource and build websites for new clients. Work closely
                    with marketing team including designers, content writer and
                    SEO. Later on I've been transferred to one of our client and
                    become a Full-stack developer to helped them build their new
                    applications and maintain the existing one.
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
                <div className="experience-company">
                  <h3>
                    Software Engineer · Bayview Technologies
                    <span className="visit">
                      <Visit />
                    </span>
                  </h3>
                  <div className="experience-year">
                    <span>2019</span>
                    <span className="dash"></span>
                    <span>2020</span>
                  </div>
                  <span className="experience-summary">
                    Build, style and maintain the current website feature and
                    design for our existing and new international clients.
                    Collaborated with multiple teams such as other developers,
                    QA, DevOps, DB management, scrum teams, third party software
                    partners and BOC.
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
                <div className="experience-company">
                  <h3>
                    Application Developer · Alpax Software Solutions
                    <span className="visit">
                      <Visit />
                    </span>
                  </h3>
                  <div className="experience-year">
                    <span>2017</span>
                    <span className="dash"></span>
                    <span>2019</span>
                  </div>
                  <span className="experience-summary">
                    Developed applications for new clients and mostly involved
                    with our major product - Payroll application. Worked with
                    the QA team and business analyst to enhanced the application
                    more and meet with the clients for the deployment and
                    training.
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
            </div>
          </div>
        </div>
        <Navigation activePage="Experience" />
        <SocialNavigation />
      </div>
    </div>
  );
};

export default About;
