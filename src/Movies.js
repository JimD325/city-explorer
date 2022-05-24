import React from 'react';
import Card from 'react-bootstrap/Card';


class Movies extends React.Component {
  render() {
    return (
      <>
        {this.props.movies &&
          this.props.movies.map(value => (
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={value.poster} />
            <Card.Body>
              <Card.Title>{value.title}</Card.Title>
              <Card.Text>
                {value.description}
              </Card.Text>
            </Card.Body>
          </Card>)
  )}
      </>
    );
  }
}

export default Movies;