import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import placeholder from '../assets/placeholder.jpg';
import Loader from 'react-loader-spinner';

const BikeListDisplay = (props) => {
  let containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    textAlign: 'center',
    background: '#ffffffb0',
    border: '6px solid black',
    padding: '2rem 10px',
    WebkitBoxShadow: '0px 10px 20px rgba(0,0,0,0.19)',
    MozBoxShadow: '0px 10px 20px rgba(0,0,0,0.19)',
    BoxShadow: '0px 10px 20px rgba(0,0,0,0.19)'
  };
  let columnStyle = {
    width: '20%',
    display: 'inline-block',
    marginRight: '2%'
  };
  let imageStyle = {
    maxWidth: '100%'
  };

  return (
    <div style={containerStyle}>
      <h2>{props.city ? 'Bikes Stolen Near: ' + props.city : ''}</h2>
      {props.loader}
      {props.bikes.map((bike, index) => (
        <div style={columnStyle} key={index}>
          <h3>{bike.title}</h3>
          <img style={imageStyle} src={bike.thumb != null ? bike.thumb : placeholder} alt={bike.title} />
          <p>Date Stolen: {bike.date_stolen}</p>
          <p>Serial #: {bike.serial}</p>
          <hr />
        </div>
      ))}
    </div>
  );
};

BikeListDisplay.propTypes = {
  bikes: PropTypes.array,
  loader: PropTypes.object,
  city: PropTypes.string
};

const mapStateToProps = state => {
  let bikes;
  let loader;
  let city = state.search[1].city;

  if (!state.search[1].isFetching) {
    bikes = state.search[1].stolenBikes;
    loader;
  } else {
    bikes = [];
    loader = <Loader type="Triangle" color="rgb(101, 31, 255)" height="100" width="100" />;
  }
  return {
    bikes,
    loader,
    city
  };

};

export default connect(mapStateToProps)(BikeListDisplay);
