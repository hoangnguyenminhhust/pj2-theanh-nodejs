var mongoose = require('mongoose');
var Student = mongoose.model('Student');
var Room = mongoose.model('Room');
const moment = require('moment');
const session = require('express-session')

exports.admin_list_all_student_verify = async function (req, res) {
    try {
        var data = await Student.find({"student_status": {
            "$in": ['Verified', 'Out Room']
        }})
        res.send(data)
    } catch (e) {
        res.send(e)
    }
}




exports.admin_arrange_student_room = async function (req, res) {
    try {
        const list_student_id = [];
        var data_student = await Student.find({"_id": {
            "$in": req.body.list_student
        }})
        data_student.forEach(async (element) => {
            list_student_id.push(element._id)
            await Student.findOneAndUpdate({_id: element._id},{
                $set: {
                    student_status: 'In Room',
                    rouom: req.params.room_id
                }
            })
        });
        
        res.send(data)
    } catch (e) {
        res.send(e)
    }
}


exports.admin_list_all_room = async function (req, res) {
    try {
        var data = await Room.find({})
        res.send(data)
    } catch (e) {
        res.send(e)
    }
}


exports.admin_update_room = async function (req, res) {
    try {
        var data = await Room.findOneAndUpdate({
            _id: req.params.room_id
        }, req.body, {
            new: true
        })
        res.send(data)
    } catch (e) {
        res.send(e)
    }
}


exports.admin_delete_room = async function (req, res) {
    try {
        var data_room = await Room.findOne({
            _id: req.params.room_id
        })
        var data_student = await Student.find({
            "_id": {
                "$in": data_room.list_student
            }
        })
        data_student.forEach(async (element) => {
            await element.update({
                $set: {
                    student_status: 'Out Room',
                    room: null
                }
            })
        });
        await Room.findByIdAndDelete({
            _id: req.params.room_id
        })
        res.send('Delete Room Success')
    } catch (e) {
        res.send(e)
    }
}

exports.admin_views_one_room = async function (req, res) {
    try {
        var data_room = await Room.findOne({
            _id: req.params.room_id
        })
        var data_student = await Student.find({
            "_id": {
                "$in": data_room.list_student
            }
        })
        res.send({
            ...data_room,
            list_student: data_student
        })
    } catch (e) {
        res.send(e)
    }
}


exports.admin_create_room = async function (req, res) {
    try {
        const newRoom = new Room({
            building: req.body.building,
            room_status: req.body.room_status,
            room_price: req.body.room_price,
            room_size: req.body.room_size,
            room: req.body.room,
            room_gender: req.body.room_gender,
            max_student: req.body.max_student,
            list_student: [],
        })
        const data = await newRoom.save()
        res.send(data)
    } catch (e) {
        res.send(e)
    }
}