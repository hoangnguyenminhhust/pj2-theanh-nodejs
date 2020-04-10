var mongoose = require('mongoose');
var Admin = mongoose.model('Admin');
const moment = require('moment');
const session = require('express-session')

var rand, mailOptions, host, link
// MM/DD/YYYY

exports.admin_log_out = function (req, res) {
  req.session.destroy(function (e) {
    if (e) {
      res.send(e)
    } else {
      res.redirect(`http://${req.get('host')}/homepage_admin`)
    }
  })
}


exports.admin_login = async (req, res) => {
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

