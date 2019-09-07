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
              src={require('./3.png')}
              alt=""
            />
            <br/>
            <br/>
            <h3>Hi there!</h3>
            <h4>I'm Yaser Saleh,a web developer that enjoys the simplicity and creativity within everything!</h4>
          </div>
        </ReactFullpage.Wrapper>
      );
    }}
  />
);

export default Home;
