const express = require('express')
const jobsLogic = require('../logic/jobs-logic')
const router = express.Router()


router.get('/', async (req, res, next) => {
    try {
        const jobs = await jobsLogic.getAllJobs()
        res.json(jobs)

    }
    catch (error) {
        return next(error);

    }

})

//register jobs
router.post('/', async (req, res, next) => {
    try {
        const jobDetails = req.body;
        console.log(jobDetails);
        const id = await jobsLogic.registerJob(jobDetails)
        res.json(id)

    }
    catch (error) {
        return next(error);

    }
})




router.delete('/', async (req, res, next) => {
    const jobToDelete = req.body
    console.log(jobToDelete);

    try {
        await jobsLogic.deleteJob(jobToDelete)
        res.status(200).json(`job is deleted `)
    }
    catch (error) {
        return next(error);
    }
})


module.exports = router