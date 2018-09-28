import React from 'react';
import './styles/Menu.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { closeMenu } from './../actions';
import { CSSTransitionGroup } from 'react-transition-group';
import ReactTooltip from 'react-tooltip';

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.handleCloseNavMenu = this.handleCloseNavMenu.bind(this);
  }

  handleCloseNavMenu(toggle){
    this.props.dispatch(closeMenu(toggle));
  }

  render(){


    let menuExpanded=
      <div id="menu" key="1">
        <div className="container">
          <div className="closeButton">
            <FontAwesomeIcon icon="times-circle" alt="Close Menu. Click to Close" data-tip="Close Navigation Menu" onClick={() => this.handleCloseNavMenu(false)}/>
          </div>
          <div className="menuItem">
            <p>Home</p>
          </div>
          <div className="menuItem">
            <p>Businesses</p>
          </div>
          <div className="menuItem">
            <p>Jobs</p>
          </div>
          <div className="menuItem">
            <p>Doctors</p>
          </div>
          <div className="menuItem">
            <p>For Developers</p>
          </div>
          <div className="menuItem">
            <p>Contact</p>
          </div>
        </div>
      </div>;

    let menuCollapsed =
      <div key="2">
        <div className="closedTab" onClick={() => this.handleCloseNavMenu(true)}>
          <p>Open Menu</p>
        </div>
      </div>;

    return (
      <div >
        <CSSTransitionGroup
          transitionName="example"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}>
          {this.props.menu ? menuExpanded : menuCollapsed}
          <ReactTooltip />
        </CSSTransitionGroup>
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
