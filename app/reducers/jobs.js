import createReducer from '../lib/createReducer';
import * as types from '../actions/types';

export const jobCreate = createReducer(
  {}, {}
);

export const counter = createReducer(0, {
  [types.COUNTER](state, action){
    return state + 1;
  }
})