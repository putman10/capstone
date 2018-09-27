import React from 'react';
import './styles/Header.css';
import Search from './Search';

function Header(){

  return (
    <div id="header">
      <div className="container">
        <div id="logo"></div>
        <Search />
      </div>
    </div>
  );
}

export default Header;
