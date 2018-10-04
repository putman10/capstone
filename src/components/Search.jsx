import React from 'react';
import './styles/Search.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logInput, fetchTrimetResults } from './../actions';
import Speech from './Speech';

function Search(props){
  let input = '';

  function handleChange(event) {
    props.dispatch(logInput(event.target.value));
  }

  function submitSearch(event){
    event.preventDefault();
    props.dispatch(fetchTrimetResults(event.target.value));
  }

  return (
    <div id="searchInputDiv">
      <form onSubmit={submitSearch}>
        <input className="searchInput" placeholder="Type or hold microphone button to speak..." value={props.voiceSearch.search} onChange={handleChange} ref={node => {input = node;}}></input>
        <Speech />
        <button className="searchButton" >Search</button>
      </form>
    </div>
  );
}

Search.propTypes = {
  dispatch: PropTypes.func,
  voiceSearch: PropTypes.object
};

const mapStateToProps = state => {
  return {
    voiceSearch: state.voiceSearch
  };
};

export default connect(mapStateToProps)(Search);
