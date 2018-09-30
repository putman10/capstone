import constants from './../constants';
const { initialState, c } = constants;

const commentFeedbackReducer = (state = initialState.feedback, action) => {

  switch (action.type) {

  default:
    return state;

  case c.SAVE_FEEDBACK:
    return action.translation;
  }

};

export default commentFeedbackReducer;
