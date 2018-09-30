import React from 'react';
import './styles/Home.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

function Home(props){
  console.log(props);
  let searchTerm;

  if(props.search.search){
    console.log(props.search.search);
    searchTerm = props.search.search;
  } else {
    console.log(props);
    searchTerm = '';
  }

  return (
    <div className="home container">
      <p>Home</p>
      {searchTerm}
    </div>
  );
}

Home.propTypes = {
  currentRouterPath: PropTypes.string.isRequired,
  search: PropTypes.object
};

const mapStateToProps = state => {
  console.log(state);
  return {
    search: state.voiceSearch
  };
};

export default connect(mapStateToProps)(Home);
