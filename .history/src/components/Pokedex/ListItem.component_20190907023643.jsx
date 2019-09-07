import React from "react";
import PokeSprite from 'react-poke-sprites'

const Item = ({pokemon}) => {
    
  return (
      <div className="col-sm-4 py-2">
          <div className="card h-100 text-white bg-primary">
              <div className="card-body">
                  <PokeSprite
                      pokemon={pokemon.name}
                      className="pk"
                  />
                  <h3 className="card-title">{pokemon.name}</h3>
                  <h4>#{pokemon.id}</h4>
                  <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                  <a href="/" className="btn btn-outline-light">{pokemon.types.map((type,index)=>(
                      <p>{type.name}</p>
                  ))}</a>
              </div>
          </div>
      </div>
     
  );
};
export default Item;
