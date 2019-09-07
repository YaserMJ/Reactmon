import React from "react";
import PokeSprite from 'react-poke-sprites'

const Item = ({pokemon}) => {
  return (
      <div className="col-sm-4 py-2">
          <div className="card h-100 text-white bg-danger">
              <div className="card-body">
                  <PokeSprite
                      pokemon={pokemon.name}
                      className="pokie"
                  />
                  <h3 className="card-title">{pokemon.name}</h3>
                  <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                  <a href="#" className="btn btn-outline-light">Outline</a>
              </div>
          </div>
      </div>
     
  );
};
export default Item;
