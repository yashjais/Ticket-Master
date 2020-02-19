const mongoose = require('mongoose')

const Schema = mongoose.Schema

const ticketSchema = new Schema({
    code: {
        type: String,
        required: true,
        minlength: 3
    },
    priority: {
        type: String,
        required: true,
        enum: ['high', 'medium', 'low']
    },
    message: {
        type: String,
        required: true,
        minlength: 2
    },
    customer: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Customer'
    },
    department: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Department'
    },

    employees: { type: [Schema.Types.ObjectId], ref: 'Employee' },

    isResolved: {
        type: Boolean,
        required: true,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

const Ticket = mongoose.model('Ticket', ticketSchema)

module.exports = Ticket