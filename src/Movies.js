import React from 'react';
import Movie from './Movie';


class Movies extends React.Component {
  render() {
    return (
      <>
        {this.props.movies &&
          this.props.movies.map((value, idx) => (
            <Movie 
            description={value.description} 
            idx = {idx}
            title={value.title}
            poster = {value.poster}/>
            )
          )}
      </>
    );
  }
}

export default Movies;