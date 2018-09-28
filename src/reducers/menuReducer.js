import constants from './../constants';
const { initialState, types } = constants;

const menuReducer = (state = initialState.menu, action) => {
  let newMenuState;

  switch (action.type) {

  default:
    return state;

  case types.CLOSE_MENU:
    newMenuState = action.status;
    return newMenuState;
  }
};

export default menuReducer;
