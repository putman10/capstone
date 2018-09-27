import React from 'react';
import './styles/Search.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logInput } from './../actions';
import Speech from './Speech';

function Search(props){
  let input;

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

        <input className="searchInput" placeholder="Search for..." ref={node => {input = node;}}></input>
        <Speech />
        <button className="searchButton">Search</button>
      </form>
    </div>
  );
}

Search.propTypes = {
  dispatch: PropTypes.func
};

export default connect()(Search);
