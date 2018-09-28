import constants from './../constants';
const { initialState, types } = constants;

const themeReducer = (state = initialState.theme, action) => {
  let newThemeState;

  switch (action.type) {

  default:
    return state;

  case types.CHOOSE_THEME:
    newThemeState = action.theme;
    return newThemeState;
  }
};

export default themeReducer;
