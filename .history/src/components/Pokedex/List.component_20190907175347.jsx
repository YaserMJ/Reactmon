import React from "react";
import Item from "./ListItem.component";
import "./List.styles.css";
var Pokedex = require("pokedex-promise-v2");
var P = new Pokedex();

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokedex: []
    };
  }

  componentDidMount(){
    P.resource([
      "https://pokeapi.co/api/v2/pokemon/?limit=498&offset=0"
    ]).then(response => {
      let x = response[0].results;
      this.setState({ pokedex: x });
      console.log(this.state.pokedex);
    });
  }
  render() {
    return (
      <div className='listBzk'>
        <img src="https://i.pinimg.com/originals/bb/4d/55/bb4d55e7d0d6b8ab9ad538a5bdb237b6.gif" alt=""/>
        <img src="https://cdn.bulbagarden.net/upload/4/4b/Pok%C3%A9dex_logo.png" alt=""/>
        <div className="container">
          <div class="row">
          {this.state.pokedex.map(pokemon => (
            <Item key={pokemon.name} pokemon={pokemon} />
          ))}
        </div>
        </div>
      </div>
    );
  }
}

export default List;
