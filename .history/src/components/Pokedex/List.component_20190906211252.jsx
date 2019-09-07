import React from 'react'

class List extends Component {
    constructor(props){
        super(props);
        this.state={
            pokemons :[]
        }
    }

    componentDidMount() {
        P.resource(['https://pokeapi.co/api/v2/ability/9/'])
            .then(function (response) {
                console.log(response); // resource function accepts singles or arrays of URLs/paths
            });
    }
    
    render() { 
        return ( 
            <div>LIST</div>
         );
    }
}
 
export default List;