import React, {Component } from 'react';
import SpeechRecognition from 'react-speech-recognition';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './styles/Speech.css';

class Dictaphone extends Component {
  listening = false;
  render() {
    const { transcript, startListening, stopListening, resetTranscript, browserSupportsSpeechRecognition } = this.props;
    console.log(listening)

    function reset(){
      startListening();
      resetTranscript();
      this.listening = true;
      console.log(listening)
    }

    function stop(){
      stopListening();
      this.listening = false;
      console.log(listening)
    }

    if (!browserSupportsSpeechRecognition) {
      return null
    }

    let onButton = <div className="voiceButtonOn">
      <FontAwesomeIcon onClick={reset} icon="microphone" alt="microphone. Click and start speaking"/>
    </div>;

    let offButton = <div className="voiceButtonOff">
      <FontAwesomeIcon onClick={stop} icon="microphone" alt="microphone. Click and start speaking"/>
    </div>;

    return (
      <div className="voiceButtons">
        {listening ? offButton : onButton}
        <span>{transcript}</span>
      </div>
    )
  }
}

export default SpeechRecognition({autoStart: false})(Dictaphone)
