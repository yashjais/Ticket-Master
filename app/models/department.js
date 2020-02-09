const mongoose = require('mongoose')
const Schema = mongoose.Schema

const departmentSchema = new Schema({
    name: {
        type: String,
        required: true,
        minlength: 3
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

const Departmemt = mongoose.model('Department', departmentSchema)
module.exports = Departmemt