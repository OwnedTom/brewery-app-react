import axios from "axios";
import './App.css';

function App() {

  function handleResponse(response) {
    // let country = response.data.data[0].country.displayName;
    console.log(response.data);
  }

  function searchBrewery() {
    let apiKey = "659d5c6b8f3d2447f090119e48202fdb";
    let breweryParameter = "breweries";
    let locationParameter = "withLocations=Y";
    let apiUrl = `https://sandbox-api.brewerydb.com/v2/${breweryParameter}/?key=${apiKey}&${locationParameter}`;
    axios.get(apiUrl).then(handleResponse);
  }

  searchBrewery();

  return (
    <div className="App">
      <header className="App-header">
      </header>
    </div>
  );
}

export default App;
