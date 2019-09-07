import React from "react";
import PokeSprite from "react-poke-sprites";
import './List.styles.css'
var Pokedex = require("pokedex-promise-v2");
var P = new Pokedex();
class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: [],
      weight: "",
      height: "",
      id: "",
      base_exp: "",
      abilities: []
    };
  }
  componentDidMount() {
    const { pokemon } = this.props;
    P.getPokemonByName(pokemon.name).then(response => {
      this.setState({
        type: response.types[0].type.name,
        weight: response.weight,
        height: response.height,
        id: response.id,
        base_exp: response.base_experience,
        abilities: response.abilities
      });
      console.log(response.abilities);
    });
  }
  render() {
    const { pokemon } = this.props;
    return (
      <div></div>
      <div className="col-sm-4 py-2 listBk">
        <div className="card h-100 text-white bg-primary">
          <div className="card-body">
            <PokeSprite pokemon={pokemon.name} className="pk" />
            <h3 className="card-title">{pokemon.name}</h3>
            <h5 className="card-title">#{this.state.id}</h5>
            <p className="card-text">Type : {this.state.type}</p>
            <p className="card-text">Weight : {this.state.weight}</p>
            <p className="card-text">Height : {this.state.height}</p>
            <p className="card-text">base_experience : {this.state.base_exp}</p>
            Abilities: <ul>
                {this.state.abilities.map(a =>(
                    <li key={a}>{a.ability.name}</li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
export default Item;
