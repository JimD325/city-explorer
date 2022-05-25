import React from 'react';
import axios from 'axios';
import Search from './Search';
import Map from './Map';
import Weather from './Weather';
import Movies from './Movies';


class Main extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      searchQuery: "",
      locationName: "",
      locationLat: "",
      locationLong: "",
      locationWeather: [],
      locationMovies: '',

    }
  }

  getLocation = async (event) => {
console.log("working");
    const url = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATION_KEY}&q=${this.state.searchQuery}&format=json`;
    console.log(url);
    const response = await axios.get(url);
    this.setState({ 
      locationName: response.data[0].display_name, 
      locationLat: response.data[0].lat, 
      locationLong: response.data[0].lon, 
    }, 
    this.showAll);
  

  }

  getWeather = async () => {
    const url = `${process.env.REACT_APP_SERVER}/weather?lat=${this.state.locationLat}&lon=${this.state.locationLong}`;
    console.log(url);
    const response = await axios.get(url);
    this.setState({ locationWeather: response.data });
  }
  getMovies = async () => {
    const url = `${process.env.REACT_APP_SERVER}/movies?search=${this.state.locationName}`;
    const response = await axios.get(url);
    console.log(url);
    console.log(response.data);
    this.setState({ locationMovies: response.data });
  }
  searchCity = (event) => {
    event.preventDefault();
    this.setState({ searchQuery: event.target.value })
  }
  handleClick = (event) => {
    event.preventDefault();
    this.getLocation();
  }
  showAll = (event) => {
    console.log("showAll");
    this.getWeather();
    this.getMovies();
  }

  render() {
    console.log(this.state);
    return (
      <>
        <Search
          locationName={this.state.locationName}
          locationLat={this.state.locationLat}
          locationLong={this.state.locationLong}
          handleClick={this.handleClick}
          searchCity={this.searchCity} />
        <Map
          locationLat={this.state.locationLat}
          locationLong={this.state.locationLong} />
        <Weather locationWeather={this.state.locationWeather} />
        <Movies movies={this.state.locationMovies} />
      </>
    );
  }
}

export default Main;