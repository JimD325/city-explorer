import React from 'react';
import WeatherDay from './WeatherDay';

class Weather extends React.Component {

  render() {

    return (
      <>
        {this.props.locationWeather.map((value, idx) => (
          <WeatherDay
            idx={idx}
            datetime={value.datetime}
            description={value.description}
          />

        ))}
      </>
    );
  }
}

export default Weather;