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
                <a href=""></a>
                <img
                  className="logos"
                  src="data:image/png;base64,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"
                  alt=""
                />
              </li>
              <li>
                <img
                  className="logos"
                  src="https://image.flaticon.com/icons/png/512/33/33702.png"
                  alt=""
                />
              </li>
              <li>
                <img
                  className="logos"
                  src="https://img.icons8.com/metro/452/linkedin.png"
                  alt=""
                />
              </li>
              <li>
                <img
                  className="logos"
                  src="https://www.sccpre.cat/mypng/full/320-3209125_arizona-cardinal-cheerleaders-chandler-arizona-logo-white-gmail.png"
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
