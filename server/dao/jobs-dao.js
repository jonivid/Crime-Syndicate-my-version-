const connection = require('./connection-wrapper')
let ServerError = require("../errors/server-error");
let ErrorType = require("../errors/error-type");

async function getAllJobs() {
    let sql = `SELECT * from jobs`
    const jobs = await connection.execute(sql)
    return jobs

}

async function registerJob(jobRegistrationDetails) {
    let sql = `INSERT INTO jobs (name, date) VALUES(?,?);`
    let parameters = [jobRegistrationDetails.name, jobRegistrationDetails.date]
    try {
        let jobRegistrationResult = await connection.executeWithParameters(sql, parameters)
        return jobRegistrationResult.insertId;
    }
    catch (err) {
        throw new ServerError(ErrorType.GENERAL_ERROR, sql, err);
    }
}

async function deleteJob(id) {
    let sql = `DELETE from jobs where id=?`
    let parameters = [id];
    await connection.executeWithParameters(sql, parameters)
}

// async function isUserNameExist(userName) {
//     // console.log(userName.userName);
//     let sql = `SELECT user_name from users where user_name=?`
//     parameters = [userName.userName]
//     const userExistResult = await connection.executeWithParameters(
//         sql,
//         parameters
//     );

// console.log('userExistResult: ' + userExistResult);

//     if (userExistResult == null || userExistResult.length === 0) {
//         console.log('doesnt exist');
//         return false;
//     }
//     console.log('exist');

//     return true;


// }

module.exports = { registerJob, deleteJob, getAllJobs }