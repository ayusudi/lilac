const {User} = require("../models")
const {generateToken, comparePassword} = require("../helpers")

class UserController {
  static create(req, res){
    let value = {
      nickname : req.body.nickname,
      email : req.body.email,
      password : req.body.password
    }
    User.create(value)
    .then(data => {
      const {id, nickname, email} = data
      let token = generateToken({id, nickname, email})
      res.status(200).json(token)
    })
    .catch(err => {
      res.send(err)
    })
  }
  static login(req, res) {
    let options = {
      where : {
        email : req.body.email.toLowerCase()
      }
    }
    User.findOne(options)
    .then(data => {
      if (!data) throw "Wrong password/email"
      if (!comparePassword(req.body.password, data.password)) throw "Wrong password/email"
      const {id, nickname, email} = data
      let token = generateToken({id, nickname, email})
      res.status(200).json(token)
    })
    .catch(err => {
      res.send(err)
    })
  }
}

module.exports = UserController