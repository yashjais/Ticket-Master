const express = require('express')
const app = express()
const cors = require ('cors')

const port = 3015

const setUPDB = require('./config/database')
const router = require('./config/routes')

app.use(express.json())
app.use(cors())

setUPDB()

app.get('/', (req, res) => {
    res.json({
        notice: 'welcome to the website'
    })
})

app.use('/', router)

app.listen(port, () => {
    console.log('listening on port', port)
})