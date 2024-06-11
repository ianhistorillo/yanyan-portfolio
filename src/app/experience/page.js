"use client";

import React, { useEffect } from "react";
import "../styles/_main.scss";
import "../styles/components/_navigation.scss";
import "../styles/components/_pages.scss";

// Main Page Navigation
import Navigation from "../components/Navigation/Navigation";
import SocialNavigation from "../components/Navigation/SocialNavigation";
import ExperienceContent from "../components/Pages/ExperienceContent";

const About = () => {
  return (
    <div className="main">
      <div className="i-col100 i-container-aboutpage">
        <ExperienceContent />
        <Navigation activePage="Experience" />
        <SocialNavigation />
      </div>
    </div>
  );
};

export default About;
