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
  const getStyles = ({ name }) => {
    return {
      backgroundColor: selectColor(name),
    };
  };

  const selectColor = name => {
    switch (name) {
      case 'normal':
        return '#A8A77A';
      case 'fire':
        return '#ee8130';
      case 'water':
        return '#6390f0';
      case 'electric':
        return '#f7d02c';
      case 'grass':
        return '#7ac74c';
      case 'ice':
        return '#96d9d6';
      case 'fighting':
        return '#c22e28';
      case 'poison':
        return '#a33ea1';
      case 'ground':
        return '#e2bf65';
      case 'flying':
        return '#a98ff3';
      case 'psychic':
        return '#f95587';
      case 'bug':
        return '#a6b91a';
      case 'rock':
        return '#b6a136';
      case 'ghost':
        return '#735797';
      case 'dragon':
        return '#6f35fc';
      case 'dark':
        return '#705746';
      case 'steel':
        return '#b7b7ce';
      case 'fairy':
        return '#d685ad';
      default:
        return undefined;
    }
  };

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
