import { combineReducers } from 'redux';
import voiceSearchReducer from './voiceSearchReducer';

const rootReducer = combineReducers({
  voiceSearch: voiceSearchReducer
});

export default rootReducer;
