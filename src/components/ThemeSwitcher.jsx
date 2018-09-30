import React from 'react';
import './styles/ThemeSwitcher.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { chooseTheme } from './../actions';
import ReactTooltip from 'react-tooltip';

class ThemeSwitcher extends React.Component {
  constructor(props) {
    super(props);
    this.handleThemeSwitch = this.handleThemeSwitch.bind(this);
  }

  handleThemeSwitch(theme){
    this.props.dispatch(chooseTheme(theme));
    document.body.classList = '';
    document.body.classList.toggle('background-' + theme);
  }

  render(){

    return (
      <div className="themeSwitcher">
        <h4>CHOOSE A THEME</h4>
        <div onClick={() => this.handleThemeSwitch('light')} className="themes">
          <div data-tip="Light Theme" className="light-theme"><ReactTooltip /></div>
        </div>
        <div onClick={() => this.handleThemeSwitch('dark')} className="themes">
          <div data-tip="Dark Theme" className="dark-theme"><ReactTooltip /></div>
        </div>
        <div onClick={() => this.handleThemeSwitch('color')} className="themes">
          <div data-tip="Color-blind" className="color-theme"><ReactTooltip /></div>
        </div>
      </div>
    );
  }
}

ThemeSwitcher.propTypes = {
  dispatch: PropTypes.func
};

export default connect()(ThemeSwitcher);
