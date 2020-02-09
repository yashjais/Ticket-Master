const Customer = require('../models/customer')
const Ticket = require('../models/ticket')

module.exports.list = (req, res) => {
    Customer.find()
        .then(respose => {
            res.json(respose)
        })
        .catch(err => {
            res.json(err)
        })
}

module.exports.show = (req, res) => {
    const id = req.params.id
    const promise = []
    promise.push(Customer.findById(id))
    promise.push(Ticket.find({'customer' : id}))
    Promise.all(promise)
        .then(response => {
            const obj = {}
            console.log(response)
            obj.customer = response[0]
            obj.tickets = response[1]
            res.json(obj)
        }) 
        .catch(err => {
            console.log(err)
        })
    // Customer.findById(id)
    //     .then(customer => {
    //         if(customer) {
    //             console.log('code is here', customer)
    //             res.json(customer)
    //         } else {
    //             res.json({})
    //         }
    //     })
    //     .catch(err => {
    //         res.json(err)
    //     })
}

module.exports.create = (req, res) => {
    const body = req.body
    const customer = new Customer(body)
    customer.save()
        .then(customer => {
            console.log('code is in if save()')
            res.json(customer)
        })
        .catch(err => {
            console.log('code is in save()')
            res.json(err)
        })
}

module.exports.update = (req, res) => {
    const body = req.body
    const id = req.params.id
    Customer.findByIdAndUpdate(id, body, {new: true, runValidators: true})
        .then(customer => {
            if(customer) {
                res.json(customer)
            } else {
                res.json({})
            }
        })
        .catch (err => {
            res.json(err)
        })
}

module.exports.destroy = (req, res) => {
    const id = req.params.id
    Customer.findByIdAndDelete(id)
        .then(customer => {
            if(customer) {
                res.json(customer)
            } else {
                res.json(customer)
            }
        })
        .catch(err => {
            res.json(err)
        })
}