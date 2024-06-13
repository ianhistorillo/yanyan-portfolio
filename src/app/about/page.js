import React from "react";
import "../styles/_main.scss";
import "../styles/components/_navigation.scss";
import "../styles/components/_pages.scss";

// Main Page Navigation
import Navigation from "../components/Navigation/Navigation";

// About Page Client Side Components
import AboutHeader from "../components/Pages/AboutHeader";
import AboutContent from "../components/Pages/AboutContent";
import SocialNavigation from "../components/Navigation/SocialNavigation";

const About = () => {
  return (
    <div className="main about">
      <div className="i-col100 i-container-aboutpage">
        <AboutHeader />
        <AboutContent />
        <Navigation activePage="About" />
        <SocialNavigation />
      </div>
    </div>
  );
};

export default About;
