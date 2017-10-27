// import realm from './realm';
// import { ListView } from 'realm/react-native';


// // Job Table Methods
// export const getJobTables = () => {
//     const jobTables = JobTable.get().sorted('createdAt', true)
//     return jobTables
//   }
//   // Retrieve a single jobTable item
//   export const getJobTable = (job_id) => {
//     const jobTable = realm.objectForPrimaryKey(Job, job_id)
//     return jobTable
//   }
//   // Update job. todoItem parameter must be of Realm.Object
//   export const updateJobTable = (job, properties) => {
//     realm.write(() => {
//       try {
//         job.properties = properties
//       } catch (e) {
//         console.warn(e)
//       }
//     })
//   }
//   // Creates a new Job
//   export const createJobTable = () => {
//     realm.write(() => {
//       realm.create(Job.schema.name, {
//         table_id: uuid.v1(),
//         properties,
//         createdAt: new Date()
//       })
//     })
//   }
//   // Deletes a job Item. tjob parameter must be Realm.Object
//   export const deleteJobTable = (jobTable) => {
//     realm.write(() => {
//       realm.delete(jobTable)
//     })
//   }
  
//   export const jobTableDS = new ListView.DataSource({rowHasChanged: (r1, r2) => r1.table_id !== r2.table_id})