var mongoose = require('mongoose');
var Student = mongoose.model('Student');
const moment = require('moment');
const session = require('express-session')

var rand, mailOptions, host, link
// MM/DD/YYYY

exports.student_log_out = function (req, res) {
  req.session.destroy(function (e) {
    if (e) {
      res.send(e)
    } else {
      res.redirect(`http://${req.get('host')}/homepage`)
    }
  })
}


module.exports.student_login = async (req, res) => {
  try {
    const user = await Student.findByCredentials(req.body.user_name, req.body.password)
    const token = await user.generateAuthToken()
    req.session.save()
    res.send({
      user,
      token
    })
  } catch (e) {
    res.send(e)
  }
}


exports.student_verify = async function (req, res) {

  try {
    const Now = new Date(Date.now())
    const data = await Student.findOneAndUpdate({
      student: req.params.student_id
    }, {
      $set: {
        student_status: 'Verified',
        date_valid: moment(Now).format('L')
      }
    })
    if (!data) res.send('<h1>Cannot find your account</h1>');
    res.send('<h1>Email ' + mailOptions.to + ' is been Successfully verified')
  } catch (e) {
    res.send(e)
  }
}

exports.student_sign_up = async (req, res) => {
  const hashpassword = md5(req.body.password, 12)
  const student = await studentModel.create({
    user_name: req.body.user_name,
    password: hashpassword,
    full_name: req.body.full_name,
    gender: req.body.gender,
    branch: req.body.branch,
    course: req.body.course,
    cmnd_card: req.body.cmnd_card,
    cmnd_card_date: req.body.cmnd_card_date,
    dien_chinh_sach_uu_tien_theo_quy_dinh: req.body.dien_chinh_sach_uu_tien_theo_quy_dinh,
    dien_khac: req.body.dien_khac,
    doan_the: req.body.doan_the,
    hoat_dong_xa_hoi: req.body.hoat_dong_xa_hoi,
    so_truong_nang_khieu: req.body.so_truong_nang_khieu,
    phone_number: req.body.phone_number,
    email: req.body.email,
    birth: req.body.birth,
    khi_can_baocho_ong_ba: req.body.khi_can_baocho_ong_ba,
    dien_thoai_ong_ba: req.body.dien_thoai_ong_ba,
    email_ong_ba: req.body,
    email_ong_ba,
  })

  if (student.email.split('@')[student.email.split('@').length - 1] == 'gmail.com') {
    var transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: 'hoangnguyenminh.hust@gmail.com',
        pass: '1chapnhandi'
      }
    })
    rand = student._id
    host = req.get('host')
    link = 'http://' + req.get('host') + '/verify/' + rand
    mailOptions = {
      from: 'hoangnguyenminh.hust@gmail.com',
      to: student.email,
      subject: 'Please confirm your Email account of dormitory HUST',
      html: 'Hello,<br> Please Click on the link to verify your email.<br><a href=' + link + '>Click here to verify</a>'
    }
    transporter.sendMail(mailOptions, (err, info) => {
      if (err) res.send(err)
      else {
        res.send('Email verify' + info.response)
      }
    })
  }
}

exports.student_views_one = async function (req, res) {
    try {
    const user= req.user
      var data = await Student.findOne({
          _id: user._id
        })
        .populate('Room')
      res.send(data)
    } catch (e) {
      res.send(e)
    }
  }