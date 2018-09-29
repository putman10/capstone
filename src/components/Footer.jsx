import React from 'react';
import './styles/Footer.css';
import { connect } from 'react-redux';
import ContactWidget from './ContactWidget';
import ThemeSwitcher from './ThemeSwitcher';
import FooterLinks from './FooterLinks';
import PropTypes from 'prop-types';

function Footer(props){

  return (
    <div id="footer" className={'footer-' + props.theme}>
      <div className="container">
        <div className="col col-7">
          <ContactWidget />
        </div>
        <div className="col col-3">
          <ThemeSwitcher />
          <FooterLinks />
        </div>
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
