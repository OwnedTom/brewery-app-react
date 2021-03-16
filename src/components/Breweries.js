import React from "react";
import axios from "axios";

// import Brewery from "./Brewery";
import '../style/Breweries.css';

export default function Breweries() {
  const breweryData = [null];
  
  // iterates through the API ressults to make objects of the breweries and adds them to an array
  function handleResponse(response) {
    for (let i = 0; i < response.data.totalResults; i++) {
      // gives a value to undefined properties
      response.data.data[i].description = (typeof response.data.data[i].description !== "undefined") ? response.data.data[i].description: "no description available";
      response.data.data[i].images = (typeof response.data.data[i].images !== "undefined") ? response.data.data[i].images: "No logo available";
      response.data.data[i].locations = (typeof response.data.data[i].locations !== "undefined") ? response.data.data[i].locations: "No country available";
      
      // creates brewery object, more properties can be added
      let brewery = {
        country: response.data.data[i].locations,
        name: response.data.data[i].name,
        image: response.data.data[i].images.squareMedium,
        description: response.data.data[i].description
      };
      breweryData.push(brewery);
    }
  }

  // calls the API
  function getBreweries() {
    let apiKey = "659d5c6b8f3d2447f090119e48202fdb";
    let breweryParameter = "breweries";
    let locationParameter = "withLocations=Y";
    let apiUrl = `https://cors-anywhere.herokuapp.com/https://sandbox-api.brewerydb.com/v2/${breweryParameter}/?key=${apiKey}&${locationParameter}`;
    try {
      axios.get(apiUrl).then(handleResponse);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="Breweries">
      {getBreweries()}
      <ul>
        {/* needs to be changed to a function that iterates through the Brewery component */}
        {console.log(breweryData[2])}
        {/* <Brewery data={breweryData}/> */}
      </ul>
    </div>
  );
}