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
            <img
              className="avatar"
              src="https://i.dlpng.com/static/png/177407_preview.png"
              alt=""
            />
            <h2>About me ~</h2>
            <h4>Hi there!
              
            </h4>
          </div>
        </ReactFullpage.Wrapper>
      );
    }}
  />
);

export default Home;
