const auth_student = require('../midleware/auth_student');
const route = require('express').Router();
const student_student = require('../controllers/student_student');
route.get('/name', student_student.student_login)

module.exports = route
