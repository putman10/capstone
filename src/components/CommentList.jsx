import React from 'react';
import './styles/CommentList.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

function CommentList(props){
  console.log(props);

  return (
    <div className="commentList container">
      {Object.keys(props.comments).map(function(commentId) {
        var comment = props.comments[commentId];
        return <div key={props.commentId}><p>{comment.name}</p><p>{comment.email}</p><p>{comment.feedback}</p><p>{comment.timeSent}</p><hr /></div>;
      })}
    </div>
  );
}

CommentList.propTypes = {
  comments: PropTypes.string
};

const mapStateToProps = state => {
  console.log(state);
  return {
    comments: state.comments
  };
};

export default connect(mapStateToProps)(CommentList);
