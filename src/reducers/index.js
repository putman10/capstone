import { combineReducers } from 'redux';
import voiceSearchReducer from './voiceSearchReducer';
import menuReducer from './menuReducer';
import themeReducer from './themeReducer';

const rootReducer = combineReducers({
  voiceSearch: voiceSearchReducer,
  menu: menuReducer,
  theme: themeReducer
});

export default rootReducer;
