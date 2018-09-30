import constants from './../constants';
const { initialState, c } = constants;

const commentEmailReducer = (state = initialState.email, action) => {

  switch (action.type) {

  default:
    return state;

  case c.SAVE_EMAIL:
    return action.translation;
  }

};

export default commentEmailReducer;
