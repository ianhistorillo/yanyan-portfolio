import React from "react";
import Home from "../Icons/Home";
import About from "../Icons/About";
import Projects from "../Icons/Projects";
import Skills from "../Icons/Skills";

const NavItem = (props) => {
  return (
    <a
      className={`nav-icon ${props.active === props.name ? "active" : null}`}
      href={props.route}
      aria-current="page"
    >
      <div>
        {props.icon === "Home" ? <Home /> : null}
        {props.icon === "About" ? <About /> : null}
        {props.icon === "Projects" ? <Projects /> : null}
        {props.icon === "Experience" ? <Skills /> : null}
        {/** <small>{props.name}</small> */}
      </div>
    </a>
  );
};

export default NavItem;
