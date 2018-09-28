import React from 'react';
import './styles/Menu.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

function Menu(props){

console.log(props.menu)
function handleResetInput(){

}

  let menuExpanded=<div id="menu"><div className="container">test</div></div>;

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
