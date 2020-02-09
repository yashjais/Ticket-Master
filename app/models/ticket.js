const mongoose = require('mongoose')
// const ticketEmail = require('../middlewares/ticketEmail')

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

    // employees: {
    //     type: [Schema.Types.ObjectId],
    //     required: true, 
    //     ref: 'Employee' 
    // },

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

// first pre will be called and then the save() will be called and then post() will be called.
// Calling pre() or post() after compiling a model does not work in Mongoose in general, so call pre() and post(), before compiling the model.
// both methods are called after only validation of the given input.

ticketSchema.pre('save', function(next) {
    const ticket = this
    if(ticket.isNew) {
    console.log('in the pre hook', ticket)
    console.log('its new')
    // how do i write access that middleware here
    }

    // const req = {}
    // req.body = ticket
    // ticketEmail(req, res, next)
    next() // we have to call next here, if we don't next code will not execute here
});

// ticketSchema.post('save', ticketEmail, function(ticket) {
//     console.log('in the post hook', ticket)
//     // next() // no need of calling the next, the code will automatically go to the next function(in this case it is - saving the document)
// });

const Ticket = mongoose.model('Ticket', ticketSchema)

module.exports = Ticket