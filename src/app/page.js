import Image from "next/image";
import "./styles/_main.scss";
import "./styles/components/_navigation.scss";
import "./styles/components/_pages.scss";
import Navigation from "./components/Navigation/Navigation";
import Philippines from "./components/Icons/Philippines";

export default function Home() {
  return (
    <div className="main">
      <div className="i-col100 i-container">
        <div className="header">
          <div className="greetings">
            {" "}
            Greetings from Philippines! <Philippines />{" "}
          </div>
          <span> Hi there, I'm</span>
          <h1> Christian Historillo </h1>
        </div>
        <div className="content">
          <p className="paragraph-text">
            {" "}
            As a passionate full-stack web developer, I thrive on turning ideas
            into digital reality. With a blend of creativity and technical
            prowess, I craft seamless web experiences that captivate and engage
            users. From front-end aesthetics to back-end functionality, I
            specialize in bringing projects to life with clean code and
            intuitive design.
          </p>
        </div>
        {/* <div className="i-col50">TEST</div>
       <div className="i-col50">TEST</div>
         <div className="i-col50">TEST</div>
         <div className="i-col50">TEST</div> */}
        <Navigation />
      </div>
    </div>
  );
}
