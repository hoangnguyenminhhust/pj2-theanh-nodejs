const mongoose = require('mongoose')
const Admin = mongoose.model('Admin')
const jwt = require('jsonwebtoken')

const admin = async (req, res, next) => {
    try {

        const token = req.headers['x-access-token'] || req.header('Authorization').replace('Bearer ', '')
        const decoded = jwt.verify(token, 'secretKey')
        const admin = await Admin.findOne({
            _id: decoded._id
        })

        if (!admin) {
            throw new Error("hello")
        }
        req.admin = admin
        next()
    } catch (e) {
        res.status(401).send("Please authentication...")
    }
}

module.exports = admin