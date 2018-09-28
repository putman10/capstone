import React from 'react';
import './styles/Header.css';
import Search from './Search';
import Menu from './Menu';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

function Header(props){
  console.log(props.theme)

  return (
    <div>
      <div id="header" className={'header-' + props.theme}>
        <div className="container">
          <div id="logo">ACCESS<span className="gold">:</span>4<span className="gold">:</span>ALL</div>
          <Search />
        </div>
      </div>
      <Menu />
    </div>
  );
}

Header.propTypes = {
  dispatch: PropTypes.func,
  theme: PropTypes.string
};

const mapStateToProps = state => {
  return {
    theme: state.theme
  };
};

export default connect(mapStateToProps)(Header);
