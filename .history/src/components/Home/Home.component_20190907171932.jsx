import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import './Home.styles.css'
import About from './About.component';

const Home = () => (
  <ReactFullpage
    licenseKey = {'YOUR_KEY_HERE'}
    scrollingSpeed = {1000}

    render={({ state, fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper>
          <div className="section bk">
            <div>
            <img className='pkLogo' src="http://pluspng.com/img-png/pokemon-logo-png-pokemon-logo-png-2000.png" alt=""/>
            </div>
          </div>
          <div className="section AboutColor">
            <About/>
          </div>
        
          <div className="section bkb ">
            <div>
              <img className='avatar' src="https://res.cloudinary.com/teepublic/image/private/s--qpgbnxIN--/t_Preview/b_rgb:ffb81c,c_lpad,f_jpg,h_630,q_90,w_1200/v1556225298/production/designs/4717194_0.jpg" alt=""/>
            </div>
            </div>
        </ReactFullpage.Wrapper>
      );
    }}
  />
);

export default Home;