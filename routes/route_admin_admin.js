const route = require('express').Router();
const admin_admin = require('../controllers/admin_admin');
route.get('/name', admin_admin.admin_login)


module.exports = route
