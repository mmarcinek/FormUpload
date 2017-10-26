class JobsModel { 
  constructor(job_id, uploaded, company){
    this.job_id = job_id;
    this.company = company;
    this.uploaded = uploaded || false;
    this.created_at = new Date();
    this.updated_at = new Date();
  }
}

module.exports = JobsModel