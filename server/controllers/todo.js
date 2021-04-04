const {ToDo} = require("../models")
class ToDoController {
  static create(req, res){
    let value = {
      title : req.body.title,
      UserId : req.decoded.id
    }
    ToDo.create(value)
    .then(data => {
      res.status(200).json(data)
    })
    .catch(err => {
      console.log(err)
      res.send(err)
    })

  }
  static find(req, res){
    let options = {
      where : {
        UserId : req.decoded.id,
        date : req.params.date || new Date()
      }
    }
    ToDo.findAll(options)
    .then(data => {
      res.status(200).json(data)
    })
    .catch(err => {
      res.send(err)
    })
  }
  static deleteById(req, res){
    console.log('HERE')
    ToDo.destroy({
      where : {id : req.params.id}
    })
    .then(() => {
      res.send("Berhasil Delete")
    })
    .catch(err => {
      console.log(err)
    })
  }
  static switchIsDone(req, res){
    ToDo.findByPk(req.params.id)
    .then(data => {
      let today = new Date().toISOString().split("T")[0]
      if (today === data.date) {
        data.isDone = !data.isDone 
        return data.save()
      } else {
        throw "Cant update"
      }
    })
    .then(() => {
      res.send("Data updated")
    })
    .catch(err => {
      console.log(err)
      res.send(err)
    })
  }
}

module.exports = ToDoController