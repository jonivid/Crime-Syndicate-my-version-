const express = require('express')
const soldiersLogic = require('../logic/soldiers-logic')
const router = express.Router()




//get all soldiers
router.get('/', async (req, res, next) => {
    try {
        const soldiers = await soldiersLogic.getAllSoldiers()
        res.json(soldiers)

    }
    catch (error) {
        return next(error);

    }

})
//get all soldier jobs

router.get("/:soldierId", async (req, res, next) => {
    try {

        const soldierId = req.params.soldierId
        const result = await soldiersLogic.getAllsoldierJobs(soldierId);
        res.json(result);
    }
    catch (error) {
        return next(error);

    }
})

//register soldiers
router.post('/', async (req, res, next) => {
    try {
        const soldierDetails = req.body;
        const id = await soldiersLogic.registerSoldier(soldierDetails)
        res.json(id)

    }
    catch (error) {
        return next(error);

    }
})




router.delete('/:id', async (req, res, next) => {
    const soldierToDelete = +req.body.id
    console.log(soldierToDelete);

    try {
        await soldierLogic.deleteSoldier(soldierToDelete)
        res.status(200).json(`soldiers is deleted `)
    }
    catch (error) {
        return next(error);
    }
})


module.exports = router