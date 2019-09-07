import React, { Component } from "react";
import Pkdx from "./Pokedex/Pokedex.component";
import "./Search.styles.css";
var Pokedex = require("pokedex-promise-v2");
var P = new Pokedex();

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: [],
      word: "",
      type: [],
      sprite: ""
    };
  }

  handleSearch = () => {
    P.getPokemonByName(this.state.word)
      .then(response => {
        this.setState({
          pokemon: response,
          type: response.types[0].type.name,
          sprite: response.sprites.back_default
        });
        console.log(this.state.pokemon);
      })
      .catch(function(error) {
        console.log("There was an ERROR: ", error);
      });
  };

  handleChange = e => {
    this.setState({ word: e.target.value });
  };
  render() {
    return (
      <div className="blueColorBk">
        <h1 className="search">Seach pokemons</h1>
        <input type="search" onChange={this.handleChange} />
        <button onClick={this.handleSearch}>Search</button>
        <Pkdx
          pokemon={this.state.pokemon}
          type={this.state.type}
          sprite={this.state.sprite}
        />
      </div>
    );
  }
}

export default Search;
