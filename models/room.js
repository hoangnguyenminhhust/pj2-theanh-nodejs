const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
    building: {
        type: String,
        enum: ['B3', 'B5', 'B6', 'B7', 'B8', 'B9', 'B10', 'B13']
    },
    room_status: {
        type: String,
        enum: ['active', 'pending', 'inactive']
    },
    room_price: {
        type: Number,
        enum: [200000, 400000]
    },
    room_id: {
        type: String,
        unique: true
    },
    room_gender: {
        type: String,
        enum: ['male', 'female', 'other']
    },
    amount_std: {
        type: Number,
        default: 0
    },

})
roomSchema.index({
    building: 1,
    room_id: 1
})
const roomModel = mongoose.model('Room', roomSchema);
module.exports = roomModel;