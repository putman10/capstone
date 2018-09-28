import React from 'react';
import './styles/ThemeSwitcher.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { chooseTheme } from './../actions';

class ThemeSwitcher extends React.Component {
  constructor(props) {
    super(props);
    this.handleThemeSwitch = this.handleThemeSwitch.bind(this);
  }

  handleThemeSwitch(theme){
    this.props.dispatch(chooseTheme(theme));
    document.body.classList = "";
    document.body.classList.toggle('background-' + theme);
  }

  render(){

    return (
      <div >
        <div onClick={() => this.handleThemeSwitch("light")}>
          <p>Light Theme</p>
        </div>
        <div onClick={() => this.handleThemeSwitch("dark")}>
          <p>Dark Theme (default)</p>
        </div>
        <div onClick={() => this.handleThemeSwitch("color")}>
          <p>Color Blind</p>
        </div>
      </div>
    );
  }
}

ThemeSwitcher.propTypes = {
  dispatch: PropTypes.func
};

export default connect()(ThemeSwitcher);
