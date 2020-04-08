const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
    user_name: String,
    password: String,
})

const adminModel = mongoose.model('admin', adminSchema);
module.exports = adminModel;