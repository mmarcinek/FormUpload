import * as types from './types'

export function setJobList({jobList}){
  return {
    type: types.SET_JOB_LIST,
    jobList
  }
}

export function setJobsItems({jobItems}) {
  return {
    type: types.SET_JOB_TABLE,
    jobItems
  }
}

export function count(){
  return {
    type: types.COUNTER,
  }
}