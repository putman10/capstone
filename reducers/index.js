import { combineReducers } from 'redux';
import latLongReducer from './latLongReducer';
import logReducer from './logReducer';

const rootReducer = combineReducers({
  search: latLongReducer,
  savedSearch: logReducer
});

export default rootReducer;
