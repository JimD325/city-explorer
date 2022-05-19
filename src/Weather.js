import React from 'react';


class Weather extends React.Component {
  
  render() {
    
    return (
    <>
      <p>weather</p>
      <h3>{this.props.locationWeather[0]}</h3>
      
        
    </>
  );
  }
}

export default Weather;