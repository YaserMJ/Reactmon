import React,{Component} from 'react'
import Card from '../Card/Card.component';
var Pokedex = require('pokedex-promise-v2');
var P = new Pokedex();

class Search extends Component {
    constructor(props){
        super(props);
        this.state ={
            pokemon :[],
            word : ''
            type: data.types[0].type.name
        }
    }

    handleSearch = ()=>{
        P.getPokemonByName(this.state.word)
            .then((response)=> {
                this.setState({pokemon : response});
                console.log(this.state.pokemon);
            })
            .catch(function (error) {
                console.log('There was an ERROR: ', error);
            });
    }
    
    handleChange =(e)=>{
        this.setState({word : e.target.value});
    }
    render() { 

        return ( 
            <div>
            <h1>Seach pokemons</h1>
            <input type="search" onChange={this.handleChange}/>
            <button onClick={this.handleSearch}>Search</button>
            <Card pokemon={this.state.pokemon}/>
            <div>
                <ul>
                    {
                        this.state.pokemon.abilities.map((ability,index) =>{
                            <li>{ability.ability.name}</li>
                        })
                    }
                </ul>
            </div>
            
            </div>
         );
    }
}
 
export default Search;