import React from "react";

import '../style/Brewery.css';

export default function Breweries(props) {

  return (
    <li className="Brewery">
      <div className="card">
          <div className="card-container">
            {/* <h4>{props.data.name}</h4> */}
            {/* <p>{props.data.description}</p> */}
          </div>
          <div className="image">
            {/* <img src={props.data.image} alt={props.data.name} /> */}
          </div>
        </div>
    </li>
  );
}