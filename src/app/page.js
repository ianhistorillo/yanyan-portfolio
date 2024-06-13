import Image from "next/image";
import "./styles/_main.scss";
import "./styles/components/_navigation.scss";
import "./styles/components/_pages.scss";
import Navigation from "./components/Navigation/Navigation";
import Philippines from "./components/Icons/Philippines";
import LinkedIn from "./components/Icons/LinkedIn";
import Github from "./components/Icons/Github";
import SocialNavigation from "./components/Navigation/SocialNavigation";
import Head from "next/head"; // then add the `NextSeo` at any `pages/` that
import React from "react";

export const metadata = {
  title: "Christian Historillo",
  description: "This is my app",
};

export default function Home() {
  return (
    <React.Fragment>
      <div className="main">
        <div className="i-col100 i-container">
          <div className="header">
            {/** <div className="greetings">
            {" "}
            Mabuhay! <Philippines />
          </div> */}
            <div className="content">
              <div className="greetings"> Hi, my name is </div>
              <div className="pangalan"> Christian Historillo.</div>
              <div className="trabaho"> I craft things for the web.</div>
              <div className="brief-background">
                I thrive on turning ideas into digital reality - with a blend of
                creativity and technical prowess, I craft seamless web
                experiences that captivate and engage users.
              </div>
            </div>
            <div className="get-in-touch">
              <span className="contact-me-text"> Contact me - </span>
              <span className="email-add">
                {" "}
                <a href="mailto:ian.webworks@gmail.com">
                  ian.webworks@gmail.com
                </a>
              </span>
            </div>
          </div>

          {/* <div className="i-col50">TEST</div>
       <div className="i-col50">TEST</div>
         <div className="i-col50">TEST</div>
         <div className="i-col50">TEST</div> */}
          <Navigation activePage="Home" />
          <SocialNavigation />
        </div>
      </div>
    </React.Fragment>
  );
}
