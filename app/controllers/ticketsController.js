const Ticket = require('../models/ticket')
// const ticketEmail = require('../app/middlewares/ticketEmail')


module.exports.list = (req, res) => {
    Ticket.find().populate('customer',['_id','name']).populate('department',['_id','name']).populate({path: 'employees', model: 'Employee'}) //.populate('employees', { path: 'employees._id', model: 'employees'}) // , { path: 'employees._id', model: 'employees'}) // .populate({ path : 'employees', populate: { path: 'employees._id' }})  // .populate('employees._id')  // .populate({path: 'employees', model: 'Employee'})  // .populate({ path : 'userId', populate : { path : 'reviewId' }}) // , model: 'Weapon' }
        .then(tic => { 
            res.json(tic)
        })
        .catch(err => {
            res.json(err)
        })
}

module.exports.create = (req, res) => {
    const body = req.body
    const ticket = new Ticket(body)
    ticket.save()
        .then(ticket => {
            // ticketEmail(req.body = ticket)
            console.log('ticket being saved')
            // req.body = ticket
            // res.json(ticket)
            res.send(ticket)
            // next()
        })
        .catch(err => {
            res.json(err)
        })
}

module.exports.show = (req, res) => {
    const id = req.params.id
    Ticket.findById(id).populate('customer',['_id','name']).populate('department',['_id','name']).populate('employee')
        .then(tic => {
            if(tic) {
                res.json(tic)
            } else {
                res.json({})
            }
        })
        .catch(err => {
            res.json(err)
        })
}

module.exports.update = (req, res) => {
    const id = req.params.id
    const body = req.body
    Ticket.findByIdAndUpdate(id, body, {new: true, runValidators: true})
        .then(ticket => {
            if(ticket) {
                // ticketEmail(req.body = ticket)
                console.log('code is in the update', req.body)
                //req.body = ticket
                // res.json(ticket)
                res.send(ticket)
                // next()
            } else {
                res.json(ticket)
            }
        })
        .catch(err => {
            res.json(err)
        })
}

module.exports.destroy = (req, res) => {
    const id = req.params.id
    Ticket.findByIdAndDelete(id) 
        .then(tic => {
            if(tic) {
                res.json(tic)
            } else {
                res.json({})
            }
        })
        .catch(err => {
            res.json(err)
        })
}