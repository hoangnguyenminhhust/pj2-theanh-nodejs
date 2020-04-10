const mongoose = require('mongoose')
const Student = mongoose.model('Student')
const jwt = require('jsonwebtoken')

const student = async (req, res, next) => {
    try {

        const token = req.headers['x-access-token'] || req.header('Authorization').replace('Bearer ', '')
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        const student = await Student.findOne({
            _id: decoded._id
        })
        if (!student) {
            throw new Error("Cannot find student")
        }
        req.student = student
        next()
    } catch (e) {
        res.status(401).send("Please authentication...")
    }
}

module.exports = student