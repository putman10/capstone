import React from 'react';
import SpeechRecognition from 'react-speech-recognition';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './styles/Speech.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateVoiceSearch } from './../actions';

class Dictaphone extends React.Component {
  constructor(props) {
    super(props);
    this.handleReset = this.handleReset.bind(this);
    this.handleStop = this.handleStop.bind(this);
    console.log(this.props);
  }

  handleReset(){
    this.props.resetTranscript();
    this.props.startListening();
    this.props.listening == true;
  }

  handleStop(){
    this.props.stopListening();
    this.props.listening == false;
    this.props.dispatch(updateVoiceSearch(this.props.transcript));
  }

  render() {
    const { transcript, startListening, stopListening, resetTranscript, browserSupportsSpeechRecognition } = this.props;


    if (!browserSupportsSpeechRecognition) {
      return null;
    }

    return (
      <div className="voiceButtons">
        <div className={this.props.listening ? "voiceButtonOn" : "voiceButtonOff"} onMouseEnter={this.handleReset} onMouseLeave={this.handleStop} >
          <FontAwesomeIcon icon="microphone" alt="microphone. Click and start speaking"/>
        </div>
      </div>
    );
  }
}

Dictaphone.propTypes = {
  transcript: PropTypes.string,
  startListening: PropTypes.func,
  stopListening: PropTypes.func,
  resetTranscript: PropTypes.func,
  browserSupportsSpeechRecognition: PropTypes.bool,
  listening: PropTypes.bool,
  voiceSearch: PropTypes.object,
  dispatch: PropTypes.func
};

const options = {
  autoStart: false
};

export default SpeechRecognition(options)(connect()(Dictaphone));