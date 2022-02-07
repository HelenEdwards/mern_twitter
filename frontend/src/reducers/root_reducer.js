import { combineReducers } from 'redux';
import session from './session_reducer';
import SessionErrorsReducer from './session_errors_reducer';
import TweetsReducer from './tweet_reducer';

const RootReducer = combineReducers({
  session,
  SessionErrorsReducer, 
  TweetsReducer
});

export default RootReducer;