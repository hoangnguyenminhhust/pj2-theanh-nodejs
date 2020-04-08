const mongoose = require('mongoose');

const requestSchema = new mongoose.Schema({
    request_status: String,
    date_approve: {
        type: Date,
        default: 30 / 05 / 1111
    },
    student: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Student',
    }

})

const requestModel = mongoose.model('Request', requestSchema);
module.exports = requestModel;