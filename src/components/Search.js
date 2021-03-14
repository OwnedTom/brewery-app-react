import React from "react";

import '../style/Search.css';

export default function Search() {

  function getBreweries() {
    let apiKey = "659d5c6b8f3d2447f090119e48202fdb";
    let breweryParameter = "breweries";
    let locationParameter = "withLocations=Y";
    let apiUrl = `https://sandbox-api.brewerydb.com/v2/${breweryParameter}/?key=${apiKey}&${locationParameter}`;
    axios.get(apiUrl).then(handleResponse);
  }
  
  return (
    <div class="wrap">
      <div className="search">
        <input type="text" className="searchTerm" placeholder="Find a brewery" />
        <button type="submit" className="searchButton">Search</button>
      </div>
    </div>
  );
}