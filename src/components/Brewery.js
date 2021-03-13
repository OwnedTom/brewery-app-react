import React from "react";

import '../style/Brewery.css';

export default function Breweries(props) {
  return (
  <div className="Brewery">
    <div className="card">
      <img src={props.data.image} alt={props.data.breweryName}/>
      <div className="card-container">
        <h4>{props.data.breweryName}</h4>
        <p>{props.data.description}</p>
      </div>
    </div>
  </div>
  );
}