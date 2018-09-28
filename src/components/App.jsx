import React from 'react';
import './styles/App.css';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faMicrophone, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

function App(){
  library.add(faMicrophone, faTimesCircle);

  return (
    <div>
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
