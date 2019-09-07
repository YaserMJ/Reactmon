import React,{Component} from 'react'
var Pokedex = require('pokedex-promise-v2');
var P = new Pokedex();

class Search extends Component {
    constructor(props){
        super(props);
        this.state ={
            pokemon :[],
            word : ''
        }
    }

    componentDidMount(){
        P.getPokemonByName('eevee') // with Promise
            .then(function (response) {
                console.log(response);
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
            <h1>Seach pokemons</h1>
            <input type="search" onChange={this.handleChange}/>
            <button onC></button>
         );
    }
}
 
export default Search;