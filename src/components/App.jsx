import React from 'react';
import './styles/App.css';
import Header from './Header';
import Footer from './Footer';
import Comment from './Comment';
import Theater from './Theater';
import TheaterList from './TheaterList';
import Home from './Home';
import Error404 from './Error404';
import Admin from './Admin';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUnlock, faMicrophone, faTimesCircle, faFilm, faUserMd, faShoppingCart, faCode, faUniversalAccess } from '@fortawesome/free-solid-svg-icons';
import { Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import 'babel-polyfill';
import PropTypes from 'prop-types';
import { watchFirebaseTicketsRef, watchFirebaseTheatersRef } from './../actions';


class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    library.add(faUnlock, faMicrophone, faTimesCircle, faFilm, faUserMd, faShoppingCart, faCode, faUniversalAccess);
    this.props.dispatch(watchFirebaseTicketsRef());
    this.props.dispatch(watchFirebaseTheatersRef());
    console.log(this.props);
  }

  render(){
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' render={(props)=><Home currentRouterPath={props.location.pathname}/>} />
          <Route path='/admin' render={()=><Admin />} />
          <Route path='/comments/:commentId' render={()=><Comment />} />
          <Route exact path='/theater' render={()=><TheaterList />} />
          <Route path='/theater/:theaterId' render={()=><Theater />} />
          <Route component={Error404} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

App.propTypes = {
  location: PropTypes.object.isRequired,
  dispatch: PropTypes.func
};

export default withRouter(connect()(App));
