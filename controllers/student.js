var mongoose = require('mongoose');
var Student = mongoose.model('Student');

exports.list_all_student = async function (req, res) {
    try {
        var data = await Student.find({})
        res.send(data)
    } catch (e) {
        res.send(e)
    }
}

exports.views_one_student = async function (req, res) {
    try {
        var data = await Student.find({
                _id: req.params._id
            })
            .populate('Room')
        res.send(data)
    } catch (e) {
        res.send(e)
    }
}

exports.list_all_student = async function (req, res) {
    try {
        var data = await Student.find({})
        res.send(data)
    } catch (e) {
        res.send(e)
    }
}

exports.list_all_student = async function (req, res) {
    try {
        var data = await Student.find({})
        res.send(data)
    } catch (e) {
        res.send(e)
    }
}

exports.list_all_student = async function (req, res) {
    try {
        var data = await Student.find({})
        res.send(data)
    } catch (e) {
        res.send(e)
    }
}