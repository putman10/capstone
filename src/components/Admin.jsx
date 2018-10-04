import React from 'react';
import './styles/Admin.css';
import CommentList from './CommentList';
import NewTheaterForm from './NewTheaterForm';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

function Admin(props){

  return (
    <div className="admin container">
      <h1>ADMIN</h1>
      <CommentList />
      <br/>
      <NewTheaterForm />
    </div>
  );
}

Admin.propTypes = {
  comments: PropTypes.object
};

const mapStateToProps = state => {
  return {
    comments: state.comments
  };
};

export default connect(mapStateToProps)(Admin);
