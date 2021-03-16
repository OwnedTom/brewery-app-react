import React from "react";

import '../style/Brewery.css';

export default function Breweries(props) {
  // this is only to showcase how it would look. When this component is called by an iterating function, data[i] should take care of returning all the different brewery cards

  let breweryName = props.data[0].name;
  let description = props.data[0].description;
  let image = props.data[0].images.squareMedium;

  // creates the card with the brewery name, brewery description, and brewery logo
  return (
    <li className="Brewery">
      <div className="card">
          <div className="card-container">
            <h4>{breweryName}</h4>
            <p>{description}</p>
          </div>
          <div className="image">
            <img src={image} alt={breweryName} />
          </div>
        </div>
    </li>
  );
}