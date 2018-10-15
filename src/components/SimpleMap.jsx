import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import './styles/SimpleMap.css';
import PropTypes from 'prop-types';

class SimpleMap extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.selectedTheater.lat);
    let defaultProps = {
      center: {
        lat: this.props.selectedTheater.lat,
        lng: this.props.selectedTheater.lng
      },
      zoom: 11
    };
    var image =< img src='https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png' alt="mapIcon" />;

    const AnyReactComponent = ({ text }) => <div className="popup">{image} </div>;



    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '300px', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: GOOGLE_KEY }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
          <AnyReactComponent
            lat={this.props.selectedTheater.lat}
            lng={this.props.selectedTheater.lng}
            text={'Kreyser Avrora RAR'}
          />
        </GoogleMapReact>
      </div>
    );
  }
}

SimpleMap.propTypes = {
  selectedTheater: PropTypes.object
};

export default SimpleMap;
