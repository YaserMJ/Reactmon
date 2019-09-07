import React,{Component} from 'react'
var Pokedex = require('pokedex-promise-v2');
var P = new Pokedex();
class List extends Component {
    constructor(props){
        super(props);
        this.state={
            pokemonList :{}
        }
    }

    componentDidMount() {
        P.resource("https://pokeapi.co:443/api/v2/pokemon/?limit=50&offset=50")
            .then((response)=> {
               this.setState({pokemonList : response})
               console.log(this.state.pokemonList);
            });
    }
    
    render() { 
        return ( 
            <div>
              
                    {this.state.pokemonList.map(p =>
                        <li key={p.name}>{p.name}</li>
                    )}
                
            </div>
         );
    }
}
 
export default List;