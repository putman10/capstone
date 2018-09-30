import constants from './../constants';
const { initialState, types } = constants;

const commentFeedbackReducer = (state = initialState.feedback, action) => {
  let newSearchText;
  let newSearchStateSlice;

  switch (action.type) {

  default:
    return state;

  case types.SAVE_FEEDBACK:
    return action.translation;
  }

};

export default commentFeedbackReducer;
