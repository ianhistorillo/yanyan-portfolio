import React from "react";
import NavItem from "./NavItem";

const Navigation = () => {
  return (
    <div className="navigation">
      <div className="nav">
        <div className="nav-container">
          <NavItem name="Home" icon="Home" route="/" active="true" />
          <NavItem name="About" route="/about" icon="About" />
          <NavItem name="Projects" route="/projects" icon="Projects" />
          <NavItem name="Skills" route="/skills" icon="Skills" />
        </div>
      </div>
    </div>
  );
};

export default Navigation;
