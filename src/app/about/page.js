import Image from "next/image";
import "../styles/_main.scss";
import "../styles/components/_navigation.scss";
import "../styles/components/_pages.scss";
import Navigation from "../components/Navigation/Navigation";
import Philippines from "../components/Icons/Philippines";
import LinkedIn from "../components/Icons/LinkedIn";
import Github from "../components/Icons/Github";

export default function Home() {
  return (
    <div className="main">
      <div className="i-col100 i-container">
        <div className="i-col50 i-fl">
          <div className="header">
            <div className="header-title"> BACKGROUND </div>
            <div className="side-nav">
              <div className="active">
                <span className="line transition-all"></span>
                <span className="text"> How it all started? </span>
              </div>
              <div>
                <span className="line transition-all"></span>
                <span className="text"> Goals </span>
              </div>
              <div>
                <span className="line transition-all"></span>
                <span className="text"> Experience </span>
              </div>
            </div>
          </div>
        </div>
        <div className="i-col50 i-fr">
          <div className="content-page">
            <p>
              {" "}
              When I was a kid, maybe around grade school, I was fascinated by
              computer machines. I saw one for the very first time in the
              computer shop in my neighborhood. I was curious about how this
              technology worked, and because of that, I dreamed of having one.
            </p>
            <p>
              But because it was expensive at that time, I couldn't afford to
              have one. However, this did not stop me from trying it out,
              discovering it, and eventually, it carved a path to my passion for
              technology.
            </p>
            <p>
              At first, I only enjoyed how the computer entertained me through
              gaming, but when I first discovered Friendster - my very first
              social media platform - my curiosity was piqued again, eventually
              leading to the development of my passion for web development and
              software engineering.
            </p>
            <p>
              {" "}
              From a kid who dreamed of building his own social media platform
              to becoming a web and software developer as a career, the dream
              became a reality, and it continues to grow. I'm still hungry for
              new knowledge and experiences, and I still have a constant desire
              to push my boundaries and create something new every day.
            </p>
          </div>
        </div>
        <Navigation activePage="About" />
      </div>
    </div>
  );
}
