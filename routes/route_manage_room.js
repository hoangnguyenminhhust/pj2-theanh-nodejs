const route = require('express').Router();
const manage_room = require('../controllers/manage_room');
route.get('/name', manage_room.admin_create_room)

module.exports = route
