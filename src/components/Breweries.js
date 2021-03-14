import React from "react";
import axios from "axios";

import Brewery from "./Brewery";
import '../style/Breweries.css';

export default function Breweries() {
  const breweryData = [];
  // const countries = [];

  function handleResponse(response) {
    for (let i = 0; i < response.data.totalResults; i++) {
      let brewery = {
        country: response.data.data[i].locations,
        name: response.data.data[i].name,
        image: response.data.data[i].images,
        description: response.data.data[i].description
      };
      breweryData.push(brewery);
    }
  }

  function getBreweries() {
    let apiKey = "659d5c6b8f3d2447f090119e48202fdb";
    let breweryParameter = "breweries";
    let locationParameter = "withLocations=Y";
    let apiUrl = `https://sandbox-api.brewerydb.com/v2/${breweryParameter}/?key=${apiKey}&${locationParameter}`;
    axios.get(apiUrl).then(handleResponse);
  }

  return (
    <div className="Breweries">
      {getBreweries()}
      <ul>
        <Brewery data={breweryData}/>
      </ul>
    </div>
  );
}

// setBreweryData({
//         country: response.data.data[i].locations[0].country.displayName,
//         breweryName: response.data.data[i].name,
//         image: response.data.data[i].images.medium,
//         description: response.data.data[i].description
//       });