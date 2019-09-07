import React from 'react';
import Item from './ListItem.component'
var Pokedex = require('pokedex-promise-v2');
var P = new Pokedex();

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokedex: []
    }
  }


  getPokemons = () => {
    P.resource(['https://pokeapi.co/api/v2/pokemon/?limit=100&offset=100'])
      .then((response) => {
        let x = response[0].results;
        this.setState({ pokedex: x });
        console.log(this.state.pokedex)

      });
  }



  render() {
    return (
      <div>
        <button onClick={this.getPokemons}>Open Pokedex</button>

      <div class="container">
        <div class="row">
          <div class="col-sm-4 py-2">
      
        {this.state.pokedex.map(pokemon =>
        <Item key={pokemon.name} pokemon={pokemon}/>
)}
      </div>
      </div>
    </div>
      </div>);
  }
}

export default List;