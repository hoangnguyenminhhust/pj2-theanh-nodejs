const mongoose = require('mongoose');

const receiptSchema = new mongoose.Schema({
    student: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Student',
    },
    fee_room: {
        type: Number,
        default: 0
    },
    fee_living: {
        type: Number,
        default: 0
    },
    payment: String,
    room: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Room',
    },
    date_valid_fee_room: {
        type: Date,
        default: 30 / 05 / 1111
    },
    date_valid_fee_living: {
        type: Date,
        default: 30 / 05 / 1111
    },

})

const receiptModel = mongoose.model('Receipt', receiptSchema);
module.exports = receiptModel;