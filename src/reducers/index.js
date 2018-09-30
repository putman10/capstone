import { combineReducers } from 'redux';
import voiceSearchReducer from './voiceSearchReducer';
import commentVoiceReducer from './commentVoiceReducer';
import menuReducer from './menuReducer';
import themeReducer from './themeReducer';

const rootReducer = combineReducers({
  voiceSearch: voiceSearchReducer,
  name: commentVoiceReducer,
  menu: menuReducer,
  theme: themeReducer
});

export default rootReducer;
