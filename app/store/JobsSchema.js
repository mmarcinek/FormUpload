import Realm from 'realm';

  class Job {
    static get() { return Realm.objects(Job.schema.name) }
    static schema = {
    name: 'Job',
      primaryKey: 'job_id',
      properties: {
      job_id: {type: 'string', indexed: true },
      uploaded: { type: 'bool' },
      company: {type: 'string' },
      address_1: {type: 'string'},
      address_2: {type: 'string'},
      city: { type:'string' },
      state: { type:'string' },
      zipcode: { type:'int' },
      createdAt: { type:'date' },
      updatedAt: { type:'date' },
      tables: 'JobTable[]' 
      }
    }
  } 

  class JobTable {
    static get() { return Realm.objects(JobTable.schema.name) }
    static schema = {
      name: 'JobTable',
      primaryKey: 'id',
      properties: {
        table: {type: 'linkingObjects', objectType: 'Job', property: 'tables'},
        id: { type: 'string'},
        sample_id: {type: 'string'},
        location: {type: 'string'},
        test_type: {type: ' string'},
        volume: {type: 'int'},
        area: {type: 'int' },
        TAT: {type: 'string'},
        RH: {type: 'float' },
        temp: {type: 'float' },
        notes: {type: 'string'}
      } 
    }
  }

const jobs = new Realm({schema: [Job, JobTable]});

// Retrieves all job list items in sorted(reversed) order
export const getJobList = () => {
  const jobs = Jobs.get().sorted('createdAt', true)
  return jobs
}
// Retrieve a single job item
export const getJob = (job_id) => {
  const job = realm.objectForPrimaryKey(Job, job_id)
  return job
}
// Update job. todoItem parameter must be of Realm.Object
export const updateJob = (job, properties) => {
  realm.write(() => {
    try {
      job.properties = properties
    } catch (e) {
      console.warn(e)
    }
  })
}
// Creates a new Job
export const createJob = (job_id) => {
  realm.write(() => {
    realm.create(Job.schema.name, {
      job_id: job_id,
      properties,
      createdAt: new Date()
    })
  })
}
// Deletes a job Item. tjob parameter must be Realm.Object
export const deleteTodoItem = (job) => {
  realm.write(() => {
    realm.delete(job)
  })
}

// Job Table Methods
export const getJobTables = () => {
  const jobTables = JobTables.get().sorted('createdAt', true)
  return jobTables
}
// Retrieve a single jobTable item
export const getJobTable = (job_id) => {
  const jobTable = realm.objectForPrimaryKey(Job, job_id)
  return jobTable
}
// Update job. todoItem parameter must be of Realm.Object
export const updateJob = (job, properties) => {
  realm.write(() => {
    try {
      job.properties = properties
    } catch (e) {
      console.warn(e)
    }
  })
}
// Creates a new Job
export const createJob = () => {
  realm.write(() => {
    realm.create(Job.schema.name, {
      job_id: uuid.v1(),
      properties,
      createdAt: new Date()
    })
  })
}
// Deletes a job Item. tjob parameter must be Realm.Object
export const deleteTodoItem = (jobTable) => {
  realm.write(() => {
    realm.delete(jobTable)
  })
}