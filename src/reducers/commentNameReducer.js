import constants from './../constants';
const { initialState, c } = constants;

const commentNameReducer = (state = initialState.name, action) => {

  switch (action.type) {

  default:
    return state;

  case c.SAVE_NAME:
    return action.translation;
  }

};

export default commentNameReducer;
