import React from 'react';
import SpeechRecognition from 'react-speech-recognition';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './styles/Speech.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateVoiceSearch } from './../actions';
import ReactTooltip from 'react-tooltip';

class Dictaphone extends React.Component {
  constructor(props) {
    super(props);
    this.handleReset = this.handleReset.bind(this);
    this.handleStop = this.handleStop.bind(this);
  }

  handleReset(){
    this.props.resetTranscript();
    this.props.startListening();
    this.props.listening == true;
    this.props.dispatch(updateVoiceSearch('Recording...'));
  }

  handleStop(){
    this.props.stopListening();
    this.props.listening == false;
    this.props.dispatch(updateVoiceSearch(this.props.transcript));
  }

  render() {
    const { browserSupportsSpeechRecognition } = this.props;


    if (!browserSupportsSpeechRecognition) {
      return null;
    }

    return (
      <div className="voiceButtons">
        <div data-tip="Hold mouse down and speak voice2text" className={this.props.listening ? 'voiceButtonOn' : 'voiceButtonOff'} onMouseDown={this.handleReset} onMouseUp={this.handleStop} >
          <ReactTooltip />
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
