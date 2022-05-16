import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

class Search extends React.Component {
  render() {
    console.log(this.props);
    return (
      <>

        <Form>
          <Form.Group>
            <Form.Label>Search for your city!</Form.Label>
            <Form.Control
              onChange={this.props.searchCity}
              placeholder='Enter where you would like to explore!' />
          </Form.Group>
          <Button onClick={this.props.handleClick} variant='success' type='submit'> Submit</Button>

          {this.props.locationName &&
            <Card style={{ width: '35rem' }}>
              <Card.Title>{this.props.locationName}</Card.Title>
          <Card.Img variant="top" src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATION_KEY}&center=${this.props.locationLat},${this.props.locationLong}&zoom=13`} />
          <Card.Body>
            <Card.Text>
              Lattitude: {this.props.locationLong}<br/>
              Longitude: {this.props.locationLat}
            </Card.Text>

          </Card.Body>
        </Card>
          }
        </Form>
      </>
    );
  }
}

export default Search;