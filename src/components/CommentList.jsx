import React from 'react';
import './styles/CommentList.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

function CommentList(props){
  console.log(props);

  return (
    <div className="commentList container">
      <hr/>
      {Object.keys(props.comments).map(function(commentId) {
        var comment = props.comments[commentId];
        return <p key={props.commentId}>{comment.name}</p>;
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
