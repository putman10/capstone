import React from 'react';
import './styles/CommentList.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { markAsRead } from './../actions';
import { withRouter } from 'react-router-dom';


function CommentList(props){

  function viewComment(comment) {
    props.dispatch(markAsRead(comment));
    props.history.push('/comments/' + comment.id);
  }

  return (
    <div className="commentList">
    <div className="inboxRow header"><div className="inbox1">STATUS</div><div className="inbox3">SENDER</div><div className="inbox4">PREVIEW</div><div className="inbox2">SENT</div></div>
      {Object.keys(props.comments).map(function(commentId) {
        var comment = props.comments[commentId];
        return <div onClick={() =>viewComment(comment)} className={comment.status == 'Read' ? 'inboxRow read': 'inboxRow unread'} key={commentId}><div className="inbox1">{comment.status}</div><div className="inbox3">{comment.name}</div><div className="inbox4">{comment.feedback}</div><div className="inbox2">{comment.timeSent}</div></div>;
      })}
    </div>
  );
}

CommentList.propTypes = {
  dispatch: PropTypes.func,
  comments: PropTypes.object,
  commentId: PropTypes.string
};

const mapStateToProps = state => {
  return {
    comments: state.comments
  };
};

export default withRouter(connect(mapStateToProps)(CommentList));
