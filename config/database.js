const mongoose = require('mongoose')

setUpDB = () => {
    mongoose.connect('mongodb://localhost:27017/oct-ticket-master', { useNewUrlParser: true , useUnifiedTopology: true })
        .then(res => {
            console.log('connected to db')
        })
        .catch(err => {
            console.log(err)
        })
}
 
module.exports = setUpDB