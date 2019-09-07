import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './components/Home/Home.component'
import Search from './components/Search/Search.component'
function App() {
  return (
    <div className="App">
     <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/search" component={Search} />
        <Route path="/topics" component={} />
      </Router>
    </div>
  );
}

export default App;
