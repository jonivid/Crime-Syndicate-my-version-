const express = require('express')
const cors = require('cors')
const server = express()
const soldiersController = require('./controllers/soldiers-controller')
const jobsController = require('./controllers/jobs-controller')
const assignmentsController = require('./controllers/assignments-controller')

server.use(cors({ origin: 'http://localhost:3000' }))
server.use(express.json())


server.use('/soldiers', soldiersController)
server.use('/jobs', jobsController)
server.use('/assignments', assignmentsController)

server.listen(3001, () => console.log('port 3001 is running'))
