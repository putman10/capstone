import React from 'react';
import './styles/Search.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logInput } from './../actions';
import Speech from './Speech';

function Search(props){
  let input;
  let inputSearch;
console.log(props.voiceSearch)
  if(Object.keys(props.voiceSearch).length > 0){
    inputSearch=<input className="searchInput" value={props.voiceSearch.search} ref={node => {input = node;}}></input>;
  } else {
    inputSearch=<input className="searchInput" placeholder="Search for..." ref={node => {input = node;}}></input>;
  }

  return (
    <div id="searchInputDiv">
      <form onSubmit={e => {
        e.preventDefault();
        if (!input.value) {
          return;
        }
        props.dispatch(logInput(input.value));
        input.value = '';
      }}>

        {inputSearch}
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
