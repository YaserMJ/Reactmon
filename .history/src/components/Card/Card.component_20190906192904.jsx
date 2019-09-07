import React from 'react';
import PokeSprite from 'react-poke-sprites'

const Card =({pokemon})=>{
    var descriptionURI = "http://pokeapi.co" + data.descriptions[0].resource_uri;

    return (
        <div className="card mb-3" style={{maxWidth: '540px'}}>
            <div className="row no-gutters">
                <div className="col-md-4">
                    <PokeSprite
                        pokemon={pokemon.name}
                        className="lugia-class"
                    />
    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{pokemon.name}</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                </div>
            </div>
    )
}
export default Card;