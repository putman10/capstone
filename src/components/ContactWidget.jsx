import React from 'react';
import './styles/ContactWidget.css';
import NameSpeech from './NameSpeech';
import EmailSpeech from './EmailSpeech';
import FeedbackSpeech from './FeedbackSpeech';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { updateNameComment } from './../actions';
import { updateEmailComment } from './../actions';
import { addComment } from './../actions';
import { updateFeedbackComment } from './../actions';

function ContactWidget(props){
  let input = '';
  let email = '';
  let feedback = '';

  function handleNameChange(event) {
    props.dispatch(updateNameComment(event.target.value));
  }

  function handleEmailChange(event) {
    props.dispatch(updateEmailComment(event.target.value));
  }

  function handleFeedbackChange(event) {
    props.dispatch(updateFeedbackComment(event.target.value));
  }

  function submitSearch(event){
    event.preventDefault();
    props.dispatch(addComment(props.name, props.email, props.feedback))
    props.dispatch(updateNameComment(''));
    props.dispatch(updateEmailComment(''));
    props.dispatch(updateFeedbackComment(''));
  }

  return (
    <div className="contactWidget">
      <h2>HAVE A SUGGESTION?</h2>
      <p>We would love to hear from you. Enter a site suggestion in the form below. We are continuosly improving the accessibility and adaptive to provide content you as a user want.</p>
      <form onSubmit={submitSearch}>
        <div className="leftForm">
          <div className="form-group">
            <label>NAME:</label>
            <div className="nameGroup">
              <input type="text" id="name" value={props.name} onChange={handleNameChange} ref={node => {input = node;}}/>
              <NameSpeech />
            </div>
          </div>
          <div className="form-group extraMargin">
            <label>EMAIL:</label>
            <div className="emailGroup">
              <input type="text" id="email" value={props.email} onChange={handleEmailChange} ref={node => {email = node;}}/>
              <EmailSpeech />
            </div>
          </div>
        </div>
        <div className="rightForm">
          <div className="form-group">
            <label>LEAVE FEEDBACK:</label>
            <div className="feedbackGroup">
              <textarea rows="5" id="comment" onChange={handleFeedbackChange} value={props.feedback} ref={node => {feedback = node;}}></textarea>
              <FeedbackSpeech />
            </div>
          </div>
        </div>
        <button type="submit">Submit Feedback</button>
      </form>
    </div>
  );
}

ContactWidget.propTypes = {
  dispatch: PropTypes.func,
  name: PropTypes.string,
  email: PropTypes.string,
  feedback: PropTypes.string,
};

const mapStateToProps = state => {
  return {
    name: state.name,
    email: state.email,
    feedback: state.feedback
  };
};

export default connect(mapStateToProps)(ContactWidget);
