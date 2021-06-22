const connection = require('./connection-wrapper')
let ServerError = require("../errors/server-error");
let ErrorType = require("../errors/error-type");

async function getAllSoldiers() {
    let sql = `SELECT id, first_name as firstName, last_name as lastName from soldiers`
    const soldiers = await connection.execute(sql)
    return soldiers

}

const getAllSoldierJobs = async (soldierId) => {
    const sql = `select mission,date from jobs j inner join soldier_to_job sj on  sj.job_id=j.id  inner join soldiers s on s.soldier_id = sj.soldier_id where s.soldier_id =?`;
    const parameters = [soldierId]
    return await connection.executeWithParameters(sql, parameters);
};

async function registerSoldier(soldierRegistrationDetails) {
    let sql = `INSERT INTO soldiers (first_name, last_name)
    VALUES(?,?);`

    let parameters = [soldierRegistrationDetails.firstName, soldierRegistrationDetails.lastName]
    try {
        let soldierRegistrationResult = await connection.executeWithParameters(sql, parameters)
        return soldierRegistrationResult.insertId;
    }
    catch (err) {
        throw new ServerError(ErrorType.GENERAL_ERROR, sql, err);
    }
}

async function deleteSoldier(id) {
    let sql = `DELETE from soldiers where id=?`
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

module.exports = { registerSoldier, deleteSoldier, getAllSoldiers, getAllSoldierJobs }