"use client";

import React from "react";
import NavItem from "./NavItem";

import { useEffect } from "react";
const Navigation = (props) => {
  useEffect(() => {
    function update(e) {
      var x = e.clientX;
      var y = e.clientY;

      document.documentElement.style.setProperty("--cursorX", x + "px");
      document.documentElement.style.setProperty("--cursorY", y + "px");
    }
    document.addEventListener("mousemove", update);
    document.addEventListener("touchmove", update);
  }, []);

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
            name="Experience"
            route="/experience"
            icon="Experience"
            active={props.activePage}
          />
          <NavItem
            name="Projects"
            route="/projects"
            icon="Projects"
            active={props.activePage}
          />
        </div>
      </div>
    </div>
  );
};

export default Navigation;
