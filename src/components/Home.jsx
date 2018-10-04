import React from 'react';
import './styles/Home.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TheaterList from './TheaterList';

function Home(props){

  return (
    <div className="home container">
      <h1>HOME</h1>
      <TheaterList />
    </div>
  );
}

Home.propTypes = {
  currentRouterPath: PropTypes.string.isRequired,
  search: PropTypes.object
};

const mapStateToProps = state => {
  return {
    search: state.voiceSearch
  };
};

export default connect(mapStateToProps)(Home);
