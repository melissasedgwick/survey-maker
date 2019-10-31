import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import surveyReducer from './surveyReducer';
import userReducer from './userReducer';

export default combineReducers({
  surveys: surveyReducer,
  form: formReducer,
  users: userReducer
});
