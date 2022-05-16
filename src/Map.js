import React from 'react';


class Map extends React.Component {
  render() {
    console.log(this.props);
    return (
      <>
        {/* <img src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATION_KEY}&center=${this.props.locationLat},${this.props.locationLong}&zoom=13`} alt ='hello'/> */}
      </>
    );
  }
}

export default Map;