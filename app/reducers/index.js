import { combineReducers } from 'redux';
import * as jobsReducer from './jobs';

export default combineReducers(Object.assign(
  jobsReducer
));