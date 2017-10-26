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
      tables: 'jobTable[]' 
      }
    }
  } 

  class JobTable {
    static get() { return Realm.objects(JobTable.schema.name) }
    static schema = {
      name: 'jobTable',
      properties: {
        table: {type: 'linkingObjects', objectType: 'Job', property: 'tables'},
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

const jobs = new Realm({schema: [Job, JobTable]})
