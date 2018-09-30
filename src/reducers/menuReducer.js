import constants from './../constants';
const { initialState, c } = constants;

const menuReducer = (state = initialState.menu, action) => {

  switch (action.type) {

  default:
    return state;

  case c.CLOSE_MENU:
    return action.status;
  }
};

export default menuReducer;
