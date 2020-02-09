const Department = require('../models/department')

module.exports.list = (req, res) => {
    Department.find()
        .then(dep => {
            res.json(dep)
        })
        .catch(err => {
            res.json(err)
        })
}

module.exports.show = (req, res) => {
    const id = req.params.id
    Department.findById(id)
        .then(customer => {
            if(customer) {
                res.json(customer)
            } else {
                res.json({})
            }
        })
        .catch(err => {
            res.json(err)
        })
}

module.exports.create = (req, res) => {
    const body = req.body
    const department = new Department(body)
    department.save()
        .then(dep => {
            res.json(dep)
        })
        .catch(err => {
            res.json(err)
        })
}

module.exports.update = (req, res) => {
    const body = req.body 
    const id = req.params.id
    Department.findByIdAndUpdate(id, body, {new: true, runValidators: true})
        .then(dep => {
            if(dep){
                res.json(dep)
            } else {
                res.json(dep)
            }
        })
        .catch(err => {
            res.json(err)
        })
}

module.exports.destroy = (req, res) => {
    const id = req.params.id
    Department.findByIdAndDelete(id)
        .then(dep => {
            if(dep){
                res.json(dep)
            } else {
                res.json({})
            }
        })
        .catch(err => {
            res.json(err)
        })
}