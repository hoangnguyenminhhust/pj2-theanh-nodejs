const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const session = require('express-session')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const nodemailer = require('nodemailer')

dotenv.config()

const studentModel = require('./models/student')
const roomModel = require('./models/room')
const adminModel = require('./models/admin')
const receiptModel = require('./models/receipt')

const route_manage_student = require('./routes/route_manage_student')
const route_admin_admin = require('./routes/route_admin_admin')
const route_student_student = require('./routes/route_student_student')
const route_manage_room = require('./routes/route_manage_room')

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

app.use(express.json())
app.use(bodyParser.urlencoded({
  extended: false
}))
app.use(express.static('public'))
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
}))

app.use('/student',route_student_student)

app.use('/admin/room',route_manage_room)

app.use('/admin/student',route_manage_student)

app.use('/admin/admin',route_admin_admin)

app.listen(process.env.PORT, (err) => {
  if (err) console.log(err)
  else console.log('RestFul API Start on ' ,process.env.PORT)
})
