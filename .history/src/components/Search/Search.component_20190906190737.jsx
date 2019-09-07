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

    handleSearch()

    handleChange =(e)=>{
        this.setState({word : e.target.value});
    }
    render() { 

        return ( 
            <h1>Seach pokemons</h1>
            <input type="search" onChange={this.handleChange}/>
            <button onClick={this.handleSearch}></button>
         );
    }
}
 
export default Search;