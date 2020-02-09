const nodemailer = require('nodemailer')
const Customer = require('../models/customer')

const ticketEmail = (req, res, next) => {
    /*
        Here we are configuring our SMTP Server details.
        STMP is mail server which is responsible for sending and recieving email.
    */
    const ticket = req.body
    const smtpTransport = nodemailer.createTransport({
        service: "gmail",
        host: "smtp.gmail.com",
        auth: {
            user: "yashj.cul@gmail.com",
            pass: "fpthqoikbfqdtazm"
        }
    })
    /*------------------SMTP Over-----------------------------*/
    const id = ticket.customer
    Customer.findById(id)
        .then(user => {
            let mailOptions
            if(ticket.isResolved){
                // when the ticket got resolved
                mailOptions = {
                    to : user.email,
                    subject : 'ticket-Resolved',
                    text : `Your ticket (${ticket.code}) has been Resolved.`
                }
            } else {
                mailOptions = {
                    to : user.email,
                    subject : 'ticket-generation',
                    text : `Your ticket (${ticket.code}) has been generated. Message - ${ticket.message}`
                }
            }
            
            console.log(mailOptions)
            // smtpTransport.sendMail(mailOptions, function(error, response){
            //     if(error){
            //         console.log(error)
            //     }else{
            //         console.log("Message sent: " + response.message)
            //     }
            // })
            console.log('code got invoked in the middleware', req.body)
            next()
        })
        .catch(err => {
            console.log(err)
        })

}

module.exports = ticketEmail