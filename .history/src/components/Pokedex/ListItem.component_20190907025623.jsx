import React from "react";
import PokeSprite from "react-poke-sprites";
var Pokedex = require("pokedex-promise-v2");
var P = new Pokedex();
class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: [],
      weight : '',
      height : '',
      id : ''

    };
  }
  componentDidMount() {
    const { pokemon } = this.props;
    P.getPokemonByName(pokemon.name).then(response => {
      this.setState({
        type: response.types[0].type.name,
        weight : response.weight,
        height : response.height,
        id : response.id
      });
    });
  }
  render() {
    const { pokemon } = this.props;
    return (
      <div className="col-sm-4 py-2">
        <div className="card h-100 text-white bg-primary">
          <div className="card-body">
            <PokeSprite pokemon={pokemon.name} className="pk" />
            <h3 className="card-title">{pokemon.name}</h3>
                    <h5 className="card-title">{pokemon.name}</h5>

            <p className="card-text">Type : {this.state.type}</p>
                    <p className="card-text">Weight : {this.state.weight}</p>
                    <p className="card-text">Height : {this.state.height}</p>
          </div>
        </div>
      </div>
    );
  }
}
export default Item;
