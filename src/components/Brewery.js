import React from "react";

import '../style/Brewery.css';

export default function Breweries(props) {
  // creates the card with the brewery name, brewery description, and bwerery logo
  return (
    <li className="Brewery">
      <div className="card">
          <div className="card-container">
            <h4>{props.data.name}</h4>
            <p>{props.data.description}</p>
          </div>
          <div className="image">
            <img src={props.data.image} alt={props.data.name} />
          </div>
        </div>
    </li>
  );
}