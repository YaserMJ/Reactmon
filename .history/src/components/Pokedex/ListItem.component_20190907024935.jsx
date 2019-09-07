import React from "react";
import PokeSprite from 'react-poke-sprites'
var Pokedex = require('pokedex-promise-v2');
var P = new Pokedex();
class Item extends React.Component {
  
    constructor(props){
        super(props);
        this.state = {
            type : []
        }
    }
    componentDidMount(){
        P.getPokemonByName('charizard') // with Promise
            .then((response) => {

                this.setState({
                    type: response.types[0].type.name
                })
            })
    }
    render(){
        const {pokemon} = this.props;
        return (
            <div className="col-sm-4 py-2">
                <div className="card h-100 text-white bg-primary">
                    <div className="card-body">
                        <PokeSprite
                            pokemon={pokemon.name}
                            className="pk"
                        />
                        <h3 className="card-title">{this.props.name}</h3>
                        <p className="card-text">{}</p>
                        <ul>
                            {/* {pokemon.types.map(p => (
                          <li>{p.slot.type.name}</li>
                      ))} */}
                        </ul>
                    </div>
                </div>
            </div>

        );
    }
  
};
export default Item;
