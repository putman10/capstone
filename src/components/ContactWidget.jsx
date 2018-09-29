import React from 'react';
import './styles/ContactWidget.css';
import PropTypes from 'prop-types';

function ContactWidget(){

  return (
    <div className="contactWidget">
      <h2>HAVE A SUGGESTION?</h2>
      <p>We would love to hear from you. Enter a site suggestion in the form below. We are continuosly improving the accessibility and adaptive to provide content you as a user want.</p>
      <form>
        <div className="leftForm">
          <div className="form-group">
            <label for="name">NAME:</label>
            <input type="text" id="name"/>
          </div>
          <div className="form-group">
            <label for="email">EMAIL:</label>
            <input type="text" id="email"/>
          </div>
        </div>
        <div className="rightForm">
          <div className="form-group">
            <label for="comment">LEAVE A COMMENT:</label>
            <textarea rows="5" id="comment"></textarea>
          </div>
        </div>
        <button type="submit">Submit Feedback</button>
      </form>
    </div>
  );
}

ContactWidget.propTypes = {
};

export default ContactWidget;
