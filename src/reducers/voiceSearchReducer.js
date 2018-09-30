import constants from './../constants';
const { initialState, c } = constants;

const voiceSearchReducer = (state = initialState.search, action) => {
  let newSearchText;
  let newSearchStateSlice;

  switch (action.type) {

  default:
    return state;

  case c.SAVE_VOICESEARCH:
    newSearchText = action.translation;
    newSearchStateSlice = Object.assign({}, state, {
      search: newSearchText
    });
    return newSearchStateSlice;

  }
};

export default voiceSearchReducer;
