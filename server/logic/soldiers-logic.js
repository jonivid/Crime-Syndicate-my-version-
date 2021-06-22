const soldiersDao = require('../dao/soldiers-dao')



async function getAllSoldiers() {
    const soldiers = await soldiersDao.getAllSoldiers()
    return (soldiers)
}
async function getAllsoldierJobs(soldierId) {
    const soldierJobs = await soldiersDao.getAllSoldierJobs(soldierId)
    return (soldierJobs)
}

async function registerSoldier(soldierDetails) {
    const id = await soldiersDao.registerSoldier(soldierDetails)
    return id
}

async function deleteSoldier(sildierToDelete) {
    await soldiersDao.deleteSoldier(sildierToDelete.id);

}



module.exports = { registerSoldier, deleteSoldier, getAllSoldiers, getAllsoldierJobs }

