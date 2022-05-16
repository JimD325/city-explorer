import React from 'react';
import axios from 'axios';
import Search from './Search';
import Map from './Map';



class Main extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      searchQuery: "",
      locationName: "",
      locationLat: "",
      locationLong: "",
      locationMap: "",
      locationWeather: []

    }
  }

  getLocation = async () => {
    const url = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATION_KEY}&q=${this.state.searchQuery}&format=json`;
    const response = await axios.get(url);
    console.log("Response from Axios: ", response.data[0]);
    this.setState({ locationName: response.data[0].display_name });
    this.setState({ locationLat: response.data[0].lat });
    this.setState({ locationLong: response.data[0].lon });
    console.log(this.state, response.data)
  }
  searchCity = (event) => {
    event.preventDefault();
    this.setState({ searchQuery: event.target.value })
  }
  handleClick = (event) =>{
    event.preventDefault();
    this.getLocation();
    
  }
  
  render() {
    console.log("this.state in Main.js: ", this.state);
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

      </>
    );
  }
}

export default Main;