import React from "react";

const Item = ({pokemon}) => {
  return (
      <div class="container">
          <div class="row">
              <div class="col-sm-4 py-2">
          <div className="card h-100">
              <img
                className="card-img-top"
                src="http://placehold.it/700x400"
                alt=""
              />
            <div className="card-body">
              <h4 className="card-title">
                <a href="">{pokemon.name}</a>
              </h4>
              <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                viverra euismod odio, gravida pellentesque urna varius vitae.
              </p>
            </div>
          </div>
        </div>
     
  );
};
export default Item;
