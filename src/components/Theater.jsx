import React from 'react';
import './styles/Theater.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { markAsRead } from './../actions';
import { withRouter } from 'react-router-dom';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';
import Image from 'react-graceful-image';
import SimpleMap from './SimpleMap';


class Theater extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    let selectedTheater = this.props.theaters[this.props.match.params.theaterId];

    if(selectedTheater) {
      return (
        <div className="container theater">
          <p><Link to="/">Back to All Theaters</Link></p>
          <br />
          <div className="theaterDetailBoxText">
          <p><Image width="257" height="172" src={selectedTheater.image} alt="image of popcorn and movie ticket"/></p>
            <h3>{selectedTheater.name}</h3>
            <p>{selectedTheater.address}</p>
            <p>{selectedTheater.city}, {selectedTheater.state} {selectedTheater.zip}</p>
            <p className="theaterBoxPhone"><b>{selectedTheater.phone}</b></p>
          </div>
          <div className="map">
            <SimpleMap selectedTheater ={selectedTheater}/>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

Comment.propTypes = {
  dispatch: PropTypes.func,
  selectedTheater: PropTypes.object,
  theaters: PropTypes.object
};

const mapStateToProps = state => {
  return {
    selectedTheater: state.selectedComment,
    theaters: state.theaters
  };
};

export default withRouter(connect(mapStateToProps)(Theater));
