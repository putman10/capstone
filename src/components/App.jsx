import React from 'react';
import './styles/App.css';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import Error404 from './Error404';
import Admin from './Admin';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faMicrophone, faTimesCircle, faFilm, faUserMd, faShoppingCart, faCode } from '@fortawesome/free-solid-svg-icons';
import { Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

function App(){
  library.add(faMicrophone, faTimesCircle, faFilm, faUserMd, faShoppingCart, faCode);

  return (
    <div>
      <Header />
        <Switch>
            <Route exact path='/' render={(props)=><Home currentRouterPath={props.location.pathname}/>} />
            <Route path='/search' render={()=><SearchForm />} />
            <Route path='/admin' render={()=><Admin />} />
            <Route component={Error404} />
          </Switch>
      <Footer />
    </div>
  );
}

export default withRouter(connect()(App));
