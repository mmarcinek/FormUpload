import createReducer from '../lib/createReducer';
import * as types from '../actions/types';

const DEFAULT_STATE = {}

export default (state = DEFAULT_STATE, {type, payload} = {}) => {
  switch (type) {
    case 'JOB_ITEM_ADDED':
    case 'JOB_ITEM_DELETED':
      return {...state, lastModified: Date.now()}
    default:
      return state
  }
}

// export const jobItems = createReducer({}, {
//   [types.SET_JOB_TABLE](state, action){

//   }
// });

// export const jobList = createReducer({}, {
//   [types.SET_JOB_LIST](state, action){

//   }
// })

// export const counter = createReducer(0, {
//   [types.COUNTER](state, action){
//     return state + 1;
//   }
// })  