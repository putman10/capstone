import React from 'react';
import './styles/Header.css';
import Search from './Search';
import Logo from './Logo';
import Menu from './Menu';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

function Header(props){

  return (
    <div>
      <div id="header" className={'header-' + props.theme}>
        <div className="container">
          <Logo />
          <Search />
        </div>
      </div>
      <Menu />
    </div>
  );
}

Header.propTypes = {
  dispatch: PropTypes.func,
  theme: PropTypes.string,

};


const mapStateToProps = state => {
  return {
    theme: state.theme
  };
};

export default connect(mapStateToProps)(Header);
