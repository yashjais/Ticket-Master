const express = require('express')
const app = express()

const port = 3015

const setUPDB = require('./config/database')
const router = require('./config/routes')

app.use(express.json())

/* 
const express = require("express");
app = express();

const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
*/


setUPDB()
/*
const bodyParser = require('body-parser'); 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))
 */


app.get('/', (req, res) => {
    // res.send('welcome to the website')
    res.json({
        notice: 'welcome to the website'
    })
})

app.use('/', router)

app.listen(port, () => {
    console.log('listening on port', port)
})