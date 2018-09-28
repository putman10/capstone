import React from 'react';
import './styles/Menu.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ReactTooltip from 'react-tooltip';
import { closeMenu } from './../actions';

class Menu extends React.Component {
  constructor(props) {
    super(props);
    let menu = props.menu;
    this.handleCloseNavMenu = this.handleCloseNavMenu.bind(this);
  }

handleCloseNavMenu(){
this.props.dispatch(closeMenu(false));
}

render(){


  let menuExpanded=<div id="menu"><div className="container"><div className="closeButton"><FontAwesomeIcon icon="times-circle" alt="Close Menu. Click to Close" data-tip="Close Navigation Menu" onClick={this.handleCloseNavMenu}/></div><ReactTooltip /><div className="menuItems"><p>Menu Items</p></div></div></div>;

  let menuCollapsed;

  return (
    <div >
      {this.props.menu ? menuExpanded : menuCollapsed}
    </div>
  );
}
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
