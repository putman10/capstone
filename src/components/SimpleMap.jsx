import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import './styles/SimpleMap.css';

class SimpleMap extends Component {

  render() {
    let defaultProps = {
      center: {
        lat: 59.95,
        lng: 30.33
      },
      zoom: 11
    };
    var image =< img src='https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png' alt="mapIcon" />;

    const AnyReactComponent = ({ text }) => <div className="popup">{ text }{image} </div>;



    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '300px', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: GOOGLE_KEY }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
          <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text={'Kreyser Avrora RAR'}
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;
