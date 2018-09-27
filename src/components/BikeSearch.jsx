import React from 'react';
import { fetchBikeId } from './../actions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './styles/BikeSearch.css';
import SavedSearches from './SavedSearches';

function BikeSearch(props){
  let searchStyle = {
    marginBottom: '1rem'
  };
  let inputStyle = {
    width: '98%',
    padding: '10px 7px',
    fontSize: '15px',
    borderRadius: '5px',
    border: '1px solid black',
    marginLeft: '-5px'
  };
  let input;

  return (
    <div style={searchStyle}>
      <form onSubmit={e => {
        e.preventDefault();
        if (!input.value) {
          return;
        }
        props.dispatch(fetchBikeId(input.value));
        input.value = '';
      }}>
        <input style={inputStyle} placeholder="97138..." ref={node => {
          input = node;
        }}></input>
        <button className="buttonStyle">Search</button>
      </form>
      <SavedSearches />
    </div>
  );
}

BikeSearch.propTypes = {
  dispatch: PropTypes.func
};

export default connect()(BikeSearch);
