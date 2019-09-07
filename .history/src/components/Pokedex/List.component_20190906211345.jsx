import React,{Component} from 'react'
var Pokedex = require('pokedex-promise-v2');
var P = new Pokedex();
class List extends Component {
    constructor(props){
        super(props);
        this.state={
            pokemons :[]
        }
    }

    componentDidMount() {
        P.resource("https://pokeapi.co:443/api/v2/pokemon/?limit=50&offset=50")
            .then(function (response) {
                console.log(response); 
            });
    }
    
    render() { 
        return ( 
            <div>LIST</div>
         );
    }
}
 
export default List;