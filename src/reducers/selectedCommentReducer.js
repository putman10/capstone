import constants from './../constants';
const { initialState, c } = constants;

const feedbackReducer = (state = initialState.selectedComment, action) => {
  let newState = null;

  switch (action.type) {

  default:
    return state;

  case c.SET_SELECTEDCOMMENT:
    newState = Object.assign({}, state);
    newState = action.comment;
    return newState;
  }
};

export default feedbackReducer;
