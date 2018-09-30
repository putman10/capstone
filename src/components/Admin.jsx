import React from 'react';
import './styles/Admin.css';
import CommentList from './CommentList';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

function Admin(props){
    console.log(props);


  return (
    <div className="admin container">
      <p>Admin</p>
      <CommentList />
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
