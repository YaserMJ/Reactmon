import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import "./Home.styles.css";
import About from "./About.component";

const Home = () => (
  <ReactFullpage
    licenseKey={"YOUR_KEY_HERE"}
    scrollingSpeed={1000}
    render={({ state, fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper>
          <div className="section bk">
            <div>
              <img
                className="pkLogo"
                src="http://pluspng.com/img-png/pokemon-logo-png-pokemon-logo-png-2000.png"
                alt=""
              />
            </div>
          </div>
          <div className="section AboutColor">
            <About />
          </div>

          <div className="section bkb ">
            <img className="avatar" src={require("./3.png")} alt="" />
            <br />
            <br />
            <h3>Hi there!</h3>
            <h4>
              I'm Yaser Saleh,a web developer that enjoys the simplicity and
              creativity within everything!
            </h4>
            <ul>
              <li>
                <img
                  className="logos"
                  src="https://www.stickpng.com/assets/images/5847f98fcef1014c0b5e48c0.png"
                  alt=""
                />
              </li>
              <li>
                <img
                  className="logos"
                  src="https://cdn.freebiesupply.com/logos/large/2x/javascript-logo-png-transparent.png"
                  alt=""
                />
              </li>
            </ul>
          </div>
        </ReactFullpage.Wrapper>
      );
    }}
  />
);

export default Home;
