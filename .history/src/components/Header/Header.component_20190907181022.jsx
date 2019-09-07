import React from 'react';
import './Header.styles.css'
import {Link} from 'react-router-dom'
const Header =()=>(
    <nav className="navbar navbar-expand-lg navbar-light bg-primary">
        <Link  className="navbar-brand" to="/">Reactmon</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ml-auto">
                <Link className="nav-item nav-link active" to="/search">Search <span className="sr-only">(current)</span></Link>
                <Link className="nav-item nav-link" to="/pokedex">Pokedex</Link>
                <Link className="nav-item nav-link" to="/discover">Discover</Link>
            </div>
        </div>
    </nav>
)
export default Header;