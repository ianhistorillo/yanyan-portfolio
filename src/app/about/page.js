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
        <div className="header">
          <div className="greetings"> About</div>
        </div>
        {/* <div className="i-col50">TEST</div>
       <div className="i-col50">TEST</div>
         <div className="i-col50">TEST</div>
         <div className="i-col50">TEST</div> */}
        <Navigation activePage="About" />
      </div>
    </div>
  );
}
