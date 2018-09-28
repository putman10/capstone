import React from 'react';
import './styles/Header.css';
import Search from './Search';
import Menu from './Menu';

function Header(){

  return (
    <div>
      <div id="header">
        <div className="container">
          <div id="logo">ACCESS<span className="gold">:</span>4<span className="gold">:</span>ALL</div>
          <Search />
        </div>
      </div>
      <Menu />
    </div>
  );
}

export default Header;
