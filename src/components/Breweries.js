import React from "react";
import axios from "axios";

import Brewery from "./Brewery";
import '../style/Breweries.css';

export default function Breweries() {
  const breweryData = [];
  
  function handleResponse(response) {
    for (let i = 0; i < response.data.totalResults; i++) {
      response.data.data[i].description = (typeof response.data.data[i].description !== "undefined") ? response.data.data[i].description: "no description available";
      response.data.data[i].images = (typeof response.data.data[i].images !== "undefined") ? response.data.data[i].images: "No logo available";
      response.data.data[i].locations = (typeof response.data.data[i].locations !== "undefined") ? response.data.data[i].locations: "No country available";
      
      let brewery = {
        country: response.data.data[i].locations,
        name: response.data.data[i].name,
        image: response.data.data[i].images.squareMedium,
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

// {breweryData.list.slice().map(function (breweryItem) {
//   return <Brewery data={breweryItem} />
// })}