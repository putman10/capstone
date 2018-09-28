import React from 'react';
import SpeechRecognition from 'react-speech-recognition';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './styles/Speech.css';
import PropTypes from 'prop-types';

class Dictaphone extends React.Component {
  constructor(props) {
    super(props);
    let listening = false
  }

  render() {
    const { transcript, startListening, stopListening, resetTranscript, browserSupportsSpeechRecognition } = this.props;

    function reset(props){
      resetTranscript();
      startListening();
      props.listening = true;
    }

    function stop(props){
      stopListening();
      props.listening = false;
    }

    if (!browserSupportsSpeechRecognition) {
      return null;
    }

    let onButton = <div className="voiceButtonOn">
      <FontAwesomeIcon onClick={reset} icon="microphone" alt="microphone. Click and start speaking"/>
    </div>;

    let offButton = <div className="voiceButtonOff">
      <FontAwesomeIcon onClick={stop} icon="microphone" alt="microphone. Click and start speaking"/>
    </div>;

    return (
      <div className="voiceButtons">
        {this.props.listening ? offButton : onButton}
        <span>{transcript}</span>
      </div>
    )
  }
}

Dictaphone.propTypes = {
  transcript: PropTypes.string,
  startListening: PropTypes.func,
  stopListening: PropTypes.func,
  resetTranscript: PropTypes.func,
  browserSupportsSpeechRecognition: PropTypes.bool
};

export default SpeechRecognition({autoStart: false})(Dictaphone)
