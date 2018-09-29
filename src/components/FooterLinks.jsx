import React from 'react';
import './styles/FooterLinks.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';


class FooterLinks extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){

    return (
      <div id="footerLinks" className={'footerLinks-' + this.props.theme} key="1">
        <div className="footerLinksItem">
          <p><Link to="/">Home</Link></p>
        </div>
        <div className="footerLinksItem">
          <p><Link to="/admin"><FontAwesomeIcon icon="shopping-cart" alt="Business Icon"/> Businesses</Link></p>
        </div>
        <div className="footerLinksItem">
          <p><FontAwesomeIcon icon="film" alt="Movie Icon"/> Theaters</p>
        </div>
        <div className="footerLinksItem">
          <p><FontAwesomeIcon icon="user-md" alt="Doctor Icon"/> Doctors</p>
        </div>
        <div className="footerLinksItem">
          <p><FontAwesomeIcon icon="code" alt="Developer Icon"/> For Developers</p>
        </div>
        <div className="footerLinksItem">
          <p>Contact</p>
        </div>
      </div>
    );
  }
}

FooterLinks.propTypes = {
  theme: PropTypes.string
};

const mapStateToProps = state => {

  return {
    theme: state.theme
  };
};

export default connect(mapStateToProps)(FooterLinks);
