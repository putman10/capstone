import { combineReducers } from 'redux';
import latLongReducer from './latLongReducer';

const rootReducer = combineReducers({
  theaters: latLongReducer
});

export default rootReducer;
