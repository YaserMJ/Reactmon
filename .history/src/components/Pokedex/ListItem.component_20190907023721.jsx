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
                  <p className="card-text">{}</p>
              </div>
          </div>
      </div>
     
  );
};
export default Item;
