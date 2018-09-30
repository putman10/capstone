import * as types from './../constants/ActionTypes';

export function logInput(input) {
  return function(dispatch){
    dispatch(voiceSearch(input));
  };
}

export function updateVoiceSearch(translation){
  return function(dispatch){
    dispatch(voiceSearch(translation));
  };
}

export function updateNameComment(translation){
  return function(dispatch){
    dispatch(nameComment(translation));
  };
}

export function closeMenu(status){
  return function(dispatch){
    dispatch(menuToggle(status));
  };
}

export function chooseTheme(theme){
  return function(dispatch){
    dispatch(themeToggle(theme));
  };
}

export const voiceSearch = (translation) => ({
  type: types.SAVE_VOICESEARCH,
  translation
});

export const nameComment = (translation) => ({
  type: types.SAVE_NAME,
  translation
});

export const requestLatLong = (zip, localSearchId) => ({
  type: types.REQUEST_LATLONG,
  zip,
  searchId: localSearchId
});

export const menuToggle = (status) => ({
  type: types.CLOSE_MENU,
  status
});

export const themeToggle = (theme) => ({
  type: types.CHOOSE_THEME,
  theme
});
