const route = require('express').Router();
const auth_student = require('../midleware/auth_student');
const manage_student = require('../controllers/manage_student');

route.get('/name', auth_student, manage_student.admin_list_all_student)

module.exports = route
