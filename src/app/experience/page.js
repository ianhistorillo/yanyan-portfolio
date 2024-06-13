import React from "react";
import "../styles/_main.scss";
import "../styles/components/_navigation.scss";
import "../styles/components/_pages.scss";

// Main Page Navigation
import Navigation from "../components/Navigation/Navigation";
import SocialNavigation from "../components/Navigation/SocialNavigation";
import ExperienceContent from "../components/Pages/ExperienceContent";

export const metadata = {
  title: "Christian Historillo",
  description: "This is my app",
};

const About = () => {
  return (
    <div className="main experience">
      <div className="i-col100 i-container-aboutpage">
        <ExperienceContent />
        <Navigation activePage="Experience" />
        <SocialNavigation />
      </div>
    </div>
  );
};

export default About;
