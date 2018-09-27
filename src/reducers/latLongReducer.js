import constants from './../constants';
const { initialState, types } = constants;

const latLongReducer = (state = initialState, action) => {
  let newSearchResultByZip;
  let newSearchResultByZipStateSlice;

  switch (action.type) {
  case types.REQUEST_LATLONG:
    newSearchResultByZip = {
      isFetching: true,
      zip: action.zip,
      searchId: action.searchId
    };
    newSearchResultByZipStateSlice = Object.assign({}, state, {
      1: newSearchResultByZip
    });
    return newSearchResultByZipStateSlice;

  default:
    return state;

  }
};

export default latLongReducer;
