import React,{Component} from 'react'
var Pokedex = require('pokedex-promise-v2');
var P = new Pokedex();
class List extends Component {
    constructor(props){
        super(props);
        this.state={
            pokemonList :[]
        }
    }

    componentDidMount() {
        
            P.resource(['https://pokeapi.co/api/v2/pokemon/?limit=120&offset=120'])
                .then((response) => {
                    let x = response[0].results;
                    this.setState({ pokedex: x });
                    console.log(this.state.pokedex)

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