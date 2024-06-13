import React from "react";
import "../styles/_main.scss";
import "../styles/components/_navigation.scss";
import "../styles/components/_pages.scss";

// Main Page Navigation
import Navigation from "../components/Navigation/Navigation";
import ProjectSideNav from "../components/Pages/ProjectSideNav";
import ProjectContent from "../components/Pages/ProjectContent";
import SocialNavigation from "../components/Navigation/SocialNavigation";

export const metadata = {
  title: "Christian Historillo",
  description: "This is my app",
};

const Projects = () => {
  return (
    <div className="main projects">
      <div className="i-col100 i-container-aboutpage">
        <ProjectSideNav />
        <ProjectContent />
        <Navigation activePage="Projects" />
        <SocialNavigation />
      </div>
    </div>
  );
};

export default Projects;
