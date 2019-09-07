import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./components/Home/Home.component";
import Search from "./components/Search/Search.component";
import List from "./components/Pokedex/List.component";
import Header from './components/Header/Header.component'
function App() {
  return (
    <div className="App">
      
      <Router>
        <Header />
        <Route exact path="/" component={Home} />
        <Route exact path="/search" component={Search} />
        <Route path="/pokedex" component={List} />
      </Router>
    </div>
  );
}

export default App;
