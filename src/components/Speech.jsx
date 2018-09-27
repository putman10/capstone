import React, {Component } from 'react'
import SpeechRecognition from 'react-speech-recognition'

class Dictaphone extends Component {
  render() {
    const { transcript, resetTranscript, browserSupportsSpeechRecognition } = this.props

    if (!browserSupportsSpeechRecognition) {
      return null
    }
    console.log(transcript);
    return (
      <div>
        <button onClick={resetTranscript}>Reset</button>
        <span>{transcript}</span>
      </div>
    )
  }
}

export default SpeechRecognition(Dictaphone)
