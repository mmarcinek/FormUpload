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

export const createJob = (job) => {
  store.createJob(job)
  return {
    type: type.JOB_ADDED
  }
}

export const deleteJob = (job_id) => {
  store.deleteJob(job_id)
  return {
    type: type.JOB_DELETED
  }
}