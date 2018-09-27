import React from 'react';
import BikeSearch from './BikeSearch';
import bikeGif from '../assets/bike.gif';
import './styles/Header.css';
import { CSSTransitionGroup } from 'react-transition-group';

function Header(){
  let animate =
    <div className="bikeDiv">
      <img className="bikeStyle" src={bikeGif}/>
    </div>;

  return (
    <div>
      <div className="headerStyle">
        <div className="containerStyle1">
          <h1>Where's My Bike?</h1>
        </div>
      </div>
      <CSSTransitionGroup
        transitionName="example"
        transitionAppear={true}
        transitionAppearTimeout={3000}
        transitionEnter={false}
        transitionLeave={false}>
      {animate}
      <div className="containerStyle2">
        <p><b>This is a website that returns all reported stolen bikes in a 10 mile radius of inputed zipcode.</b></p>
        <p className="lowerFont">Enter a valid zipcode:</p>
        <BikeSearch />
      </div>
      </CSSTransitionGroup>
    </div>
  );
}

export default Header;
