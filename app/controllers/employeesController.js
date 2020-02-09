const Employee = require('../models/employee')

module.exports.list = (req, res) => {
    Employee.find().populate('department', ['_id', 'name'])
        .then(emp => {
            res.json(emp)
        })
        .catch(emp => {
            res.json(emp)
        })
}

module.exports.create = (req, res) => {
    const body = req.body
    const employee = new Employee(body)
    employee.save()
        .then(emp => {
            res.json(emp)
        })
        .catch(err => {
            res.json(err)
        })
}

module.exports.show = (req, res) => {
    const id = req.params.id
    Employee.findById(id).populate('department', ['_id', 'name'])
        .then(emp => {
            res.json(emp)
        })
        .catch(err => {
            res.json(err)
        })
}

module.exports.update = (req, res) => {
    const id = req.params.id
    const body = req.body
    Employee.findByIdAndUpdate(id, body, {new: true, runValidators: true})
        .then(emp => {
            if(emp) {
                res.json(emp)
            } else {
                res.json({})
            }
        })
        .catch(err => {
            res.json(err)
        })
}

module.exports.destroy = (req, res) => {
    const id = req.params.id
    Employee.findByIdAndDelete(id)
        .then(emp => {
            if(emp) {
                res.json(emp)
            } else {
                res.json(emp)
            }
        })
        .catch(err => {
            res.json(err)
        })
}