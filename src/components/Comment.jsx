import React from 'react';
import './styles/Comment.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { markAsRead } from './../actions';
import { withRouter } from 'react-router-dom';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';
import { deleteComment } from './../actions';


class Comment extends React.Component {
  constructor(props) {
		super(props)
	}

  deleteComment(selectedComment) {
    const { dispatch, history } = this.props;
    dispatch(deleteComment(selectedComment))
    history.push('/admin');
  }

	render() {
    let selectedComment = this.props.comments[this.props.match.params.commentId];

    if(selectedComment) {
      return (
        <div className="container comment">
          <p><Link to="/admin">Back to Inbox</Link></p>
          <br />
          <p><b>{selectedComment.name}</b> {selectedComment.email}</p>
          <p><em><Moment>{selectedComment.timeSent}</Moment></em></p>
          <p className="feedbackArea">{selectedComment.feedback}</p>
          <button className="commentDetailButton" onClick={() =>this.deleteComment(selectedComment)}>DELETE</button>
        </div>
      )
    } else {
      return null
    }
  }
}

Comment.propTypes = {
  dispatch: PropTypes.func,
  selectedComment: PropTypes.object,
  comments: PropTypes.object
};

const mapStateToProps = state => {
  return {
    selectedComment: state.selectedComment,
    comments: state.comments
  };
};

export default withRouter(connect(mapStateToProps)(Comment));
