import React from 'react';
import './styles/Search.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logInput } from './../actions';
import Speech from './Speech';

function Search(props){
  let input = '';

  function handleChange(event) {
    props.dispatch(logInput(event.target.value));
  }

  function submitSearch(event){
    event.preventDefault();
  }

  return (
    <div id="searchInputDiv">
      <form onSubmit={submitSearch}>
        <input className="searchInput" value={props.voiceSearch.search} onChange={handleChange} ref={node => {input = node;}}></input>
        <Speech />
        <button className="searchButton">Search</button>
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
