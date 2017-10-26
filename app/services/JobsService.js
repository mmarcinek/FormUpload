import Realm from 'realm';
import JobsModel from '../models/JobsModel';

let repository = new Realm({
  schema:[{
    name: 'Jobs',
    primaryKey: 'job_id',
    properties: {
     job_id: {type: 'string', indexed: true },
     company: 'string',
     uploaded: 'bool',
     createdAt: 'date',
     updatedAt: 'date' 
    }
  }]
});

let JobsService = {
  findAll: function(sortBy){
    if(!sortBy) sortBy = [['uploaded', false], ['createdAt', true]];
    return repository.objects('Jobs'.sorted(sortBy));
  },
  save: function(job){
    repository.write(() => {
      job.updatedAt = new Date();
      repository.create('Jobs', job);
    })
  },
  update: function(job, callback){
    if(!callback) return;
    repository.write(()=> {
      callback();
      job.updatedAt = new Date();
    })
  }
};

module.exports = JobsService;

