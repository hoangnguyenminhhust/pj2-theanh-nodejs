const route = require('express').Router();
const manage_student = require('../controllers/manage_student');

route.get('/name', manage_student.admin_list_all_student)

module.exports = route
