import createReducer from '../lib/createReducer';
import * as types from '../actions/types';

export const jobItems = createReducer({}, {
  [types.SET_JOB_TABLE](state, action){

  }
});

export const jobList = createReducer({}, {
  [types.SET_JOB_LIST](state, action){
    
  }
})

export const counter = createReducer(0, {
  [types.COUNTER](state, action){
    return state + 1;
  }
})  