import React from 'react';
import './styles/Menu.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Menu(props){

function handleResetInput(){

}

  let menuExpanded=<div id="menu"><div className="container"><div className="closeButton"><FontAwesomeIcon icon="times-circle" alt="Close Menu. Click to Close"/></div><div className="menuItems"><p>Menu Items</p></div></div></div>;

  let menuCollapsed;


  return (
    <div >
      {props.menu ? menuExpanded : menuCollapsed}
    </div>
  );
}

Menu.propTypes = {
  dispatch: PropTypes.func,
  menu: PropTypes.bool
};

const mapStateToProps = state => {

  return {
    menu: state.menu
  };
};

export default connect(mapStateToProps)(Menu);
