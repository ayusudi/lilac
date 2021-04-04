const bcrypt = require("bcryptjs")
const jwt = require('jsonwebtoken')

module.exports = {
  hashPassword : (value) => {
    return bcrypt.hashSync(value, process.env.SALT);
  },
  comparePassword : (input, hash) => {
    return bcrypt.compareSync(input, hash)
  },
  generateToken : (input) => {
    return jwt.sign(input, process.env.JWT_KEY)
  },
  decodedToken : (token) => {
    return jwt.verify(token, process.env.JWT_KEY)
  }
}