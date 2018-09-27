import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './styles/SavedSearch.css';
import { historySearch } from './../actions';

function SavedSearches(props){
console.log(props.dispatch)
  if (Object.keys(props.savedSearches).length > 0) {
    return (
      <div>
      <p className="savedTitle">Search History:</p>
      {Object.keys(props.savedSearches).map(function(searchId) { let search = props.savedSearches[searchId];
        return (
          <button onClick={() =>props.dispatch(historySearch(search))} className="searchButtons" key={searchId}>{search.zip}</button>
        )
      })}
      </div>
    );
  } else{
    return (
      <div>
      </div>
    );
  }
}

SavedSearches.propTypes = {
  savedSearches: PropTypes.object,
  dispatch: PropTypes.func
};

const mapStateToProps = state => {
  let savedSearches = state.savedSearch;
  return {
    savedSearches
  };
};

export default connect(mapStateToProps)(SavedSearches);
