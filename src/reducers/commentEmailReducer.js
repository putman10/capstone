import constants from './../constants';
const { initialState, types } = constants;

const commentEmailReducer = (state = initialState.email, action) => {
  let newSearchText;
  let newSearchStateSlice;

  switch (action.type) {

  default:
    return state;

  case types.SAVE_EMAIL:
    return action.translation;
  }

};

export default commentEmailReducer;
