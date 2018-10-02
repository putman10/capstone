import constants from './../constants';
const { initialState, c } = constants;

const feedbackReducer = (state = initialState.feedback, action) => {
  let newState = null;

  switch (action.type) {

  default:
    return state;

  case c.RECEIVE_FEEDBACK:
    newState = Object.assign({}, state);
    newState[action.feedback.id] = action.feedback;
    return newState;

  case c.UPDATE_LOCALCOMMENTSSTATUS:
    newState = Object.assign({}, state);
    newState[action.id].status = "Read";
    return newState;

  }



};

export default feedbackReducer;
