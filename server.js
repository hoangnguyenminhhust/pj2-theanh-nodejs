/* eslint-disable no-path-concat */
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const session = require('express-session')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()
// Đăng ký model
// const manageModel = require('./models/manager')
const nodemailer = require('nodemailer')
// Kết nối database
mongoose.connect(
  process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify:false,
  },
  (err) => {
    if (err) console.log(err)
    else console.log('Connect to DB Success!')
  })
// đăng kí một số option
app.use(bodyParser.urlencoded({
  extended: false
}))
app.use(express.static('public'))
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
}))


app.listen(process.env.PORT, (err) => {
  if (err) console.log(err)
  else console.log('Connected Sever')
})
