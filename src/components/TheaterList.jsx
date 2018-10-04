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

  function viewTheater(theater) {
    props.history.push('/theater/' + theater.id);
  }

  return (
    <div className="theaterList">
      {Object.keys(props.theaters).map(function(theaterId) {
        var theater = props.theaters[theaterId];
        return <div key={theaterId} className="theaterBox" onClick={() =>viewTheater(theater)}>
          <p><Image width="270" height="190" src={theater.image} alt="image of popcorn and movie ticket"/></p>
          <div className="theaterBoxText">
            <h3>{theater.name}</h3>
            <p>{theater.address}</p>
            <p>{theater.city}, {theater.state} {theater.zip}</p>
            <p><b>{theater.phone}</b></p>
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
  history: PropTypes.object
};

const mapStateToProps = state => {
  return {
    theaters: state.theaters
  };
};

export default withRouter(connect(mapStateToProps)(TheaterList));
