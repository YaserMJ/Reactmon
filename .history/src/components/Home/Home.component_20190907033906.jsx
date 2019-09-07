import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import './Home.styles.css'
import About from './About.component';
import Search from '../Search/Search.component'
import List from '../Pokedex/List.component'
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
            <Search/>
          </div>
          <div className="section AboutColor ">
            <List/>
          </div>
        </ReactFullpage.Wrapper>
      );
    }}
  />
);

export default Home;