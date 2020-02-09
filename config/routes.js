const express = require('express')
const router = express.Router()
const customerContoller = require('../app/controllers/customersController')
const departmentController = require('../app/controllers/departmentsController')
const employeeController = require('../app/controllers/employeesController')
const ticketController = require('../app/controllers/ticketsController')
const ticketEmail = require('../app/middlewares/ticketEmail')

router.get('/customers', customerContoller.list)
router.get('/customers/:id', customerContoller.show)
router.post('/customers', customerContoller.create)
router.put('/customers/:id', customerContoller.update)
router.delete('/customers/:id', customerContoller.destroy)

router.get('/departments', departmentController.list)
router.get('/departments/:id', departmentController.show)
router.post('/departments', departmentController.create)
router.put('/departments/:id', departmentController.update)
router.delete('/departments/:id', departmentController.destroy)

router.get('/employees', employeeController.list)
router.get('/employees/:id', employeeController.show)
router.post('/employees', employeeController.create)
router.put('/employees/:id', employeeController.update)
router.delete('/employees/:id', employeeController.destroy)

router.get('/tickets', ticketController.list)
router.get('/tickets/:id', ticketController.show)
router.post('/tickets', ticketController.create)
router.put('/tickets/:id', ticketEmail, ticketController.update)
router.delete('/tickets/:id', ticketController.destroy)

module.exports = router