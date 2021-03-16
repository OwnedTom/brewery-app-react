import React, { useState } from "react";
import axios from "axios";

import Brewery from "./Brewery";
import '../style/Breweries.css';


export default function Breweries() {
  const [breweryData, setBreweryData] = useState([]);
  const [once, setOnce] = useState(false);
  
  // iterates through the API ressults to make objects of the breweries and adds them to an array
  function handleResponse(response) {
    const breweries = response.data.data.map((data) => {
      data.description = (typeof data.description !== "undefined") ? data.description: "no description available";
      data.images = (typeof data.images !== "undefined") ? data.images: "No logo available";
      data.locations = (typeof data.locations !== "undefined") ? data.locations: "No country available";
      
      // creates brewery object, more properties can be added
      return {
        name: data.name,
        images: data.images,
        description: data.description,
        locations: data.locations
      };
    });
    setBreweryData(breweries);
  }

  // calls the API
  function getBreweries() {
    setOnce(true);
    let apiKey = "659d5c6b8f3d2447f090119e48202fdb";
    let breweryParameter = "breweries";
    let locationParameter = "withLocations=Y";
    let apiUrl = `http://localhost:5000/https://sandbox-api.brewerydb.com/v2/${breweryParameter}/?key=${apiKey}&${locationParameter}`;
    try {
      axios.get(apiUrl).then(handleResponse);
    } catch (error) {
      console.error(error);
    }
  }

  if (! once) {
    getBreweries();
  }

  return (
    <div className="Breweries">
      <ul>
        {/* needs to be changed to a function that iterates through the Brewery component */}
        { breweryData.map((data, index) => <Brewery key={index} data={data} />) }
      </ul>
    </div>
  );
}