import React from 'react';
import './styles/CommentList.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { markAsRead, deleteComment } from './../actions';
import { withRouter } from 'react-router-dom';
import Moment from 'react-moment';


function CommentList(props){

  function viewComment(comment) {
    props.dispatch(markAsRead(comment));
    props.history.push('/comments/' + comment.id);
  }

  return (
    <div className="commentList">
    <div className="inboxRow header"><div className="inbox1">STATUS</div><div className="inbox2">SENDER</div><div className="inbox5">PREVIEW</div><div className="inbox1">SENT</div><div className="inbox1"></div></div>
      {Object.keys(props.comments).map(function(commentId) {
        var comment = props.comments[commentId];
        return <div className={comment.status == 'Read' ? 'inboxRow read': 'inboxRow unread'} key={commentId}><div className="inbox1" onClick={() =>viewComment(comment)}>{comment.status}</div><div className="inbox2" onClick={() =>viewComment(comment)}>{comment.name}</div><div className="inbox5" onClick={() =>viewComment(comment)}>{comment.feedback}</div><div className="inbox1" onClick={() =>viewComment(comment)}><Moment format="MMM D h:m A">{comment.timeSent}</Moment></div><div className="inbox1" ><button onClick={() =>props.dispatch(deleteComment(comment))}>fsadf</button></div></div>;
      })}
    </div>
  );
}

CommentList.propTypes = {
  dispatch: PropTypes.func,
  comments: PropTypes.object,
  commentId: PropTypes.string,
  history: PropTypes.object
};

const mapStateToProps = state => {
  return {
    comments: state.comments
  };
};

export default withRouter(connect(mapStateToProps)(CommentList));
