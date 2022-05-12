import React from 'react';
import './App.css';
import axios from 'axios';
import Card from 'react-bootstrap/Card'
import { ListGroupItem, ListGroup } from 'react-bootstrap';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: "",
      locationName: "",
      locationLat:"",
      locationLong:""
    }
  }

  getLocation = async () => {
    const url = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATION_KEY}&q=${this.state.searchQuery}&format=json`;
    const response = await axios.get(url);
    console.log("Response from Axios: ", response.data[0]);
    this.setState({ locationName: response.data[0].display_name});
    this.setState({  locationLat: response.data[0].lat});
    this.setState({  locationLong: response.data[0].lon});
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
        {this.state.locationName && <>
        
              <Card style={{ width: '35rem' }}>
            <Card.Img variant="top" src="https://via.placeholder.com/150" />
            <Card.Body>
              <Card.Title>{this.state.LocationName}</Card.Title>
              <Card.Text>
                Heres what we could find for you
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroupItem>Longitude: {this.state.locationLong}</ListGroupItem>
              <ListGroupItem>Lattitude: {this.state.locationLat}</ListGroupItem>
            </ListGroup>
            <Card.Body>
              <Card.Link href="#"></Card.Link>
              <Card.Link href="#"></Card.Link>
            </Card.Body>
          </Card>





          <h2>We found you {this.state.locationName}, with a lattitude of {this.state.locationLat} and a longitude of {this.state.locationLong}</h2>
          </>
        }
        
      </div>
    );
  }
}

export default App;