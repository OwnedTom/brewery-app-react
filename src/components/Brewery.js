import React from "react";

import '../style/Brewery.css';

export default function Breweries(props) {

  function createCard(props) {    
    // this function should loop through the breweryData array and create a card for each brewery
    
    for (let i = 0; i < props.length; i++) {
      let name = props[i].name;
      let description = props[i].description;
      let image = props[i].image.squareMedium;

      return (
        <div className="card">
          <div className="card-container">
            <h4>{name}</h4>
            <p>{description}</p>
          </div>
          <div className="image">
            <img src={image} alt={name} />
          </div>
        </div>
      )
    }
  }

  return (
    <div className="Brewery">
      {createCard(props.data)}
    </div>
  );
}