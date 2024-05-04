import Image from "next/image";
import "./styles/_main.scss";
import "./styles/components/_navigation.scss";
import "./styles/components/_pages.scss";
import Navigation from "./components/Navigation/Navigation";
import Philippines from "./components/Icons/Philippines";
import LinkedIn from "./components/Icons/LinkedIn";
import Github from "./components/Icons/Github";

export default function Home() {
  return (
    <div className="main">
      <div className="i-col100 i-container">
        <div className="header">
          <div className="greetings">
            {" "}
            Mabuhay! <Philippines />
          </div>
          <div className="content">
            I'm <span className="bold">Christian Historillo</span> a software
            engineer. I thrive on turning ideas into digital reality - with a
            blend of creativity and technical prowess, I craft seamless web
            experiences that captivate and engage users.
          </div>
          <div className="get-in-touch">
            <span className="contact-me-text"> Contact me - </span>
            <span className="email-add">
              {" "}
              <a href="mailto:ian.webworks@gmail.com">ian.webworks@gmail.com</a>
            </span>
            <div className="social-profile">
              <a
                href="https://www.linkedin.com/in/christian-historillo-4069501a1/"
                target="_blank"
              >
                <LinkedIn />
              </a>
              <a href="https://github.com/ianhistorillo" target="_blank">
                <Github />
              </a>
            </div>
          </div>
        </div>

        {/* <div className="i-col50">TEST</div>
       <div className="i-col50">TEST</div>
         <div className="i-col50">TEST</div>
         <div className="i-col50">TEST</div> */}
        <Navigation activePage="Home" />
      </div>
    </div>
  );
}
