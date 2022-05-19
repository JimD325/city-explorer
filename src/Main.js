import React from 'react';
import axios from 'axios';
import Search from './Search';
import Map from './Map';
import Weather from './Weather';


class Main extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      searchQuery: "",
      locationName: "",
      locationLat: "",
      locationLong: "",
      locationMap: "",
      locationWeather: [],

    }
  }

  getLocation = async (event) => {
    const url = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATION_KEY}&q=${this.state.searchQuery}&format=json`;
    const response = await axios.get(url);
    this.setState({ locationName: response.data[0].display_name });
    this.setState({ locationLat: response.data[0].lat });
    this.setState({ locationLong: response.data[0].lon });

  }

  getWeather = async (event) => {
    const url = `${process.env.REACT_APP_WEATHER_KEYLABSIX}?city_name=${this.state.searchQuery}`;
    console.log(url);
    const response = await axios.get(url);
    this.setState({locationWeather: response.data.forecastArray.map(day => (`${day.description} ${day.date}`))});
    console.log(response.data)
    console.log(this.state);

  }

  searchCity = (event) => {
    event.preventDefault();
    this.setState({ searchQuery: event.target.value })
  }
  handleClick = (event) =>{
    event.preventDefault();
    this.getLocation();
    this.getWeather();
  }
  
  render() {
    return (
      <>
        <Search 
        locationName = {this.state.locationName} 
        locationLat= {this.state.locationLat} 
        locationLong= {this.state.locationLong}
        handleClick ={this.handleClick}
        searchCity= {this.searchCity}/>
        <Map  
        locationLat ={this.state.locationLat} 
        locationLong = {this.state.locationLong}/>
        <Weather locationWeather = {this.state.locationWeather}/>
      </>
    );
  }
}

export default Main;