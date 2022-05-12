import React from 'react';
import './App.css';
import axios from 'axios'
import Main from './Main.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: "",
      locationName: ""
    }
  }

  getLocation = async () => {
    const url = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATION_KEY}&q=${this.state.searchQuery}&format=json`;
    const response = await axios.get(url);
    console.log("Response from Axios: ", response.data[0].display_name);
    this.setState({ locationName: response.data[0].display_name});
  }

  render() {
    console.log("this.state in App.js: ", this.state);
    return (
      <div className="App">
        <h1>Welcome to City Explorer!</h1>
        <input 
          onChange={(event) => this.setState({ searchQuery: event.target.value })} 
          placeholder="search for a city!"
        /> 
        <button onClick={this.getLocation}>Explore!</button>
        {this.state.locationName && 
          <h2>The city we searched for is {this.state.locationName}</h2>
        }
      </div>
    );
  }
}

export default App;