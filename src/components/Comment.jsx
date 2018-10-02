import React from 'react';
import './styles/Comment.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { markAsRead } from './../actions';
import { withRouter } from 'react-router-dom';


class Comment extends React.Component {
  constructor(props) {
		super(props)
	}

	render() {
    let selectedComment = this.props.comments[this.props.match.params.commentId];

    if(selectedComment) {
      return (
        <div className="container comment">
          <p>{selectedComment.name}</p>
          <p>{selectedComment.email}</p>
          <p>{selectedComment.feedback}</p>
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
