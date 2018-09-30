import React from 'react';
import './styles/Logo.css';
import './styles/Typist.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Typist from 'react-typist';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Logo(props){

  return (
    <div id="logo" className={'header-' + props.theme}>
      <Typist cursor={{ hideWhenDone: true, blink: true, hideWhenDoneDelay: 2000 }} startDelay={1000}>
        <span className="gold"><FontAwesomeIcon icon="universal-access" alt="Access For All"/></span> ACCESS<span className="gold"> :</span> 4 <span className="gold">: </span><Typist.Delay ms={300} />SOME<Typist.Backspace count={4} delay={800} /><Typist.Delay ms={1000} />MOST<Typist.Backspace count={4} delay={800} /><Typist.Delay ms={1000} />ALL
      </Typist>
    </div>
  );
}

Logo.propTypes = {
  theme: PropTypes.string,
};


const mapStateToProps = state => {
  return {
    theme: state.theme
  };
};

export default connect(mapStateToProps)(Logo);
