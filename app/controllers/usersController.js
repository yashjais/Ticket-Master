const User = require('../models/users')
const validator = require('validator')

module.exports.register = (req, res) => {
    const body = req.body
    const user = new User(body)
    user.save()
        .then(user => res.send(user))
        .catch(err => res.send(err))
}

module.exports.login = (req, res) => {
    const body = req.body
    // let data
    // if(body.email && validator.isEmail(body.email)) {
    //     data = email
    // } else if(body.mobile && validator.isNumeric(body.mobile)) {
    //     data = mobile
    // } else {
    //     res.send('format is not correct')
    // }
    // console.log('executing after code')
    //else {
        User.findByCredentials(body.email || body.mobile, body.password)
            .then(user => {
                user.generateToken()
                    .then(user => res.send(user))
                    .catch(err =>  res.send(err))
            })
            .catch(err => res.send(err))
    // }
}