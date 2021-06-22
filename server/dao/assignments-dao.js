const connection = require('./connection-wrapper')
let ServerError = require("../errors/server-error");
let ErrorType = require("../errors/error-type");

const getAllJobSoldiers = async (jobId) => {
    console.log(jobId);
    const sql = `select first_name as firstName, last_name as lastName,soldier_id as soldierId, job_id as jobId,name,date  from soldiers s inner join assignments a on  a.soldier_id=s.id  inner join jobs  j on j.id = a.job_id where j.id=?`;
    // const sql = `select * from soldiers s inner join assignments a on  a.soldier_id=s.id  inner join jobs  j on j.id = a.job_id where j.id =?`;
    const parameters = [jobId]
    return await connection.executeWithParameters(sql, parameters);
};

const taskingSoldierToJob = async (soldierTask) => {
    const sql = `insert into assignments(soldier_id,job_id) values(?,?)`;
    const parameters = [soldierTask.soldierId, soldierTask.jobId];
    try {

        return await connection.executeWithParameters(sql, parameters);
    }
    catch (err) {
        throw new ServerError(ErrorType.GENERAL_ERROR, sql, err);
    }
};
const deleteSoldierFromJob = async (deleteSoldierFromJobDetails) => {
    const sql = `DELETE from assignments where soldier_id=? and job_id=?`;
    const parameters = [deleteSoldierFromJobDetails.soldierId, deleteSoldierFromJobDetails.jobId];
    await connection.executeWithParameters(sql, parameters);
    return getAllJobSoldiers(deleteSoldierFromJobDetails.jobId)
};


// async function isSoldierIdExist(soldierId) {
//     let sql = `select mission,date from jobs j inner join soldier_to_job sj on  sj.job_id=j.id  inner join soldiers s on s.soldier_id = sj.soldier_id where s.soldier_id =? and j.id=?`
//     parameters = [soldierId.soldier_Id]
//     const soldierExistResult = await connection.executeWithParameters(sql, parameters)
//     if (soldierExistResult == null || soldierExistResult.length === 0) {
//         console.log('doesnt exist');
//         return false;
//     }
//     console.log('exist');
//     return true;
// }




module.exports = { getAllJobSoldiers, taskingSoldierToJob, deleteSoldierFromJob };