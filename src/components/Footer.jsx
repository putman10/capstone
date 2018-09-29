import React from 'react';
import './styles/Footer.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

function Footer(props){

  return (
    <div id="footer" className={'footer-' + props.theme}>
      <div className="container">
        <p>Footer</p>
      </div>
    </div>
  );
}

Footer.propTypes = {
  theme: PropTypes.string
};

const mapStateToProps = state => {
  return {
    theme: state.theme
  };
};

export default connect(mapStateToProps)(Footer);
