const router = require("express").Router()
const todos = require("./todos")
const UserController = require("../controllers/user")

router.post("/login", UserController.login)
router.post("/signup", UserController.create)

router.use("/todos", todos)

module.exports = router