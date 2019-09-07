import React from 'react';
var Pokedex = require('pokedex-promise-v2');
var P = new Pokedex();
class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: {},
      name: '',
      pokedex: []
    }
  }
  handleChange = (e) => {
    this.setState({ name: e.target.value })
    console.log(this.state.name)
  }

  onSubmit = () => {
    P.getPokemonByName(this.state.name)
      .then((response) => {
        this.setState({ pokemon: response })
        console.log(this.state.pokemon)
      }
      )
  }
  getPokemons = () => {
    P.resource(['https://pokeapi.co/api/v2/pokemon/?limit=120&offset=120'])
      .then((response) => {
        let x = response[0].results;
        this.setState({ pokedex: x });
        console.log(this.state.pokedex)

      });
  }



  render() {
    return (<div>
      <label htmlFor="">Search pokemon</label>
      <input type="search" onChange={this.handleChange} />
      <button onClick={this.onSubmit}>SEARCH</button> <br />
      <button onClick={this.getPokemons}>Open Pokedex</button>
      <ul>
        {this.state.pokedex.map(p =>
          <li key={p.name}>{p.name}</li>
        )}
      </ul>
    </div>);
  }
}

export default Search;