const mongoose = require('mongoose')
const Schema = mongoose.Schema
const validator = require('validator')

mongoose.set('useCreateIndex', true)

const customerSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true, 
        required: true,
        validate: {
            validator: function(value) {
                return validator.isEmail(value)
            },
            message: function() {
                return 'email format is invalid'
            }
        }
    },
    mobile: {
        type: String,
        required: true,
        minlength: 10,
        maxlength: 10,
        validate: {
            validator: function(value) {
                return validator.isNumeric(value)
            },
            message: function() {
                return 'mobile number format is invalid'
            }
        }
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

const Customer = mongoose.model('Customer', customerSchema)
module.exports = Customer