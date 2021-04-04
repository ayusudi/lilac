const { ToDo } = require("../models")

module.exports = (req, res, next) => {
  let options = {
    where : {
      id : req.params.id, 
      UserId : req.decoded.id
    }
  }
  ToDo.findOne(options)
  .then(data => {
    if (!data) throw "Not Authorize"
    next()
  })
  .catch(err => {
    console.log(err)
    res.send(err)
  })
}