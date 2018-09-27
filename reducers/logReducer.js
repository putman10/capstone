import constants from './../constants';
const { initialState, types } = constants;
import { v4 } from 'uuid';

const logReducer = (state = initialState.savedSearches, action) => {
  let newSearchResultByZip;
  let newSearchResultByZipStateSlice;

  switch (action.type) {
    case types.LOG_STOLENBIKESSEARCH:
      newSearchResultByZip = {
        city: action.city,
        zip: action.zip,
        searchId: action.searchId,
        lat: action.lat,
        lng: action.lng,
        stolenBikes: action.stolenBikes,
        receivedAt: action.receivedAt
      };
      let id = action.searchId;
      newSearchResultByZipStateSlice = Object.assign({}, state, {
        [id]: newSearchResultByZip
      });
      return newSearchResultByZipStateSlice;
  default:
    return state;
  };
};

export default logReducer;
