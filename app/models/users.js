const mongoose = require('mongoose')
const Schema = mongoose.Schema
const validator = require('validator')
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: function(value) {
                return validator.isEmail(value)
            },
            error: function(err) {
                return 'email format is not valid'
            }
        }
    },
    mobile: {
        type: String,
        required: true,
        unique: true,
        minlength: 10,
        maxlength: 10
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
        maxlength: 128
    },
    tokens: [
        {
            token: {
                type: String
            },
            createdAt: {
                type: Date,
                default: Date.now
            }
        }
    ]
})

userSchema.statics.findByCredentials = function(data, password) {
    const User = this
    let obj
    if(validator.isEmail(data)) {
        obj = {email : data}
    } else if(validator.isNumeric(data)) {
        obj = {mobile: data}
    } else {
        return Promise.reject('invalid format')
    }
    return User.findOne(obj)
            .then(function(user) {
                if(!user) {
                    return Promise.reject('invalid email/mobile')
                } else {
                    return bcryptjs.compare(password, user.password)
                        .then(function(result) {
                            if(result) {
                                return Promise.resolve(user)
                            } else {
                                return Promise.reject('invalid password')
                            }
                        })
                        .catch(function(err) {
                            return Promise.reject(err)
                        })
                }
            })
            .catch(function(err) {
                return Promise.reject(err)
            })
}

userSchema.methods.generateToken = function() {
    const user = this
    const tokenData = {
        _id: user._id,
        username: user.username,
        createdAt: Number(new Date()),
        exp: 60
    }
    const token = jwt.sign(tokenData, 'jwt@123')
    user.tokens.push({token})
    return user.save()
            .then(user => {
                return Promise.resolve(user)
            })
            .catch(err => {
                return Promise.reject(err)
            })
}

userSchema.pre('save', function(next) {
    const user = this
    if(user.isNew) {
        bcryptjs.genSalt(10)
            .then(salt => {
                bcryptjs.hash(user.password, salt)
                    .then(enPass => {
                        user.password = enPass
                        next()
                    })
            })
            .catch(err => Promise.reject(err))
    } else {
        next()
    }
})

const User = mongoose.model('User', userSchema)

module.exports = User