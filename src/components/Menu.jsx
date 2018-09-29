import React from 'react';
import './styles/Menu.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { closeMenu } from './../actions';
import { CSSTransitionGroup } from 'react-transition-group';
import ReactTooltip from 'react-tooltip';
import ThemeSwitcher from './ThemeSwitcher';

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
      <div id="menu" className={'menu-' + this.props.theme} key="1">
        <div className="container">
          <div className="closeButton" data-tip="Close Navigation Menu">
            <FontAwesomeIcon icon="times-circle" alt="Close Menu. Click to Close" onClick={() => this.handleCloseNavMenu(false)}/>
          </div>
          <ReactTooltip place="left" type="dark" effect="solid"/>
          <ThemeSwitcher />
          <div className="menuItem">
            <p>Home</p>
          </div>
          <div className="menuItem">
            <p><FontAwesomeIcon icon="shopping-cart" alt="Business Icon"/> Businesses</p>
          </div>
          <div className="menuItem">
            <p><FontAwesomeIcon icon="film" alt="Movie Icon"/> Theaters</p>
          </div>
          <div className="menuItem">
            <p><FontAwesomeIcon icon="user-md" alt="Doctor Icon"/> Doctors</p>
          </div>
          <div className="menuItem">
            <p><FontAwesomeIcon icon="code" alt="Developer Icon"/> For Developers</p>
          </div>
          <div className="menuItem">
            <p>Contact</p>
          </div>
        </div>
      </div>;

    let menuCollapsed =
      <div key="2">
        <div className="closedTab" onClick={() => this.handleCloseNavMenu(true)}>
          <p>Menu</p>
        </div>
      </div>;

    return (
      <div >
        <CSSTransitionGroup
          transitionName="example"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}>
          {this.props.menu ? menuExpanded : menuCollapsed}
        </CSSTransitionGroup>
      </div>
    );
  }
}

Menu.propTypes = {
  dispatch: PropTypes.func,
  menu: PropTypes.bool,
  theme: PropTypes.string
};

const mapStateToProps = state => {

  return {
    menu: state.menu,
    theme: state.theme
  };
};

export default connect(mapStateToProps)(Menu);
