const { User } = require("../models")
const { decodedToken } = require("../helpers")

module.exports = (req, res, next) => {
  let decoded = decodedToken(req.headers.token)
  let options = {
    where: {
      id: decoded.id,
      email: decoded.email
    }
  }
  User.findOne(options)
  .then(data => {
    if(!data) throw "Not allowed!"
    req.decoded = decoded
    next()
  })
  .catch(err => {
    console.log(err)
    res.send(err)
  })
}