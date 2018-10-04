import constants from './../constants';
const { initialState, c } = constants;

const theaterReducer = (state = initialState.theaters, action) => {
  let newState = null;
  let index = null;

  switch (action.type) {

  default:
    return state;

  case c.RECEIVE_THEATER:
    newState = Object.assign({}, state);
    newState[action.theaters.id] = action.theaters;
    return newState;
  }



};

export default theaterReducer;
