"use client";

import React, { useEffect } from "react";

// Experience Page Client Side Components
import Visit from "../../components/Icons/Visit";

const ExperienceContent = () => {
  const handleActiveExperience = (activeExp) => {
    let prevActiveWorkExp = document.querySelector(
      "div.experience-item.active"
    );
    let prevActiveWorkTab = document.querySelector(
      "div.experience-tab-side-item.active"
    );

    prevActiveWorkExp.classList.remove("active");
    prevActiveWorkTab.classList.remove("active");

    let selectedWorkExp = document.getElementById(activeExp);
    let selectedWorkTab = document.querySelector(
      `div.experience-tab-side-item.${activeExp}`
    );

    selectedWorkExp.classList.add("active");
    selectedWorkTab.classList.add("active");
  };
  return (
    <div className="experience-container">
      <div className="header-title-experience">
        {" "}
        <span className="header-number-one">02. </span>{" "}
        <span className="header-title-one"> Where I've Worked </span>{" "}
      </div>
      <div className="experience-tab content-experience">
        <div className="experience-tab-side">
          <div
            className="experience-tab-side-item flexisource-insitelogic active"
            onClick={() => handleActiveExperience("flexisource-insitelogic")}
          >
            Flexisource · InsiteLogic
          </div>
          <div
            className="experience-tab-side-item flexisource"
            onClick={() => handleActiveExperience("flexisource")}
          >
            Flexisource IT
          </div>
          <div
            className="experience-tab-side-item bayview"
            onClick={() => handleActiveExperience("bayview")}
          >
            {" "}
            Bayview Technologies{" "}
          </div>
          <div
            className="experience-tab-side-item alpax"
            onClick={() => handleActiveExperience("alpax")}
          >
            {" "}
            Alpax{" "}
          </div>
        </div>
        <div id="experience" className="experience-tab-content">
          <div id="flexisource-insitelogic" className="experience-item active">
            <div className="experience-company">
              <h3>
                React & PHP Developer ·{" "}
                <a href="https://flexisourceit.com.au/" target="_blank">
                  Flexisource IT
                </a>
                /{" "}
                <a href="https://insitelogic.com.au/" target="_blank">
                  InsiteLogic
                </a>
                <span className="visit">
                  <Visit />
                </span>
              </h3>
              <div className="experience-year">
                <span>2021</span>
                <span className="dash"></span>
                <span>PRESENT</span>
              </div>
              <span className="experience-summary">
                <ul>
                  <li>
                    Delivery high quality interactive property plans application
                    for villages, real estate and apartments
                  </li>
                  <li>
                    Work closely with Australian team including managers, devs,
                    operations and testers.
                  </li>
                  <li>
                    Support existing products/clients in both backend and
                    frontend app issues
                  </li>
                  <li>
                    Contributed extensively to the creation of Interactive Map,
                    using leaflet or google maps to provide additional map
                    feature on the app
                  </li>
                </ul>
              </span>

              <div className="experience-techstack">
                <span className="techstack-item"> PHP </span>
                <span className="techstack-item"> Javascript </span>
                <span className="techstack-item"> React </span>
                <span className="techstack-item"> Wordpress </span>
              </div>
            </div>
          </div>
          <div id="flexisource" className="experience-item">
            <div className="experience-company">
              <a href="https://flexisourceit.com.au/" target="_blank">
                <h3>
                  Full-stack Developer · Flexisource IT
                  <span className="visit">
                    <Visit />
                  </span>
                </h3>
              </a>
              <div className="experience-year">
                <span>2020</span>
                <span className="dash"></span>
                <span>PRESENT</span>
              </div>
              <span className="experience-summary">
                <ul>
                  <li>
                    Build and maintain current in-house projects for flexisource
                    and build websites for new clients{" "}
                  </li>
                  <li>
                    Work closely with marketing team including designers,
                    content writer and SEO
                  </li>
                  <li>
                    Participate in meetings with clients to analyze software
                    solutions and software design
                  </li>
                  <li>
                    Later on I've been transferred to one of our client and
                    become a React & PHP developer to helped them build their
                    new applications and maintain the existing one.
                  </li>
                </ul>
              </span>

              <div className="experience-techstack">
                <span className="techstack-item"> PHP </span>
                <span className="techstack-item"> Javascript </span>
                <span className="techstack-item"> React </span>
                <span className="techstack-item"> Wordpress </span>
              </div>
            </div>
          </div>
          <div id="bayview" className="experience-item">
            <div className="experience-company">
              <a href="https://bayviewtechnology.com/" target="_blank">
                <h3>
                  Software Engineer · Bayview Technologies
                  <span className="visit">
                    <Visit />
                  </span>
                </h3>
              </a>
              <div className="experience-year">
                <span>2019</span>
                <span className="dash"></span>
                <span>2020</span>
              </div>
              <span className="experience-summary">
                <ul>
                  <li>
                    Build, style and maintain the current website feature and
                    design for our existing and new international clients.{" "}
                  </li>
                  <li>
                    Collaborated with multiple teams such as other developers,
                    QA, DevOps, DB management, scrum teams, third party software
                    partners and BOC.
                  </li>
                  <li>
                    Built and delivered technical solutions according to
                    stakeholder business requirements
                  </li>
                  <li>
                    Partcipated and even lead the scrum ceremonies for every
                    sprint
                  </li>
                </ul>
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

          <div id="alpax" className="experience-item">
            <div className="experience-company">
              <a href="https://alpax.ph/" target="_blank">
                <h3>
                  Application Developer · Alpax Software Solutions
                  <span className="visit">
                    <Visit />
                  </span>
                </h3>
              </a>
              <div className="experience-year">
                <span>2017</span>
                <span className="dash"></span>
                <span>2019</span>
              </div>
              <span className="experience-summary">
                <ul>
                  <li>
                    Developed applications for new clients and mostly involved
                    with our major product - Payroll application.{" "}
                  </li>
                  <li>
                    Worked with the QA team and business analyst to enhanced the
                    application more and meet with the clients for the
                    deployment and training.
                  </li>
                  <li>
                    Lead the other junior developers and trainee to develop new
                    brands, support existing and new projects
                  </li>
                </ul>
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
  );
};

export default ExperienceContent;
