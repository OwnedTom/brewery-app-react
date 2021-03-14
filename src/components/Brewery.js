import React from "react";

import '../style/Brewery.css';

export default function Breweries(props) {
  function createCard(props) {    
    for (let i = 0; i < props.data.length; i++) {
      return (
        <div className="card">
          <div className="card-container">
            <h4>{props.data[i].name}</h4>
            <p>{props.data[i].description}</p>
          </div>
          <div className="image">
            <img src={props.data[i].image.squareMedium} alt={props.data[i].name} />
          </div>
        </div>
      )
    }
  }

  return (
    <div className="Brewery">
      {createCard(props)}
    </div>
  );
}