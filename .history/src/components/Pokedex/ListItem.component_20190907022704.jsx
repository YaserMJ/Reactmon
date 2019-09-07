import React from "react";

const Item = ({pokemon}) => {
  return (
      <div className="col-sm-4 py-2">
          <div className="card h-100 text-white bg-danger">
              <div className="card-body">
                  <h3 className="card-title">{pokemon.n}</h3>
                  <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                  <a href="#" className="btn btn-outline-light">Outline</a>
              </div>
          </div>
      </div>
     
  );
};
export default Item;
