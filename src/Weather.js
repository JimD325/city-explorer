import React from 'react';
import Accordion from 'react-bootstrap/Accordion'

class Weather extends React.Component {

  render() {

    return (
      <>
        {this.props.locationWeather && <h3>weather</h3>}
        <Accordion defaultActiveKey="0">
          {this.props.locationWeather.map((value, idx) => (
            <Accordion.Item eventKey={idx}>
            <Accordion.Header>{value.datetime}</Accordion.Header>
            <Accordion.Body>
              {value.description}

            </Accordion.Body>
          </Accordion.Item>
          )

          )}
          
        </Accordion>


      </>
    );
  }
}

export default Weather;