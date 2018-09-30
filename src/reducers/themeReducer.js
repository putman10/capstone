import constants from './../constants';
const { initialState, c } = constants;

const themeReducer = (state = initialState.theme, action) => {

  switch (action.type) {

  default:
    return state;

  case c.CHOOSE_THEME:
    return action.theme;
  }
};

export default themeReducer;
