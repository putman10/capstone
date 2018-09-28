import * as types from './../constants/ActionTypes';

export function logInput() {
  return function(){
  };
}

export function updateVoiceSearch(translation){
  return function(dispatch){
    dispatch(voiceSearch(translation));
  };
}

export const voiceSearch = (translation) => ({
  type: types.SAVE_VOICESEARCH,
  translation
});

export const requestLatLong = (zip, localSearchId) => ({
  type: types.REQUEST_LATLONG,
  zip,
  searchId: localSearchId
});
