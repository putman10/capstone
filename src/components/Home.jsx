import React from 'react';
import './styles/Home.css';
import PropTypes from 'prop-types';

function Home(props){

  return (
    <div className="home container">
      <p>Home</p>
    </div>
  );
}

Home.propTypes = {
  currentRouterPath: PropTypes.string.isRequired
};

export default Home;
