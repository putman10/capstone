import React from 'react';
import './styles/Home.css';
import ThemeSwitcher from './ThemeSwitcher'

function Home(){

  return (
    <div className="home container">
      <p>Home</p>
      <ThemeSwitcher />
    </div>
  );
}

export default Home;
