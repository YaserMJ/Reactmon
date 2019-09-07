import React from "react";
import PokeSprite from 'react-poke-sprites'
var Pokedex = require('pokedex-promise-v2');
var P = new Pokedex();
class Item extends React.Component {
   
    
  return (
      <div className="col-sm-4 py-2">
          <div className="card h-100 text-white bg-primary">
              <div className="card-body">
                   <PokeSprite
                            pokemon={pokemon.name}
                            className="pk"
                        />
                  <h3 className="card-title">{pokemon.name}</h3>
                  <p className="card-text">{}</p>
                  <ul>
                      {/* {pokemon.types.map(p => (
                          <li>{p.slot.type.name}</li>
                      ))} */}
                  </ul>
              </div>
          </div>
      </div>
     
  );
};
export default Item;
