import { combineReducers } from 'redux';
import voiceSearchReducer from './voiceSearchReducer';
import commentNameReducer from './commentNameReducer';
import commentEmailReducer from './commentEmailReducer';
import commentFeedbackReducer from './commentFeedbackReducer';
import menuReducer from './menuReducer';
import themeReducer from './themeReducer';
import feedbackReducer from './feedbackReducer';
import theaterReducer from './theaterReducer';

const rootReducer = combineReducers({
  voiceSearch: voiceSearchReducer,
  name: commentNameReducer,
  email: commentEmailReducer,
  feedback: commentFeedbackReducer,
  menu: menuReducer,
  theme: themeReducer,
  comments: feedbackReducer,
  theaters: theaterReducer
});

export default rootReducer;
