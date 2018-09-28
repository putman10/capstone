import constants from './../constants';
const { initialState, types } = constants;

const voiceSearchReducer = (state = initialState.search, action) => {
  let newSearchText;
  let newSearchStateSlice;

  switch (action.type) {

  default:
    return state;

  case types.SAVE_VOICESEARCH:
    newSearchText = action.translation;
    newSearchStateSlice = Object.assign({}, state, {
      search: newSearchText
    });
    return newSearchStateSlice;

  }
};

export default voiceSearchReducer;
