const mongoose = require('mongoose')
const Schema = mongoose.Schema

const employeeSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
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
    department: {
        type: Schema.Types.ObjectId,
        ref: 'Department',
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

const Employee = mongoose.model('Employee', employeeSchema)

module.exports = Employee