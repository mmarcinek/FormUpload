// import realm from './realm';
// import { ListView } from 'realm/react-native';


// // Retrieves all job list items in sorted(reversed) order
// export const getJobList = () => {
//     const jobs = realm.objects('Job')
//     return jobs
//   }
//   // Retrieve a single job item
//   export const getJob = (job_id) => {
//     const job = realm.objectForPrimaryKey(Job, job_id)
//     return job
//   }
//   // Update job. job parameter must be of Realm.Object
//   export const updateJob = (job, properties) => {
//     realm.write(() => {
//       try {
//         job.properties = properties
//       } catch (e) {
//         console.warn(e)
//       }
//     })
//   }
//   // Creates a new Job
//   export const createJob = (job_id) => {
//     realm.write(() => {
//       realm.create(Job.schema.name, {
//         job_id: job_id,
//         properties,
//         createdAt: new Date()
//       })
//     })
//   }
  
//   export const jobDS = new ListView.DataSource({rowHasChanged: (r1, r2) => r1.job_id !== r2.job_id})
  
//   // Deletes a job Item. tjob parameter must be Realm.Object
//   export const deleteJob = (job) => {
//     realm.write(() => {
//       realm.delete(job)
//     })
//   }
  