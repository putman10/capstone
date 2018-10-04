import React from 'react';
import './styles/TheaterList.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { markAsRead, deleteComment } from './../actions';
import { withRouter } from 'react-router-dom';
import Moment from 'react-moment';
import Image from 'react-graceful-image';


function TheaterList(props){
  console.log(props);
  console.log(props.location.pathname);

  function viewTheater(theater) {
    props.history.push('/theater/' + theater.id);
  }

  let searchTerm;

  if(props.search.search){
    searchTerm = props.search.search;
  } else {
    searchTerm = '';
  }

  return (
    <div className="theaterList">
    <h2>Accessible Theaters within 60 miles of <span className="purpleText">{searchTerm}</span></h2>
      {Object.keys(props.theaters).map(function(theaterId) {
        var theater = props.theaters[theaterId];
        return <div key={theaterId} className="theaterBox" onClick={() =>viewTheater(theater)}>
          <p><Image width="270" height="190" src={theater.image} alt="image of popcorn and movie ticket"/></p>
          <div className="theaterBoxText">
            <h3>{theater.name}</h3>
            <p>{theater.address}</p>
            <p>{theater.city}, {theater.state} {theater.zip}</p>
            <p className="theaterBoxPhone"><b>{theater.phone}</b></p>
          </div>
        </div>;
      })}
    </div>
  );
}

TheaterList.propTypes = {
  dispatch: PropTypes.func,
  theaters: PropTypes.object,
  theaterId: PropTypes.string,
  history: PropTypes.object,
  search: PropTypes.object
};

const mapStateToProps = state => {
console.log(state);
  return {
    theaters: state.theaters,
    search: state.voiceSearch
  };
};

export default withRouter(connect(mapStateToProps)(TheaterList));
