import React from "react";

const Item = ({pokemon}) => {
  return (
      <div class="container">
          <h5>Bootstrap 4 Equal Height Cards using Grid</h5>
              </div>
              <div class="col-sm-4 py-2">
                  <div class="card h-100 text-white bg-danger">
                      <div class="card-body">
                          <h3 class="card-title">{pokemon.name}</h3>
                          <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                          <a href="#" class="btn btn-outline-light">Outline</a>
                      </div>
                  </div>
              </div>
              </div>
      </div>
     
  );
};
export default Item;
