import { combineReducers } from 'redux';
import voiceSearchReducer from './voiceSearchReducer';
import menuReducer from './menuReducer';

const rootReducer = combineReducers({
  voiceSearch: voiceSearchReducer,
  menu: menuReducer
});

export default rootReducer;
