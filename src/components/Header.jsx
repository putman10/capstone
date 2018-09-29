import React from 'react';
import './styles/Header.css';
import Search from './Search';
import Menu from './Menu';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Typist from 'react-typist';

function Header(props){

  return (
    <div>
      <div id="header" className={'header-' + props.theme}>
        <div className="container">
          <div id="logo">
            <Typist cursor={{ hideWhenDone: true, hideWhenDoneDelay: 1000 }} startDelay={1000}>
              ACCESS <span className="gold">:</span> 4 <span className="gold">:</span><Typist.Delay ms={300} /> SOME<Typist.Backspace count={4} delay={800} /><Typist.Delay ms={1000} /> MOST<Typist.Backspace count={4} delay={800} /><Typist.Delay ms={1000} /> ALL
            </Typist>
          </div>
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
