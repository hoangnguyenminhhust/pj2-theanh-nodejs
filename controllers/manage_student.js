var mongoose = require('mongoose');
var Student = mongoose.model('Student');
var Room = mongoose.model('Room');
const moment = require('moment');
const session = require('express-session')

exports.admin_list_all_student = async function (req, res) {
  try {
    var data = await Student.find({}).populate('Room')
    res.send(data)
  } catch (e) {
    res.send(e)
  }
}

exports.admin_views_one_student = async function (req, res) {
  try {
    var data = await Student.findOne({
        _id: req.params.student_id
      })
      .populate('Room')
    res.send(data)
  } catch (e) {
    res.send(e)
  }
}

exports.admin_udpate_student = async function (req, res) {
  try {
    var data = await Student.findOneAndUpdate({
      _id: req.params.student_id
    }, req.body, {
      new: true
    })
    res.send(data)
  } catch (e) {
    res.send(e)
  }
}

exports.admin_delete_student = async function (req, res) {
  try {
    var dataStudent = await Student.findOne({
      _id: req.params.student_id
    }).populate('Room')
    var dataRoom = await Room.findOne({
      _id: dataStudent.room
    })
    const index = dataRoom.list_student.infexOf(req.params.student_id)
    await dataRoom.list_student.splice(index, 1)
    const data = await Room.findOneAndUpdate({
      _id: dataStudent.room
    }, {
      $set: {
        list_student: dataRoom.list_student,
      }
    })
    res.send(data)
  } catch (e) {
    res.send(e)
  }
}