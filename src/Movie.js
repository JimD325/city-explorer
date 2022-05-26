import React from 'react';
import Card from 'react-bootstrap/Card';


class Movie extends React.Component {
  render() {
    return (
      <>
            <Card style={{ width: '18rem' }} key={this.props.idx}>
              {this.props.poster &&
                <Card.Img variant="top" src={this.props.poster} alt={this.props.title} />}
              <Card.Body>
                <Card.Title>{this.props.title}</Card.Title>
                <Card.Text>
                  {this.props.description}
                </Card.Text>
              </Card.Body>
            </Card>
          
      </>
    );
  }
}

export default Movie;


