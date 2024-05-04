import React from "react";
import NavItem from "./NavItem";

const Navigation = (props) => {
  return (
    <div className="navigation">
      <div className="nav">
        <div className="nav-container">
          <NavItem
            name="Home"
            icon="Home"
            route="/"
            active={props.activePage}
          />
          <NavItem
            name="About"
            route="/about"
            icon="About"
            active={props.activePage}
          />
          <NavItem
            name="Projects"
            route="/projects"
            icon="Projects"
            active={props.activePage}
          />
          <NavItem
            name="Skills"
            route="/skills"
            icon="Skills"
            active={props.activePage}
          />
        </div>
      </div>
    </div>
  );
};

export default Navigation;
