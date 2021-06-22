const jobsDao = require('../dao/jobs-dao')


async function getAllJobs() {
    const jobs = await jobsDao.getAllJobs()
    return (jobs)
}

async function registerJob(jobDetails) {
    const id = await jobsDao.registerJob(jobDetails)
    return id
}

async function deleteJob(jobToDelete) {
    await jobsDao.deleteJob(jobToDelete.id);

}

module.exports = { registerJob, deleteJob, getAllJobs }

