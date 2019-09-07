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
    return (<div>
      
      <button onClick={this.getPokemons}>Open Pokedex</button>
      <ul>
        {this.state.pokedex.map(p =>
          <Item key={p.name}> pokemon ={p.name}></Item>
        )}
      </ul>
    </div>);
  }
}

export default List;