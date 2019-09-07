import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './components/Home/Home.component'
import Search from './components/'
function App() {
  return (
    <div className="App">
     <Router>
        <Route exact path="/" component={Home} />
        {/* <Route path="/about" component={} /> */}
        {/* <Route path="/topics" component={} /> */}
      </Router>
    </div>
  );
}

export default App;
