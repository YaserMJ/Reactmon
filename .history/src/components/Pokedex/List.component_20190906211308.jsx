import React from 'react'
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
        P.resource('https://pokeapi.co/api/v2/ability/9/')
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