const express = require('express')
const router = express.Router()
const assignmentsLogic = require('../logic/assignments-logic')

router.get("/:jobId", async (req, res, next) => {
    try {

        const jobId = req.params.jobId
        const result = await assignmentsLogic.getAllJobSoldiers(jobId);
        res.json(result);
    }
    catch (error) {
        return next(error);
    }
})

router.post("/", async (req, res, next) => {
    try {

        const taskSoldierToJobDetails = req.body;
        const result = await assignmentsLogic.taskingSoldierToJob(taskSoldierToJobDetails)
        res.json(result)
    }
    catch (error) {
        return next(error);
    }
})
router.delete("/", async (req, res, next) => {
    try {

        const deleteSoldierFromJobDetails = req.body;
        console.log(deleteSoldierFromJobDetails);
        const result = await assignmentsLogic.deleteSoldierFromJob(deleteSoldierFromJobDetails)
        res.json(result)
    }
    catch (error) {
        return next(error);
    }
})

module.exports = router;