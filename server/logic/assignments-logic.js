const assignmentsDao = require("../dao/assignments-dao");

const getAllJobSoldiers = async (jobId) => {
    const result = await assignmentsDao.getAllJobSoldiers(jobId);
    return result;
};

const taskingSoldierToJob = async (taskSoldierToJobDetails) => {
    const result = await assignmentsDao.taskingSoldierToJob(taskSoldierToJobDetails);
    return result;
};
const deleteSoldierFromJob = async (deleteSoldierFromJobDetails) => {
    const result = await assignmentsDao.deleteSoldierFromJob(deleteSoldierFromJobDetails);
    return result;
};


module.exports = { getAllJobSoldiers, taskingSoldierToJob,deleteSoldierFromJob };