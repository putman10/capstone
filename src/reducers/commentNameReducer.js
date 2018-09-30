import constants from './../constants';
const { initialState, types } = constants;

const commentNameReducer = (state = initialState.name, action) => {
  let newSearchText;
  let newSearchStateSlice;

  switch (action.type) {

  default:
    return state;

  case types.SAVE_NAME:
    return action.translation;
  }

};

export default commentNameReducer;