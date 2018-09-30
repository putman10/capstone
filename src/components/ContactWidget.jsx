import React from 'react';
import './styles/ContactWidget.css';
import NameSpeech from './NameSpeech';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { updateNameComment } from './../actions';

function ContactWidget(props){
  console.log(props);
  let input = '';
  function handleChange(event) {
     props.dispatch(updateNameComment(event.target.value));
   }

   function submitSearch(event){
     event.preventDefault();
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
              <input type="text" id="name" value={props.name} onChange={handleChange} ref={node => {input = node;}}/>
              <NameSpeech />
            </div>
          </div>
          <div className="form-group">
            <label>EMAIL:</label>
            <input type="text" id="email"/>
          </div>
        </div>
        <div className="rightForm">
          <div className="form-group">
            <label>LEAVE A COMMENT:</label>
            <textarea rows="5" id="comment"></textarea>
          </div>
        </div>
        <button type="submit">Submit Feedback</button>
      </form>
    </div>
  );
}

ContactWidget.propTypes = {
  dispatch: PropTypes.func,
  name: PropTypes.string
};

const mapStateToProps = state => {
  console.log(state);
  return {
    name: state.name
  };
};

export default connect(mapStateToProps)(ContactWidget);
