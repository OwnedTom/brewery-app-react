import React, { useState } from "react";
import axios from "axios";

import '../style/Search.css';

export default function Search() {
  const [searchQuery, setQuery] = useState("busch");
  const breweryData = [];

  function handleResponse(response) {
    // needs aproximately the same functionalities as the handleResponse function in the Breweries component
    for (let i = 0; i < response.data.totalResults; i++) {
      let brewery = {
        name: response.data.data[0].breweries[0].name,
        description: response.data.data[0].breweries[0].description,
        image: response.data.data[0].breweries[0].images.squareMedium,
      }
      breweryData.push(brewery);
    }
  }

  // calls the API with the search
  function getBreweries() {
    let apiKey = "659d5c6b8f3d2447f090119e48202fdb";
    let parameters = "withLocations=Y&withBreweries=Y";
    let apiUrl = `https://sandbox-api.brewerydb.com/v2/search?q=${searchQuery}&type=beer&key=${apiKey}&${parameters}`;
    axios.get(apiUrl).then(handleResponse);
  }
 
  // Makes sure the page doesn't refresh after submitting the search query and calls the function to actually do the search
  function handleClick(event) {
    event.preventDefault();
    getBreweries();
  }

  // Sends input to setQuery so we know what the search is
  function handleBrewerySearch(event) {
    setQuery(event.target.value);
  }

  return (
    <div className="wrap">
      <div className="search">
        <input type="text" className="searchTerm" placeholder="Find a brewery" onChange={handleBrewerySearch}/>
        <button type="submit" className="searchButton" onClick={handleClick}>Search</button>
      </div>
    </div>
  );
}