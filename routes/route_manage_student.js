const route = require('express').Router()
const student = require('../models/student')
const auth_student = require('../midleware/auth_student')
const studentController = require('../controllers/manage_student')
route.get('/name',auth_student, studentController.list_all_student)

module.exports = route
